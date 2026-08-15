"use client"

import { useMemo, useState } from 'react'
import { ArrowRight, Check, MessageCircle, Sparkles, TrendingUp, Users } from 'lucide-react'
import { Reveal } from '@/components/flowra/reveal'
import { Kicker } from '@/components/flowra/ui'

const channels = [
  { name: 'WhatsApp', detail: 'Customer conversations', icon: MessageCircle },
  { name: 'Instagram', detail: 'Inbound interest', icon: Users },
  { name: 'Website', detail: 'High-intent leads', icon: Sparkles },
]

const agents = [
  { name: 'Lead agent', detail: 'Qualifies inquiries and routes the right next step.', result: 'More qualified conversations' },
  { name: 'Booking agent', detail: 'Finds a suitable time, confirms details, and follows up.', result: 'Fewer missed appointments' },
  { name: 'Operations agent', detail: 'Keeps teams moving when a process needs attention.', result: 'Less manual coordination' },
]

const questions = ['Why are conversions down?', 'Which leads need a follow-up?', 'Where are customers dropping off?']

function PlatformHero() {
  const [active, setActive] = useState(0)
  return (
    <section className="border-b border-foreground/10 px-6 pb-20 pt-28 md:px-10 md:pb-32 md:pt-40 lg:px-16">
      <div className="mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-end">
        <Reveal>
          <Kicker>Flowra / The operating layer</Kicker>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.92] tracking-[-0.075em] text-balance">
            Turn every customer moment into forward motion.
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Flowra connects the conversations, people, data, and actions that keep a growing Pakistani business moving — from first inquiry to revenue.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="/demo" className="inline-flex items-center gap-2 bg-foreground px-6 py-3.5 text-[15px] font-medium text-background transition-colors hover:bg-primary">
              See Flowra in action <ArrowRight size={16} />
            </a>
            <a href="/platform#channels" className="inline-flex items-center gap-2 border border-foreground/25 px-6 py-3.5 text-[15px] font-medium transition-colors hover:border-foreground">
              Explore the system
            </a>
          </div>
        </Reveal>
        <Reveal delay={140}>
          <div className="relative border border-foreground/15 bg-surface p-5 md:p-7">
            <div className="flex items-center justify-between border-b border-foreground/10 pb-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Live business signal</span>
              <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-primary"><span className="size-1.5 rounded-full bg-primary" /> Learning</span>
            </div>
            <div className="py-9">
              <p className="font-serif text-3xl leading-tight text-primary md:text-4xl">A customer asks once.</p>
              <p className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">Your business gets smarter every time.</p>
            </div>
            <div className="grid grid-cols-5 items-center gap-2 border-t border-foreground/10 pt-5 text-center font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
              {['Customer', 'Context', 'Decision', 'Action', 'Outcome'].map((item, i) => <div key={item} className="flex items-center gap-2"><span className={i === active ? 'text-primary' : ''}>{item}</span>{i < 4 && <ArrowRight size={11} className="shrink-0" />}</div>)}
            </div>
            <div className="mt-5 flex gap-2">
              {[0, 1, 2, 3, 4].map((item) => <button key={item} aria-label={`Show flow stage ${item + 1}`} onClick={() => setActive(item)} className={`h-1 flex-1 transition-colors ${item === active ? 'bg-primary' : 'bg-foreground/15'}`} />)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ChannelsSection() {
  const [selected, setSelected] = useState(0)
  const channel = channels[selected]
  return (
    <section id="channels" className="px-6 py-24 md:px-10 md:py-36 lg:px-16">
      <div className="mx-auto max-w-[1240px]">
        <Reveal><Kicker>01 / Connect the front door</Kicker><h2 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-balance md:text-7xl">Meet customers wherever the conversation starts.</h2></Reveal>
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div className="flex flex-col border-t border-foreground/15">
            {channels.map((item, i) => <button key={item.name} onClick={() => setSelected(i)} className={`flex items-center justify-between border-b border-foreground/15 px-1 py-5 text-left transition-colors ${i === selected ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}><span className="font-display text-xl">{item.name}</span><ArrowRight size={16} /></button>)}
          </div>
          <div className="border border-foreground/15 bg-surface p-6 md:p-10">
            <div className="flex items-center gap-3"><channel.icon size={18} className="text-primary" /><span className="font-mono text-[11px] uppercase tracking-[0.18em]">{channel.name} / Connected</span></div>
            <p className="mt-16 max-w-xl font-serif text-4xl leading-tight text-primary md:text-6xl">“Can I book a consultation for next week?”</p>
            <div className="mt-12 grid gap-4 border-t border-foreground/10 pt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground md:grid-cols-3"><span>Intent <b className="text-foreground">Consultation</b></span><span>Location <b className="text-foreground">DHA Phase 6</b></span><span>Next action <b className="text-foreground">Find a slot</b></span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function IntelligenceSection() {
  const [question, setQuestion] = useState(questions[0])
  return <section id="intelligence" className="bg-ink px-6 py-24 text-paper md:px-10 md:py-36 lg:px-16"><div className="mx-auto max-w-[1240px]"><Reveal><Kicker>02 / Understand what matters</Kicker><h2 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-balance md:text-7xl">The answer is usually inside the conversation.</h2><p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/60">Flowra turns everyday customer language into useful business context — without asking your team to become data analysts.</p></Reveal><div className="mt-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]"><div className="flex flex-col gap-2">{questions.map((item) => <button key={item} onClick={() => setQuestion(item)} className={`border px-5 py-4 text-left font-display text-lg transition-colors ${question === item ? 'border-primary bg-primary text-paper' : 'border-paper/15 text-paper/70 hover:border-paper/40'}`}>{item}</button>)}</div><div className="border border-paper/15 p-6 md:p-10"><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">Flowra analyst / illustrative response</span><p className="mt-8 font-serif text-3xl leading-tight text-paper md:text-5xl">{question}</p><p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/65">Flowra compares the signals across conversations, bookings, and outcomes, then gives your team a practical next step — not another dashboard to monitor.</p><div className="mt-10 flex items-center gap-3 border-t border-paper/15 pt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/45"><TrendingUp size={15} className="text-primary" /> Signal confidence / 87%</div></div></div></div></section>
}

function AgentsSection() {
  const [agent, setAgent] = useState(0)
  const current = agents[agent]
  return <section id="agents" className="px-6 py-24 md:px-10 md:py-36 lg:px-16"><div className="mx-auto max-w-[1240px]"><Reveal><Kicker>03 / Move from insight to action</Kicker><h2 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-balance md:text-7xl">AI handles the repetition. Your team keeps the judgment.</h2></Reveal><div className="mt-14 grid gap-8 lg:grid-cols-[0.55fr_1.45fr]"><div className="flex flex-col border-t border-foreground/15">{agents.map((item, i) => <button key={item.name} onClick={() => setAgent(i)} className={`flex items-center justify-between border-b border-foreground/15 py-5 text-left font-display text-xl ${agent === i ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}><span>{item.name}</span><ArrowRight size={16} /></button>)}</div><div className="border border-foreground/15 bg-surface p-7 md:p-12"><div className="flex items-center justify-between"><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Agent / {String(agent + 1).padStart(2, '0')}</span><Sparkles size={18} className="text-primary" /></div><h3 className="mt-16 font-display text-4xl font-semibold tracking-[-0.04em] md:text-6xl">{current.name}</h3><p className="mt-5 max-w-lg text-xl leading-relaxed text-muted-foreground">{current.detail}</p><div className="mt-12 flex items-center gap-3 border-t border-foreground/10 pt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-primary"><Check size={15} /> {current.result}</div></div></div></div></section>
}

function RoiSection() {
  const [leads, setLeads] = useState('120')
  const [value, setValue] = useState('45000')
  const parsedLeads = Number(leads)
  const parsedValue = Number(value)
  const valid = Number.isFinite(parsedLeads) && parsedLeads >= 0 && Number.isFinite(parsedValue) && parsedValue >= 0
  const estimate = valid ? Math.round(parsedLeads * parsedValue * 0.12) : 0
  const formatter = useMemo(() => new Intl.NumberFormat('en-PK'), [])
  return <section id="roi" className="border-y border-foreground/10 bg-surface px-6 py-24 md:px-10 md:py-36 lg:px-16"><div className="mx-auto max-w-[1240px]"><Reveal><Kicker>04 / Make the value visible</Kicker><h2 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-balance md:text-7xl">Start with the business question, not the software.</h2></Reveal><div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div className="grid gap-5"><label className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Monthly qualified leads<input inputMode="numeric" value={leads} onChange={(e) => setLeads(e.target.value)} className="mt-2 block w-full border border-foreground/20 bg-background px-4 py-3 font-display text-2xl outline-none focus:border-primary" /></label><label className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Average customer value (PKR)<input inputMode="numeric" value={value} onChange={(e) => setValue(e.target.value)} className="mt-2 block w-full border border-foreground/20 bg-background px-4 py-3 font-display text-2xl outline-none focus:border-primary" /></label>{!valid && <p role="alert" className="text-sm text-primary">Enter zero or a positive number in both fields.</p>}</div><div className="border border-foreground/20 p-7 md:p-10"><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Illustrative monthly opportunity</span><p className="mt-5 font-display text-6xl font-semibold tracking-[-0.06em] text-primary md:text-8xl">PKR {formatter.format(estimate)}</p><p className="mt-5 max-w-xl text-muted-foreground">A directional estimate based on improving follow-up and conversion across the inputs above. It is not a guarantee or forecast.</p></div></div></div></section>
}

export function PlatformPage() {
  return <main id="top"><PlatformHero /><ChannelsSection /><IntelligenceSection /><AgentsSection /><RoiSection /><section className="bg-primary px-6 py-24 text-paper md:px-10 md:py-32 lg:px-16"><div className="mx-auto flex max-w-[1240px] flex-col gap-10 md:flex-row md:items-end md:justify-between"><div><Kicker>Flowra / Built for the way business actually moves</Kicker><h2 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[0.96] tracking-[-0.055em] md:text-7xl">One system. Every useful signal. Better decisions over time.</h2></div><a href="/contact" className="inline-flex shrink-0 items-center gap-2 border border-paper/40 px-6 py-3.5 text-[15px] font-medium transition-colors hover:bg-paper hover:text-primary">Talk to us <ArrowRight size={16} /></a></div></section></main>
}
