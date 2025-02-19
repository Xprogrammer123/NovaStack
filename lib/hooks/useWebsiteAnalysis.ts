"use client"

import useSWR from "swr"
import { useEffect } from "react"
import { useSocket } from "./useSocket"

export function useWebsiteAnalysis(websiteId?: string) {
  const { data, error, mutate } = useSWR(websiteId ? `/api/websites/${websiteId}` : null)

  const socket = useSocket()

  useEffect(() => {
    if (!socket || !websiteId) return

    socket.on("seo-update", (updatedWebsite) => {
      if (updatedWebsite._id === websiteId) {
        mutate(updatedWebsite)
      }
    })

    return () => {
      socket.off("seo-update")
    }
  }, [socket, websiteId, mutate])

  return {
    website: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  }
}

