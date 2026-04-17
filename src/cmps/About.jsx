import { motion } from "framer-motion";
import "../styles/About.css";
import DevIllustration from "./DevIllustration";
function About() {
  return (
    <section className="about container" id="about">
      <motion.div
        className="about__grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="about__image">
          <DevIllustration />
        </div>

        <div className="about__content">
          <h2 className="section-title">
            About <span>Me</span>
          </h2>

          <p>
            I'm a Full-Stack Developer specializing in the MERN stack and a
            Computer Science student at the Open University, driven by a passion
            for building robust and scalable web applications.
          </p>

          <p>
            Currently working as an Experiment Manager at Elbit Systems, I lead
            complex testing procedures under strict international standards.
            This background has ingrained in me an analytical, detail-oriented
            mindset-ensuring that every line of code I write prioritizes clean
            architecture, security, and uncompromising quality.
          </p>

          <p>
            When I'm away from the keyboard, you'll usually find me riding my
            motorcycle or perfecting advanced meat recipes on the grill.
          </p>

          <div className="about__stats">
            <div className="stat">
              <h3>CS Student</h3>
              <span>Open University</span>
            </div>
            <div className="stat">
              <h3>Full Stack Dev</h3>
              <span>Frontend & Backend</span>
            </div>
            <div className="stat">
              <h3>Practical Engineer</h3>
              <span>Electricity and PLC</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
