import invoiceApp from "../../assets/project-images/invoice-app-img.png";
import quizApp from "../../assets/project-images/quiz-app-img.png";
import todoList from "../../assets/project-images/to-do-app-img.png";
import fakeNewsFlush from "../../assets/project-images/fake-news-flush-img.png";
import habitsior from "../../assets/project-images/habitsior-img.png";
import cloudBase from "../../assets/project-images/cloud-base-img.png";

export const projects = [
    {
        name: "Habitsior",
        img: habitsior,
        description:
            "A full-stack app for tracking personal habits over time, built to showcase a modern tech stack and thoughtful feature design. The frontend is developed with React/Vite, TypeScript, Tailwind CSS, and Redux Toolkit Query; the backend is powered by FastAPI, SQLModel, and PostgreSQL. Core features include user authentication with email verification and JWT-based sessions, habit management, and daily progress tracking. Links to the live app, API docs, and supporting assets are also available via the README file on either repository.",
        demoLink: "https://habitsior.app",
        repoLink: "https://github.com/philosophy-flow/habit-tracker-backend",
    },
    {
        name: "Cloud Base",
        img: cloudBase,
        description:
            "My self-hosted cloud infrastructure powered by AWS Lightsail, where I leverage Docker Compose to orchestrate a robust nginx reverse-proxy. This setup dynamically routes traffic across multiple domains, efficiently managing requests to isolated Docker containers running diverse applications — each with independent deployments and lifecycles. It's my personal, fully containerized cloud environment optimized for rapid development, continuous deployment, and minimal downtime.",
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
        name: "BillCraft",
        img: invoiceApp,
        description:
            "A mobile-first invoicing platform built with React / Tailwind and optimized for speed, usability, and flexibility. Complex form handling ensures robust validation, while custom date pickers and select menus create a streamlined, branded UX. Users can generate, edit, and delete invoices featuring detailed line items, payment terms, and status tracking. Fully responsive layouts, custom animations, and clean state management round out this lightweight but capable application.",
        demoLink: "https://invoice-application.vercel.app/invoices",
        repoLink: "https://github.com/philosophy-flow/invoice-application",
    },
    {
        name: "QuizPick",
        img: quizApp,
        description:
            "A lightweight quiz application built with React, offering users a dynamic experience across multiple trivia categories. Smooth page transitions and animations are powered by Framer Motion, while real-time quiz data is pulled from Open Trivia DB. After completing the quiz, users can view their final score, review missed questions, and learn the correct answers. Designed for fast loading, clear feedback, and an engaging user experience across devices.",
        demoLink: "https://pickaquiz.netlify.app/",
        repoLink: "https://github.com/philosophy-flow/pick-a-quiz",
    },
    {
        name: "Daily Docket",
        img: todoList,
        description:
            "The essential developer rite of passage — a to-do list, but with a twist. This React application features categorized task management, with the ability to delete items individually or clear all completed tasks in one click. A built-in light/dark theme selector adds a personalized touch, and all task data is persisted using browser local storage for seamless usability. Lightweight, responsive, and fully self-contained — because you can never have too many to-do lists.",
        demoLink: "https://react-to-do-application.netlify.app/",
        repoLink: "https://github.com/philosophy-flow/to-do-app",
    },
];
