import { profile, socials, stack, stats } from '../data/portfolioData'
import { ArrowRightIcon, DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from './Icons'
import TypedRole from './TypedRole'

const ICONS = { github: GithubIcon, linkedin: LinkedinIcon, mail: MailIcon }

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* ambient futuristic background glows */}
      <div className="pointer-events-none absolute -top-40 right-10 w-[38rem] h-[38rem] rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute top-48 -left-32 w-[26rem] h-[26rem] rounded-full bg-indigo-600/10 blur-[120px]" />

      <div className="container-px relative grid lg:grid-cols-[1.1fr,0.9fr] gap-14 lg:gap-16 items-center">
        {/* Left: copy */}
        <div className="animate-fade-up">
          {/* Status Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6 backdrop-blur-md">
            <span className="relative flex w-2 h-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="font-mono text-[11px] font-medium tracking-widest text-cyan-300 uppercase">
              Production-Ready Backend Architect
            </span>
          </div>

          <h1 className="font-display font-bold text-[2.75rem] leading-[1.05] sm:text-6xl md:text-[4.25rem] text-white tracking-tight">
            Deep
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
              Vadhadiya
            </span>
          </h1>

          <div className="mt-5 sm:mt-6 md:min-h-[3.75rem] xl:min-h-8 font-mono text-base sm:text-lg md:text-xl leading-normal text-cyan-400">
            <span className="text-slate-500">{'<'} </span>
            <TypedRole />
            <span className="text-slate-500"> {'/>'}</span>
          </div>

          <p className="section-sub mt-4 sm:mt-5 text-slate-300/90 text-base sm:text-lg leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 text-white font-semibold px-7 py-3.5 text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300"
            >
              Explore Architecture &amp; Projects <ArrowRightIcon width={16} height={16} />
            </a>
            <a
              href={profile.resumeUrl}
              download="Deep-Vadhadiya-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 text-slate-200 px-6 py-3.5 text-sm font-medium hover:border-cyan-400/50 hover:text-cyan-400 backdrop-blur-sm transition-all duration-300"
            >
              Download CV <DownloadIcon width={16} height={16} />
            </a>
          </div>

          {/* Key Metrics / Highlights */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-8 border-t border-slate-800/80">
            {stats.map((item) => (
              <div
                key={item.label}
                className="p-3.5 rounded-xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-sm flex flex-col hover:border-cyan-500/30 transition-colors"
              >
                <span className="font-display text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent tracking-tight">
                  {item.value}
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider mt-1 leading-tight font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-5">
            <span className="font-mono text-xs tracking-[0.2em] text-slate-400 uppercase font-medium">
              Connect
            </span>
            <div className="flex items-center gap-3">
              {socials.map(({ label, href, icon }) => {
                const Icon = ICONS[icon]
                return (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full border border-slate-700/60 bg-slate-900/50 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(6,182,212,0.35)] transition-all duration-300"
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right: Real Photo + Interactive System Telemetry Card */}
        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="relative mx-auto max-w-sm sm:max-w-md aspect-square flex items-center justify-center">
            {/* Ambient Back Glows */}
            <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-indigo-600/20 blur-[80px]" />

            {/* Futuristic Orbit Rings */}
            <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/25 animate-[spin_30s_linear_infinite]" />
            <div className="absolute -inset-6 rounded-full border border-dashed border-indigo-500/20 animate-[spin_40s_linear_infinite_reverse]" />

            {/* Main Portrait Card */}
            <div className="relative z-10 w-[78%] aspect-square rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl shadow-cyan-950/50 p-1 bg-gradient-to-b from-cyan-500/20 via-transparent to-indigo-600/20">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full object-cover object-[center_18%] rounded-[14px]"
              />
            </div>

            {/* floating telemetry badge - Top Right */}
            <div className="absolute -top-3 -right-2 sm:right-2 flex items-center gap-2 card px-3.5 py-2 z-20 animate-float [animation-delay:0.5s] border-cyan-500/30">
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="font-mono text-[11px] text-slate-200 font-medium">99.9% Uptime Architecture</span>
            </div>

            {/* floating code badge - Top Left */}
            <span className="absolute top-4 left-0 card w-11 h-11 flex items-center justify-center font-mono text-xs text-cyan-400 animate-float [animation-delay:0.3s] border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              {'</>'}
            </span>

            {/* Live Gateway Terminal Card - Bottom Left */}
            <div className="absolute -bottom-10 -left-4 sm:-left-8 w-68 sm:w-76 card p-4 animate-float [animation-delay:1.2s] z-20 border-cyan-500/30 shadow-2xl shadow-black/80 bg-slate-900/90 backdrop-blur-xl">
              <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                  <span className="ml-2 font-mono text-[10px] text-cyan-400 font-medium">gateway.service.ts</span>
                </div>
                <span className="font-mono text-[9px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">200 OK</span>
              </div>
              <p className="font-mono text-[11px] leading-relaxed text-slate-300">
                <span className="text-indigo-400">@Injectable</span>()
                <br />
                <span className="text-cyan-400">class</span> BackendGateway {'{'}
                <br />
                &nbsp;&nbsp;engineer:{' '}
                <span className="text-emerald-400">"Deep Vadhadiya"</span>,
                <br />
                &nbsp;&nbsp;coreStack:{' '}
                <span className="text-cyan-300">"NestJS, Node, TS"</span>,
                <br />
                &nbsp;&nbsp;databases:{' '}
                <span className="text-cyan-300">"PostgreSQL + Mongo"</span>,
                <br />
                &nbsp;&nbsp;protocols:{' '}
                <span className="text-amber-300">"GraphQL &amp; REST"</span>
                <br />
                {'}'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Marquee with Cyan Diamond Delimiters */}
      <div className="mt-24 border-y border-slate-800/80 py-4.5 overflow-hidden marquee-container bg-slate-950/40">
        <div className="flex w-max animate-marquee gap-10 font-mono text-xs sm:text-sm text-slate-400">
          {[...stack, ...stack].map((tech, i) => (
            <span key={`${tech}-${i}`} className="flex items-center gap-10 shrink-0 hover:text-cyan-400 transition-colors">
              {tech}
              <span className="text-cyan-400/60 font-bold">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}