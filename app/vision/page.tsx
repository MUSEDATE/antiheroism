import Link from 'next/link'
import { SiteFooter } from '../components/site-footer'
import { SiteHeader } from '../components/site-header'
import { visionSections } from '../site-content'

export default function VisionPage() {
  return (
    <main className="page-root interior-page">
      <SiteHeader current="/vision" />

      <section className="interior-hero">
        <div className="page-shell interior-hero-shell">
          <p className="section-kicker">antiheroism vision</p>
          <h1 className="interior-title mt-6">A studio trying to make freedom, self-authorship, and happiness more buildable.</h1>
          <p className="interior-copy mt-8">
            This page is the place where Antiheroism&apos;s core vision gets written down in full. The current version is
            intentionally concise, but the structure is ready for a longer manifesto as the language matures.
          </p>
        </div>
      </section>

      <section className="interior-sections">
        <div className="page-shell interior-stack">
          {visionSections.map((section, index) => (
            <article key={section.title} className={`interior-block reveal-up ${index === 1 ? 'delay-1' : ''} ${index === 2 ? 'delay-2' : ''}`}>
              <p className="story-index">0{index + 1}</p>
              <h2 className="section-title mt-4">{section.title}</h2>
              <p className="story-body mt-6">{section.body}</p>
            </article>
          ))}

          <article className="interior-block reveal-up">
            <p className="section-kicker">writing in progress</p>
            <p className="story-body mt-4">
              The detailed statement is still being written and discussed internally. This page is meant to grow into
              the definitive articulation of what Antiheroism wants to change and what kinds of products belong inside
              that mission.
            </p>
            <Link href="/projects" className="text-link mt-8">
              explore projects next
            </Link>
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
