import { Reveal } from './reveal'
import { Section, Kicker } from './ui'

const LOOP = [
  { n: '01', label: 'Interactions', sub: 'Conversations & actions happen', pos: 'top' },
  { n: '02', label: 'Outcomes', sub: 'Results are measured end-to-end', pos: 'right' },
  { n: '03', label: 'Patterns', sub: 'Flowra finds what drives results', pos: 'bottom' },
  { n: '04', label: 'Optimization', sub: 'Automation improves — you approve', pos: 'left' },
]

const posClass: Record<string, string> = {
  top: 'left-1/2 top-0 -translate-x-1/2 -translate-y-1/2',
  right: 'right-0 top-1/2 -translate-y-1/2 translate-x-1/2',
  bottom: 'left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2',
  left: 'left-0 top-1/2 -translate-y-1/2 -translate-x-1/2',
}

export function FeedbackLoop() {
  return (
    <Section className="surface-ink paper-grain border-t border-border py-24 md:py-36">
      <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <Reveal>
            <Kicker index="09" tone="invert">
              Continuous intelligence
            </Kicker>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-8 max-w-[15ch] font-display text-[clamp(2rem,4.6vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-balance text-paper">
              The only software that&apos;s worth more{' '}
              <span className="font-serif font-normal italic text-primary/90">tomorrow.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-paper/60">
              Every interaction and outcome feeds back in. Flowra continuously analyzes what happens,
              identifies the patterns behind conversions and drop-off, and proposes sharper
              automation — always under your review, never on autopilot.
            </p>
          </Reveal>
        </div>

        {/* Loop diagram */}
        <Reveal delay={180}>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full text-primary/70" aria-hidden>
              <circle cx="50" cy="50" r="38" fill="none" stroke="var(--hairline)" strokeOpacity="0.18" strokeWidth="0.5" />
              <circle
                cx="50"
                cy="50"
                r="38"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.7"
                strokeDasharray="4 6"
                className="flow-line"
              />
            </svg>

            <div className="absolute inset-[18%] flex flex-col items-center justify-center rounded-full border border-paper/12 bg-paper/[0.04] text-center">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/45">Every day</span>
              <span className="mt-1 font-display text-lg font-semibold text-paper">Sharper by design</span>
            </div>

            {LOOP.map((node) => (
              <div
                key={node.n}
                className={`absolute w-36 ${posClass[node.pos]}`}
              >
                <div className="flex flex-col items-center gap-1 rounded-sm border border-paper/15 bg-ink px-3 py-3 text-center">
                  <span className="font-mono text-[10px] text-primary">{node.n}</span>
                  <span className="font-display text-sm font-medium text-paper">{node.label}</span>
                  <span className="text-[11px] leading-tight text-paper/50">{node.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
