import fs from 'fs/promises';
import path from 'path';

export interface TokenDetail {
    access_token: string;
    refresh_token: string;
    token_type: string;
    expires_in: number;
}

export interface PromediaTokenResponse {
    meta: {
        code: number;
        status: boolean;
        message: string;
    };
    data?: {
        detail?: TokenDetail;
    };
}

export interface StoredToken {
    detail: TokenDetail;
    fetchedAt: number;
}

// Config variables
const BASE_URL = process.env.NEXT_BASE_URL_GO24 || '';
const API_KEY = process.env.NEXT_API_KEY_GO24;
const SECRET_KEY = process.env.NEXT_SECRET_KEY_GO24;
const TOKEN_FILE_NAME = '.promedia-token.json';
const TOKEN_FILE_PATH = path.join(process.cwd(), TOKEN_FILE_NAME);

const TOKEN_URL = `${BASE_URL.replace(/\/$/, '')}/oauth/token/`;

/**
 * Requests a new token using the password grant (with API Key and Secret Key)
 */
export async function requestNewToken(): Promise<TokenDetail> {
    if (!API_KEY || !SECRET_KEY) {
        throw new Error('Promedia API Credentials (NEXT_API_KEY_GO24 or NEXT_SECRET_KEY_GO24) are missing in environment variables.');
    }

    console.log('[Promedia Auth] Requesting new token via password grant...');

    const response = await fetch(TOKEN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/vnd.promedia+json; version=1.0',
        },
        body: JSON.stringify({
            grant_type: 'password',
            api_key: API_KEY,
            secret_key: SECRET_KEY,
        }),
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Failed to request new token: Status ${response.status} - ${text}`);
    }

    const json = (await response.json()) as PromediaTokenResponse;

    if (!json.meta?.status || !json.data?.detail) {
        throw new Error(`Invalid response structure when requesting token: ${JSON.stringify(json)}`);
    }
    console.log(json.data)

    return json.data.detail;
}

/**
 * Requests a refreshed token using the refresh_token grant
 */
export async function requestRefreshToken(refreshTokenValue: string): Promise<TokenDetail> {
    if (!API_KEY || !SECRET_KEY) {
        throw new Error('Promedia API Credentials (NEXT_API_KEY_GO24 or NEXT_SECRET_KEY_GO24) are missing in environment variables.');
    }

    console.log('[Promedia Auth] Refreshing token...');

    const response = await fetch(TOKEN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/vnd.promedia+json; version=1.0',
        },
        body: JSON.stringify({
            grant_type: 'refresh_token',
            api_key: API_KEY,
            secret_key: SECRET_KEY,
            refresh_token: refreshTokenValue,
        }),
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Failed to refresh token: Status ${response.status} - ${text}`);
    }

    const json = (await response.json()) as PromediaTokenResponse;

    if (!json.meta?.status || !json.data?.detail) {
        throw new Error(`Invalid response structure when refreshing token: ${JSON.stringify(json)}`);
    }

    return json.data.detail;
}

/**
 * Reads the token details stored in the local file
 */
export async function getStoredToken(): Promise<StoredToken | null> {
    try {
        const fileContent = await fs.readFile(TOKEN_FILE_PATH, 'utf-8');
        return JSON.parse(fileContent) as StoredToken;
    } catch (error) {
        // Return null if file doesn't exist or is invalid JSON
        return null;
    }
}

/**
 * Saves the token details to the local file along with the fetched timestamp
 */
export async function saveToken(detail: TokenDetail): Promise<void> {
    const dataToStore: StoredToken = {
        detail,
        fetchedAt: Date.now(),
    };
    await fs.writeFile(TOKEN_FILE_PATH, JSON.stringify(dataToStore, null, 2), 'utf-8');
    console.log(`[Promedia Auth] Saved token to ${TOKEN_FILE_PATH}`);
}

/**
 * Attempts to refresh the token using the stored refresh_token.
 * If that fails or no refresh token is stored, falls back to requesting a new token via password grant.
 */
export async function refreshAccessToken(): Promise<string> {
    const stored = await getStoredToken();

    if (stored?.detail?.refresh_token) {
        try {
            console.log('[Promedia Auth] Attempting token refresh using refresh_token...');
            const newDetail = await requestRefreshToken(stored.detail.refresh_token);
            await saveToken(newDetail);
            return newDetail.access_token;
        } catch (error) {
            console.warn('[Promedia Auth] Refresh token failed or expired, falling back to requesting a new token:', error);
        }
    }

    // Fetch a new token from scratch using password grant
    const newDetail = await requestNewToken();
    await saveToken(newDetail);
    return newDetail.access_token;
}

/**
 * Returns a valid access token.
 * Automatically checks local expiry, attempts refresh, and falls back to password grant request if needed.
 * 
 * @param forceRefresh - If true, skips local validity check and attempts refresh/password grant directly
 */
export async function getValidToken(forceRefresh = false): Promise<string> {
    const stored = await getStoredToken();

    if (stored && !forceRefresh) {
        const { detail, fetchedAt } = stored;

        const bufferTimeMs = 60000;
        const expirationTimeMs = fetchedAt + detail.expires_in * 1000;
        const isExpired = Date.now() >= expirationTimeMs - bufferTimeMs;

        if (!isExpired) {
            return detail.access_token;
        }
        console.log('[Promedia Auth] Token is expired or expiring soon.');
    }

    return await refreshAccessToken();
}

/**
 * Custom fetch wrapper that automatically handles Promedia API authorization.
 * Attaches Authorization header, Accept header, handles automatic token refreshing,
 * and retries on 401 Unauthorized or 403 Forbidden errors when token is invalid/expired.
 */
export async function fetchWithPromediaAuth(url: string | URL, options: RequestInit = {}): Promise<Response> {
    let token = await getValidToken();

    const headers = new Headers(options.headers || {});

    if (!headers.has('Accept')) {
        headers.set('Accept', 'application/vnd.promedia+json; version=1.0');
    }
    headers.set('Authorization', `Bearer ${token}`);

    const fetchOptions: RequestInit = {
        ...options,
        headers,
    };

    let response = await fetch(url, fetchOptions);

    // If unauthorized (401) or forbidden (403), token might have been invalidated or rejected by the server
    if (response.status === 401 || response.status === 403) {
        const stored = await getStoredToken();
        const bufferTimeMs = 60000;
        const expirationTimeMs = stored ? stored.fetchedAt + stored.detail.expires_in * 1000 : 0;
        const hasExpiresIn = stored?.detail?.expires_in ? Date.now() < (expirationTimeMs - bufferTimeMs) : false;

        console.warn(
            `[Promedia Auth] Received status ${response.status} ${response.statusText || ''}. ` +
            (hasExpiresIn
                ? `Token still has expires_in remaining (${Math.round((expirationTimeMs - Date.now()) / 1000)}s). Attempting refresh_token...`
                : `Token is expired or expires_in unavailable. Refreshing token...`)
        );


        if (stored?.detail?.refresh_token && hasExpiresIn) {
            try {
                console.log('[Promedia Auth] Trying refresh_token...');
                const refreshedDetail = await requestRefreshToken(stored.detail.refresh_token);
                await saveToken(refreshedDetail);
                token = refreshedDetail.access_token;
                headers.set('Authorization', `Bearer ${token}`);
                response = await fetch(url, fetchOptions);
            } catch (refreshErr) {
                console.warn('[Promedia Auth] refresh_token request failed:', refreshErr);
            }
        }

        if (response.status === 401 || response.status === 403) {
            console.warn(`[Promedia Auth] Status remains ${response.status} after refresh attempt. Falling back to new token via password grant...`);
            try {
                const newDetail = await requestNewToken();
                await saveToken(newDetail);
                token = newDetail.access_token;
                headers.set('Authorization', `Bearer ${token}`);
                response = await fetch(url, fetchOptions);
            } catch (newTokenError) {
                console.error('[Promedia Auth] Fallback requestNewToken failed:', newTokenError);
            }
        }
    }

    return response;
}