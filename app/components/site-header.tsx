import Link from 'next/link'
import { siteLinks } from '../site-content'

type SiteHeaderProps = {
  current?: string
  homeAnchors?: boolean
}

const anchorLinks = [
  { href: '#vision', label: 'vision' },
  { href: '#projects', label: 'projects' },
  { href: '#contact', label: 'contact' },
]

export function SiteHeader({ current, homeAnchors = false }: SiteHeaderProps) {
  return (
    <nav className="story-nav">
      <div className="page-shell nav-shell">
        <Link href="/" className="brand-mark">
          antiheroism
        </Link>
        <div className="nav-links-row">
          {homeAnchors
            ? anchorLinks.map((link) => (
                <a key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </a>
              ))
            : siteLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${current === link.href ? 'nav-link-active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
          {!homeAnchors ? (
            <a className="nav-link" href="mailto:hello@antiheroism.com">
              contact
            </a>
          ) : null}
        </div>
      </div>
    </nav>
  )
}
