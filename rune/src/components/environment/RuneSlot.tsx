"use client"

import { useState } from "react"
import { Z_LAYERS } from "@/lib/zlayers"

type Props = {
  position: [number, number, number]
  highlighted?: boolean
}

export default function RuneSlot({ position, highlighted = false }: Props) {
  const [hovered, setHovered] = useState(false)
  const active = hovered || highlighted

  return (
    <mesh
      position={[
      position[0],
      position[1],
      position[2] + Z_LAYERS.SLOT,
      ]}
      scale={active ? 1.06 : 1}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <planeGeometry args={[1.2, 0.5]} />
      <meshStandardMaterial
        color="#5a5a5a"
        emissive={active ? "#ffd27d" : "#000000"}
        emissiveIntensity={active ? 0.35 : 0}
      />
    </mesh>
  )
}
