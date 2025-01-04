import { useState } from "react";

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
      <i className="fas fa-arrow-up fa-2x"></i>
    </button>
  );
}
