import { Reveal } from './reveal'
import { Section, Kicker } from './ui'

const AGENTS = [
  { outcome: 'Acquisition', role: 'Greets and captures every inbound lead', code: 'AGT-01' },
  { outcome: 'Qualification', role: 'Scores intent and fit in conversation', code: 'AGT-02' },
  { outcome: 'Booking', role: 'Turns interest into a scheduled slot', code: 'AGT-03' },
  { outcome: 'Support', role: 'Resolves questions with full context', code: 'AGT-04' },
  { outcome: 'Retention', role: 'Re-engages the right customer at the right time', code: 'AGT-05' },
  { outcome: 'Revenue recovery', role: 'Rescues stalled deals and abandoned carts', code: 'AGT-06' },
]

export function Ecosystem() {
  return (
    <Section className="border-t border-border py-24 md:py-36">
      <Reveal>
        <Kicker index="08">The agent ecosystem</Kicker>
      </Reveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <Reveal delay={80}>
          <h2 className="max-w-[16ch] font-display text-[clamp(2rem,4.6vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-balance">
            Many agents. Many roles. One{' '}
            <span className="font-serif font-normal italic text-primary">mind.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Flowra&apos;s agents are organized around outcomes, not features — and they aren&apos;t
            separate products. They share one memory, one context, one intelligence layer.
          </p>
        </Reveal>
      </div>

      <Reveal delay={180} className="mt-16">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {AGENTS.map((a) => (
            <div key={a.code} className="group bg-card p-7 transition-colors hover:bg-secondary">
              <div className="flex items-center justify-between">
                <span className="flex h-9 items-center font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                  {a.code}
                </span>
                <span className="h-2 w-2 rounded-full bg-border transition-colors group-hover:bg-primary" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{a.outcome}</h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{a.role}</p>
            </div>
          ))}
        </div>

        {/* Connectors to the shared layer */}
        <div className="mt-px grid grid-cols-3 bg-border pt-px sm:grid-cols-6" aria-hidden>
          {AGENTS.map((_, i) => (
            <div key={i} className="flex justify-center bg-background py-4">
              <span className="h-6 w-px bg-gradient-to-b from-primary/60 to-transparent" />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 rounded-sm bg-foreground px-6 py-5 text-background">
          <span className="pulse-node inline-block h-2 w-2 rounded-full bg-primary" />
          <span className="font-mono text-[11px] uppercase tracking-[0.24em]">
            One Flowra intelligence layer
          </span>
        </div>
      </Reveal>
    </Section>
  )
}
