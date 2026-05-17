import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { HomeMotion } from '../../components/home-motion'
import { SiteFooter } from '../../components/site-footer'
import { SiteHeader } from '../../components/site-header'
import { WordReveal } from '../../components/text-reveal'
import { getProjectBySlug, projects } from '../../site-content'

type PageProps = {
  params: {
    slug: string
  }
}

const chapterLabels = ['Premise', 'Direction', 'Horizon']

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

  const projectIndex = projects.findIndex((p) => p.slug === project.slug)
  const nextProject = projects[(projectIndex + 1) % projects.length]
  const isOnly = projects.length <= 1

  return (
    <main className="page-root interior-page project-detail-page">
      <HomeMotion />
      <SiteHeader current="/projects" />

      <section className="project-detail-hero">
        <div className="page-shell project-detail-hero-grid">
          <div className="project-detail-hero-copy reveal-block">
            <Link href="/projects" className="project-detail-back type-small">
              ← all ventures
            </Link>

            <p className="type-small section-kicker project-detail-status">{project.status}</p>
            <WordReveal as="h1" className="type-display project-detail-title" text={project.name} />
            <p className="type-body project-detail-lead">{project.hero}</p>

            <dl className="project-detail-facts type-small">
              <div className="project-detail-fact">
                <dt>category</dt>
                <dd>{project.category}</dd>
              </div>
              <div className="project-detail-fact">
                <dt>stage</dt>
                <dd>{project.status}</dd>
              </div>
              <div className="project-detail-fact">
                <dt>codename</dt>
                <dd>{project.shortName}</dd>
              </div>
            </dl>
          </div>

          <div className="project-detail-hero-visual reveal-block delay-1" aria-hidden="true">
            <div className={`project-poster project-poster-${project.slug} project-poster-hero`}>
              <div className="project-poster-hero-mark">
                <span className="project-short type-display">{project.shortName}</span>
              </div>
              <div className="project-poster-hero-wordmark type-small">{project.name}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-detail-pull">
        <div className="page-shell">
          <blockquote className="project-detail-quote reveal-block">
            <span className="type-small section-kicker">studio line</span>
            <p className="type-section project-detail-quote-text">{project.slogan}</p>
          </blockquote>
        </div>
      </section>

      <section className="project-detail-chapters">
        <div className="page-shell project-detail-chapters-grid">
          <aside className="project-detail-rail">
            <p className="type-small section-kicker">contents</p>
            <ol className="project-detail-toc">
              {project.paragraphs.map((_, index) => (
                <li key={index} className="type-small">
                  <a href={`#chapter-${index + 1}`}>
                    <span className="project-detail-toc-num">0{index + 1}</span>
                    <span className="project-detail-toc-label">{chapterLabels[index] ?? `Note ${index + 1}`}</span>
                  </a>
                </li>
              ))}
            </ol>

            <div className="project-detail-rail-block">
              <p className="type-small section-kicker">summary</p>
              <p className="type-body story-body">{project.summary}</p>
            </div>

            {project.href ? (
              <a href={project.href} target="_blank" rel="noreferrer" className="text-link type-body">
                visit {project.name}
              </a>
            ) : null}
          </aside>

          <div className="project-detail-chapters-body">
            {project.paragraphs.map((paragraph, index) => (
              <article
                key={paragraph}
                id={`chapter-${index + 1}`}
                className={`project-detail-chapter reveal-block ${index === 1 ? 'delay-1' : ''} ${
                  index === 2 ? 'delay-2' : ''
                }`}
              >
                <header className="project-detail-chapter-head">
                  <span className="type-small project-detail-chapter-index">0{index + 1}</span>
                  <span className="type-small project-detail-chapter-label">
                    {chapterLabels[index] ?? 'Note'}
                  </span>
                </header>
                <p className="type-body project-detail-chapter-body">{paragraph}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="project-detail-outro">
        <div className="page-shell project-detail-outro-grid">
          <div className="project-detail-outro-copy reveal-block">
            <p className="type-small section-kicker">talk to us</p>
            <h2 className="type-section project-detail-outro-title">
              If you’re building toward the same shape, we want to hear about it.
            </h2>
            <a href="mailto:hello@antiheroism.com" className="text-link type-body">
              hello@antiheroism.com
            </a>
          </div>

          {!isOnly ? (
            <Link href={`/projects/${nextProject.slug}`} className="project-detail-next reveal-block delay-1">
              <span className="type-small section-kicker">next venture</span>
              <span className="type-section project-detail-next-name">{nextProject.name}</span>
              <span className="type-small project-detail-next-meta">
                {nextProject.status} · {nextProject.category}
              </span>
              <span className="type-small project-detail-next-cta" aria-hidden="true">
                continue →
              </span>
            </Link>
          ) : null}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
