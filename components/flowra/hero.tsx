import { ArrowRight, Users, MessagesSquare, BrainCircuit, Zap, TrendingUp } from 'lucide-react'
import { Reveal } from './reveal'
import { Section, Kicker } from './ui'

const STAGES = [
  { label: 'Customer', icon: Users, meta: 'arrives' },
  { label: 'Conversation', icon: MessagesSquare, meta: 'in context' },
  { label: 'AI agents', icon: BrainCircuit, meta: 'understand' },
  { label: 'Action', icon: Zap, meta: 'executes' },
  { label: 'Revenue', icon: TrendingUp, meta: 'compounds' },
]

export function Hero() {
  return (
    <Section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Faint orchestration grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--hairline) 1px, transparent 1px), linear-gradient(to bottom, var(--hairline) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(120% 90% at 50% 0%, black, transparent 78%)',
          WebkitMaskImage: 'radial-gradient(120% 90% at 50% 0%, black, transparent 78%)',
        }}
      />

      <div className="relative">
        <Reveal>
          <Kicker index="00">Business intelligence infrastructure</Kicker>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-8 max-w-[16ch] font-display text-[clamp(2.6rem,7vw,6rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-balance">
            Your business,
            <br />
            orchestrated by one{' '}
            <span className="font-serif font-normal italic text-primary">intelligent</span> layer.
          </h1>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-end">
          <Reveal delay={140}>
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              Flowra sits across your customer journey and operations — connecting conversations,
              AI agents, workflows, business data, and revenue into a single system. It doesn&apos;t
              just automate work. It learns how your business actually works, and gets sharper with
              every interaction.
            </p>
          </Reveal>

          <Reveal delay={200} className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href="/demo"
              className="group inline-flex items-center gap-2 bg-foreground px-6 py-3.5 text-[15px] font-medium text-background transition-colors hover:bg-primary"
            >
              See Flowra in action
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/platform"
              className="inline-flex items-center gap-2 border border-foreground/25 px-6 py-3.5 text-[15px] font-medium text-foreground transition-colors hover:border-foreground"
            >
              Explore the system
            </a>
          </Reveal>
        </div>

        {/* Orchestration rail */}
        <Reveal delay={240} className="mt-16 md:mt-24">
          <OrchestrationRail />
        </Reveal>
      </div>
    </Section>
  )
}

function OrchestrationRail() {
  return (
    <div className="rounded-sm border border-border bg-card/60 p-5 md:p-8">
      <div className="mb-8 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
        <span>Flow of a single customer</span>
        <span className="hidden sm:inline">Continuous · learning · orchestrated</span>
      </div>

      {/* Stage rail */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-5 sm:gap-0">
        {STAGES.map((stage, i) => {
          const Icon = stage.icon
          return (
            <div key={stage.label} className="relative flex sm:flex-col sm:items-center">
              {/* horizontal connector (desktop) */}
              {i < STAGES.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-0 top-7 hidden h-px w-full translate-x-1/2 text-primary sm:block"
                >
                  <svg width="100%" height="2" viewBox="0 0 100 2" preserveAspectRatio="none">
                    <line x1="0" y1="1" x2="100" y2="1" stroke="currentColor" strokeWidth="1.2" className="flow-line" />
                  </svg>
                </span>
              )}
              <div className="flex items-center gap-4 sm:flex-col sm:gap-3">
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div className="sm:text-center">
                  <div className="font-display text-sm font-medium">{stage.label}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {stage.meta}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Ties to intelligence layer */}
      <div className="mt-8 hidden grid-cols-5 sm:grid" aria-hidden>
        {STAGES.map((_, i) => (
          <div key={i} className="flex justify-center">
            <span className="h-6 w-px bg-gradient-to-b from-primary/60 to-transparent" />
          </div>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-between rounded-sm bg-foreground px-5 py-4 text-background">
        <div className="flex items-center gap-3">
          <span className="pulse-node inline-block h-2 w-2 rounded-full bg-primary" />
          <span className="font-mono text-[11px] uppercase tracking-[0.24em]">Flowra intelligence layer</span>
        </div>
        <span className="hidden font-mono text-[11px] tracking-[0.1em] text-background/60 md:inline">
          every interaction → understanding → better outcomes
        </span>
      </div>
    </div>
  )
}
