import { skills } from '../data/portfolioData'
import useReveal from '../hooks/useReveal'

const GROUPS = [
  {
    key: 'backend',
    label: 'Backend Development',
    comment: '// Node.js, NestJS, Express.js, TypeScript & JS',
  },
  {
    key: 'api',
    label: 'API Engineering & Auth',
    comment: '// GraphQL, REST APIs, RBAC & Role Permissions',
  },
  {
    key: 'databases',
    label: 'Database Systems',
    comment: '// MongoDB, PostgreSQL, Mongoose & Sequelize',
  },
  {
    key: 'systems',
    label: 'Business Systems & ERP',
    comment: '// CRM, Construction, Property, BOQ & Workflows',
  },
  {
    key: 'frontendTools',
    label: 'Frontend & Tools',
    comment: '// React.js, HTML5, CSS3, Git, GitHub & GitLab',
  },
  {
    key: 'ai',
    label: 'AI-Powered Engineering',
    comment: '// Cursor, Copilot, Claude, ChatGPT, Antigravity',
  },
]

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills">
      <div className="container-px py-16 sm:py-20">
        <div ref={ref} className="reveal">
          <p className="eyebrow mb-4">Areas of Expertise</p>
          <h2 className="section-heading">
            Technical <span className="text-mint-400">Skillset</span>
          </h2>
          <p className="section-sub">
            Engineered across 2+ years of developing production backend applications, designing
            scalable database architectures, and deploying reliable business workflows.
          </p>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GROUPS.map((group) => (
              <div
                key={group.key}
                className="card p-6 card-hover-glow card-hover-scale transition-transform duration-300 flex flex-col justify-between"
              >
                <div>
                  <p className="font-mono text-[11px] text-paper-500 mb-1">{group.comment}</p>
                  <h3 className="font-display text-lg font-semibold text-paper-100 mb-4">
                    {group.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills[group.key]?.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-xs px-3 py-1.5 rounded-full border border-ink-border text-paper-300 hover:border-mint-500/40 hover:text-mint-400 transition-colors"
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
