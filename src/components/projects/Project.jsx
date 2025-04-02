import { useEffect } from "react";
import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Project({ project }) {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
        // if (!inView) {
        //   controls.start('hidden')
        // }
    }, [controls, inView]);

    const boxVariants = {
        hidden: { scale: 0, y: 25 },
        visible: {
            scale: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={boxVariants}
            className="project"
        >
            <div className="project-img-container">
                <img className="project-img" src={project.img} alt="" />
            </div>
            <div className="project-content-container">
                <h2 className="project-name">{project.name}</h2>
                <p className="project-description">{project.description}</p>
                <div className="project-link-container">
                    {project.demoLink && (
                        <a
                            className="project-link"
                            href={project.demoLink}
                            target="_blank"
                            rel="noreferrer"
                        >
                            live demo
                        </a>
                    )}
                    {project.repoLink && (
                        <a
                            className="project-link"
                            href={project.repoLink}
                            target="_blank"
                            rel="noreferrer"
                        >
                            github
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

Project.propTypes = {
    project: PropTypes.object.isRequired,
};
