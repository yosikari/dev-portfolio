import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaCode, FaBolt } from 'react-icons/fa'
import '../styles/Education.css'

const educationData = [
  {
    institution: 'Open University of Israel',
    degree: 'B.Sc. in Computer Science',
    period: '2025 - Present',
    icon: <FaGraduationCap />,
    description: 'Focusing on software systems, algorithms, and data structures.',
    tags: ['Algorithms', 'Mathematics', 'Software Engineering']
  },
  {
    institution: 'Coding Academy',
    degree: 'Full Stack Development',
    period: '2024',
    icon: <FaCode />,
    description: 'Intensive 640-hour bootcamp specializing in MERN stack and modern web architecture.',
    tags: ['JavaScript', 'React', 'Node.js', 'WebSockets']
  },
  {
    institution: 'Technological College',
    degree: 'Electrical Practical Engineer',
    period: 'Previous',
    icon: <FaBolt />,
    description: 'Specialized in electrical systems, control systems, and technical engineering.',
    tags: ['Control Systems', 'Handesay', 'Electricity']
  }
]

function Education() {
  const sliderRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true) // מנהל את האוטומציה

  const handleScroll = () => {
    if (!sliderRef.current) return
    const container = sliderRef.current
    const centerPosition = container.scrollLeft + container.clientWidth / 2
    const cards = container.querySelectorAll('.education-card')
    
    let newIndex = 0
    let minDistance = Infinity

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2 - container.offsetLeft
      const distance = Math.abs(cardCenter - centerPosition)
      
      if (distance < minDistance) {
        minDistance = distance
        newIndex = index
      }
    })
    
    setActiveIndex(newIndex)
  }

const scrollToCard = (index, userInitiated = true) => {
    if (userInitiated) setIsAutoPlaying(false)
    if (!sliderRef.current) return
    
    const container = sliderRef.current
    const cards = container.querySelectorAll('.education-card')
    
    if (cards[index]) {
      const card = cards[index]
      const scrollPos = card.offsetLeft - container.offsetLeft - (container.clientWidth / 2) + (card.offsetWidth / 2)
      
      container.scrollTo({
        left: scrollPos,
        behavior: 'smooth'
      })
    }
  }

  const stopAutoPlay = () => setIsAutoPlaying(false)

  useEffect(() => {
    handleScroll()
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveIndex((current) => {
        const nextIndex = (current + 1) % educationData.length
        scrollToCard(nextIndex, false) 
        return nextIndex
      })
    }, 3000)

    return () => clearInterval(interval) 
  }, [isAutoPlaying])

  return (
    <section className="education" id="education">
      <div className="container" style={{ maxWidth: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title" style={{ textAlign: 'center' }}>My <span>Education</span></h2>
          
          <div 
            className="education__slider" 
            ref={sliderRef}
            onScroll={handleScroll}
            onTouchStart={stopAutoPlay} 
            onMouseDown={stopAutoPlay}
          >
            {educationData.map((item, index) => (
              <div 
                key={index} 
                className={`education-card ${activeIndex === index ? 'focused' : ''}`}
              >
                <div className="education-card__header">
                  <div className="education-card__icon">{item.icon}</div>
                  <span className="education-card__period">{item.period}</span>
                </div>
                <div className="education-card__content">
                  <h3>{item.degree}</h3>
                  <h4>{item.institution}</h4>
                  <p>{item.description}</p>
                </div>
                <div className="education-card__tags">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="edu-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="slider-dots">
            {educationData.map((_, index) => (
              <button
                key={index}
                className={`dot ${activeIndex === index ? 'active' : ''}`}
                onClick={() => scrollToCard(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default Education