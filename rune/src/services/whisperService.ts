import { supabase } from "@/lib/supabaseClient"
import { getSession } from "next-auth/react"

type SendWhisperInput = {
  toUserId: string
  content: string
}

export async function sendWhisper({
  toUserId,
  content,
}: SendWhisperInput) {
  const session = await getSession()

  if (!session?.user?.id) {
    throw new Error("User not authenticated")
  }

  const expiresAt = new Date()
  expiresAt.setHours(expiresAt.getHours() + 24)

  const { error } = await supabase.from("whispers").insert({
    from_user: session.user.id,   // ✅ CRITICAL LINE
    to_user: toUserId,
    content,
    expires_at: expiresAt.toISOString(),
  })

  if (error) {
    console.error("Failed to send whisper:", error)
    throw error
  }
}
