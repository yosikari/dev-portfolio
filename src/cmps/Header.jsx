import '../styles/Header.css'

function Header() {
  return (
    <header className="hero" id="home">
      <div className="hero__content container">
        <p className="hero__tag">MERN Stack Developer</p>
        <h1 className="hero__title">
          Hi, I'm <span>Yossi Karasik</span>
        </h1>
        <p className="hero__sub">
          Building fast, scalable web apps with React, Node.js, Express & MongoDB.
        </p>
        <div className="hero__badges">
          <span className="badge badge--react">React.js</span>
          <span className="badge badge--node">Node.js</span>
          <span className="badge badge--express">Express</span>
          <span className="badge badge--mongo">MongoDB</span>
        </div>
      </div>
    </header>
  )
}

export default Header