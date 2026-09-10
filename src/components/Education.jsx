import { education, certifications } from '../data/portfolioData'
import useReveal from '../hooks/useReveal'

export default function Education() {
  const ref = useReveal()

  return (
    <section id="education" className="container-px py-16 sm:py-20">
      <div ref={ref} className="reveal">
        <p className="eyebrow mb-4 justify-center">Academic &amp; Professional</p>
        <h2 className="section-heading text-center mx-auto">
          Education &amp; <span className="text-mint-400">Credentials</span>
        </h2>
        <p className="section-sub text-center mx-auto">
          A foundation in Computer Applications combined with continuous professional mastery in
          Shopify ecosystem architecture and web performance.
        </p>

        {/* education degree cards */}
        <div className="mt-14 max-w-2xl mx-auto">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="card p-6 sm:p-8 card-hover-glow card-hover-scale transition-transform duration-300"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                <span className="font-mono text-xs text-mint-400 border border-mint-500/30 rounded-full px-3 py-1">
                  {edu.period}
                </span>
                <span className="font-mono text-xs text-mint-400 bg-mint-500/10 px-2.5 py-0.5 rounded-md">
                  {edu.status}
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-paper-100">
                {edu.degree}
              </h3>
              <p className="text-mint-400 text-sm mt-1">{edu.field}</p>
              <p className="text-paper-500 text-sm mt-3">{edu.school}</p>
            </div>
          ))}
        </div>

        {/* certifications */}
        <div className="mt-16 max-w-4xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper-500 mb-6 text-center">
            // Professional Certifications &amp; Standards
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="flex items-start gap-4 card p-5 card-hover-glow card-hover-scale transition-transform duration-300"
              >
                <span className="mt-1 w-2.5 h-2.5 rounded-full bg-mint-400 shadow-glow shrink-0" />
                <div>
                  <p className="text-paper-100 font-medium leading-snug text-sm">{cert.title}</p>
                  <p className="text-paper-500 text-xs mt-1.5">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
