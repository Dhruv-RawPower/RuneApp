import { supabase } from "@/lib/supabaseClient"
import { mapDbRuneToRune } from "@/lib/mapRune"
import { Rune } from "@/types/rune"

export async function fetchRunes(): Promise<Rune[]> {
  const { data, error } = await supabase
    .from("runes")
    .select("*")
    .order("created_at", { ascending: true })

  if (error) {
    console.error("Failed to fetch runes:", error)
    return []
  }

  return data.map(mapDbRuneToRune)
}
