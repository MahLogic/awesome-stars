'use client'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { Button } from './button'

export default function ThemeSwitcher() {
  const [svg, setSvg] = useState(<MoonIcon />)
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    if (theme === 'light') {
      setTheme('dark')
      setSvg(<MoonIcon />)
    } else {
      setTheme('light')
      setSvg(<SunIcon />)
    }
  }

  return (
    <Button variant="ghost" size="icon" onClick={handleClick}>
      {svg}
    </Button>
  )
}
