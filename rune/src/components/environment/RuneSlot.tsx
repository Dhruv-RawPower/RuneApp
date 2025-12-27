import { Rune } from "@/types/rune"
import RuneText from "./RuneText"
import { useRuneStore } from "@/store/useRuneStore"
import { useSession } from "next-auth/react"
import { useState } from "react"

export function RuneSlot({ rune }: { rune: Rune }) {
  const setFocusedRune = useRuneStore((s) => s.setFocusedRune)
  const focusedRune = useRuneStore((s) => s.focusedRune)
  const { data: session } = useSession()
  const [hovered, setHovered] = useState(false)

  const isFocused = focusedRune?.id === rune.id
  const isOwnRune = session?.user?.id === rune.authorId

  const scale = isFocused ? 1.06 : hovered ? 1.03 : 1

  return (
    <group
      position={[rune.position[0], rune.position[1], 0.25]}
      scale={scale}
    >
      {/* 🔑 INVISIBLE HIT AREA */}
      <mesh
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
          document.body.style.cursor = "pointer"
        }}
        onPointerOut={() => {
          setHovered(false)
          document.body.style.cursor = "default"
        }}
        onClick={(e) => {
          e.stopPropagation()
          setFocusedRune(rune)
        }}
      >
        <planeGeometry args={[1.4, 0.6]} />
        <meshStandardMaterial
          transparent
          opacity={0}
          depthWrite={false}
        />
      </mesh>

      {/* Focus aura */}
      {isFocused && (
        <mesh position={[0, 0, -0.01]}>
          <planeGeometry args={[1.4, 0.6]} />
          <meshStandardMaterial
            color="#ffd27d"
            transparent
            opacity={0.15}
            depthWrite={false}
          />
        </mesh>
      )}

      <RuneText
        position={[0, 0, 0]}
        content={rune.content}
        highlighted={(hovered || isFocused) && !isOwnRune}
      />
    </group>
  )
}