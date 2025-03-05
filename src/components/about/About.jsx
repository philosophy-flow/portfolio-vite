import "./About.css";
import portrait from "../../assets/portrait.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <motion.section
        className="About"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 25 }}
        transition={{ duration: 0.5 }}
      >
        <div className="about-text-container">
          <h2 className="about-header">A Bit About Me</h2>
          <p className="about-body">
            As an accomplished software engineer and leader, I thrive on tackling
            complex challenges, constantly expanding my knowledge, and sharing what I know with others. 
            With a proven track record of effective collaboration and exemplary self-teaching 
            capabilities, I excel at working in both team environments and independently.
          </p>
          <p className="about-body">
            My expertise is rooted in front-end and full-stack application development, 
            where I have mastered the core technologies that power the web. My primary
            professional experience lies in working with large-scale React/Redux 
            codebases and enhancing complex WordPress multi-site networks, but I'm also
            passionate about exploring new technologies as project demands evolve.
          </p>
          <div className="about-button-container">
            <Link className="about-nav-link" to="/projects">
              see my work{" "}
            </Link>
            <Link className="about-nav-link" to="/contact">
              get in touch{" "}
            </Link>
            <a
              className="about-nav-link"
              href="https://jacob-stewart-resume.tiiny.site"
              target="_blank"
              rel="noreferrer"
            >
              resume
            </a>
          </div>
        </div>
        <div className="about-border"></div>
        <div className="portrait-container">
          <img src={portrait} className="portrait" alt="portrait" />
        </div>
      </motion.section>
    </>
  );
}
