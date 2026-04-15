export type NewsItem = {
  title: string
  category: string
  blurb: string
  href: string
  visual: string
}

export type Project = {
  slug: string
  name: string
  shortName: string
  status: string
  category: string
  hero: string
  summary: string
  paragraphs: string[]
  slogan: string
  href?: string
}

export const siteLinks = [
  { href: '/', label: 'home' },
  { href: '/vision', label: 'vision' },
  { href: '/projects', label: 'projects' },
]

export const projects: Project[] = [
  {
    slug: 'musedates',
    name: 'MuseDates',
    shortName: 'MD',
    status: 'Live venture',
    category: 'Connection / culture',
    hero: 'A dating product for people who want chemistry, intention, and taste to matter again.',
    summary:
      'MuseDates explores a more deliberate kind of connection product, one that treats identity, taste, and context as signals instead of noise.',
    slogan: 'Connection should feel authored, not algorithmically flattened.',
    paragraphs: [
      'MuseDates is being shaped for people who are tired of performing the same simplified self across every dating surface. The product thesis is that connection improves when the interface gives people better ways to signal who they are and what they are actually looking for.',
      'Instead of copying the default swipe-script, MuseDates is oriented around curation, cultural texture, and better prompts for self-expression. We want the product to feel like a stage for a fuller life, not a narrowing funnel.',
      'The long-term goal is simple: help people find connection without asking them to sand down the interesting parts of themselves first.',
    ],
  },
  {
    slug: 'nodikt',
    name: 'Nodikt',
    shortName: 'ND',
    status: 'In build',
    category: 'Identity / language',
    hero: 'A product about saying what you mean without surrendering your voice to the default format.',
    summary:
      'Nodikt is an in-progress exploration around identity, expression, and control over how ideas are shaped and shared.',
    slogan: 'Expression should become more precise, not more generic.',
    paragraphs: [
      'Nodikt starts from a frustration we see everywhere: modern tools make it easy to publish, but hard to remain legible as yourself. Language gets compressed, flattened, and optimized until it no longer sounds like the person who began it.',
      'The product direction is still evolving, but the core principle is clear: help people preserve intention while creating, editing, and communicating across digital spaces.',
      'What we are building is not just another utility. It is an attempt to return authorship, pacing, and clarity to people whose thinking deserves better than default templates.',
    ],
  },
]

export const newsItems: NewsItem[] = [
  {
    title: 'Press',
    category: 'Featured notes',
    blurb:
      'A place for short writeups, launches, and public artifacts that explain what Antiheroism is building and why.',
    href: '/vision',
    visual: 'press',
  },
  {
    title: 'News',
    category: 'Company updates',
    blurb:
      'Product movement, venture milestones, and the moments where a thesis becomes concrete enough to talk about in public.',
    href: '/projects',
    visual: 'news',
  },
  {
    title: 'Blogs',
    category: 'Working notes',
    blurb:
      'Essays about product taste, user behavior, founder conviction, and the awkward territory where interesting companies usually start.',
    href: '/vision',
    visual: 'blog',
  },
  {
    title: 'Research',
    category: 'Ongoing inquiry',
    blurb:
      'Longer-form thinking on connection, identity, and the neglected behaviors that mainstream products still fail to model well.',
    href: '/projects',
    visual: 'research',
  },
]

export const locations = [
  {
    city: 'San Francisco',
    note: 'Design, product, and founder conversations.',
  },
  {
    city: 'New York',
    note: 'Partnerships, operators, and cultural edge.',
  },
  {
    city: 'Remote',
    note: 'Built across time zones with a bias toward shipping.',
  },
]

export const hiringFocus = [
  'Designers who can make sharp opinions feel effortless in interface form.',
  'Product engineers who like thoughtful systems, not just feature throughput.',
  'Founders and operators who are building where the obvious map runs out.',
]

export const visionSections = [
  {
    title: 'Freedom is not abstract',
    body:
      'Antiheroism is ultimately about helping more people do what they actually want to do with their lives. We care about products that expand agency, sharpen self-knowledge, and make it easier to move through the world with intention.',
  },
  {
    title: 'The founder path matters',
    body:
      'We back founders who reject the obvious path and build products that should not work until they do. That usually means conviction before consensus, a clearer point of view, and a willingness to serve people the mainstream keeps overlooking.',
  },
  {
    title: 'Happiness needs structure',
    body:
      'Freedom and happiness are not delivered by slogans alone. They need products, systems, and communities that help people stay legible to themselves while building the life they want. That is the long arc we want Antiheroism to bend toward.',
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
