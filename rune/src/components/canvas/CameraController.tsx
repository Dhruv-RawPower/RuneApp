"use client"

import { OrbitControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useEffect } from "react"

export default function CameraController() {
  const { camera, gl } = useThree()

  useEffect(() => {
    // 🔒 HARD LOCK camera anchor
    camera.position.set(0, 2.2, 6)
    camera.lookAt(0, 1.8, 0)
    camera.updateProjectionMatrix()
  }, [camera])

  return (
    <OrbitControls
      enablePan={false}
      enableRotate={false}
      enableZoom={true}
      minDistance={5.5}
      maxDistance={7.5}
      target={[0, 1.8, 0]} // wall center
    />
  )
}
