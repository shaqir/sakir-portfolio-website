import { useTheme } from '@hooks'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import Hero from '@sections/Hero'
import About from '@sections/About'
import Skills from '@sections/Skills'
import Projects from '@sections/Projects'
import Experience from '@sections/Experience'
import Achievements from '@sections/Achievements'
import Testimonials from '@sections/Testimonials'
import Contact from '@sections/Contact'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
