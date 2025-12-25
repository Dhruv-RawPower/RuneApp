"use client"

import { memo } from "react"

type Props = {
  onClick?: () => void
}

function Ground({ onClick }: Props) {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, 0]}
      onClick={onClick}
    >
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial color="#2a2a2a" />
    </mesh>
  )
}

export default memo(Ground)
