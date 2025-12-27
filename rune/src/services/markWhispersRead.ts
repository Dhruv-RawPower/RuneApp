import { supabase } from "@/lib/supabaseClient"

export async function markWhispersRead(userId: string) {
  await supabase
    .from("whispers")
    .update({ read_at: new Date().toISOString() })
    .eq("to_user", userId)
    .is("read_at", null)
}
