import heroPhoto from '../assets/hero-foto.png'

function Hero() {
  return (
    <section className="relative py-3 sm:py-4 md:py-5 lg:py-6">
      <div
        className="pointer-events-none absolute right-4 top-3 h-44 w-44 rounded-full bg-violet-500/18 blur-3xl md:right-8 md:top-1 md:h-56 md:w-56"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-7 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,22rem)] lg:gap-10 xl:gap-12">
        <div className="mx-auto max-w-2xl space-y-2 text-center md:-translate-y-3 lg:mx-0 lg:-translate-y-6 lg:justify-self-start lg:text-left">
          <p className="text-base font-semibold tracking-normal text-violet-300 md:text-lg">
            Hola, soy
          </p>

          <h1 className="text-4xl font-black leading-tight tracking-normal text-white md:whitespace-nowrap md:text-5xl lg:text-[3.35rem]">
            DAIANA CARDOZO
          </h1>

          <p className="text-lg font-semibold text-white md:text-xl">
            Full Stack Developer Junior
          </p>

          <p className="mx-auto max-w-md text-base leading-relaxed text-slate-300 md:text-lg lg:mx-0">
            Desarrollo aplicaciones web completas, integrando frontend, backend
            y bases de datos para crear soluciones claras, funcionales y fáciles
            de usar.
          </p>

          <div className="flex flex-wrap justify-center gap-2 pt-0.5 lg:justify-start">
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

        <div className="relative mx-auto w-[min(78vw,18rem)] sm:w-full sm:max-w-xs md:max-w-sm lg:mx-0 lg:justify-self-end">
          <div
            className="pointer-events-none absolute -inset-3 rounded-[1.4rem] bg-violet-500/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative aspect-[5/6] overflow-hidden rounded-[1.2rem] sm:aspect-[4/5]">
            <img
              src={heroPhoto}
              alt="Retrato de Daiana Cardozo"
              className="h-full w-full object-cover object-[52%_center] lg:object-[58%_28%]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
