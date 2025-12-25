"use client"

import CameraController from "./CameraController"
import Lights from "../environment/Lights"
import Fog from "../environment/Fog"
import Ground from "../environment/Ground"
import OriginMarker from "../environment/OriginMarker"

export default function Scene() {
  return (
    <>
      <Lights />
      <Fog />
      <Ground />
      <OriginMarker />
      <CameraController />
    </>
  )
}
