import React, { useState } from 'react'
import Slide from './Slide'

const defaultSlides = [
  { type: 'title', title: 'Your Presentation Title', subtitle: 'Subtitle or tagline', meta: 'Your Name • Company' },
  { type: 'section', title: 'Agenda', subtitle: 'What we will cover' },
  { type: 'bullets', title: 'Key Points', points: ['Problem statement', 'Solution overview', 'Expected outcomes'] },
  { type: 'quote', quote: 'Simplicity is the ultimate sophistication.', author: 'Leonardo da Vinci' },
  { type: 'bullets', title: 'Next Steps', points: ['Timeline', 'Resources', 'Call to action'] },
  { type: 'end', title: 'Thank You', subtitle: 'Questions?', meta: 'email@you.com' },
]

const themes = ['indigo', 'emerald', 'rose', 'slate']

const Deck = ({ initialSlides = defaultSlides, initialTheme = 'indigo' }) => {
  const [slides, setSlides] = useState(initialSlides)
  const [theme, setTheme] = useState(initialTheme)
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c > 0 ? c - 1 : slides.length - 1))
  const next = () => setCurrent((c) => (c + 1) % slides.length)

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="bg-slate-800 text-white px-3 py-2 rounded-lg border border-slate-700"
            >
              {themes.map((t) => (
                <option key={t} value={t}>
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </option>
              ))}
            </select>
            <span className="text-slate-400 text-sm">Theme</span>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={prev} className="px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 hover:bg-slate-700">Prev</button>
            <span className="text-slate-300 text-sm">{current + 1} / {slides.length}</span>
            <button onClick={next} className="px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 hover:bg-slate-700">Next</button>
          </div>
        </div>

        <Slide slide={slides[current]} theme={theme} />

        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-24 rounded-xl border ${i === current ? 'border-white' : 'border-slate-700'} bg-slate-800 text-left p-3 hover:border-slate-400`}
            >
              <p className="text-xs text-slate-400">{s.type.toUpperCase()}</p>
              <p className="text-sm truncate">{s.title || s.quote?.slice(0, 24) || 'Slide'}</p>
            </button>
          ))}
        </div>

        <div className="mt-8 text-slate-400 text-sm">
          Tip: Use the theme selector and navigation to preview the template. We can customize content and export to PDF on request.
        </div>
      </div>
    </div>
  )
}

export default Deck
