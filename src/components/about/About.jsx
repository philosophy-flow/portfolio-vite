import "./About.css";
import portrait from "../../assets/portrait.jpg";
import pupGlasses from "../../assets/lightbox-images/pup-glasses.jpg";
import pupHat from "../../assets/lightbox-images/pup-hat.jpg";
import pupStairs from "../../assets/lightbox-images/pup-stairs.jpg";

import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";

import { useState } from "react";
import { motion } from "framer-motion";

import GitHubIcon from "../icons/GithubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";

export default function About() {
    const [lightboxOpen, setLightboxOpen] = useState(false);

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
                        As a web engineer with a background in physics,
                        hospitality, and computer science, I've spent the past
                        several years of my varied career building modern
                        applications from the ground up. I embrace an ownership
                        mentality when it comes to codebases and features I'm
                        responsible for, and being a team leader and mentor is
                        something I naturally gravitate towards.
                    </p>
                    <p className="about-body">
                        Currently, I work as the sole in-house web engineer at
                        Ace Hotel Group, where I lead everything from content
                        delivery to new feature development. I've guided
                        external teams, reallocated agency contracts toward more
                        impactful work, and shipped mission-critical features to
                        production. Previously, my work at Capgemini exposed me
                        to enterprise-level application development and taught
                        me the importance of automated testing when looking to
                        scale.
                    </p>
                    <p className="about-body">
                        When I'm not building something at work, I'm usually
                        building something at home. If I'm not doing that, then
                        you might find me enjoying a long walk with my dog or
                        just trying to avoid screens in the general sense (don't
                        ask me how it's going).
                    </p>
                    <div className="about-button-container">
                        <a
                            className="about-nav-link"
                            href="https://jacob-stewart-resume.tiiny.site"
                            target="_blank"
                            rel="noreferrer"
                        >
                            see my resume
                        </a>
                        <button
                            className="about-nav-link"
                            onClick={() => setLightboxOpen(true)}
                        >
                            see my dog
                        </button>
                    </div>
                    <div className="about-icon-container">
                        <a
                            href="https://github.com/philosophy-flow"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <GitHubIcon className="about-icon" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jacob-stewart7/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <LinkedInIcon className="about-icon" />
                        </a>
                    </div>
                </div>
                <div className="about-border"></div>
                <div className="portrait-container">
                    <img src={portrait} className="portrait" alt="portrait" />
                </div>
                <Lightbox
                    open={lightboxOpen}
                    close={() => setLightboxOpen(false)}
                    slides={[
                        { src: pupGlasses, alt: "dapper dog in glasses" },
                        { src: pupStairs, alt: "dapper dog on the stairs" },
                        { src: pupHat, alt: "dapper dog in a hat" },
                    ]}
                />
            </motion.section>
        </>
    );
}
