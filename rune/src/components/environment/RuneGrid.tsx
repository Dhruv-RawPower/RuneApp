"use client"

import { useEffect } from "react"
import { RuneSlot } from "./RuneSlot"
import { useRuneStore } from "@/store/useRuneStore"

export default function RuneGrid() {
  const { runes, loadRunes } = useRuneStore()

  useEffect(() => {
    loadRunes()
  }, [loadRunes])

  return (
    // 👇 THIS is the missing anchor
    <group position={[0, 0, 0.25]}>
      {runes.map((rune) => (
        <RuneSlot key={rune.id} rune={rune} />
      ))}
    </group>

  )
}
