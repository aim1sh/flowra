import { Reveal } from './reveal'
import { Section, Kicker } from './ui'

const METRICS = [
  { label: 'Conversion rate', value: '31.4', unit: '%', delta: '+6.2', bar: 62 },
  { label: 'Median first response', value: '8', unit: 's', delta: '-4m 51s', bar: 92 },
  { label: 'Qualified → booked', value: '68', unit: '%', delta: '+11', bar: 68 },
  { label: 'Drop-off before pricing', value: '19', unit: '%', delta: '-7', bar: 34 },
]

const SIGNALS = [
  { tag: 'Top intent', value: 'Book a viewing', weight: 'strong' },
  { tag: 'Rising objection', value: 'Financing options unclear', weight: 'watch' },
  { tag: 'Requested', value: 'Weekend availability', weight: 'strong' },
  { tag: 'Competitor named', value: '3 mentions this week', weight: 'watch' },
  { tag: 'Sentiment', value: 'Positive · trending up', weight: 'good' },
]

export function IntelligencePanel() {
  return (
    <Section className="surface-ink paper-grain border-t border-border py-24 md:py-36">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-end">
        <div>
          <Reveal>
            <Kicker index="06" tone="invert">
              Conversation intelligence
            </Kicker>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-8 max-w-[16ch] font-display text-[clamp(2rem,4.6vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-balance text-paper">
              Read your business the way it actually{' '}
              <span className="font-serif font-normal italic text-primary/90">speaks.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <p className="text-pretty text-lg leading-relaxed text-paper/60">
            Flowra turns thousands of messages into structured signal — what customers want, what
            stops them, and what quietly moves the number.
          </p>
        </Reveal>
      </div>

      {/* Instrument */}
      <Reveal delay={180} className="mt-16">
        <div className="overflow-hidden rounded-sm border border-paper/15 bg-paper/[0.03]">
          <div className="flex items-center justify-between border-b border-paper/12 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/45">
            <span>Signal · last 30 days</span>
            <span className="flex items-center gap-2">
              <span className="pulse-node inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              live
            </span>
          </div>

          <div className="grid gap-px bg-paper/12 md:grid-cols-2">
            {/* Metrics */}
            <div className="bg-ink p-6 md:p-8">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">Measured</h3>
              <div className="mt-6 space-y-6">
                {METRICS.map((m) => (
                  <div key={m.label}>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm text-paper/70">{m.label}</span>
                      <span className="font-mono text-xs text-primary">{m.delta}</span>
                    </div>
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className="font-display text-3xl font-semibold text-paper">{m.value}</span>
                      <span className="font-mono text-xs text-paper/50">{m.unit}</span>
                    </div>
                    <div className="mt-2 h-px w-full bg-paper/12">
                      <div className="h-px bg-primary" style={{ width: `${m.bar}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Extracted signals */}
            <div className="bg-ink p-6 md:p-8">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">
                Extracted signals
              </h3>
              <div className="mt-6 divide-y divide-paper/10">
                {SIGNALS.map((s) => (
                  <div key={s.tag} className="flex items-center gap-4 py-4">
                    <span
                      className={`inline-block h-1.5 w-1.5 rounded-full ${
                        s.weight === 'watch'
                          ? 'bg-clay'
                          : s.weight === 'good'
                            ? 'bg-primary'
                            : 'bg-paper/60'
                      }`}
                    />
                    <span className="w-32 shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-paper/45">
                      {s.tag}
                    </span>
                    <span className="text-[15px] text-paper">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
