import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteFooter } from '../../components/site-footer'
import { SiteHeader } from '../../components/site-header'
import { getProjectBySlug, projects } from '../../site-content'

type PageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: 'Project not found | Antiheroism',
    }
  }

  return {
    title: `${project.name} | Antiheroism`,
    description: project.summary,
  }
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="page-root interior-page">
      <SiteHeader current="/projects" />

      <section className="project-detail-hero">
        <div className="page-shell project-detail-grid">
          <div className={`project-detail-visual project-poster project-poster-${project.slug}`}>
            <div className="project-poster-content project-poster-detail">
              <span className="project-short">{project.shortName}</span>
              <span className="project-name-on-poster">{project.name}</span>
            </div>
          </div>

          <div className="project-detail-copy">
            <p className="section-kicker">{project.status}</p>
            <h1 className="interior-title mt-6">{project.name}</h1>
            <p className="venture-meta mt-4">{project.category}</p>
            <p className="story-lead mt-8">{project.hero}</p>
            <p className="story-body mt-8">{project.summary}</p>
          </div>
        </div>
      </section>

      <section className="project-detail-story">
        <div className="page-shell project-detail-story-grid">
          <div className={`project-detail-background project-poster project-poster-${project.slug}`}>
            <div className="project-overlay" />
          </div>

          <div className="project-scroll-copy">
            {project.paragraphs.map((paragraph, index) => (
              <article key={paragraph} className={`story-panel reveal-up ${index === 1 ? 'delay-1' : ''} ${index === 2 ? 'delay-2' : ''}`}>
                <p className="story-index">0{index + 1}</p>
                <p className="story-body mt-5">{paragraph}</p>
              </article>
            ))}

            <article className="story-panel reveal-up">
              <p className="section-kicker">current line</p>
              <p className="story-lead mt-5">{project.slogan}</p>
            </article>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
