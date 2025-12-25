"use client"

import { OrbitControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useEffect } from "react"

export default function CameraController() {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(0, 2, 6)
    camera.lookAt(0, 0, 0) // 👈 LOOK AT GROUND, NOT AIR
  }, [camera])

  return (
    <OrbitControls
      enablePan={false}
      enableZoom={true}
      enableRotate={true}
      target={[0, 0, 0]} // 👈 IMPORTANT
      minDistance={4}
      maxDistance={10}
      minPolarAngle={Math.PI / 3}
      maxPolarAngle={Math.PI / 2.1}
      rotateSpeed={0.4}
      zoomSpeed={0.6}
      enableDamping
      dampingFactor={0.08}
    />
  )
}
