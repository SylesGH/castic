"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export function useSearchParams(debouncedQuery: string) {
  const router = useRouter()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)

    if (debouncedQuery.trim()) {
      params.set("s", debouncedQuery)
    } else {
      params.delete("s")
    }

    const newUrl = `${window.location.pathname}?${params.toString()}`
    router.replace(newUrl, { scroll: false })
  }, [debouncedQuery, router])
}
