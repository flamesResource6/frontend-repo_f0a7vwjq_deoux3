import React, { useState } from 'react'
import Deck from './components/Deck'
import TemplateSlides from './components/TemplateSlides'

const THEMES = ['indigo', 'emerald', 'rose', 'violet']

function App() {
  const [themeIndex, setThemeIndex] = useState(0)
  const theme = THEMES[themeIndex]

  const nextTheme = () => setThemeIndex((i) => (i + 1) % THEMES.length)

  return (
    <div className="relative">
      {/* Quick toolbar */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <button
          onClick={nextTheme}
          className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white text-sm border border-white/20 backdrop-blur"
          title="Change theme"
        >
          Theme: {theme}
        </button>
        <a
          href="/test"
          className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white text-sm border border-white/20 backdrop-blur"
        >
          Backend Test
        </a>
      </div>

      <Deck theme={theme}>
        <TemplateSlides />
      </Deck>
    </div>
  )
}

export default App
