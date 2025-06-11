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
                        applications and delivering software solutions that
                        solve complex business problems. I embrace an ownership
                        mentality when it comes to the code I write, taking
                        pride in creating maintainable, scalable systems while
                        naturally gravitating toward team leadership and
                        mentorship roles.
                    </p>
                    <p className="about-body">
                        Currently, I'm the lead engineer at Ace Hotel Group,
                        where I set technical standards for our 9-site network
                        infrastructure and maintain 99.9% uptime. I've
                        spearheaded complex deployments for new hotel launches,
                        led platform migrations that save thousands annually,
                        and guided external teams toward more impactful work. My
                        foundation in enterprise development comes from
                        Capgemini, where I participated in the modernization of
                        an insurance acquisition experience with React and Redux
                        while mentoring junior developers and consistently
                        exceeding expectations.
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
                            href="https://basepraxmatic.net/jacob-stewart-resume.pdf"
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
                    styles={{
                        container: {
                            background: "#e5eaedbf",
                        },
                        button: {
                            filter: "none",
                        },
                        icon: {
                            backgroundColor: "#000",
                            boxShadow: "none",
                        },
                    }}
                />
            </motion.section>
        </>
    );
}
