import type { Metadata } from 'next'
import { Footer } from '@/components/flowra/footer'
import { Nav } from '@/components/flowra/nav'
import { PlatformPage } from '@/components/flowra/platform-page'

export const metadata: Metadata = {
  title: 'The Flowra Platform | Business Automation and Intelligence',
  description: 'See how Flowra connects customer conversations, AI agents, workflows, and business intelligence for growing businesses in Pakistan and beyond.',
  openGraph: {
    title: 'The Flowra Platform',
    description: 'One intelligent operating layer for customer conversations, actions, and outcomes.',
    type: 'website',
  },
}

export default function PlatformRoute() {
  return <><Nav /><PlatformPage /><Footer /></>
}
