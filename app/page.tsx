import { Nav } from '@/components/flowra/nav'
import { Hero } from '@/components/flowra/hero'
import { Fragmentation } from '@/components/flowra/fragmentation'
import { NervousSystem } from '@/components/flowra/nervous-system'
import { Augment } from '@/components/flowra/augment'
import { Conversation } from '@/components/flowra/conversation'
import { Outcomes } from '@/components/flowra/outcomes'
import { IntelligencePanel } from '@/components/flowra/intelligence-panel'
import { Investigation } from '@/components/flowra/investigation'
import { Ecosystem } from '@/components/flowra/ecosystem'
import { FeedbackLoop } from '@/components/flowra/feedback-loop'
import { Industries } from '@/components/flowra/industries'
import { Integrations } from '@/components/flowra/integrations'
import { Cases } from '@/components/flowra/cases'
import { CTA } from '@/components/flowra/cta'
import { Footer } from '@/components/flowra/footer'

export default function Page() {
  return (
    <div className="paper-grain min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Fragmentation />
        <NervousSystem />
        <Augment />
        <Conversation />
        <Outcomes />
        <IntelligencePanel />
        <Investigation />
        <Ecosystem />
        <FeedbackLoop />
        <Industries />
        <Integrations />
        <Cases />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
