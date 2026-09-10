import { projects } from '../data/portfolioData'
import { ArrowUpRightIcon } from './Icons'
import useReveal from '../hooks/useReveal'

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" className="container-px py-16 sm:py-20">
      <div ref={ref} className="reveal">
        <p className="eyebrow mb-4">Client Work</p>
        <h2 className="section-heading">
          Featured <span className="text-mint-400">Stores</span>
        </h2>
        <p className="section-sub">
          Production Shopify stores, Online Store 2.0 theme architectures, and high-performance
          eCommerce builds delivered for international clients.
        </p>

        <div className="mt-16 divide-y divide-ink-border border-y border-ink-border">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group grid sm:grid-cols-[auto,1fr,auto] items-center gap-6 py-8 transition-colors duration-300 hover:bg-ink-800/20 px-2 sm:px-4 rounded-xl"
            >
              <span className="font-mono text-sm text-paper-500 font-semibold">{project.index}</span>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-paper-100 group-hover:text-mint-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="font-mono text-[10px] uppercase tracking-wide bg-mint-500/10 text-mint-400 px-2.5 py-1 rounded-full border border-mint-500/20">
                      Featured Build
                    </span>
                  )}
                </div>
                <p className="text-paper-500 text-sm mt-2 max-w-2xl leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-3 font-mono text-xs text-paper-500">
                  <span className="text-mint-400 font-medium">{project.type}</span>
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-paper-500">· {tag}</span>
                  ))}
                </div>
              </div>

              <div className="flex sm:justify-end gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs text-ink-950 font-semibold bg-mint-500 hover:bg-mint-400 rounded-full px-5 py-2.5 shadow-glow transition-all duration-300 group-hover:scale-105"
                  >
                    Visit Store <ArrowUpRightIcon width={14} height={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
