type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Sobre m\u00ed', href: '#sobre-mi' },
  { label: 'C\u00f3mo trabajo', href: '#como-trabajo' },
  { label: 'Contacto', href: '#contacto' },
]

const cvUrl = `${import.meta.env.BASE_URL}cv-daiana-cardozo.pdf`

function Header() {
  return (
    <header className="w-full -mt-8 pt-0 md:-mt-10">
      <div className="relative flex items-center justify-between gap-4 py-1.5 md:py-2">
        <a
          href="#inicio"
          className="text-lg font-semibold tracking-[0.2em] text-white transition-colors hover:text-violet-200"
          aria-label="Ir al inicio"
        >
          DC
        </a>

        <nav className="pointer-events-auto absolute left-1/2 top-1/2 w-[min(42rem,calc(100%-11rem))] -translate-x-1/2 -translate-y-1/2 sm:w-[min(42rem,calc(100%-15rem))]">
          <ul className="flex items-center justify-center gap-5 overflow-x-auto pb-1 text-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {navItems.map((item) => {
              const isActive = item.label === 'Inicio'

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`relative inline-flex whitespace-nowrap pb-2 font-medium transition-colors ${
                      isActive
                        ? 'text-violet-300'
                        : 'text-white hover:text-violet-300'
                    }`}
                  >
                    {item.label}
                    {isActive ? (
                      <span className="absolute inset-x-0 -bottom-0.5 h-px bg-violet-300" />
                    ) : null}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <a
          href={cvUrl}
          download
          className="inline-flex h-10 items-center whitespace-nowrap rounded-md border border-violet-300/45 bg-white/5 px-5 text-base font-semibold leading-none tracking-[0.02em] text-violet-200 shadow-sm shadow-violet-950/40 transition-colors hover:bg-violet-500/12 hover:text-violet-100"
        >
          Descargar CV
        </a>
      </div>

      <div className="h-px w-full bg-white/10" aria-hidden="true" />
    </header>
  )
}

export default Header
