import "./Projects.css";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import ScrollButton from "./ScrollButton";

import Project from "./Project";
import { projects } from "./project-data";

export default function Projects() {
  return (
    <>
      <motion.section
        className="Projects"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 25 }}
        transition={{ duration: 0.5 }}
      >
        {projects.map((project) => {
          return <Project project={project} key={project.name} />;
        })}
        <ScrollButton />
      </motion.section>
    </>
  );
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
};
