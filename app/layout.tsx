import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Antiheroism | We build things the world did not ask for',
  description:
    'Antiheroism backs founders who reject the obvious path and build products that should not work until they do.',
  metadataBase: new URL('https://antiheroism.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Antiheroism',
    description: 'We build things the world did not ask for.',
    url: 'https://antiheroism.com',
    siteName: 'Antiheroism',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antiheroism',
    description: 'We build things the world did not ask for.',
  },
  keywords: [
    'Antiheroism',
    'venture studio',
    'internet products',
    'founder studio',
    'musedates',
    'nodikt',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
