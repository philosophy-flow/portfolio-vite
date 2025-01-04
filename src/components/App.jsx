import { useState, useEffect } from "react";
import { Route, Switch, Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./home/Home";
import About from "./about/About";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Error from "./Error";
import ScrollToTop from "./ScrollToTop";

export default function App() {
  const location = useLocation();
  const [activePath, setActivePath] = useState("");

  // set active path
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActivePath("home");
        break;
      case "/about":
        setActivePath("about");
        break;
      case "/projects":
        setActivePath("projects");
        break;
      case "/contact":
        setActivePath("contact");
        break;
      default:
        setActivePath("");
        break;
    }
  }, [location.pathname]);

  return (
    <main className="main">
      <nav className="navigation">
        <Link
          className="nav-link"
          to="/"
          style={
            activePath === "home" ? { color: "#9B6A9B", cursor: "default" } : {}
          }
        >
          Home
        </Link>

        <Link
          className="nav-link"
          to="/about"
          style={
            activePath === "about"
              ? { color: "#e2abb1", cursor: "default" }
              : {}
          }
        >
          About
        </Link>

        <Link
          className="nav-link"
          to="/projects"
          style={
            activePath === "projects"
              ? { color: "#539cbe", cursor: "default" }
              : {}
          }
        >
          Projects
        </Link>

        <Link
          className="nav-link"
          to="/contact"
          style={
            activePath === "contact"
              ? { color: "#79C7A0", cursor: "default" }
              : {}
          }
        >
          Contact
        </Link>
      </nav>

      <ScrollToTop>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
        </AnimatePresence>
      </ScrollToTop>
    </main>
  );
}
