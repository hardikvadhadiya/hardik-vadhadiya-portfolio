import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ComposeModal from './components/ComposeModal'

export default function App() {
  const [composeOpen, setComposeOpen] = useState(false)

  return (
    <div className="min-h-screen bg-ink-900 text-paper-100 selection:bg-mint-500/30 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero onOpenCompose={() => setComposeOpen(true)} />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Contact onOpenCompose={() => setComposeOpen(true)} />
      </main>
      <Footer onOpenCompose={() => setComposeOpen(true)} />
      <ComposeModal open={composeOpen} onClose={() => setComposeOpen(false)} />
    </div>
  )
}
