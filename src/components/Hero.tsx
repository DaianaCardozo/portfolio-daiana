import heroPhoto from '../assets/hero-foto.png'

function Hero() {
  return (
    <section className="relative py-4 md:py-5 lg:py-6">
      <div
        className="pointer-events-none absolute right-4 top-3 h-44 w-44 rounded-full bg-violet-500/18 blur-3xl md:right-8 md:top-1 md:h-56 md:w-56"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,22rem)] lg:gap-10 xl:gap-12">
        <div className="max-w-2xl space-y-2 text-left lg:justify-self-start">
          <p className="text-xs font-medium tracking-wide text-violet-300 md:text-sm">
            Hola, soy
          </p>

          <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:whitespace-nowrap md:text-5xl lg:text-6xl">
            DAIANA CARDOZO
          </h1>

          <p className="text-base font-semibold text-white md:text-lg">
            Frontend Developer
          </p>

          <p className="max-w-sm text-sm leading-relaxed text-slate-300 md:text-base">
            Construyo interfaces modernas, funcionales y pensadas para usuarios
            reales.
          </p>

          <div className="flex flex-wrap gap-2 pt-0.5">
            <a
              href="#proyectos"
              className="inline-flex rounded-md bg-violet-600 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-violet-500"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="inline-flex rounded-md border border-violet-300/60 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:border-violet-200 hover:bg-violet-500/10"
            >
              Contactar
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs md:max-w-sm lg:mx-0 lg:justify-self-end">
          <div
            className="pointer-events-none absolute -inset-3 rounded-[1.4rem] bg-violet-500/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem]">
            <img
              src={heroPhoto}
              alt="Retrato de Daiana Cardozo"
              className="h-full w-full object-cover object-[58%_28%]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
