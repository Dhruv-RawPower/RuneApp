"use client"

import { Canvas } from "@react-three/fiber"

type Props = {
  children: React.ReactNode
}

export default function CanvasWrapper({ children }: Props) {
  return (
    <Canvas
      shadows={false}
      dpr={[1, 1.5]}
      camera={{
        position: [0, 2, 6],
        fov: 45,
        near: 0.1,
        far: 100,
      }}
    >
      {children}
    </Canvas>
  )
}
