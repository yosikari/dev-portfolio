import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer container">
      <p className="footer__copy">© {new Date().getFullYear()} Yossi Karasik. Built with React ⚛</p>
      
      <div className="footer__links">
        <a href="https://github.com/yosikari" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/yosikari/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="mailto:yosikari@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  )
}

export default Footer