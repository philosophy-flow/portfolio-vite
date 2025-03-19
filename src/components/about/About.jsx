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
            When I'm not building something at work, I'm usually building something at home. If I'm not doing that, then you might find me grinding Leetcode, enjoying a long walk with my dog, or just trying to avoid screens in the general sense (don't ask me how it's going).
          </p>
          <div className="about-button-container">
            <a
              className="about-nav-link"
              href="https://jacob-stewart-resume.tiiny.site"
              target="_blank"
              rel="noreferrer"
            >
              resume
            </a>
            <Link className="about-nav-link" to="/projects">
              see my work{" "}
            </Link>
            <a
              className="about-nav-link"
              href="https://iili.io/3xfrJvj.jpg"
              target="_blank"
              rel="noreferrer"
            >
              see my dog{" "}
            </a>
            <Link className="about-nav-link" to="/contact">
              get in touch{" "}
            </Link>
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
