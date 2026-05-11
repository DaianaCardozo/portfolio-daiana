type ContactLink = {
  label: string
  href: string
  note: string
  featured?: boolean
  download?: boolean
}

const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    href: 'mailto:daianacardozo.dev@gmail.com',
    note: 'daianacardozo.dev@gmail.com',
    featured: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/daiana-cardozo-854001287',
    note: 'www.linkedin.com/in/daiana-cardozo-854001287',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/DaianaCardozo',
    note: 'https://github.com/DaianaCardozo',
  },
  {
    label: 'Descargar CV',
    href: '/cv-daiana-cardozo.pdf',
    note: 'Versión PDF',
    download: true,
  },
]

function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden rounded-3xl border border-violet-300/25 bg-gradient-to-br from-violet-500/15 via-slate-900/90 to-slate-950 p-6 md:p-8"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_15%,rgba(167,139,250,0.2),transparent_32%),radial-gradient(circle_at_92%_86%,rgba(216,180,254,0.12),transparent_34%)]"
        aria-hidden="true"
      />

      <div className="relative grid gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-violet-200/90">
            Contacto profesional
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
            Disponible para oportunidades Full Stack
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
            Si tenés una propuesta laboral, una colaboración o un proyecto
            digital, podemos conversar. Me interesa participar en proyectos
            donde pueda integrar interfaz, lógica, datos y experiencia de
            usuario en soluciones claras y funcionales.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {contactLinks.map((link) => {
            const isExternal = link.href.startsWith('http')

            return (
              <a
                key={link.label}
                href={link.href}
                download={link.download}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer' : undefined}
                className={`group rounded-xl border p-4 transition duration-300 ${
                  link.featured
                    ? 'border-violet-200/40 bg-violet-500 text-white hover:bg-violet-400'
                    : 'border-white/15 bg-slate-900/70 text-slate-100 hover:border-violet-300/45 hover:bg-violet-400/10'
                }`}
              >
                <p className="text-sm font-semibold">{link.label}</p>
                <p
                  className={`mt-1 text-xs ${
                    link.featured ? 'text-violet-100' : 'text-slate-300'
                  }`}
                >
                  {link.note}
                </p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact
