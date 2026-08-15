import type { Metadata } from 'next'
import { Nav } from '@/components/flowra/nav'
import { Footer } from '@/components/flowra/footer'

export const metadata: Metadata = { title: 'See Flowra in action', description: 'Book a walkthrough of Flowra for your business.' }

export default function DemoPage() {
  return <><Nav /><main className="min-h-[70vh] px-6 py-32 md:px-10 lg:px-16"><div className="mx-auto max-w-[1240px]"><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Flowra / Demo</p><h1 className="mt-6 max-w-3xl font-display text-6xl font-semibold leading-[0.94] tracking-[-0.06em] md:text-8xl">See the system in motion.</h1><p className="mt-8 max-w-xl text-xl leading-relaxed text-muted-foreground">A demo booking flow can connect here when your calendar or sales workflow is ready.</p><a href="mailto:hello@flowra.ai" className="mt-9 inline-flex bg-foreground px-6 py-3.5 text-[15px] font-medium text-background">Request a walkthrough</a></div></main><Footer /></>
}
