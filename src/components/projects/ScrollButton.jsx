import { useState } from "react";
import UpArrow from "../icons/UpArrow";

export default function ScrollButton() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <button
            className="scroll-button"
            style={{ display: visible ? "inline" : "none" }}
            onClick={scrollToTop}
        >
            <UpArrow />
        </button>
    );
}
