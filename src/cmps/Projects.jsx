import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import '../styles/Projects.css'

function Projects() {
  return (
    <section className="projects container" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Selected <span>Projects</span></h2>
        
        <div className="projects__grid">
          {projects.map((project, index) => (
            <motion.div 
              className="project-card" 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="project-card__img">
                 <img src={project.imgUrl} alt={project.title} />
              </div>
              <div className="project-card__content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-card__tech">
                  {project.tech.map(t => <span key={t}>{t}</span>)}
                </div>
                <div className="project-card__links">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-outline">GitHub</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects