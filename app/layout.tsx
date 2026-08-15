import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, Instrument_Serif, Geist_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Flowra — The intelligence layer for how your business operates',
  description:
    'Flowra is an AI-powered business automation and intelligence platform. It connects customer conversations, AI agents, workflows, business data, and revenue into one intelligent system that gets smarter with every interaction.',
  keywords: [
    'AI business automation',
    'business intelligence platform',
    'AI agents for business',
    'conversation intelligence',
    'customer journey automation',
    'workflow automation',
    'WhatsApp business automation',
    'AI analyst',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Flowra — The intelligence layer for how your business operates',
    description:
      'Connect conversations, AI agents, workflows, and revenue into one intelligent system that gets smarter with every interaction.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f2efe6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable} ${geistMono.variable} bg-background`}
    >
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
