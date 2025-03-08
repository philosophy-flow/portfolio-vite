import "./Contact.css";

import { motion } from "framer-motion";

import ContactForm from "./ContactForm";
import GitHubIcon from "../icons/GithubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";

export default function Contact() {
    return (
        <motion.section
            className="Contact"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            transition={{ duration: 0.5 }}
        >
            <div className="contact-head-container">
                <h2 className="contact-header">Let's Connect</h2>
                <p className="contact-content">
                    I'm always open to professional and creative opportunities,
                    and I would love to hear what's on your mind.
                </p>
                <div className="contact-icon-container">
                    <a
                        href="https://github.com/philosophy-flow"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <GitHubIcon className="contact-icon" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jacob-stewart7/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                    >
                        <LinkedInIcon className="contact-icon" />
                    </a>
                </div>
            </div>
            <ContactForm />
        </motion.section>
    );
}
