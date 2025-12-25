"use client"

import { useState } from "react"
import { useRuneStore } from "@/store/useRuneStore"

export default function CreateRunePanel() {
  const [text, setText] = useState("")
  const addRune = useRuneStore((s) => s.addRune)

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        background: "#111",
        padding: "12px",
        borderRadius: "8px",
        zIndex: 10,
      }}
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Carve a rune..."
        maxLength={120}
        style={{ marginRight: 8 }}
      />
      <button
        onClick={async () => {
          if (!text.trim()) return
          await addRune(text)
          setText("")
        }}
      >
        Create
      </button>
    </div>
  )
}
