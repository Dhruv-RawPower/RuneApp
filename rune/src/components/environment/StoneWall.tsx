"use client"

import { memo } from "react"
import { Z_LAYERS } from "@/lib/zlayers"

function StoneWall() {
  return (
    <mesh position={[0, 1.8, 0]}>
      <boxGeometry args={[6.2, 3.6, 0.35]} />
      <meshStandardMaterial color="#343434" />
    </mesh>
  )
}

export default memo(StoneWall)
