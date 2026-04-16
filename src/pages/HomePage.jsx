import About from '../cmps/About'
import Education from '../cmps/Education'
import Skills from '../cmps/Skills'
import Projects from '../cmps/Projects'
import Contact from '../cmps/Contact'

function HomePage() {
  return (
    <div className="page-content">
      <Skills />
      <About />
      <Education />
      <Projects />
      <Contact />
    </div>
  )
}

export default HomePage