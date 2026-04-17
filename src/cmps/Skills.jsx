import { useRef, useEffect, useState } from 'react'
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaAws, FaPython, FaPhp, FaHtml5, FaCss3Alt, FaVuejs, FaMicrosoft } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiJavascript, SiTypescript, SiFirebase, SiTailwindcss, SiCplusplus } from 'react-icons/si'
import { TbBrandCSharp } from 'react-icons/tb'
import '../styles/Skills.css'

const techStack = [
  { name: 'React.js', icon: <FaReact />, link: 'https://reactjs.org/' },
  { name: 'Node.js', icon: <FaNodeJs />, link: 'https://nodejs.org/' },
  { name: 'MongoDB', icon: <SiMongodb />, link: 'https://www.mongodb.com/' },
  { name: 'Express', icon: <SiExpress />, link: 'https://expressjs.com/' },
  { name: 'JavaScript', icon: <SiJavascript />, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript', icon: <SiTypescript />, link: 'https://www.typescriptlang.org/' },
  { name: 'HTML5', icon: <FaHtml5 />, link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS3', icon: <FaCss3Alt />, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'Python', icon: <FaPython />, link: 'https://www.python.org/' },
  { name: 'PHP', icon: <FaPhp />, link: 'https://www.php.net/' },
  { name: 'Firebase', icon: <SiFirebase />, link: 'https://firebase.google.com/' },
  { name: 'SQL', icon: <FaDatabase />, link: 'https://www.mysql.com/' },
  { name: 'Tailwind', icon: <SiTailwindcss />, link: 'https://tailwindcss.com/' },
  { name: 'C#', icon: <TbBrandCSharp />, link: 'https://dotnet.microsoft.com/languages/csharp' },
  { name: 'Git', icon: <FaGitAlt />, link: 'https://git-scm.com/' },
  { name: 'AWS', icon: <FaAws />, link: 'https://aws.amazon.com/' }
]

function Skills() {
  const scrollRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  // לוגיקה של אנימציה אוטומטית
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId
    const scroll = () => {
      if (!isPaused && !isDragging) {
        scrollContainer.scrollLeft += 1
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0
        }
      }
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationFrameId)
  }, [isPaused, isDragging])

  const dragRef = useRef({ isDragging: false, startX: 0, scrollLeft: 0 })

  const handleMouseDown = (e) => {
    dragRef.current = {
      isDragging: true,
      startX: e.clientX,
      scrollLeft: scrollRef.current.scrollLeft,
    }
    setIsDragging(true)
    setIsPaused(true)
  }

  const handleMouseLeaveOrUp = () => {
    dragRef.current.isDragging = false
    setIsDragging(false)
    setIsPaused(false)
  }

  const handleMouseMove = (e) => {
    if (!dragRef.current.isDragging) return
    e.preventDefault()
    const delta = e.clientX - dragRef.current.startX
    scrollRef.current.scrollLeft = dragRef.current.scrollLeft - delta
  }

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 'var(--sp-2xl)' }}>
          Tech <span>Stack</span>
        </h2>
      </div>

      <div 
        className="carousel-wrapper"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseEnter={() => setIsPaused(true)}
        onTouchStart={() => setIsPaused(true)}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div className="carousel-track">
          {[...techStack, ...techStack].map((tech, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{tech.icon}</div>
              <span className="skill-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills