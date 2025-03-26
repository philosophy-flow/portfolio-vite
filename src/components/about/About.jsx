import "./About.css";
import portrait from "../../assets/portrait.jpg";
import pupGlasses from "../../assets/lightbox-images/pup-glasses.jpg";
import pupHat from "../../assets/lightbox-images/pup-hat.jpg";
import pupStairs from "../../assets/lightbox-images/pup-stairs.jpg";

import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";

import { useState } from "react";
import { motion } from "framer-motion";

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
                        As an accomplished software engineer and leader, I
                        thrive on tackling complex challenges, constantly
                        expanding my knowledge, and sharing what I know with
                        others. With a proven track record of effective
                        collaboration and exemplary self-teaching capabilities,
                        I excel at working in both team environments and
                        independently.
                    </p>
                    <p className="about-body">
                        When I'm not building something at work, I'm usually
                        building something at home. If I'm not doing that, then
                        you might find me grinding Leetcode, enjoying a long
                        walk with my dog, or just trying to avoid screens in the
                        general sense (don't ask me how it's going).
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
