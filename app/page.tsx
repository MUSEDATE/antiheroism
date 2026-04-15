import Link from 'next/link'
import { SiteFooter } from './components/site-footer'
import { SiteHeader } from './components/site-header'
import { HomeMotion } from './components/home-motion'
import { hiringFocus, locations, projects } from './site-content'

const beliefs = [
  {
    title: 'Expand agency',
    body: 'We care about products that help people do what they actually want to do — sharpen self-knowledge, move with intention, and resist the default path.',
  },
  {
    title: 'Conviction before consensus',
    body: 'We back founders with a sharp point of view, building for people the mainstream keeps overlooking. The best products shouldn\'t work — until they do.',
  },
  {
    title: 'Structure for freedom',
    body: 'Freedom needs more than slogans. It needs products, systems, and communities that help people stay legible to themselves while building the life they want.',
  },
]

export default function Home() {
  return (
    <main className="page-root home-page">
      <HomeMotion />

      <div aria-hidden="true" className="opening-screen">
        <div className="opening-sequence">
          <div className="opening-word">ANTIHEROISM</div>
          <div className="opening-logo-shell">
            <img src="/antiheroism-mark.jpeg" alt="" className="opening-logo" />
          </div>
        </div>
      </div>

      <div className="page-stage story-main">
        <SiteHeader current="/" homeAnchors />

        <section className="story-section story-scene story-scene-hero" id="top">
          <div className="page-shell hero-home-grid">
            <div className="hero-home-copy">
              <h1 className="type-display hero-title hero-title-home reveal-block">
                We build things the world didn&apos;t ask for.
              </h1>
              <p className="type-body hero-copy hero-copy-home reveal-block delay-1">
                Antiheroism is a venture studio for founders who{' '}
                <span className="keyword-highlight">reject the obvious path</span> and build products that
                expand agency, sharpen identity, and make freedom more concrete.
              </p>
              <div className="hero-actions reveal-block delay-2">
                <a className="text-link type-body" href="#vision">
                  our beliefs
                </a>
                <a className="text-link type-body" href="#projects">
                  current ventures
                </a>
              </div>
            </div>

            <div className="hero-brand-stage reveal-block delay-2">
              <div className="brand-grid-mark hero-logo-stage" aria-hidden="true">
                <img src="/antiheroism-mark.jpeg" alt="" className="brand-image" />
              </div>
            </div>
          </div>
        </section>

        <section className="story-section story-scene story-scene-vision" id="vision">
          <div className="page-shell">
            <div className="beliefs-header reveal-block">
              <p className="type-small section-kicker">what we believe</p>
              <h2 className="type-section section-title section-title-wide">
                Products should help people become more themselves, not more like everyone else.
              </h2>
            </div>
            <div className="beliefs-grid">
              {beliefs.map((item, index) => (
                <article key={item.title} className={`beliefs-card reveal-block delay-${index + 1}`}>
                  <p className="type-small story-index">{item.title}</p>
                  <p className="type-body story-body">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="story-section story-scene story-scene-projects" id="projects">
          <div className="page-shell">
            <div className="projects-dense-header reveal-block">
              <p className="type-small section-kicker">ventures</p>
              <h2 className="type-section section-title section-title-wide">
                What we&apos;re building right now.
              </h2>
            </div>

            <div className="project-grid-dense">
              {projects.map((project, index) => (
                <article key={project.slug} className={`project-dense-card reveal-block delay-${index + 1}`}>
                  <div className={`project-poster project-poster-${project.slug}`}>
                    <div className="project-poster-content">
                      <span className="type-display project-short">{project.shortName}</span>
                      <span className="type-small project-name-on-poster">{project.name}</span>
                    </div>
                  </div>
                  <div className="project-feature-copy">
                    <p className="type-small story-index">{project.status} · {project.category}</p>
                    <h3 className="type-section card-title">{project.name}</h3>
                    <p className="type-body story-body">{project.summary}</p>
                    <p className="type-body story-caption">
                      <span className="keyword-highlight">{project.slogan}</span>
                    </p>
                    <Link href={`/projects/${project.slug}`} className="text-link type-body">
                      learn more
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="story-section story-scene story-scene-contact" id="contact">
          <div className="page-shell contact-layout">
            <div className="reveal-block">
              <p className="type-small section-kicker">get in touch</p>
              <h2 className="type-section section-title section-title-wide">
                We&apos;re open to founders, collaborators, and people who know the defaults are broken.
              </h2>
              <div className="contact-points">
                {hiringFocus.map((item, index) => (
                  <div key={item} className={`bullet-row ${index === 0 ? '' : 'bullet-spaced'}`}>
                    <span className="bullet-dot" />
                    <p className="type-body story-caption">{item}</p>
                  </div>
                ))}
              </div>
              <a href="mailto:hello@antiheroism.com" className="contact-email type-section">
                hello@antiheroism.com
              </a>
            </div>

            <div className="locations-col reveal-block delay-1">
              <p className="type-small section-kicker">where we are</p>
              <div className="locations-stack">
                {locations.map((location) => (
                  <article key={location.city} className="location-card">
                    <p className="type-body location-city">{location.city}</p>
                    <p className="type-body story-caption">{location.note}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  )
}
