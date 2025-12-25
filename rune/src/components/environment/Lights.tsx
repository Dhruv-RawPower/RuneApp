"use client"

export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[0, 5, 5]} intensity={1} />
    </>
  )
}
