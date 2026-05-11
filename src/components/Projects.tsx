type Project = {
  title: string
  description: string
  stack: string[]
  category: string
  demoUrl: string
  codeUrl: string
}

const projects: Project[] = [
  {
    title: 'Punto Cine',
    description:
      'Plataforma web inspirada en una experiencia de cine, con cartelera, selección de asientos y una propuesta visual enfocada en la interacción del usuario.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    category: 'Interfaz de Cine',
    demoUrl: 'https://daianacardozo.github.io/PuntoCine/',
    codeUrl: 'https://github.com/DaianaCardozo/PuntoCine',
  },
  {
    title: 'Drink Company',
    description:
      'Landing page para una escuela de coctelería, con diseño premium, estructura orientada a conversión y secciones pensadas para mostrar cursos y propuesta de valor.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    category: 'Plataforma de Cursos',
    demoUrl: 'https://drink-company.vercel.app/',
    codeUrl: 'https://github.com/DaianaCardozo/Drink-Company',
  },
  {
    title: 'Portfolio personal',
    description:
      'Sitio personal para presentar mi perfil como Full Stack Developer Junior, mis proyectos y formas de contacto, con una estética dark moderna y una estructura clara y funcional.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    category: 'CV Web',
    demoUrl: '#',
    codeUrl: 'https://github.com/DaianaCardozo/portfolio-daiana',
  },
]

function Projects() {
  return (
    <section id="proyectos" className="space-y-7">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            PROYECTOS
          </h2>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-5 shadow-[0_16px_40px_-30px_rgba(139,92,246,0.65)] transition duration-300 hover:-translate-y-1 hover:border-violet-300/45 hover:bg-slate-900"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_90%_10%,rgba(167,139,250,0.2),transparent_38%)]"
              aria-hidden="true"
            />
            <div className="relative">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-violet-200/90">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
                <span className="rounded-full border border-violet-300/35 bg-violet-500/10 px-2.5 py-1 text-xs font-medium text-violet-200">
                  0{index + 1}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={`${project.title}-${tech}`}
                    className="rounded-md border border-violet-300/20 bg-violet-400/10 px-2.5 py-1 text-xs font-medium text-violet-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-2">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-lg bg-violet-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-violet-400"
                >
                  Demo
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-lg border border-white/20 px-3 py-2 text-sm font-semibold text-slate-100 transition hover:border-violet-300/45 hover:bg-violet-400/10"
                >
                  Código
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
