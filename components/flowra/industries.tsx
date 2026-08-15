'use client'

import { useState } from 'react'
import { Reveal } from './reveal'
import { Section, Kicker } from './ui'

const INDUSTRIES = [
  {
    key: 'Real estate',
    keyword: 'AI automation for real estate',
    flow: ['Lead', 'Property matching', 'Qualification', 'Viewing', 'Follow-up', 'Closing'],
    note: 'Match buyers to listings and never miss a viewing follow-up.',
  },
  {
    key: 'Clinics & healthcare',
    keyword: 'AI booking for clinics',
    flow: ['Inquiry', 'Service selection', 'Appointment', 'Reminder', 'Follow-up'],
    note: 'Fill the calendar and cut no-shows with timely, human reminders.',
  },
  {
    key: 'E-commerce & retail',
    keyword: 'conversational commerce automation',
    flow: ['Discovery', 'Questions', 'Recommendation', 'Purchase', 'Support', 'Re-engagement'],
    note: 'Guide shoppers to the right product and win back the ones who pause.',
  },
  {
    key: 'Logistics',
    keyword: 'AI operations for logistics',
    flow: ['Order', 'Routing', 'Dispatch', 'Tracking', 'Exceptions', 'Resolution'],
    note: 'Catch operational failures before customers feel them.',
  },
  {
    key: 'Professional services',
    keyword: 'client automation for services',
    flow: ['Inquiry', 'Scoping', 'Proposal', 'Onboarding', 'Delivery', 'Retention'],
    note: 'Turn inquiries into scoped, onboarded, retained clients.',
  },
]

export function Industries() {
  const [active, setActive] = useState(0)
  const current = INDUSTRIES[active]

  return (
    <Section id="industries" className="border-t border-border py-24 md:py-36">
      <Reveal>
        <Kicker index="10">Built for how you operate</Kicker>
      </Reveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <Reveal delay={80}>
          <h2 className="max-w-[16ch] font-display text-[clamp(2rem,4.6vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-balance">
            One platform. Every business runs it{' '}
            <span className="font-serif font-normal italic text-primary">differently.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            The intelligence layer is the same. The workflow bends to your business — and to whichever
            channel your customers prefer.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        {/* Selector */}
        <Reveal>
          <div role="tablist" aria-label="Industries" className="flex flex-col border-t border-border">
            {INDUSTRIES.map((ind, i) => (
              <button
                key={ind.key}
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`group flex items-baseline justify-between gap-4 border-b border-border py-5 text-left transition-colors ${
                  i === active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-[11px] text-primary">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-display text-xl font-medium md:text-2xl">{ind.key}</span>
                </span>
                <span
                  className={`h-2 w-2 shrink-0 translate-y-[-2px] rounded-full transition-colors ${
                    i === active ? 'bg-primary' : 'bg-border group-hover:bg-primary/40'
                  }`}
                />
              </button>
            ))}
          </div>
        </Reveal>

        {/* Workflow display */}
        <div className="flex flex-col justify-center">
          <div className="rounded-sm border border-border bg-card p-7 md:p-9">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              {current.keyword}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-3">
              {current.flow.map((stepName, i) => (
                <div key={stepName} className="flex items-center gap-2">
                  <span className="border border-border bg-background px-3 py-2 font-display text-sm font-medium">
                    {stepName}
                  </span>
                  {i < current.flow.length - 1 && (
                    <span className="font-mono text-xs text-primary" aria-hidden>
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">{current.note}</p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            <span className="text-foreground">Same system, any channel:</span>
            {['WhatsApp', 'Web chat', 'Email', 'Instagram', 'Voice'].map((c) => (
              <span key={c} className="border border-border px-2.5 py-1">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
