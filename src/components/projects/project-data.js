import invoiceApp from "../../assets/project-images/invoice-app-img.png";
import planetaryFacts from "../../assets/project-images/planetary-facts.png";
import quizApp from "../../assets/project-images/quiz-app-img.png";
import todoList from "../../assets/project-images/to-do-app-img.png";
import jobFilter from "../../assets/project-images/job-filter-img.png";
import fakeNewsFlush from "../../assets/project-images/fake-news-flush-img.png";
import habitsior from "../../assets/project-images/habitsior-img.png";
import cloudBase from "../../assets/project-images/cloud-base-img.png";

export const projects = [
    {
        name: "Habitsior",
        img: habitsior,
        description:
            "Habitsior is a full-stack app for tracking personal habits over time, built to showcase a modern tech stack and thoughtful feature design. The frontend is developed with React/Vite, TypeScript, Tailwind CSS, and Redux Toolkit Query; the backend is powered by FastAPI, SQLModel, and PostgreSQL. Core features include user authentication with email verification and JWT-based sessions, habit management, and daily progress tracking. Links to the live app, API docs, and supporting assets are also available via the README file on either repository.",
        demoLink: "https://habitsior.app",
        repoLink: "https://github.com/philosophy-flow/habit-tracker-backend",
    },
    {
        name: "Cloud Base",
        img: cloudBase,
        description:
            "Cloud Base is my self-hosted cloud infrastructure powered by AWS Lightsail, where I leverage Docker Compose to orchestrate a robust nginx reverse-proxy. This setup dynamically routes traffic across multiple domains, efficiently managing requests to isolated Docker containers running diverse applications — each with independent deployments and lifecycles. It's my personal, fully containerized cloud environment optimized for rapid development, continuous deployment, and minimal downtime.",
        repoLink: "https://github.com/philosophy-flow/cloud-base",
    },
    {
        name: "Fake News Flush",
        img: fakeNewsFlush,
        description:
            "At its core, this full-stack app uses a custom-trained LSTM model to sort incoming news articles into “real” or “fake” buckets. A lean React front end offers a simple text field that posts content to a FastAPI endpoint. There, standard NLP preprocessing — tokenization, padding, cleaning — happens before the model weights (stored in a Cloudflare R2 bucket) are summoned for inference. Furthermore,  DNS routing and custom-domain management live in Cloudflare's edge network. The result is an  end-to-end MLOps demo: serverless model storage, automated edge delivery, and real-time AI classification, all wrapped up in a minimalist web interface.",
        demoLink: "https://fakenewsflush.app",
        repoLink: "https://github.com/philosophy-flow/capstone-backend",
    },
    {
        name: "Invoice Application",
        img: invoiceApp,
        description:
            "A mobile first, fully responsive React application that features a complex form built with formik/yup. Additionally, this project integrates the React Datepicker and React Select libraries in order to provide a more robust and customized experience. A user is able to create, modify, and delete invoices that feature many different properties. Tailwind is used for almost all custom CSS, including animations and responsive breakpoints.",
        demoLink: "https://invoice-application.vercel.app/invoices",
        repoLink: "https://github.com/philosophy-flow/invoice-application",
    },
    {
        name: "Planetary Facts",
        img: planetaryFacts,
        description:
            "A mobile first, fully responsive React application that provides information pertaining to the planets of the Solar System. Each planet page features key information at the bottom and three separate tabs that include additional information/images.",
        demoLink: "https://planetary-factz.netlify.app/Earth",
        repoLink: "https://github.com/philosophy-flow/planets-fact-app",
    },
    {
        name: "Job Listing Filter",
        img: jobFilter,
        description:
            "A React application that displays a list of job opportunities, allowing the user to select multiple filter criteria. The user is also able to remove individual filters or clear all selected filters. A complex implementation of the filter array method is utilized to compare initial listing data to the filter object.",
        demoLink: "https://react-job-filter-app.netlify.app/",
        repoLink: "https://github.com/philosophy-flow/react-job-filter",
    },
    {
        name: "Pick a Quiz",
        img: quizApp,
        description:
            "A React application that allows the user to select from multiple categories and then take a trivia quiz. After answering all questions the user is able to see their score and view all of the missed questions and correct answers. Animations were done via Framer Motion, and quiz data was retrieved from Open Trivia DB.",
        demoLink: "https://pickaquiz.netlify.app/",
        repoLink: "https://github.com/philosophy-flow/pick-a-quiz",
    },
    {
        name: "To Do List w/ Theme Selector",
        img: todoList,
        description:
            "A React to-do list application that features the ability to categorize items based upon whether or not they have been completed; furthermore, items can be deleted individually, and all completed items can be deleted at once. The application also features a light/dark theme selector, and data is persisted via the browser's local storage.",
        demoLink: "https://react-to-do-application.netlify.app/",
        repoLink: "https://github.com/philosophy-flow/to-do-app",
    },
];
