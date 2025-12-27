import { supabase } from "@/lib/supabaseClient"

export async function fetchInbox(userId: string) {
  const { data, error } = await supabase
    .from("whispers")
    .select("*")
    .eq("to_user", userId)
    .order("created_at", { ascending: false })

  if (error) throw error
  return data
}
