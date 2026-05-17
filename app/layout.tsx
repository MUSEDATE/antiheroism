import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Antiheroism | We build things the world did not ask for',
  description:
    'Antiheroism returns attention to people through freedom-centered products, process-based AI, and ventures built against the obvious path.',
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
    'process-based ai',
    'human-centered products',
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
      <body>
        <Script id="antiheroism-opening-gate" strategy="beforeInteractive">
          {`try{if(window.localStorage.getItem('antiheroism-opening-seen')==='1'){document.documentElement.dataset.openingSeen='true';}}catch(e){}`}
        </Script>
        {children}
      </body>
    </html>
  )
}
