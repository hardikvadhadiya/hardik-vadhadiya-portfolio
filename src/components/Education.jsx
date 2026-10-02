import { education, certifications } from '../data/portfolioData'
import useReveal from '../hooks/useReveal'

export default function Education() {
  const ref = useReveal()

  return (
    <section id="education" className="py-16 sm:py-24 relative">
      <div className="container-px">
        <div ref={ref} className="reveal text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4 justify-center">Academic &amp; Standards</p>
          <h2 className="section-heading text-white">
            Education &amp; <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Credentials</span>
          </h2>
          <p className="section-sub mx-auto text-slate-300/90">
            A solid computer applications foundation complemented by continuous engineering mastery in
            distributed architectures, database scaling, and production API design.
          </p>
        </div>

        {/* Degree Card */}
        <div className="mt-14 max-w-2xl mx-auto">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="card p-7 sm:p-9 card-hover-glow transition-all duration-300 border-slate-800 bg-slate-900/60 backdrop-blur-xl relative overflow-hidden group text-left"
            >
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent group-hover:via-cyan-400 transition-all duration-500" />

              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <span className="font-mono text-xs text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 rounded-full px-3.5 py-1">
                  {edu.period}
                </span>
                <span className="font-mono text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                  {edu.meta}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {edu.degree}
              </h3>
              <p className="text-cyan-400 text-sm font-medium mt-1.5">{edu.field}</p>
              <p className="text-slate-400 text-sm mt-3">{edu.school}</p>
            </div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="mt-16 max-w-4xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-400 mb-6 text-center font-medium">
            // Core Engineering Competencies &amp; Standards
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="flex items-start gap-4 card p-5 card-hover-glow transition-all duration-300 border-slate-800 bg-slate-900/50 backdrop-blur-md"
              >
                <span className="mt-1 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4] shrink-0" />
                <div>
                  <p className="text-white font-semibold leading-snug text-sm">{cert.title}</p>
                  <p className="text-slate-400 text-xs mt-1.5 font-mono">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
