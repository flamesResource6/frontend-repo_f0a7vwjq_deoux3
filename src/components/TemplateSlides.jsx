import React from 'react'
import Slide from './Slide'

export default function TemplateSlides() {
  return (
    <>
      {/* Title */}
      <Slide>
        <div className="text-center">
          <h1 className="text-6xl font-extrabold tracking-tight mb-4">Your Presentation Title</h1>
          <p className="text-xl text-white/80">Subtitle or tagline goes here</p>
          <div className="mt-10 text-sm text-white/60">Press → to begin</div>
        </div>
      </Slide>

      {/* Agenda */}
      <Slide>
        <h2 className="text-4xl font-bold mb-6">Agenda</h2>
        <ol className="space-y-3 text-lg text-white/90 list-decimal list-inside">
          <li>Introduction</li>
          <li>Problem / Opportunity</li>
          <li>Solution Overview</li>
          <li>Key Features</li>
          <li>Results & Impact</li>
          <li>Next Steps / Q&A</li>
        </ol>
      </Slide>

      {/* Problem */}
      <Slide>
        <h2 className="text-4xl font-bold mb-6">The Problem</h2>
        <ul className="space-y-3 text-lg text-white/90 list-disc list-inside">
          <li>Briefly describe the pain points your audience cares about.</li>
          <li>Use short, scannable bullets (no paragraphs).</li>
          <li>Quantify the impact with 1–2 numbers if possible.</li>
        </ul>
      </Slide>

      {/* Solution */}
      <Slide>
        <h2 className="text-4xl font-bold mb-6">Our Solution</h2>
        <ul className="space-y-3 text-lg text-white/90 list-disc list-inside">
          <li>High-level explanation of what you built or propose.</li>
          <li>How it directly addresses the pain points.</li>
          <li>1 sentence positioning or value prop.</li>
        </ul>
      </Slide>

      {/* Features */}
      <Slide>
        <h2 className="text-4xl font-bold mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Fast', 'Simple', 'Scalable'].map((title) => (
            <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="text-white/80 text-sm">Add a concise benefit-driven description here.</p>
            </div>
          ))}
        </div>
      </Slide>

      {/* Data / Results */}
      <Slide>
        <h2 className="text-4xl font-bold mb-6">Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { k: 'Metric 1', v: '↑ 45%' },
            { k: 'Metric 2', v: '↓ 30%' },
            { k: 'Metric 3', v: '2x' },
          ].map((m) => (
            <div key={m.k} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl font-extrabold">{m.v}</div>
              <div className="text-white/70 mt-1">{m.k}</div>
            </div>
          ))}
        </div>
      </Slide>

      {/* Timeline / Plan */}
      <Slide>
        <h2 className="text-4xl font-bold mb-6">Roadmap</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {['Now', 'Next', 'Later', 'Future'].map((phase) => (
            <div key={phase} className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h3 className="font-semibold mb-2">{phase}</h3>
              <ul className="list-disc list-inside text-white/80 text-sm space-y-1">
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
              </ul>
            </div>
          ))}
        </div>
      </Slide>

      {/* Call to Action */}
      <Slide>
        <div className="text-center">
          <h2 className="text-5xl font-extrabold mb-4">Questions?</h2>
          <p className="text-white/80">Contact: you@example.com</p>
        </div>
      </Slide>
    </>
  )
}
