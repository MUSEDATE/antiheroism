import Link from 'next/link'
import { HomeMotion } from '../components/home-motion'
import { SiteFooter } from '../components/site-footer'
import { SiteHeader } from '../components/site-header'
import { visionSections } from '../site-content'

export default function VisionPage() {
  return (
    <main className="page-root interior-page">
      <HomeMotion />
      <SiteHeader current="/vision" />

      <section className="interior-hero">
        <div className="page-shell interior-hero-shell">
          <p className="section-kicker">vision</p>
          <h1 className="interior-title mt-6">Return attention to people.</h1>
          <p className="interior-copy mt-8">
            Antiheroism exists to help more people do what they actually want to do, become the main character in their
            own lives, and move toward freedom and happiness with more real authorship.
          </p>
        </div>
      </section>

      <section className="interior-sections">
        <div className="page-shell interior-stack">
          {visionSections.map((section, index) => (
            <article key={section.title} className={`interior-block reveal-block ${index === 1 ? 'delay-1' : ''} ${index === 2 ? 'delay-2' : ''}`}>
              <p className="story-index">0{index + 1}</p>
              <h2 className="section-title mt-4">{section.title}</h2>
              <p className="story-body mt-6">{section.body}</p>
            </article>
          ))}

          <article className="interior-block reveal-block">
            <p className="section-kicker">what this means in practice</p>
            <p className="story-body mt-4">
              We are interested in products, systems, and communities that give people more room to act on their own
              taste, curiosity, and intention. This is the human reason underneath everything else on the site.
            </p>
            <Link href="/approach" className="text-link mt-8">
              read the approach next
            </Link>
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
