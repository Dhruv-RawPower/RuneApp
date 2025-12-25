"use client"

import CameraController from "./CameraController"
import Lights from "../environment/Lights"
import Fog from "../environment/Fog"
import Ground from "../environment/Ground"
import OriginMarker from "../environment/OriginMarker"
import StoneWall from "../environment/StoneWall"
import RuneGrid from "../environment/RuneGrid"
import { useSelectionStore } from "@/store/useSelectionStore"

export default function Scene() {
  const clearSelection = useSelectionStore(
    (state) => state.clearSelection
  )

  return (
    <>
      <Lights />
      <Fog />
      <Ground onClick={clearSelection} />
      <StoneWall />
      <RuneGrid />
      <OriginMarker />
      <CameraController />
    </>
  )
}
