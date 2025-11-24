// components/view-transition-provider.tsx
"use client"

import { usePathname, useRouter } from 'next/navigation'
import { startTransition, useEffect, useState } from 'react'

export function ViewTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const startNavigating = startTransition

  useEffect(() => {
    if (!document.startViewTransition) return

    // Handle browser navigation (back/forward)
    const handlePopState = () => {
      document.startViewTransition?.(() => {
        startNavigating(() => {
          // Let Next.js handle the navigation
        })
      })
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [startNavigating])

  const enhancedPush = (url: string) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        startNavigating(() => {
          router.push(url)
        })
      })
    } else {
      router.push(url)
    }
  }

  return children
}