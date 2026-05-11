import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl"
        aria-hidden="true"
      />

      <main
        id="inicio"
        className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-8 md:gap-14 md:px-10 md:py-10 lg:gap-16"
      >
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
