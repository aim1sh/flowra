import { Reveal } from './reveal'
import { Section, Kicker } from './ui'

const GROUPS = [
  { title: 'Channels', items: ['WhatsApp', 'Instagram', 'Messenger', 'Web chat', 'Email', 'Voice'] },
  { title: 'CRM & sales', items: ['HubSpot', 'Salesforce', 'Pipedrive', 'Zoho'] },
  { title: 'Commerce', items: ['Shopify', 'WooCommerce', 'Stripe', 'Custom checkout'] },
  { title: 'Scheduling & data', items: ['Google Calendar', 'Calendly', 'Sheets', 'Postgres'] },
]

export function Integrations() {
  return (
    <Section className="border-t border-border py-24 md:py-36">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <Reveal>
            <Kicker index="11">Integrations</Kicker>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-8 max-w-[16ch] font-display text-[clamp(2rem,4.6vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-balance">
              Connect what you already run. Flowra does the{' '}
              <span className="font-serif font-normal italic text-primary">thinking.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Your channels, CRM, store, calendar and data all feed the same layer — so context is
            never lost between the tools you already use.
          </p>
        </Reveal>
      </div>

      <Reveal delay={180} className="mt-16">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border lg:grid-cols-4">
          {GROUPS.map((g) => (
            <div key={g.title} className="bg-card p-6 md:p-7">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {g.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {g.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[15px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-px grid grid-cols-4 bg-border" aria-hidden>
          {GROUPS.map((_, i) => (
            <div key={i} className="flex justify-center bg-background py-4">
              <span className="h-6 w-px bg-gradient-to-b from-primary/60 to-transparent" />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 rounded-sm bg-foreground px-6 py-5 text-background">
          <span className="pulse-node inline-block h-2 w-2 rounded-full bg-primary" />
          <span className="font-mono text-[11px] uppercase tracking-[0.24em]">
            Feeds the Flowra intelligence layer
          </span>
        </div>
      </Reveal>
    </Section>
  )
}
