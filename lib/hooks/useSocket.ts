"use client"

import { useEffect, useRef } from "react"
import io, { type Socket } from "socket.io-client"
import { useSession } from "next-auth/react"

export function useSocket() {
  const { data: session } = useSession()
  const socketRef = useRef<Socket>()

  useEffect(() => {
    if (!session?.user?.id) return

    fetch("/api/socket")

    socketRef.current = io({
      path: "/api/socketio",
    })

    socketRef.current.emit("join-room", session.user.id)

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect()
      }
    }
  }, [session])

  return socketRef.current
}

