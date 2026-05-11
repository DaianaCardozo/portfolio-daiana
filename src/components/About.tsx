const skills = [
  'React',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'Node.js',
  'Figma',
  'Git',
  'Accesibilidad',
]

const focusAreas = [
  'Diseño visual con intención',
  'Experiencia de usuario orientada a objetivos',
  'Interfaces claras y funcionales',
  'Comportamiento humano aplicado a productos digitales',
]

function About() {
  return (
    <section id="sobre-mi" className="space-y-7">
      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-violet-300/90">
          Perfil Profesional
        </p>
        <h2 className="text-2xl font-semibold text-white md:text-3xl">
          Frontend developer enfocada en producto y experiencia
        </h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-4">
          <p className="max-w-3xl text-slate-300">
            Desarrollo interfaces modernas que combinan claridad visual, buen
            rendimiento y una estructura pensada para usuarios reales. Me
            interesa construir productos digitales que sean intuitivos, sólidos y
            fáciles de usar.
          </p>
          <p className="max-w-3xl text-slate-400">
            Mi formación en psicología complementa mi perfil técnico: me ayuda a
            analizar cómo las personas perciben, deciden e interactúan dentro de
            una interfaz, para diseñar experiencias más efectivas y humanas.
          </p>
        </div>

        <div
          id="como-trabajo"
          className="rounded-2xl border border-violet-300/20 bg-violet-500/10 p-4"
        >
          <p className="text-xs uppercase tracking-[0.16em] text-violet-200/90">
            Cómo trabajo
          </p>
          <ul className="mt-3 space-y-2">
            {focusAreas.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-slate-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-slate-800/80 px-3 py-1 text-sm text-slate-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default About
