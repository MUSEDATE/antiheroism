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
  { href: '/approach', label: 'approach' },
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
    title: 'Return attention to people',
    body:
      'The core idea is simple: attention should return to people. We want to help more people do what they actually want to do, instead of getting pulled forever into systems that flatten desire, curiosity, and direction.',
  },
  {
    title: 'Become the main character',
    body:
      'We care about products that help a person become their own protagonist again: more self-directed, more legible to themselves, and more capable of moving toward freedom and happiness with intention.',
  },
  {
    title: 'Small groups can become real worlds',
    body:
      'Interesting things often start inside small interest groups where people can explore freely. If the signal is real, those spaces can grow into something more serious: a stronger product, a new company, or a new category of behavior.',
  },
]

export const approachSections = [
  {
    title: 'Current-session execution',
    body:
      'The first layer of process-based AI is helping someone finish what is in front of them right now. It should reduce friction inside the current working session, not just produce a static answer and disappear.',
  },
  {
    title: 'Cross-session execution',
    body:
      'The second layer carries work across sessions so time can be released instead of repeatedly re-spent. Context, intention, and unfinished motion should survive long enough to compound.',
  },
  {
    title: 'Beyond lived experience',
    body:
      'The third layer expands what a person can explore beyond what they could individually experience in one lifetime. AI should widen the reachable space of action, simulation, and understanding.',
  },
]

export const approachFramework = [
  {
    title: 'Source',
    body:
      'Where did the input come from, whose intention does it represent, and what human context gave it meaning in the first place?',
  },
  {
    title: 'Cost',
    body:
      'What time, attention, and coordination does the system consume or release? Good tools should make real life lighter, not just make output faster.',
  },
  {
    title: 'Outcome',
    body:
      'What becomes newly possible for the person on the other side? The point is not just efficiency. The point is more freedom, more authorship, and more real movement.',
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
