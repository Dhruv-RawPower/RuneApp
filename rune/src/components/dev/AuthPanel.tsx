"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function AuthPanel() {
  const { data: session } = useSession()

  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        background: "#111",
        padding: 10,
        borderRadius: 8,
        zIndex: 20,
      }}
    >
      {session ? (
        <>
          <div style={{ color: "#fff", marginBottom: 6 }}>
            {session.user?.email}
          </div>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <button onClick={() => signIn("google")}>
          Sign in with Google
        </button>
      )}
    </div>
  )
}
