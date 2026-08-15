import { MessageSquare, Database, CalendarClock, BellRing, Table2, Search } from 'lucide-react'
import { Reveal } from './reveal'
import { Section, Kicker } from './ui'

const FRAGMENTS = [
  { icon: MessageSquare, label: 'Customer messages', where: 'live in the inbox', offset: 'sm:translate-x-0' },
  { icon: Database, label: 'CRM records', where: 'live somewhere else', offset: 'sm:translate-x-10' },
  { icon: CalendarClock, label: 'Bookings', where: 'live in another tool', offset: 'sm:translate-x-4' },
  { icon: BellRing, label: 'Follow-ups', where: 'depend on memory', offset: 'sm:translate-x-14' },
  { icon: Table2, label: 'Sales data', where: 'sits in spreadsheets', offset: 'sm:translate-x-6' },
  { icon: Search, label: 'Customer intent', where: 'is buried in chats', offset: 'sm:translate-x-12' },
]

export function Fragmentation() {
  return (
    <Section id="system" className="border-t border-border py-24 md:py-36">
      <Reveal>
        <Kicker index="01">The problem</Kicker>
      </Reveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <Reveal delay={80}>
          <h2 className="max-w-[15ch] font-display text-[clamp(2rem,4.6vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-balance">
            Your business already knows everything. It just can&apos;t{' '}
            <span className="font-serif font-normal italic text-primary">see itself.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Every conversation, booking and sale generates signal. But it&apos;s scattered across
            disconnected tools — so no one, and nothing, ever gets the full picture.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1fr_auto_0.8fr]">
        {/* Fragments */}
        <div className="space-y-3">
          {FRAGMENTS.map((f, i) => {
            const Icon = f.icon
            return (
              <Reveal key={f.label} delay={i * 70} className={`transition-transform ${f.offset}`}>
                <div className="flex items-center gap-4 border border-border bg-card px-4 py-3.5">
                  <Icon className="h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.5} />
                  <span className="font-display text-sm font-medium">{f.label}</span>
                  <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {f.where}
                  </span>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Converging arrows */}
        <Reveal delay={200} className="flex items-center justify-center">
          <svg width="120" height="180" viewBox="0 0 120 180" className="hidden text-primary lg:block" aria-hidden>
            {[20, 55, 75, 105, 125, 160].map((y, i) => (
              <path
                key={i}
                d={`M0 ${y} C 60 ${y}, 60 90, 118 90`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.1"
                className="flow-line"
                opacity={0.55}
              />
            ))}
            <circle cx="118" cy="90" r="4" fill="currentColor" className="pulse-node" />
          </svg>
        </Reveal>

        {/* Convergence node */}
        <Reveal delay={260}>
          <div className="surface-ink paper-grain relative flex flex-col justify-between gap-8 rounded-sm p-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-paper/50">
              Converged
            </div>
            <div>
              <div className="font-display text-2xl font-semibold tracking-[0.16em] text-paper">FLOWRA</div>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-paper/65">
                One layer where conversations, data, bookings and revenue finally live together —
                and read each other.
              </p>
            </div>
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/70">
              <span className="pulse-node inline-block h-2 w-2 rounded-full bg-primary" />
              one connected system
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
