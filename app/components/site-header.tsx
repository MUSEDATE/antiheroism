import Link from 'next/link'
import { siteLinks } from '../site-content'

type SiteHeaderProps = {
  current?: string
}

export function SiteHeader({ current }: SiteHeaderProps) {
  return (
    <nav className="story-nav">
      <div className="page-shell nav-shell">
        <Link href="/" className="brand-mark">
          antiheroism
        </Link>
        <div className="nav-links-row">
          {siteLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${current === link.href ? 'nav-link-active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <a className="nav-link" href="mailto:hello@antiheroism.com">
            contact
          </a>
        </div>
      </div>
    </nav>
  )
}
