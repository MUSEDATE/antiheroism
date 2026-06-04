import Link from 'next/link'
import { HomeMotion } from '../components/home-motion'
import { SiteFooter } from '../components/site-footer'
import { SiteHeader } from '../components/site-header'
import { projects } from '../site-content'

export default function ProjectsPage() {
  return (
    <main className="page-root interior-page">
      <HomeMotion />
      <SiteHeader current="/projects" />

      <section className="interior-hero">
        <div className="page-shell interior-hero-shell">
          <p className="type-small section-kicker">ventures · ledger</p>
          <h1 className="type-display interior-title mt-6">
            Small signals, clearer products, real ventures.
          </h1>
          <p className="type-body interior-copy mt-8">
            This page is only about the ventures. The studio thesis lives elsewhere. Here we focus on what is being
            built, what stage it is in, and where each project wants to go next.
          </p>
        </div>
      </section>

      <section className="interior-sections">
        <div className="page-shell">
          <div className="project-ledger">
            <div className="project-ledger-head type-small">
              <span>№</span>
              <span>title</span>
              <span>business</span>
              <span>stage</span>
              <span aria-hidden="true" />
            </div>

            {projects.map((project, index) => (
              <article
                key={project.slug}
                className={`project-ledger-row reveal-block ${index === 1 ? 'delay-1' : ''}`}
              >
                <span className="project-ledger-num type-small">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="project-ledger-poster" aria-hidden="true">
                  <div className={`project-poster project-poster-${project.slug} project-poster-tile`}>
                    <div className="project-poster-content project-poster-content-tile">
                      <span className="project-short type-display">{project.shortName}</span>
                      <span className="project-name-on-poster type-small">{project.name}</span>
                    </div>
                  </div>
                </div>

                <div className="project-ledger-body">
                  <h2 className="type-section card-title">{project.name}</h2>
                  <p className="type-body story-body project-ledger-summary">{project.summary}</p>
                  <p className="type-small project-ledger-slogan">“{project.slogan}”</p>
                </div>

                <div className="project-ledger-meta">
                  <p className="type-small project-ledger-stage">{project.status}</p>
                  <p className="type-small project-ledger-category">{project.category}</p>
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="type-small project-ledger-link"
                    >
                      official site ↗
                    </a>
                  ) : null}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="project-ledger-cta type-small"
                  aria-label={`Open ${project.name} detail page`}
                >
                  <span aria-hidden="true">detail →</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="project-ledger-outro reveal-block">
            <p className="type-body story-body">
              More ventures will appear here as they become real enough to talk about. If you are building something
              that belongs in this column, write to us.
            </p>
            <a href="mailto:hello@antihero.freeqiye.com" className="text-link type-body">
              hello@antihero.freeqiye.com
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
