"use client"

import { OrbitControls } from "@react-three/drei"
import { useThree, useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { useSelectionStore } from "@/store/useSelectionStore"
import { RUNES } from "@/data/runes"

export default function CameraController() {
  const { camera } = useThree()
  const controlsRef = useRef<any>(null)
  const selectedRuneId = useSelectionStore(
    (s) => s.selectedRuneId
  )

  useEffect(() => {
    const initialTarget = { x: 0, y: 1.4, z: 0 }

    camera.position.set(0, 2.2, 6)
    camera.lookAt(initialTarget.x, initialTarget.y, initialTarget.z)

    if (controlsRef.current) {
      controlsRef.current.target.set(
        initialTarget.x,
        initialTarget.y,
        initialTarget.z
      )
      controlsRef.current.update()
    }
  }, [camera])


  useFrame(() => {
    if (!controlsRef.current) return

    if (selectedRuneId) {
      const rune = RUNES.find((r) => r.id === selectedRuneId)
      if (rune) {
        controlsRef.current.target.lerp(
          {
            x: rune.position[0],
            y: rune.position[1],
            z: rune.position[2],
          },
          0.08
        )
        controlsRef.current.update()
      }
    }
  })

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={false}
      enableZoom
      enableRotate
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
