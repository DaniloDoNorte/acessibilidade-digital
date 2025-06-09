"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ZoomIn, ZoomOut, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export default function AccessibilityControls() {
  const [mounted, setMounted] = useState(false)
  const [fontSize, setFontSize] = useState(100)
  const { theme, setTheme } = useTheme()

  // Evita problemas de hidratação
  useEffect(() => {
    setMounted(true)

    // Recupera o tamanho da fonte salvo, se existir
    const savedFontSize = localStorage.getItem("fontSize")
    if (savedFontSize) {
      setFontSize(Number.parseInt(savedFontSize))
      document.documentElement.style.fontSize = `${Number.parseInt(savedFontSize)}%`
    }
  }, [])

  // Altera o tamanho da fonte
  const changeFontSize = (direction: "increase" | "decrease") => {
    const newSize = direction === "increase" ? fontSize + 10 : fontSize - 10

    // Limita o tamanho entre 80% e 150%
    if (newSize >= 80 && newSize <= 150) {
      setFontSize(newSize)
      document.documentElement.style.fontSize = `${newSize}%`
      localStorage.setItem("fontSize", newSize.toString())
    }
  }

  // Alterna entre modo claro e escuro
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) return null

  return (
    <div className="flex items-center gap-2" aria-label="Controles de acessibilidade">
      <div className="flex items-center border rounded-md overflow-hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => changeFontSize("decrease")}
          aria-label="Diminuir tamanho da fonte"
          className="h-8 px-2"
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <span className="px-2 text-sm" aria-live="polite">
          {fontSize}%
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => changeFontSize("increase")}
          aria-label="Aumentar tamanho da fonte"
          className="h-8 px-2"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
      </div>

      <Button
        variant="ghost"
        size="sm"
        onClick={toggleTheme}
        aria-label={`Alternar para modo ${theme === "dark" ? "claro" : "escuro"}`}
        className="h-8 px-2"
      >
        {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>
    </div>
  )
}
