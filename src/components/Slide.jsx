import React from 'react'

const Slide = ({ slide, theme = 'indigo' }) => {
  const base = 'min-h-[70vh] w-full rounded-3xl shadow-2xl p-10 flex items-center justify-center relative overflow-hidden'

  const themes = {
    indigo: 'bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-900 text-white',
    emerald: 'bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900 text-white',
    rose: 'bg-gradient-to-br from-rose-600 via-rose-700 to-rose-900 text-white',
    slate: 'bg-gradient-to-br from-slate-800 via-slate-900 to-black text-white'
  }

  const pattern = 'before:content-[""] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_35%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.12),transparent_40%)] before:pointer-events-none'

  const type = slide.type || 'title'

  return (
    <div className={`${base} ${themes[theme]} ${pattern}`}>
      <div className="max-w-5xl mx-auto w-full">
        {type === 'title' && (
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg">{slide.title || 'Your Presentation Title'}</h1>
            {slide.subtitle && (
              <p className="mt-6 text-xl md:text-2xl text-white/90">{slide.subtitle}</p>
            )}
            {slide.meta && (
              <p className="mt-4 text-sm text-white/75">{slide.meta}</p>
            )}
          </div>
        )}

        {type === 'section' && (
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">{slide.title || 'Section Title'}</h2>
            {slide.subtitle && (
              <p className="mt-6 text-xl text-white/90">{slide.subtitle}</p>
            )}
          </div>
        )}

        {type === 'bullets' && (
          <div className="">
            {slide.title && <h3 className="text-3xl md:text-5xl font-bold mb-8">{slide.title}</h3>}
            <ul className="space-y-4 text-lg md:text-2xl leading-relaxed">
              {(slide.points || ['First point', 'Second point', 'Third point']).map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white/80"></span>
                  <span className="text-white/95">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {type === 'quote' && (
          <div className="text-center max-w-3xl mx-auto">
            <blockquote className="text-3xl md:text-5xl font-semibold italic">“{slide.quote || 'A compelling quote goes here.'}”</blockquote>
            {slide.author && <p className="mt-6 text-xl text-white/80">— {slide.author}</p>}
          </div>
        )}

        {type === 'end' && (
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-extrabold">{slide.title || 'Thank You'}</h2>
            {slide.subtitle && <p className="mt-6 text-2xl text-white/90">{slide.subtitle}</p>}
            {slide.meta && <p className="mt-2 text-white/70">{slide.meta}</p>}
          </div>
        )}
      </div>
    </div>
  )
}

export default Slide
