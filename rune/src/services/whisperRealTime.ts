import { supabase } from "@/lib/supabaseClient"
import { Whisper } from "@/store/useWhisperStore"

export function subscribeToWhispers(
  userId: string,
  onNewWhisper: (w: Whisper) => void
) {
  const channel = supabase
    .channel("whispers-inbox")
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "whispers",
        filter: `to_user=eq.${userId}`,
      },
      (payload) => {
        onNewWhisper(payload.new as Whisper)
      }
    )
    .subscribe()

  return () => {
    supabase.removeChannel(channel)
  }
}
