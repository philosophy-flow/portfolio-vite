// import felineFinderImg from "../../assets/project-images/feline-finder-img.png";
// import pricingCompImg from "../../assets/project-images/interactive-pricing-component-img.png";
import crowdfundingProduct from "../../assets/project-images/crowdfunding-product-img.png";
import invoiceApp from "../../assets/project-images/invoice-app-img.png";
import planetaryFacts from "../../assets/project-images/planetary-facts.png";
import quizApp from "../../assets/project-images/quiz-app-img.png";
import todoList from "../../assets/project-images/to-do-app-img.png";
import jobFilter from "../../assets/project-images/job-filter-img.png";
// import meetLandingPage from "../../assets/project-images/meet-landing-page-img.png";
// import podLandingPage from "../../assets/project-images/pod-landing-page-img.png";
// import typemasterLandingPage from "../../assets/project-images/typemaster-img.png";
import fakeNewsFlush from "../../assets/project-images/fake-news-flush-img.png";
// import aceHotelCareers from "../../assets/project-images/ace-hotel-careers-img.png";
// import aceHotelNav from "../../assets/project-images/navigation-refresh-img.png";

export const projects = [
    // {
    //   name: "Ace Hotel | Main Navigation Refresh",
    //   img: aceHotelNav,
    //   description:
    //     "This project revolved around modernizing the website's navigation experience to be more reflective of the brand today. My role on this project included the development of custom select elements with dynamic text input support and a custom drop-down stepper using JavaScript classes. The components feature keyboard and screen reader support to ensure robust accessibility.",
    //   demoLink: "https://acehotel.com",
    // },
    {
        name: "Fake News Flush",
        img: fakeNewsFlush,
        description:
            "This full-stack application leverages a custom-trained LSTM neural network to perform binary text classification by labeling news articles as real or fake. A React client interfaces with a FastAPI backend that pre-processes request input and uses a model file to make predictions. The model file is hosted on a Cloudflare R2 bucket, and Cloudflare is also used to mangage the DNS configuration for the associated custom domain.",
        demoLink: "https://fakenewsflush.app",
        repoLink: "https://github.com/philosophy-flow/capstone-backend",
    },
    // {
    //   name: "Ace Hotel | Careers Page Property Cards",
    //   img: aceHotelCareers,
    //   description:
    //     "A module developed for the Ace Hotel website's career page to enhance color and interactivity. The cards are fully responsive and animate on hover. When a user clicks a property card they are routed to that property's career page. CMS users are also able to conveniently update card images and links. This module is live on production and is visited many times every day.",
    //   demoLink: "https://acehotel.com/careers",
    //   repoLink: "",
    // },
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
    // {
    //   name: "Custom Pricing Component",
    //   img: pricingCompImg,
    //   description:
    //     "An interactive pricing component that features a customized range bar and toggle button by utilizing CSS pseudo selectors. Functional programming concepts are used to manage state based on the slider bar value and whether or not a discount is applied.",
    //   demoLink:
    //     "https://philosophy-flow.github.io/interactive-pricing-component/",
    //   repoLink:
    //     "https://github.com/philosophy-flow/interactive-pricing-component",
    // },
    {
        name: "Crowdfunding Product Page",
        img: crowdfundingProduct,
        description:
            "An interactive crowdfunding product sign up page built with vanilla JavaScript. The user is able to select a reward type or simply back the project. After making a selection, a modal appears that then allows the user to specify a donation amount. The total amount raised, the number of backers, the number of reward items, and the progress bar are updated accordingly.",
        demoLink:
            "https://philosophy-flow.github.io/crowdfunding-product-page/",
        repoLink:
            "https://github.com/philosophy-flow/crowdfunding-product-page",
    },
    // {
    //   name: "FelineFinder",
    //   img: felineFinderImg,
    //   description:
    //     "A landing page for an application that specializes in finding friends for your cat. The page is responsive and demonstrates the power of Bootstrap, including the grid system and the carousel feature.",
    //   demoLink: "https://philosophy-flow.github.io/felinefinder/",
    //   repoLink: "https://github.com/philosophy-flow/felinefinder",
    // },
    // {
    //   name: '"Meet" Landing Page',
    //   img: meetLandingPage,
    //   description:
    //     "A mobile first, fully responsive landing page for an app named Meet. Two breakpoints were created to strategically compliment the content, and a small amount of JavaScript was used to implement a simple scroll button and download modal. Care was taken to ensure that smooth scrolling and CSS transitions were applied across devices to maximize UX.",
    //   demoLink: "https://philosophy-flow.github.io/meet-landing-page/",
    //   repoLink: "https://github.com/philosophy-flow/meet-landing-page",
    // },
    // {
    //   name: '"Pod" Landing Page',
    //   img: podLandingPage,
    //   description:
    //     "A mobile first, fully responsive landing page for an app named Pod. Multiple breakpoints were created to strategically compliment the content, and special attention was paid to tablet displays. A small amount of JavaScript was utilized to create custom email validation for the form.",
    //   demoLink: "https://philosophy-flow.github.io/pod-request-landing-page/",
    //   repoLink: "https://github.com/philosophy-flow/pod-request-landing-page",
    // },
    // {
    //   name: "Product Landing Page",
    //   img: typemasterLandingPage,
    //   description:
    //     "A mobile first, fully responsive landing page for a product. Breakpoints were created to strategically compliment the content, and a combination of negative margins and absolute positioning techniques were utilized to position certain elements.",
    //   demoLink: "https://philosophy-flow.github.io/typemaster-landing-page/",
    //   repoLink: "https://github.com/philosophy-flow/typemaster-landing-page",
    // }
];
