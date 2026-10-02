import { navLinks, profile, socials } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons'

const ICONS = { github: GithubIcon, linkedin: LinkedinIcon, mail: MailIcon }

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-slate-800/80 overflow-hidden bg-slate-950/70">
      <div className="container-px py-16 sm:py-20 relative grid sm:grid-cols-3 gap-12 sm:gap-20 items-center">
        {/* Left: Navigation */}
        <nav className="grid grid-cols-2 gap-x-8 gap-y-3 font-mono text-xs">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Center: Profile Brand */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-xl shadow-cyan-950/50 mb-3.5 p-0.5 bg-gradient-to-br from-cyan-400 to-indigo-600">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-full h-full object-cover object-[center_18%] rounded-[14px]"
            />
          </div>
          <p className="font-display text-lg font-bold text-white tracking-wide">{profile.name}</p>
          <p className="font-mono text-xs text-cyan-400 uppercase tracking-widest mt-0.5 font-medium">
            {profile.role}
          </p>
          <p className="text-slate-400 text-xs italic mt-2 max-w-xs">
            "Engineering scalable, high-performance distributed backend architectures."
          </p>
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center justify-center sm:justify-end gap-3.5">
          {socials.map(({ label, href, icon }) => {
            const Icon = ICONS[icon]
            return (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-slate-800 bg-slate-900/60 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(6,182,212,0.35)] transition-all duration-300"
              >
                <Icon />
              </a>
            )
          })}
        </div>
      </div>

      <div className="border-t border-slate-900/90 py-6">
        <p className="container-px text-center font-mono text-[11px] text-slate-500">
          © {year} {profile.name} · All rights reserved · Engineered with Node.js &amp; React.
        </p>
      </div>

      {/* Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-extrabold text-[19vw] leading-none text-cyan-400/[0.015] whitespace-nowrap"
      >
        {profile.firstName.toUpperCase()}
      </div>
    </footer>
  )
}
