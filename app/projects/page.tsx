import Link from 'next/link'
import { SiteFooter } from '../components/site-footer'
import { SiteHeader } from '../components/site-header'
import { projects } from '../site-content'

export default function ProjectsPage() {
  return (
    <main className="page-root interior-page">
      <SiteHeader current="/projects" />

      <section className="interior-hero">
        <div className="page-shell interior-hero-shell">
          <p className="section-kicker">projects</p>
          <h1 className="interior-title mt-6">The full project surface: live ventures, in-build products, and the catalog beyond the homepage.</h1>
          <p className="interior-copy mt-8">
            This page is designed to hold every supported project in a cleaner left-right presentation: project name and
            visual on one side, description and official link on the other.
          </p>
        </div>
      </section>

      <section className="interior-sections">
        <div className="page-shell project-list-page">
          {projects.map((project, index) => (
            <article key={project.slug} className={`project-list-item reveal-up ${index === 1 ? 'delay-1' : ''}`}>
              <div className={`project-poster project-poster-${project.slug}`}>
                <div className="project-poster-content">
                  <span className="project-short">{project.shortName}</span>
                  <span className="project-name-on-poster">{project.name}</span>
                </div>
              </div>
              <div className="project-list-copy">
                <p className="story-index">{project.status}</p>
                <h2 className="section-title mt-4">{project.name}</h2>
                <p className="venture-meta mt-3">{project.category}</p>
                <p className="story-body mt-6">{project.summary}</p>
                <p className="story-caption mt-6">{project.slogan}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href={`/projects/${project.slug}`} className="text-link">
                    detailed page
                  </Link>
                  {project.href ? (
                    <a href={project.href} target="_blank" rel="noreferrer" className="text-link">
                      official website
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
