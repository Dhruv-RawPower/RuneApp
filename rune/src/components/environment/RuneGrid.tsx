"use client"

import { useEffect } from "react"
import RuneSlot from "./RuneSlot"
import RuneText from "./RuneText"
import { useRuneStore } from "@/store/useRuneStore"

export default function RuneGrid() {
  const { runes, loadRunes } = useRuneStore()

  useEffect(() => {
    loadRunes()
  }, [loadRunes])

  return (
    <>
      {runes.map((rune) => (
        <group key={rune.id}>
          <RuneSlot
            position={rune.position}
            highlighted={false}
          />
          <RuneText
            position={rune.position}
            content={rune.content}
          />
        </group>
      ))}
    </>
  )
}

