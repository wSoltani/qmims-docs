"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Force a client-side render to ensure theme is properly applied
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Add a class to the body when mounted to help with transitions
  React.useEffect(() => {
    if (mounted) {
      document.body.classList.add("theme-mounted")
    }
  }, [mounted])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
