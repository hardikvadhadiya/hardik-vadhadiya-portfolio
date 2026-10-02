import { skills } from '../data/portfolioData'
import useReveal from '../hooks/useReveal'

const BENTO_CARDS = [
  {
    key: 'backend',
    colSpan: 'lg:col-span-2',
    label: 'Core Backend & Architecture',
    comment: '// Production Engines & Runtime Environments',
    badge: 'Primary Engine',
    badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  },
  {
    key: 'databases',
    colSpan: 'lg:col-span-1',
    label: 'Database Systems',
    comment: '// Relational & NoSQL Schema Architecture',
    badge: 'SQL & NoSQL',
    badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
  },
  {
    key: 'api',
    colSpan: 'lg:col-span-1',
    label: 'API Protocols & Auth',
    comment: '// GraphQL, REST & Access Control',
    badge: 'High Throughput',
    badgeColor: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
  },
  {
    key: 'systems',
    colSpan: 'lg:col-span-2',
    label: 'Business Platforms & ERP',
    comment: '// Mission-Critical Multi-Tenant Workflows',
    badge: 'Production Systems',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    key: 'frontendTools',
    colSpan: 'lg:col-span-1',
    label: 'Client Integration & Tools',
    comment: '// React & Version Control Pipeline',
    badge: 'Full Tooling',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  },
  {
    key: 'ai',
    colSpan: 'lg:col-span-2',
    label: 'AI-Accelerated Engineering',
    comment: '// AI Tooling for High-Velocity Architecture',
    badge: 'Modern Velocity',
    badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  },
]

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className="relative py-16 sm:py-24">
      <div className="container-px">
        <div ref={ref} className="reveal">
          <p className="eyebrow mb-4">Core Competencies</p>
          <h2 className="section-heading text-white">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Architecture</span>
          </h2>
          <p className="section-sub text-slate-300/90">
            A battle-tested backend stack engineered across 2+ years of production experience — 
            focusing on scalable APIs, robust data integrity, and high-performance business microservices.
          </p>

          {/* Bento Grid */}
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENTO_CARDS.map((card) => (
              <div
                key={card.key}
                className={`card p-6 sm:p-7 card-hover-glow transition-all duration-300 flex flex-col justify-between ${card.colSpan} border-slate-800 bg-slate-900/60 backdrop-blur-xl relative overflow-hidden group`}
              >
                {/* Subtle Top Edge Gradient Accent */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent group-hover:via-cyan-400 transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">{card.comment}</p>
                    <span className={`font-mono text-[9px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${card.badgeColor}`}>
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-5 group-hover:text-cyan-300 transition-colors">
                    {card.label}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {skills[card.key]?.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-xs px-3 py-1.5 rounded-lg border border-slate-700/60 bg-slate-800/40 text-slate-300 hover:border-cyan-400/60 hover:text-cyan-300 hover:bg-cyan-500/5 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
