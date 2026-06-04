import Link from 'next/link'
import { SiteFooter } from './components/site-footer'
import { SiteHeader } from './components/site-header'
import { HomeMotion } from './components/home-motion'
import { WordReveal } from './components/text-reveal'
import { approachSections, projects, visionSections } from './site-content'

const projectSignals = [
  'small interest groups first',
  'free exploration before scale',
  'if the signal is real, it can become something much bigger',
]

export default function Home() {
  return (
    <main className="page-root home-page">
      <HomeMotion />

      <div aria-hidden="true" className="opening-screen">
        <div className="opening-sequence">
          <div className="opening-word">ANTIHEROISM</div>
          <div className="opening-logo-shell">
            <img src="/anti.svg" alt="" className="opening-logo" />
          </div>
        </div>
      </div>

      <div className="page-stage story-main">
        <SiteHeader current="/" />

        <section className="story-section story-scene story-scene-hero story-section-full" id="top">
          <div className="page-shell hero-home-grid">
            <div className="hero-home-copy">
              <p className="type-small section-kicker reveal-block">antiheroism</p>
              <WordReveal
                as="h1"
                className="type-display hero-title hero-title-home"
                text="We build things the world didn’t ask for."
              />

              <p className="type-body hero-copy hero-copy-home reveal-block delay-1">
                The core is simple: <span className="keyword-highlight">return attention to people</span>. We want more
                people to do what they actually want to do, become the main character in their own lives, and move
                toward freedom and happiness with more authorship.
              </p>
              <div className="hero-actions reveal-block delay-2">
                <a className="text-link type-body" href="#human">
                  keep scrolling
                </a>
                <Link className="text-link type-body" href="/vision">
                  full vision
                </Link>
              </div>
            </div>

            <div className="hero-brand-stage reveal-block delay-2">
              <div className="brand-grid-mark hero-logo-stage" aria-hidden="true">
                <img src="/anti.svg" alt="" className="brand-image" />
              </div>
            </div>
          </div>
        </section>

        <section
          className="story-section story-scene story-scene-vision story-section-full story-section-manifesto"
          id="human"
        >
          <div className="page-shell">
            <div className="manifesto-frame">
              <p className="type-small manifesto-masthead reveal-block">
                <span className="manifesto-masthead-mark">— 01 —</span>
                <span>Human thesis</span>
              </p>

              <WordReveal
                as="h2"
                className="type-display manifesto-title"
                text="Attention should return to people."
              />

              <p className="manifesto-lead reveal-block delay-1">
                We care about products that help a person do what they actually want, become more themselves, and move
                through life with more intention.
              </p>

              <div className="manifesto-body reveal-block delay-2">
                {visionSections.map((section, index) => (
                  <article key={section.title} className="manifesto-paragraph">
                    <span className="type-small manifesto-paragraph-index">0{index + 1}</span>
                    <div>
                      <p className="manifesto-paragraph-title">{section.title}</p>
                      <p className="manifesto-paragraph-body">{section.body}</p>
                    </div>
                  </article>
                ))}
              </div>

              <Link href="/vision" className="text-link type-body manifesto-cta reveal-block delay-3">
                read the full vision
              </Link>
            </div>
          </div>
        </section>

        <section className="story-section story-scene story-scene-approach story-section-full" id="approach">
          <div className="page-shell frame-layout">
            <div className="frame-copy reveal-block">
              <p className="type-small section-kicker">02 / process-based ai</p>
              <h2 className="type-display frame-title">Execution should compound across time.</h2>
              <p className="type-body frame-body">
                AI should help inside the current session, carry motion across sessions, and eventually expand what a
                person can explore beyond their own lived limits.
              </p>
            </div>
            <div className="frame-panel frame-panel-stack reveal-block delay-1">
              {approachSections.map((section, index) => (
                <article key={section.title} className={`frame-line ${index === 0 ? 'frame-line-active' : ''}`}>
                  <p className="type-small story-index">{section.title}</p>
                  <p className="type-body story-body">{section.body}</p>
                </article>
              ))}
              <Link href="/approach" className="text-link type-body">
                full approach
              </Link>
            </div>
          </div>
        </section>

        <section className="story-section story-scene story-scene-projects story-section-full" id="projects">
          <div className="page-shell frame-layout">
            <div className="frame-copy reveal-block">
              <p className="type-small section-kicker">03 / ventures</p>
              <h2 className="type-display frame-title">Small groups can become real worlds.</h2>
              <p className="type-body frame-body">
                We like products that begin inside a small interest group where people can explore freely, then turn
                into something stronger if the signal is real.
              </p>
            </div>
            <div className="frame-panel reveal-block delay-1">
              <div
                className="project-rail"
                role="list"
                aria-label="Featured ventures"
                data-count={projects.length}
              >
                {projects.map((project, index) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    role="listitem"
                    className="project-rail-card"
                  >
                    <div
                      className={`project-poster project-poster-${project.slug} project-rail-poster`}
                      aria-hidden="true"
                    >
                      <span className="project-short type-section">{project.shortName}</span>
                    </div>
                    <p className="type-small story-index project-rail-index">
                      0{index + 1} · {project.status}
                    </p>
                    <h3 className="type-section card-title">{project.name}</h3>
                    <p className="type-body story-caption project-rail-caption">{project.summary}</p>
                    <span className="type-small project-rail-cta" aria-hidden="true">
                      open →
                    </span>
                  </Link>
                ))}
              </div>
              <div className="signal-list">
                {projectSignals.map((signal, index) => (
                  <p key={signal} className={`type-small signal-line ${index === 0 ? 'signal-line-glow' : ''}`}>
                    {signal}
                  </p>
                ))}
              </div>
              <Link href="/projects" className="text-link type-body">
                see all projects
              </Link>
            </div>
          </div>
        </section>

        <section className="story-section story-scene story-scene-contact story-section-full" id="contact">
          <div className="page-shell frame-layout contact-frame">
            <div className="frame-copy reveal-block">
              <p className="type-small section-kicker">04 / contact</p>
              <h2 className="type-display frame-title">If the defaults feel broken, talk to us.</h2>
              <p className="type-body frame-body">
                Founders, collaborators, and people following a strange but real signal are all welcome here.
              </p>
            </div>
            <div className="frame-panel frame-panel-compact reveal-block delay-1">
              <p className="type-body story-body">
                Send context, what you are building, and why it matters now.
              </p>
              <a href="mailto:hello@antihero.freeqiye.com" className="contact-email type-section">
                hello@antihero.freeqiye.com
              </a>
              <div className="frame-links">
                <Link href="/vision" className="text-link type-body">
                  vision
                </Link>
                <Link href="/approach" className="text-link type-body">
                  approach
                </Link>
                <Link href="/projects" className="text-link type-body">
                  projects
                </Link>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  )
}
