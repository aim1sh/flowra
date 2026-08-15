import { Reveal } from './reveal'
import { Section, Kicker } from './ui'

const CASES = [
  {
    index: 'CS-01',
    sector: 'Real estate',
    problem:
      'Leads arrived across WhatsApp, web and portals, and the sales team kept missing follow-ups on the ones that mattered.',
    system:
      'Flowra unified every inbound conversation, qualified in real time, booked viewings, and chased follow-ups automatically.',
    result: '2.3× more qualified meetings booked, with materially less manual coordination.',
    learning:
      'Conversation data revealed which early buyer behaviors most predicted a close — and Flowra began prioritizing for them.',
  },
  {
    index: 'CS-02',
    sector: 'Multi-location clinics',
    problem:
      'Front desks were overwhelmed, after-hours inquiries went cold, and no-shows quietly drained the schedule.',
    system:
      'Flowra answered instantly across channels, booked into the right location, and ran human-feeling reminder sequences.',
    result: 'No-shows down 34%, with the calendar consistently fuller across all locations.',
    learning:
      'The timing and tone of reminders mattered more than frequency — Flowra tuned both from outcomes.',
  },
  {
    index: 'CS-03',
    sector: 'E-commerce',
    problem:
      'High-intent shoppers asked questions before buying, but answers came too late and carts were abandoned.',
    system:
      'Flowra handled pre-purchase questions, recommended products in context, and re-engaged hesitations with the reason they paused.',
    result: 'Recovered revenue rose 27% and average response time fell from minutes to seconds.',
    learning:
      'Most abandonment traced to two recurring objections — surfaced by Flowra, then fixed at the source.',
  },
]

export function Cases() {
  return (
    <Section id="cases" className="border-t border-border py-24 md:py-36">
      <Reveal>
        <Kicker index="12">Case studies</Kicker>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="mt-8 max-w-[16ch] font-display text-[clamp(2rem,4.6vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-balance">
          The same story, told in{' '}
          <span className="font-serif font-normal italic text-primary">outcomes.</span>
        </h2>
      </Reveal>

      <div className="mt-16 space-y-px overflow-hidden rounded-sm border border-border bg-border">
        {CASES.map((c) => (
          <Reveal key={c.index}>
            <article className="grid gap-8 bg-card p-8 md:grid-cols-[0.7fr_2.3fr] md:p-12">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{c.index}</div>
                <h3 className="mt-3 font-display text-2xl font-semibold leading-tight">{c.sector}</h3>
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                {(
                  [
                    ['Problem', c.problem],
                    ['System', c.system],
                    ['Result', c.result],
                    ['Learning', c.learning],
                  ] as const
                ).map(([label, body]) => (
                  <div key={label}>
                    <div
                      className={`font-mono text-[10px] uppercase tracking-[0.2em] ${
                        label === 'Result' ? 'text-primary' : 'text-muted-foreground'
                      }`}
                    >
                      {label}
                    </div>
                    <p
                      className={`mt-2 text-pretty leading-relaxed ${
                        label === 'Result'
                          ? 'font-display text-lg font-medium text-foreground'
                          : 'text-[15px] text-muted-foreground'
                      }`}
                    >
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
