import "./Home.css";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

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
                        <span style={{ fontSize: "inherit" }}>Hi. I'm</span>{" "}
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Jacob,")
                                    .callFunction((typewriter) => {
                                        setTimeout(() => {
                                            typewriter.elements.cursor.remove(),
                                                typewriter.elements.wrapper.classList.add(
                                                    "underlined"
                                                );
                                        }, 500);
                                    })
                                    .start();
                            }}
                        />
                        <span style={{ fontSize: "inherit" }}>
                            {" "}
                            an NYC based software developer.
                        </span>
                    </h1>
                </div>
            </motion.section>
        </>
    );
}
