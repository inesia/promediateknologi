export interface ParsedMitra {
  id: string
  name: string
  logo: string
  url: string
}

const MITRA_ITEM_REGEX =
  /section__center__thumb__list__logo[\s\S]*?<a href="([^"]+)"[^>]*>[\s\S]*?<img src="([^"]+)"\s+alt="([^"]+)"/g

export function parseMitraFromHtml(html: string): ParsedMitra[] {
  const results: ParsedMitra[] = []
  const seen = new Set<string>()

  for (const match of html.matchAll(MITRA_ITEM_REGEX)) {
    const url = match[1]
    const logo = match[2]
    const name = match[3]
    const key = `${name}|${logo}`

    if (seen.has(key)) continue
    seen.add(key)

    results.push({
      id: key,
      name,
      logo,
      url,
    })
  }

  return results
}

export function parseMitraHasMore(html: string, currentPage: number): boolean {
  const hasNextPageLink = new RegExp(`page=${currentPage + 1}(?:&|")`).test(html)
  const hasNextLabel = />\s*Next\s*<\/a>/.test(html)
  return hasNextPageLink || hasNextLabel
}
