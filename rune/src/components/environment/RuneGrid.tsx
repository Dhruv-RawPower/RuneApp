"use client"

import { useState } from "react"
import RuneSlot from "./RuneSlot"
import RuneText from "./RuneText"
import { RUNES } from "@/data/runes"
import { useSelectionStore } from "@/store/useSelectionStore"

export default function RuneGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const { selectedRuneId, selectRune } = useSelectionStore()

  return (
    <>
      {RUNES.map((rune) => {
        const isHovered = hoveredId === rune.id
        const isSelected = selectedRuneId === rune.id
        const active = isSelected || isHovered

        return (
          <group
            key={rune.id}
            onPointerEnter={() => {
              setHoveredId(rune.id)
              document.body.style.cursor = "pointer"
            }}
            onPointerLeave={() => {
              setHoveredId(null)
              document.body.style.cursor = "default"
            }}
            onClick={(e) => {
              e.stopPropagation()
              selectRune(rune.id)
            }}
          >
            <RuneSlot
              position={rune.position}
              highlighted={active}
            />
            <RuneText
              position={rune.position}
              content={rune.content}
              highlighted={active}
            />
          </group>
        )
      })}
    </>
  )
}
