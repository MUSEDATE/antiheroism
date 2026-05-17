import { Fragment, type CSSProperties, type ReactNode } from 'react'

type Tag = 'h1' | 'h2' | 'h3' | 'p' | 'span'

type WordRevealProps = {
  text: string
  as?: Tag
  className?: string
  startIndex?: number
}

export function WordReveal({ text, as: Tag = 'span', className = '', startIndex = 0 }: WordRevealProps) {
  const words = text.split(' ')
  const content: ReactNode[] = []
  words.forEach((word, i) => {
    content.push(
      <span key={`w-${i}`} className="word" style={{ ['--i' as string]: i + startIndex } as CSSProperties}>
        <span className="word-inner">{word}</span>
      </span>
    )
    if (i < words.length - 1) {
      content.push(<Fragment key={`s-${i}`}> </Fragment>)
    }
  })
  return <Tag className={`reveal-words ${className}`.trim()}>{content}</Tag>
}
