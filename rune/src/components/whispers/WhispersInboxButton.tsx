"use client"

import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { useWhisperStore } from "@/store/useWhisperStore"
import { fetchUnreadCount } from "@/services/fetchUnreadCount"

export default function WhisperInboxButton() {
  const { data: session } = useSession()
  const { unreadCount, setUnreadCount, openInbox } = useWhisperStore()

  useEffect(() => {
    if (!session?.user?.id) return
    fetchUnreadCount(session.user.id).then(setUnreadCount)
  }, [session, setUnreadCount])

  return (
    <button
      onClick={openInbox}
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        zIndex: 30,
      }}
    >
      📜
      {unreadCount > 0 && (
        <span
          style={{
            position: "absolute",
            top: -4,
            right: -4,
            width: 8,
            height: 8,
            background: "#ffd27d",
            borderRadius: "50%",
          }}
        />
      )}
    </button>
  )
}
