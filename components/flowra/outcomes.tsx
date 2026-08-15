import { Reveal } from './reveal'
import { Section, Kicker } from './ui'

const OUTCOMES = [
  { from: 'A "just browsing" message', to: 'A qualified opportunity in the pipeline' },
  { from: 'A late-night question', to: 'A booked appointment on the calendar' },
  { from: 'A hesitation before checkout', to: 'A recovered sale and a reason why' },
  { from: 'A quiet, inactive customer', to: 'A timed re-engagement that lands' },
]

export function Outcomes() {
  return (
    <Section className="border-t border-border py-24 md:py-36">
      <Reveal>
        <Kicker index="05">Conversations into outcomes</Kicker>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="mt-8 max-w-[20ch] font-display text-[clamp(2rem,4.6vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-balance">
          The point was never the chat. It was what the chat{' '}
          <span className="font-serif font-normal italic text-primary">becomes.</span>
        </h2>
      </Reveal>

      <div className="mt-16 divide-y divide-border border-y border-border">
        {OUTCOMES.map((o, i) => (
          <Reveal key={o.to} delay={i * 80}>
            <div className="grid items-center gap-4 py-7 md:grid-cols-[1fr_auto_1fr]">
              <span className="text-pretty text-lg text-muted-foreground md:text-xl">{o.from}</span>
              <span className="hidden font-mono text-xs uppercase tracking-[0.24em] text-primary md:inline">
                becomes →
              </span>
              <span className="text-pretty font-display text-xl font-medium leading-snug md:text-2xl">
                {o.to}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <p className="mt-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Flowra measures the whole arc — from first message to closed revenue — so growth stops
          being a guess and starts being something you can see and repeat.
        </p>
      </Reveal>
    </Section>
  )
}
