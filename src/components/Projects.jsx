import { projects } from '../data/portfolioData'
import { ArrowUpRightIcon } from './Icons'
import useReveal from '../hooks/useReveal'

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" className="py-16 sm:py-24 relative">
      <div className="container-px">
        <div ref={ref} className="reveal">
          <p className="eyebrow mb-4">Architecture Portfolio</p>
          <h2 className="section-heading text-white">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Systems</span>
          </h2>
          <p className="section-sub text-slate-300/90">
            A selection of mission-critical production backend platforms, multi-tenant architectures, 
            and data-driven business workflows engineered with Node.js, NestJS, and modern database systems.
          </p>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="card p-7 card-hover-glow transition-all duration-300 border-slate-800 bg-slate-900/60 backdrop-blur-xl flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle Top Border Glow */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent group-hover:via-cyan-400 transition-all duration-500" />

                <div>
                  {/* Header: Index & Status */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-cyan-400 font-bold tracking-wider px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20">
                      SYS // {project.index}
                    </span>

                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Production Architecture
                    </span>
                  </div>

                  {/* Title & Type */}
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-indigo-400 font-medium mt-1">
                    {project.type}
                  </p>

                  {/* Description */}
                  <p className="text-slate-300/90 text-sm mt-3.5 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Footer: Tech Stack Chips & Action */}
                <div className="mt-8 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/50 group-hover:border-cyan-500/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-white font-medium bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-full px-4 py-2 shadow-md shadow-cyan-500/20 transition-all duration-300 shrink-0"
                    >
                      View Platform <ArrowUpRightIcon width={13} height={13} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
