import Link from 'next/link'
import { HomeMotion } from '../components/home-motion'
import { SiteFooter } from '../components/site-footer'
import { SiteHeader } from '../components/site-header'
import { approachFramework, approachSections } from '../site-content'

export default function ApproachPage() {
  return (
    <main className="page-root interior-page">
      <HomeMotion />
      <SiteHeader current="/approach" />

      <section className="interior-hero">
        <div className="page-shell interior-hero-shell">
          <p className="section-kicker">approach</p>
          <h1 className="interior-title mt-6">Process-based AI, built around execution.</h1>
          <p className="interior-copy mt-8">
            We care less about AI as a machine for one-off answers and more about AI as a process that helps a person
            move, continue, and compound what matters over time.
          </p>
        </div>
      </section>

      <section className="interior-sections">
        <div className="page-shell interior-stack">
          {approachSections.map((section, index) => (
            <article key={section.title} className={`interior-block reveal-block ${index === 1 ? 'delay-1' : ''} ${index === 2 ? 'delay-2' : ''}`}>
              <p className="story-index">0{index + 1}</p>
              <h2 className="section-title mt-4">{section.title}</h2>
              <p className="story-body mt-6">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="interior-sections interior-sections-tight">
        <div className="page-shell">
          <div className="beliefs-header reveal-block">
            <p className="section-kicker">framework</p>
            <h2 className="section-title section-title-wide">Source, cost, outcome.</h2>
            <p className="story-body mt-6">
              These three questions keep the system grounded in human reality instead of drifting into abstract
              optimization.
            </p>
          </div>

          <div className="beliefs-grid">
            {approachFramework.map((item, index) => (
              <article key={item.title} className={`beliefs-card reveal-block ${index === 1 ? 'delay-1' : ''} ${index === 2 ? 'delay-2' : ''}`}>
                <p className="type-small story-index">{item.title}</p>
                <p className="type-body story-body">{item.body}</p>
              </article>
            ))}
          </div>

          <div className="interior-cta reveal-block">
            <p className="story-body">
              This approach is how we evaluate new tools, new products, and the kinds of execution we want to make
              possible next.
            </p>
            <Link href="/projects" className="text-link mt-8">
              see the projects
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
