import CanvasWrapper from "@/components/canvas/CanvasWrapper"
import Scene from "@/components/canvas/Scene"
import AuthPanel from "@/components/dev/AuthPanel"
import CreateRunePanel from "@/components/dev/CreateRunePanel"
import WhisperTestPanel from "@/components/dev/WhisperTestPanel"

export default function Home() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <CanvasWrapper>
        <Scene />
      </CanvasWrapper>
      <CreateRunePanel />
      <WhisperTestPanel />
      <AuthPanel />
    </main>
  )
}
