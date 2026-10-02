import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/portfolioData'
import { MenuIcon, CloseIcon } from './Icons'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-ink-900/80 backdrop-blur-xl border-b border-cyan-500/10 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex items-center justify-between h-20 w-full min-w-0">
        {/* Brand Logo & Avatar */}
        <a
          href="#home"
          className="flex items-center gap-3.5 group min-w-0"
        >
          <div className="relative w-11 h-11 flex-shrink-0 rounded-xl overflow-hidden border border-cyan-400/40 p-0.5 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 shadow-md shadow-cyan-500/10 group-hover:border-cyan-400 transition-all duration-300">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-full h-full object-cover object-[center_18%] rounded-[9px]"
            />
            <span className="absolute bottom-0.5 right-0.5 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-ink-900 animate-pulse" />
          </div>

          <div className="flex flex-col leading-tight min-w-0">
            <span className="font-display text-sm font-bold text-paper-100 group-hover:text-cyan-400 transition-colors tracking-wide flex items-center gap-2">
              DEEP VADHADIYA
            </span>
            <span className="font-mono text-[9px] tracking-[0.22em] text-cyan-400/90 uppercase font-medium">
              Backend Systems Architect
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-7 font-mono text-xs tracking-wide">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-paper-300 hover:text-cyan-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-gradient-to-r after:from-cyan-400 after:to-indigo-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Controls & CTA */}
        <div className="flex items-center gap-3 flex-shrink-0 ml-3">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Availability Pill - Desktop */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/5 text-emerald-400 font-mono text-[10px] tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Available for Hire</span>
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white px-5 py-2 text-xs font-semibold tracking-wide shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="lg:hidden flex items-center justify-center w-10 h-10 flex-shrink-0 p-0 text-paper-100 hover:text-cyan-400 transition-colors"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon width={22} height={22} /> : <MenuIcon width={22} height={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="lg:hidden w-full border-t border-slate-700/50 bg-ink-900/95 backdrop-blur-2xl">
          <ul className="flex flex-col container-px py-5 gap-2 font-mono text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-paper-300 hover:text-cyan-400 border-b border-slate-800/80 last:border-none transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-full justify-center items-center py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs tracking-wider uppercase shadow-md shadow-cyan-500/25"
              >
                Let's Talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}