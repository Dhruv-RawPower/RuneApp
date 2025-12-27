import CanvasWrapper from "@/components/canvas/CanvasWrapper"
import Scene from "@/components/canvas/Scene"
import AuthPanel from "@/components/dev/AuthPanel"
import CreateRunePanel from "@/components/dev/CreateRunePanel"
import WhisperTestPanel from "@/components/dev/WhisperTestPanel"
import WhisperPanel from "@/components/whispers/WhisperPanel"
import WhisperInboxButton from "@/components/whispers/WhispersInboxButton"
import WhisperInbox from "@/components/whispers/WhisperInbox"

const isDev = process.env.NODE_ENV === "development"

export default function Home() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <CanvasWrapper>
        <Scene />
      </CanvasWrapper>

      {/* Inbox */}
      <WhisperInboxButton />
      <WhisperInbox />

      {/* Other UI */}
      <WhisperPanel />
      {isDev && <WhisperTestPanel />}
      {isDev && <CreateRunePanel />}
      {isDev && <AuthPanel />}
    </main>
  )
}
