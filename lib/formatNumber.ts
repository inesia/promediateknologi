/**
 * Format angka statistik ke teks ringkas bahasa Inggris dengan pembulatan ke bawah + suffix "+".
 * Contoh: 27_612_594 → "27 Million+", 1_154 → "1,100+", 911_946_685 → "911 Million+"
 */
export function formatCompactStat(value: number): string {
  if (value >= 1_000_000_000) {
    const remainder = value % 1_000_000_000
    if (remainder >= 100_000_000) {
      const tenths = Math.floor(value / 100_000_000) / 10
      return `${tenths} Billion+`
    }
    return `${Math.floor(value / 1_000_000_000)} Billion+`
  }
  if (value >= 1_000_000) {
    return `${Math.floor(value / 1_000_000)} Million+`
  }
  if (value >= 1_000) {
    const rounded = Math.floor(value / 100) * 100
    return `${rounded.toLocaleString('en-US')}+`
  }
  if (value >= 100) {
    const rounded = Math.floor(value / 10) * 10
    return `${rounded.toLocaleString('en-US')}+`
  }
  return `${value}+`
}

/** Parse string angka format Indonesia (27.612.594) ke number */
export function parseIndonesianNumber(value: string): number {
  return Number(value.replace(/\./g, ''))
}
