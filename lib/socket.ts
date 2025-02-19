import type { Server as HTTPServer } from "http"
import { Server as IOServer } from "socket.io"
import type { NextApiResponse } from "next"

export const initSocket = (server: HTTPServer) => {
  const io = new IOServer(server, {
    path: "/api/socketio",
  })

  io.on("connection", (socket) => {
    console.log("Client connected")

    socket.on("join-room", (userId: string) => {
      socket.join(userId)
    })

    socket.on("website-analyzed", (data) => {
      io.to(data.userId).emit("seo-update", data)
    })

    socket.on("disconnect", () => {
      console.log("Client disconnected")
    })
  })

  return io
}

export const SocketHandler = (res: NextApiResponse) => {
  if (res.socket.server.io) {
    console.log("Socket is already running")
  } else {
    console.log("Socket is initializing")
    const io = new IOServer(res.socket.server)
    res.socket.server.io = io
  }
  res.end()
}

