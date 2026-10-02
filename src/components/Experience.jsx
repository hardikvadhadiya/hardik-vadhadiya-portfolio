import { experience } from '../data/portfolioData'
import useReveal from '../hooks/useReveal'

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" className="py-16 sm:py-24 relative">
      <div className="container-px">
        <div ref={ref} className="reveal">
          <p className="eyebrow mb-4">Production Track Record</p>
          <h2 className="section-heading text-white">
            Engineering <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="section-sub text-slate-300/90">
            Real enterprise deployments, multi-tenant architectures, and scalable database systems delivered on schedule.
          </p>

          <div className="mt-14 space-y-6">
            {experience.map((job) => (
              <div
                key={job.id}
                className="card p-7 sm:p-9 card-hover-glow transition-all duration-300 border-slate-800 bg-slate-900/60 backdrop-blur-xl relative overflow-hidden"
              >
                {/* Left Accent Node */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-sky-500 to-indigo-600" />

                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                      {job.role}
                    </h3>
                    <p className="text-cyan-400 font-medium text-base mt-1 flex items-center gap-2">
                      <span>{job.company}</span>
                      <span className="text-slate-500 font-mono text-xs">· {job.location}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs text-cyan-300 border border-cyan-500/30 bg-cyan-500/10 rounded-full px-3.5 py-1.5 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>{job.period}</span>
                  </div>
                </div>

                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3.5">
                  {job.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300/90 text-sm leading-relaxed">
                      <span className="text-cyan-400 font-bold shrink-0 mt-0.5">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-slate-800/80">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-3 py-1 rounded-lg bg-slate-800/80 text-cyan-300 border border-slate-700/60 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
