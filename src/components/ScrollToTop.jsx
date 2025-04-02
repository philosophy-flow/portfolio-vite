import { useEffect, Fragment } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

function ScrollToTop({ history, children }) {
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
        return () => {
            unlisten();
        };
    }, [history]);

    return <Fragment>{children}</Fragment>;
}

ScrollToTop.propTypes = {
    history: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
};

const ScrollToTopWithRouter = withRouter(ScrollToTop);
export default ScrollToTopWithRouter;
