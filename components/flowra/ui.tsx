import type { ReactNode } from 'react'

/* Monospace section index / kicker — the "machine / operational" voice */
export function Kicker({
  index,
  children,
  className = '',
  tone = 'default',
}: {
  index?: string
  children: ReactNode
  className?: string
  tone?: 'default' | 'invert'
}) {
  return (
    <div
      className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] ${
        tone === 'invert' ? 'text-paper/60' : 'text-muted-foreground'
      } ${className}`}
    >
      {index && (
        <span className={tone === 'invert' ? 'text-paper' : 'text-primary'}>{index}</span>
      )}
      <span className="h-px w-6 bg-current opacity-40" aria-hidden />
      <span>{children}</span>
    </div>
  )
}

/* Section shell with consistent editorial gutters */
export function Section({
  children,
  className = '',
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={`relative px-6 md:px-10 lg:px-16 ${className}`}>
      <div className="mx-auto w-full max-w-[1240px]">{children}</div>
    </section>
  )
}

/* Flowing connector line used across diagrams */
export function FlowConnector({
  vertical = false,
  className = '',
}: {
  vertical?: boolean
  className?: string
}) {
  if (vertical) {
    return (
      <svg
        className={className}
        width="2"
        height="100%"
        viewBox="0 0 2 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <line x1="1" y1="0" x2="1" y2="100" stroke="currentColor" strokeWidth="1.25" className="flow-line" />
      </svg>
    )
  }
  return (
    <svg
      className={className}
      width="100%"
      height="2"
      viewBox="0 0 100 2"
      preserveAspectRatio="none"
      aria-hidden
    >
      <line x1="0" y1="1" x2="100" y2="1" stroke="currentColor" strokeWidth="1.25" className="flow-line" />
    </svg>
  )
}
