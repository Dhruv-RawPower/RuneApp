"use client"

import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { useWhisperStore } from "@/store/useWhisperStore"
import { fetchInbox } from "@/services/whisperInboxService"
import { markWhispersRead } from "@/services/markWhispersRead"
import { subscribeToWhispers } from "@/services/whisperRealTime"

export default function WhisperInbox() {
  const { data: session } = useSession()

  const {
    open,
    whispers,
    setWhispers,
    addWhisper,
    closeInbox,
    setUnreadCount,
  } = useWhisperStore()


  /* --------------------------------------------------
   * Fetch inbox + mark as read WHEN OPENED
   * -------------------------------------------------- */
  useEffect(() => {
    if (!open || !session?.user?.id) return

    fetchInbox(session.user.id).then((data) => {
      setWhispers(data)
      markWhispersRead(session.user.id)
      setUnreadCount(0) // 🔒 prevent double-counting
    })
  }, [open, session, setWhispers, setUnreadCount])

  /* --------------------------------------------------
   * Realtime subscription (runs once per login)
   * -------------------------------------------------- */
  useEffect(() => {
    if (!session?.user?.id) return

    const unsubscribe = subscribeToWhispers(
      session.user.id,
      (newWhisper) => {
        addWhisper(newWhisper)
        setUnreadCount((prev) => prev + 1)
      }
    )

    return unsubscribe
  }, [session, addWhisper, setUnreadCount])

  /* -------------------------------------------------- */

  if (!open) return null

  return (
    <div
      style={{
        position: "fixed",
        top: 80,
        right: 20,
        width: 320,
        maxHeight: 420,
        background: "#0f0f0f",
        border: "1px solid #333",
        borderRadius: 10,
        padding: 12,
        overflowY: "auto",
        zIndex: 30,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <strong style={{ color: "#e6d3a3" }}>Whispers</strong>
        <button onClick={closeInbox}>✕</button>
      </div>

      {whispers.length === 0 && (
        <p style={{ color: "#777", marginTop: 12 }}>
          No whispers yet.
        </p>
      )}

      {whispers.map((w) => {
        const unread = !w.read_at

        return (
          <div
            key={w.id}
            style={{
              marginTop: 10,
              padding: 8,
              background: unread ? "#1f1a12" : "#1a1a1a",
              borderLeft: unread
                ? "3px solid #ffd27d"
                : "3px solid transparent",
              borderRadius: 6,
              fontSize: 14,
              color: "#ddd",
            }}
          >
            {w.content}
            <div style={{ fontSize: 11, color: "#666", marginTop: 4 }}>
              {new Date(w.created_at).toLocaleString()}
            </div>
          </div>
        )
      })}
    </div>
  )
}
