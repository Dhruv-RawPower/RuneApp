import { supabase } from "@/lib/supabaseClient"

export async function fetchUnreadCount(userId: string) {
  const { count } = await supabase
    .from("whispers")
    .select("id", { count: "exact", head: true })
    .eq("to_user", userId)
    .is("read_at", null)

  return count || 0
}
