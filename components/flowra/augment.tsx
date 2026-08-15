import { Reveal } from './reveal'
import { Section, Kicker } from './ui'

const FLOWRA = [
  'Replies to every inbound message in seconds',
  'Qualifies, routes and books automatically',
  'Chases follow-ups no one remembered',
  'Keeps records and data continuously in sync',
  'Surfaces why customers convert or drop off',
]

const HUMANS = [
  'Set the strategy and the guardrails',
  'Own pricing, offers and negotiations',
  'Step into high-value relationships',
  'Approve the decisions that carry risk',
  'Act on the intelligence Flowra surfaces',
]

export function Augment() {
  return (
    <Section className="border-t border-border py-24 md:py-36">
      <Reveal>
        <Kicker index="03">Augmentation, not replacement</Kicker>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="mt-8 max-w-[18ch] font-display text-[clamp(2rem,4.6vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-balance">
          AI runs the operation. <span className="font-serif font-normal italic text-primary">You</span> run
          the business.
        </h2>
      </Reveal>

      <div className="relative mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
        <div className="bg-card p-8 md:p-10">
          <div className="flex items-baseline justify-between">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
              Flowra handles
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              repetitive · operational
            </span>
          </div>
          <ul className="mt-8 space-y-5">
            {FLOWRA.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 60} className="flex gap-4">
                <span className="mt-1 font-mono text-[11px] text-primary">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-pretty leading-relaxed text-foreground">{item}</span>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="bg-foreground p-8 text-background md:p-10">
          <div className="flex items-baseline justify-between">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-background/70">
              Your team decides
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-background/40">
              judgment · control
            </span>
          </div>
          <ul className="mt-8 space-y-5">
            {HUMANS.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 60} className="flex gap-4">
                <span className="mt-1 font-mono text-[11px] text-background/50">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-pretty leading-relaxed text-background/90">{item}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
