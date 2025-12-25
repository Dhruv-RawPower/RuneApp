import { supabase } from "@/lib/supabaseClient"

export async function fetchWhispers(withUserId: string) {
  const { data, error } = await supabase
    .from("whispers")
    .select("*")
    .or(
      `and(from_user.eq.${withUserId}),and(to_user.eq.${withUserId})`
    )
    .order("created_at", { ascending: true })

  if (error) {
    console.error("Failed to fetch whispers:", error)
    return []
  }

  return data
}
