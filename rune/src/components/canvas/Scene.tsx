"use client"

import CameraController from "./CameraController"
import Lights from "../environment/Lights"
import Fog from "../environment/Fog"
import Ground from "../environment/Ground"
import OriginMarker from "../environment/OriginMarker"
import StoneWall from "../environment/StoneWall"
import RuneGrid from "../environment/RuneGrid"
import { useSelectionStore } from "@/store/useSelectionStore"
import { useThree } from "@react-three/fiber"
import { useEffect } from "react"

export default function Scene() {
  const clearSelection = useSelectionStore(
    (state) => state.clearSelection
  )

  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(0, 2.2, 6)
    camera.lookAt(0, 1.8, 0)
    camera.updateProjectionMatrix()
  }, [camera])

  return (
    <>
      <Lights />
      <Fog />
      <Ground onClick={clearSelection} />
      <StoneWall />
      <RuneGrid />
      <OriginMarker />
      <CameraController />
      <color attach="background" args={["#0b0b0b"]} />
    </>
  )
}
