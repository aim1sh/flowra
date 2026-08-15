import { MessagesSquare, Database, Activity, Bot, Workflow, Banknote } from 'lucide-react'
import { Reveal } from './reveal'
import { Section, Kicker } from './ui'

const INPUTS = [
  { icon: MessagesSquare, label: 'Conversations', sub: 'across every channel' },
  { icon: Database, label: 'Business data', sub: 'CRM · bookings · orders' },
  { icon: Activity, label: 'Behavior signals', sub: 'intent · drop-off · timing' },
]

const OUTPUTS = [
  { icon: Bot, label: 'AI agents', sub: 'that act with context' },
  { icon: Workflow, label: 'Workflows', sub: 'triggered automatically' },
  { icon: Banknote, label: 'Revenue actions', sub: 'follow-up · close · retain' },
]

export function NervousSystem() {
  return (
    <Section className="surface-ink paper-grain border-t border-border py-24 md:py-36">
      <Reveal>
        <Kicker index="02" tone="invert">
          The system
        </Kicker>
      </Reveal>

      <div className="mt-8 max-w-3xl">
        <Reveal delay={80}>
          <h2 className="font-display text-[clamp(2rem,4.6vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-balance text-paper">
            Not a tool you check. A nervous system your business{' '}
            <span className="font-serif font-normal italic text-primary/90">runs on.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-paper/60">
            Signals flow in from everywhere your customers already are. Flowra reads them, decides
            what matters, and orchestrates the right action — then feeds the outcome back in.
          </p>
        </Reveal>
      </div>

      {/* Nervous-system diagram */}
      <Reveal delay={200} className="mt-16">
        <div className="grid gap-6">
          {/* Inputs */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {INPUTS.map((n) => (
              <NodeCard key={n.label} {...n} tone="in" />
            ))}
          </div>

          {/* Connectors in */}
          <Connectors direction="down" />

          {/* Central intelligence band */}
          <div className="relative overflow-hidden rounded-sm border border-paper/15 bg-paper/[0.04] px-6 py-8 text-center">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary/90">
              Flowra intelligence layer
            </div>
            <div className="mt-3 font-display text-2xl font-semibold text-paper md:text-3xl">
              understands · decides · orchestrates
            </div>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-paper/55">
              One reasoning core with memory of how your specific business operates.
            </p>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            />
          </div>

          {/* Connectors out */}
          <Connectors direction="up" />

          {/* Outputs */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {OUTPUTS.map((n) => (
              <NodeCard key={n.label} {...n} tone="out" />
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

function NodeCard({
  icon: Icon,
  label,
  sub,
  tone,
}: {
  icon: typeof MessagesSquare
  label: string
  sub: string
  tone: 'in' | 'out'
}) {
  return (
    <div className="flex items-center gap-4 border border-paper/15 bg-paper/[0.03] px-5 py-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-paper/20 text-paper">
        <Icon className="h-4.5 w-4.5" strokeWidth={1.5} />
      </span>
      <div>
        <div className="font-display text-sm font-medium text-paper">{label}</div>
        <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/45">{sub}</div>
      </div>
      <span
        className={`ml-auto font-mono text-[10px] uppercase tracking-[0.16em] ${
          tone === 'in' ? 'text-primary/80' : 'text-clay/90'
        }`}
      >
        {tone === 'in' ? 'in' : 'out'}
      </span>
    </div>
  )
}

function Connectors({ direction }: { direction: 'up' | 'down' }) {
  return (
    <div className="grid grid-cols-3" aria-hidden>
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex justify-center">
          <span
            className={`h-8 w-px ${
              direction === 'down'
                ? 'bg-gradient-to-b from-primary/70 to-primary/10'
                : 'bg-gradient-to-t from-clay/70 to-clay/10'
            }`}
          />
        </div>
      ))}
    </div>
  )
}
