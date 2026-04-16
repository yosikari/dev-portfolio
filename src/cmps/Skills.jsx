import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaAws, FaPython, FaPhp, FaHtml5, FaCss3Alt, FaVuejs, FaMicrosoft } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiJavascript, SiTypescript, SiFirebase, SiTailwindcss, SiCplusplus } from 'react-icons/si'
import { TbBrandCSharp } from 'react-icons/tb'
import '../styles/Skills.css'

const techStack = [
  /* MERN Base */
  { name: 'React.js', icon: <FaReact />, link: 'https://reactjs.org/' },
  { name: 'Node.js', icon: <FaNodeJs />, link: 'https://nodejs.org/' },
  { name: 'MongoDB', icon: <SiMongodb />, link: 'https://www.mongodb.com/' },
  { name: 'Express', icon: <SiExpress />, link: 'https://expressjs.com/' },

  /* Core Languages */
  { name: 'JavaScript', icon: <SiJavascript />, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript', icon: <SiTypescript />, link: 'https://www.typescriptlang.org/' },
  { name: 'HTML5', icon: <FaHtml5 />, link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS3', icon: <FaCss3Alt />, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },

  /* Backend & DB */
  { name: 'Python', icon: <FaPython />, link: 'https://www.python.org/' },
  { name: 'PHP', icon: <FaPhp />, link: 'https://www.php.net/' },
  { name: 'Firebase', icon: <SiFirebase />, link: 'https://firebase.google.com/' },
  { name: 'SQL', icon: <FaDatabase />, link: 'https://www.mysql.com/' },

  /* Frameworks & Tools */
  { name: 'Tailwind', icon: <SiTailwindcss />, link: 'https://tailwindcss.com/' },
  { name: 'Vue.js', icon: <FaVuejs />, link: 'https://vuejs.org/' },
  { name: 'C++', icon: <SiCplusplus />, link: 'https://isocpp.org/' },
  { name: 'C#', icon: <TbBrandCSharp />, link: 'https://dotnet.microsoft.com/languages/csharp' },
  { name: 'Git', icon: <FaGitAlt />, link: 'https://git-scm.com/' },
  { name: 'AWS', icon: <FaAws />, link: 'https://aws.amazon.com/' },
  { name: 'Azure', icon: <FaMicrosoft />, link: 'https://azure.microsoft.com/' }
]

function Skills() {
  return (

    <section className="skills" id="skills"> 
      

      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 'var(--sp-2xl)' }}>
          Tech <span>Stack</span>
        </h2>
      </div>
      

      <div className="carousel-wrapper">
        <div className="carousel-track">
          

          {techStack.map((tech, index) => (
            <a key={`first-${index}`} href={tech.link} target="_blank" rel="noreferrer" className="skill-card-link">
              <div className="skill-card">
                <div className="skill-icon">{tech.icon}</div>
                <span className="skill-name">{tech.name}</span>
              </div>
            </a>
          ))}


          {techStack.map((tech, index) => (
            <a key={`second-${index}`} href={tech.link} target="_blank" rel="noreferrer" className="skill-card-link">
              <div className="skill-card">
                <div className="skill-icon">{tech.icon}</div>
                <span className="skill-name">{tech.name}</span>
              </div>
            </a>
          ))}
          
        </div>
      </div>
    </section>
  )
}

export default Skills