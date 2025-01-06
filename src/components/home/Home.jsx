import "./Home.css";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.section
        className="Home"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 25 }}
        transition={{ duration: 0.5 }}
      >
        <div className="home-content-container">
          <h1 className="home-text">
            Hi. I'm Jacob, an NYC based software developer.
          </h1>
        </div>
      </motion.section>
    </>
  );
}
