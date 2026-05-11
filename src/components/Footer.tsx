function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
      <p className="leading-relaxed text-slate-400">
        © {currentYear} Daiana Cardozo.
      </p>

      <div className="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/daiana-cardozo"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-violet-300"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/DaianaCardozo"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-violet-300"
        >
          GitHub
        </a>
      </div>
    </footer>
  )
}

export default Footer
