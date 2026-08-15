import { Check, CheckCheck } from 'lucide-react'
import { Reveal } from './reveal'
import { Section, Kicker } from './ui'

type Msg = { from: 'customer' | 'ai'; text: string; time: string }

const THREAD: Msg[] = [
  { from: 'customer', text: 'Hi, is the 2-bed apartment in Riverside still available?', time: '09:41' },
  { from: 'ai', text: 'It is. It&apos;s a 2-bed, 2-bath at 84m² for 1.4M, move-in ready. Are you looking to buy or rent?', time: '09:41' },
  { from: 'customer', text: 'Buy. Ideally something I could see this week.', time: '09:42' },
  { from: 'ai', text: 'Great — I can arrange a viewing. Would Thursday 5pm or Saturday 11am suit you better?', time: '09:42' },
  { from: 'customer', text: 'Saturday works.', time: '09:43' },
  { from: 'ai', text: 'Booked for Saturday 11am. I&apos;ll send a reminder and share two similar listings you may like. Anything else you need?', time: '09:43' },
]

const LEDGER = [
  { tag: 'Intent', value: 'High — ready to buy, near-term' },
  { tag: 'CRM', value: 'Lead created · qualified · source: WhatsApp' },
  { tag: 'Action', value: 'Viewing booked · Sat 11:00' },
  { tag: 'Workflow', value: 'Reminder + 2 matched listings queued' },
]

export function Conversation() {
  return (
    <Section id="intelligence" className="border-t border-border py-24 md:py-36">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-end">
        <div>
          <Reveal>
            <Kicker index="04">The conversational layer</Kicker>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-8 max-w-[16ch] font-display text-[clamp(2rem,4.6vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-balance">
              A conversation is the front door to the whole{' '}
              <span className="font-serif font-normal italic text-primary">system.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            WhatsApp is just one channel. Behind every message, Flowra is understanding intent,
            updating records, and executing the next right action toward an outcome — not scripting
            replies.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
        {/* Chat */}
        <Reveal delay={120}>
          <div className="mx-auto w-full max-w-md overflow-hidden rounded-md border border-border bg-card shadow-sm">
            <div className="flex items-center gap-3 border-b border-border bg-primary px-4 py-3 text-primary-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/15 font-mono text-xs">
                RV
              </span>
              <div className="leading-tight">
                <div className="text-sm font-medium">Riverside Residences</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary-foreground/70">
                  via WhatsApp · Flowra agent
                </div>
              </div>
            </div>
            <div
              className="space-y-2.5 px-4 py-5"
              style={{ backgroundImage: 'radial-gradient(var(--hairline) 0.5px, transparent 0.5px)', backgroundSize: '16px 16px' }}
            >
              {THREAD.map((m, i) => (
                <div key={i} className={`flex ${m.from === 'ai' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[82%] rounded-lg px-3 py-2 text-[13px] leading-snug ${
                      m.from === 'ai'
                        ? 'bg-primary/12 text-foreground'
                        : 'border border-border bg-background text-foreground'
                    }`}
                  >
                    <span dangerouslySetInnerHTML={{ __html: m.text }} />
                    <span className="mt-1 flex items-center justify-end gap-1 font-mono text-[9px] text-muted-foreground">
                      {m.time}
                      {m.from === 'ai' && <CheckCheck className="h-3 w-3 text-primary" />}
                      {m.from === 'customer' && <Check className="h-3 w-3" />}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Behind-the-scenes ledger */}
        <Reveal delay={200} className="flex flex-col justify-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            What Flowra did — in real time
          </div>
          <div className="mt-6 divide-y divide-border border-y border-border">
            {LEDGER.map((row, i) => (
              <Reveal key={row.tag} delay={i * 90} className="flex items-baseline gap-6 py-4">
                <span className="w-24 shrink-0 font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
                  {row.tag}
                </span>
                <span className="text-pretty text-[15px] leading-relaxed text-foreground">{row.value}</span>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            No forms. No handoffs. No dropped follow-up. The customer had a conversation — the
            business gained a qualified, booked, tracked opportunity.
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
