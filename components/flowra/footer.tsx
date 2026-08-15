import { Section } from './ui'

const COLUMNS = [
  {
    title: 'System',
    links: ['The intelligence layer', 'AI agents', 'Conversation intelligence', 'AI analyst', 'Workflows'],
  },
  {
    title: 'Industries',
    links: ['Real estate', 'Clinics & healthcare', 'E-commerce & retail', 'Logistics', 'Professional services'],
  },
  {
    title: 'Channels',
    links: ['WhatsApp', 'Web chat', 'Email', 'Instagram & Messenger', 'Voice'],
  },
  {
    title: 'Company',
    links: ['About Flowra', 'Case studies', 'Security', 'Careers', 'Contact'],
  },
]

export function Footer() {
  return (
    <footer className="surface-ink paper-grain border-t border-border">
      <Section className="py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <div className="font-display text-2xl font-semibold tracking-[0.3em] text-paper">FLOWRA</div>
            <p className="mt-6 max-w-sm text-pretty text-sm leading-relaxed text-paper/60">
              The intelligence layer for how your business operates. Every interaction becomes
              understanding. Every understanding becomes a better outcome.
            </p>
            <a
              href="/demo"
              className="mt-8 inline-flex items-center gap-2 border border-paper/25 px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              See Flowra in action
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="/platform" className="text-sm text-paper/75 transition-colors hover:text-paper">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-paper/12 pt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Flowra — Business intelligence infrastructure</span>
          <div className="flex gap-6">
            <a href="/contact" className="transition-colors hover:text-paper">Privacy</a>
            <a href="/contact" className="transition-colors hover:text-paper">Terms</a>
            <a href="/contact" className="transition-colors hover:text-paper">Status</a>
          </div>
        </div>
      </Section>
    </footer>
  )
}
