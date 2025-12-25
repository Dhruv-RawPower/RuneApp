import CanvasWrapper from "@/components/canvas/CanvasWrapper"
import Scene from "@/components/canvas/Scene"

export default function Home() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <CanvasWrapper>
        <Scene />
      </CanvasWrapper>
    </main>
  )
}
