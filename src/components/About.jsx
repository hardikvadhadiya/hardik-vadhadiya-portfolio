import { about, profile } from '../data/portfolioData'
import useReveal from '../hooks/useReveal'
import { BracesIcon } from './Icons'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="container-px py-16 sm:py-24 relative">
      <div ref={ref} className="reveal grid lg:grid-cols-[0.88fr,1.12fr] gap-16 items-center">
        {/* Photo Container */}
        <div className="relative mx-auto lg:mx-0 max-w-sm w-full">
          {/* Ambient Glows */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 blur-[50px]" />
          
          {/* Decorative Corner Tech Crosshairs */}
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-cyan-400" />

          {/* Main Photo Card */}
          <div className="relative rounded-2xl border border-slate-700/80 bg-slate-900/60 p-2 shadow-2xl backdrop-blur-sm overflow-hidden image-border-glow">
            <div className="rounded-xl overflow-hidden aspect-[4/4.8]">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full object-cover object-[center_18%] hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Top Right Floating Badge - 2+ Years */}
          <div className="absolute -top-4 -right-4 card px-4 py-3 shadow-xl shadow-cyan-950/40 border-cyan-500/30 animate-float [animation-delay:0.3s] badge-hover-glow cursor-pointer bg-slate-900/90 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <span className="font-display font-bold text-lg bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">2+</span>
              <div className="text-left">
                <p className="font-mono text-[9px] text-slate-400 uppercase tracking-wider leading-none">
                  Years of
                </p>
                <p className="font-mono text-[10px] text-cyan-400 font-bold uppercase tracking-wider leading-none mt-1">
                  Production Exp
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Left Floating Badge - Systems Architect */}
          <div className="absolute -bottom-4 -left-4 card px-4 py-3 shadow-xl shadow-indigo-950/40 border-indigo-500/30 animate-float [animation-delay:1s] badge-hover-glow cursor-pointer bg-slate-900/90 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <span className="text-cyan-400"><BracesIcon width={20} height={20} /></span>
              <div className="text-left">
                <p className="font-mono text-[9px] text-slate-400 uppercase tracking-wider leading-none">
                  Specialist
                </p>
                <p className="font-mono text-[10px] text-indigo-400 font-bold uppercase tracking-wider leading-none mt-1">
                  Backend &amp; DBs
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copy Section */}
        <div>
          <p className="eyebrow mb-4">Engineering Philosophy</p>
          <h2 className="section-heading text-white">
            I'm {profile.firstName}{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              {profile.lastName}
            </span>
          </h2>

          <div className="mt-6 space-y-4 text-slate-300/90 leading-relaxed text-base sm:text-lg">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Spec Grid */}
          <div className="mt-10 grid sm:grid-cols-2 gap-2.5 rounded-2xl">
            {about.details.map((d) => (
              <div
                key={d.label}
                className="bg-slate-900/70 border border-slate-800/80 rounded-xl px-5 py-3.5 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 group cursor-pointer"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400 group-hover:text-cyan-400/90 transition-colors">
                  // {d.label}
                </p>
                <p className="text-white font-medium text-sm mt-1 group-hover:text-cyan-300 transition-colors">
                  {d.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
