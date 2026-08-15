'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Kicker } from './ui'

const STEPS = [
  {
    n: '01',
    title: 'Revenue is down.',
    detail: 'Weekly revenue fell 12% against forecast. Flowra flags it as a genuine anomaly, not seasonal noise.',
    log: 'anomaly_detected · confidence 0.94',
  },
  {
    n: '02',
    title: 'Identify the affected region.',
    detail: 'The decline isn’t uniform. It concentrates almost entirely in the North region.',
    log: 'segment · region = North · Δ -31%',
  },
  {
    n: '03',
    title: 'Identify the regional hub.',
    detail: 'Within North, the loss traces to orders routed through the Northgate fulfillment hub.',
    log: 'trace · hub = Northgate',
  },
  {
    n: '04',
    title: 'Detect the operational failure.',
    detail: 'Dispatch times at Northgate rose 3.4x over the same window. Throughput collapsed.',
    log: 'metric · dispatch_time ×3.4',
  },
  {
    n: '05',
    title: 'Measure the customer impact.',
    detail: '412 deliveries ran late. Complaint volume spiked 28% and CSAT dropped in the same cohort.',
    log: 'impact · late = 412 · complaints +28%',
  },
  {
    n: '06',
    title: 'Identify the root cause.',
    detail: 'Two driver routes went unassigned after a shift-planning gap the previous Monday.',
    log: 'root_cause · unassigned_routes = 2',
  },
  {
    n: '07',
    title: 'Recommend an action.',
    detail: 'Reassign the two open routes today, and proactively notify the 412 affected customers with a delivery credit.',
    log: 'recommendation · ready to execute',
    action: true,
  },
]

export function Investigation() {
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const el = wrapRef.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const vh = window.innerHeight
        const total = rect.height - vh
        const scrolled = Math.min(Math.max(-rect.top, 0), total)
        const p = total > 0 ? scrolled / total : 0
        const idx = Math.min(STEPS.length - 1, Math.floor(p * STEPS.length))
        setActive(idx)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  const step = STEPS[active]

  return (
    <section className="border-t border-border">
      {/* Intro */}
      <div className="mx-auto w-full max-w-[1240px] px-6 pt-24 md:px-10 lg:px-16 md:pt-32">
        <Kicker index="07">The AI analyst</Kicker>
        <h2 className="mt-8 max-w-[18ch] font-display text-[clamp(2rem,4.6vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-balance">
          It doesn&apos;t hand you a dashboard. It hands you the{' '}
          <span className="font-serif font-normal italic text-primary">answer.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Ask a question in plain language. Flowra investigates across your data the way an analyst
          would — narrowing from symptom to cause to a recommended action. Scroll to follow one
          investigation.
        </p>
      </div>

      {/* Pinned sequence */}
      <div ref={wrapRef} className="relative mt-16" style={{ height: '340vh' }}>
        <div className="sticky top-0 flex min-h-screen items-center px-6 py-16 md:px-10 lg:px-16">
          <div className="mx-auto grid w-full max-w-[1240px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            {/* Step index rail */}
            <ol className="order-2 flex gap-2 overflow-hidden lg:order-1 lg:flex-col lg:gap-1">
              {STEPS.map((s, i) => {
                const isActive = i === active
                const isDone = i < active
                return (
                  <li
                    key={s.n}
                    className={`flex items-center gap-4 border-l-2 py-2 pl-4 transition-all duration-500 ${
                      isActive
                        ? 'border-primary'
                        : isDone
                          ? 'border-foreground/25'
                          : 'border-border'
                    }`}
                  >
                    <span
                      className={`font-mono text-xs transition-colors ${
                        isActive ? 'text-primary' : isDone ? 'text-foreground/50' : 'text-muted-foreground/50'
                      }`}
                    >
                      {s.n}
                    </span>
                    <span
                      className={`hidden text-sm transition-colors lg:block ${
                        isActive ? 'text-foreground' : 'text-muted-foreground/60'
                      }`}
                    >
                      {s.title}
                    </span>
                  </li>
                )
              })}
            </ol>

            {/* Active step */}
            <div className="order-1 lg:order-2">
              <div className="surface-ink paper-grain relative overflow-hidden rounded-sm p-8 md:p-12">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-paper/45">
                  <span>Investigation · logistics</span>
                  <span>
                    step {step.n} / 07
                  </span>
                </div>

                <div className="mt-8 font-display text-[clamp(2.4rem,6vw,4.5rem)] font-semibold leading-none text-primary/90">
                  {step.n}
                </div>

                <h3 className="mt-4 font-display text-2xl font-semibold text-paper md:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-lg text-pretty text-lg leading-relaxed text-paper/65">
                  {step.detail}
                </p>

                <div className="mt-8 flex items-center gap-3 border-t border-paper/12 pt-5 font-mono text-[11px] text-paper/50">
                  <span className="pulse-node inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  {step.log}
                </div>

                {step.action && (
                  <button className="mt-6 inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:translate-x-0.5">
                    Execute recommendation
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}

                {/* progress bar */}
                <div className="mt-8 h-px w-full bg-paper/12">
                  <div
                    className="h-px bg-primary transition-[width] duration-500"
                    style={{ width: `${((active + 1) / STEPS.length) * 100}%` }}
                  />
                </div>
              </div>
              <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground lg:text-left">
                Insight → action, not dashboard → information
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
