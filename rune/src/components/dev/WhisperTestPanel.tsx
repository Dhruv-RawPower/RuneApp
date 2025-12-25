"use client"

import { useState } from "react"
import { sendWhisper } from "@/services/whisperService"

export default function WhisperTestPanel() {
  const [toUserId, setToUserId] = useState("")
  const [content, setContent] = useState("")

  return (
    <div
      style={{
        position: "fixed",
        bottom: 80,
        left: "50%",
        transform: "translateX(-50%)",
        background: "#111",
        padding: 12,
        borderRadius: 8,
        zIndex: 10,
      }}
    >
      <input
        placeholder="To user id"
        value={toUserId}
        onChange={(e) => setToUserId(e.target.value)}
        style={{ marginRight: 6 }}
      />
      <input
        placeholder="Whisper..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        maxLength={300}
        style={{ marginRight: 6 }}
      />
      <button
        onClick={async () => {
          if (!toUserId || !content) return
          await sendWhisper({ toUserId, content })
          setContent("")
        }}
      >
        Send
      </button>
    </div>
  )
}
