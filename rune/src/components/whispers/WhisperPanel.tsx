"use client"

import { useState } from "react"
import { useRuneStore } from "@/store/useRuneStore"
import { sendWhisper } from "@/services/whisperService"
import { useSession } from "next-auth/react"

export default function WhisperPanel() {
  const { data: session } = useSession()
  const focusedRune = useRuneStore((s) => s.focusedRune)
  const setFocusedRune = useRuneStore((s) => s.setFocusedRune)

  const [text, setText] = useState("")

  if (!focusedRune || !session?.user?.id) return null
  if (focusedRune.authorId === session.user.id) return null

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        background: "#111",
        padding: 12,
        borderRadius: 8,
        zIndex: 20,
        width: 260,
      }}
    >
      <div style={{ color: "#aaa", marginBottom: 6 }}>
        Whisper to rune author
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={300}
        placeholder="Write a whisper…"
        style={{ width: "100%", marginBottom: 6 }}
      />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          onClick={async () => {
            if (!text.trim()) return
            await sendWhisper({
              toUserId: focusedRune.authorId,
              content: text,
            })
            setText("")
            setFocusedRune(null)
          }}
        >
          Send
        </button>

        <button onClick={() => setFocusedRune(null)}>
          Cancel
        </button>
      </div>
    </div>
  )
}
