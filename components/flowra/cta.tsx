import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'
import { Section } from './ui'

export function CTA() {
  return (
    <Section id="cta" className="border-t border-border py-28 md:py-40">
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              'linear-gradient(to right, var(--hairline) 1px, transparent 1px), linear-gradient(to bottom, var(--hairline) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(80% 80% at 50% 50%, black, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(80% 80% at 50% 50%, black, transparent 75%)',
          }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
              Every interaction becomes intelligence
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-balance">
              Stop running tools. Start running your business through one{' '}
              <span className="font-serif font-normal italic text-primary">intelligent</span> layer.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mx-auto mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              See how Flowra connects your conversations, agents, workflows and revenue — and gets
              sharper with every customer.
            </p>
          </Reveal>
          <Reveal delay={200} className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#top"
              className="group inline-flex items-center gap-2 bg-foreground px-7 py-4 text-[15px] font-medium text-background transition-colors hover:bg-primary"
            >
              See Flowra in action
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#system"
              className="inline-flex items-center gap-2 border border-foreground/25 px-7 py-4 text-[15px] font-medium text-foreground transition-colors hover:border-foreground"
            >
              Explore the system
            </a>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
