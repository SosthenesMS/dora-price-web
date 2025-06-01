"use client"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
// import { useTheme } from "@/components/theme-provider"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Only show the correct icon after client-side hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Render placeholder with same dimensions during SSR
  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="bg-transparent border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
      >
        <div className="h-5 w-5" />
        <span className="sr-only">Alternar tema</span>
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="bg-transparent border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      <span className="sr-only">Alternar tema</span>
    </Button>
  )
}
