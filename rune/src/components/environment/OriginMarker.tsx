"use client"

import { memo } from "react"

function OriginMarker() {
  return (
    <mesh position={[0, 0.01, 0]}>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshStandardMaterial color="red" />
    </mesh>
  )
}

export default memo(OriginMarker)
