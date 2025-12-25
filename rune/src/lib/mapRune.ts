import { Rune } from "@/types/rune"

export function mapDbRuneToRune(row: any): Rune {
  return {
    id: row.id,
    content: row.content,
    position: [row.x, row.y, row.z],
    createdAt: row.created_at,
    decayLevel: row.decay_level ?? 0,
  }
}
