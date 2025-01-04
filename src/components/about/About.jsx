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
          <h2 className="about-header">About Me</h2>
          <p className="about-body">
            As an experienced web developer and leader, I thrive on tackling
            complex challenges and continuously expanding my knowledge. With a
            proven track record of collaborating with globally distributed
            teams, I excel at utilizing cutting-edge technologies to deliver
            innovative solutions.
          </p>
          <p className="about-body">
            My expertise is rooted in front-end development, where I have
            mastered the core technologies that power the web. My primary
            experience lies in working with large-scale React/Redux codebases
            and enhancing complex WordPress multi-site themes, but I'm also
            passionate about full-stack work and enjoy exploring new
            technologies as the project demands.
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
              href="https://pdfhost.io/v/3klOdtKhy_jacob_stewart_resume"
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
