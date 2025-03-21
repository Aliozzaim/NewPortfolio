import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
} from "../assets";
import ss1 from "../assets/ss4.png";
import sompo from "../assets/company/sompo.png";
import poznan from "../assets/company/poznan.png";
import eru from "../assets/company/eru.png";
import patika from "../assets/company/patika.png";
import fiver from "../assets/company/fiverr.jpg";

import nakilport from "../assets/nakilport2.png";
import MercanSoft from "../assets/mercansoft.png";
import ecommerce from "../assets/art.png";
import garden from "../assets/garden.png";
import faycalWP2 from "../assets/falcalWP2.png";
import consult from "../assets/consul.png";
import upBox from "../assets/upbox.png";
import Meal from "../assets/meal.png";
import ws from "../assets/company/ws.png";
import deco from "../assets/deco.png";

export const navLinks = [
  {
    id: "blog",
    title: "Blog",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "Projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Rust Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AWS Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  { name: "Next.js" },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: reactjs,
  },
  {
    name: "Vuex",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "WithSecure",
    icon: ws,
    location: "Poznan, Poland",
    iconBg: "#383E56",
    date: "june 2024 - Present",
    points: [
      "Maintenance and improvement of the company's web applications.",
      "Technologies: Vue 3, Svelte, TypeScript, Jira",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Freelancer",
    location: "Remote",
    icon: fiver,
    iconBg: "#E6DEDD",
    date: "September 2023 - may 2024",
    points: [
      "Successfully utilized Next.js to build fast-loading, server-rendered React applications.",
      "Proactively reached out to clients to understand their needs and offered helpful suggestions.",
      "Worked on API development, ensuring efficient and secure data exchange.",
      "Managed databases to ensure data integrity and optimal performance.",
      "Optimized servers for improved application speed and reliability.",
    ],
  },

  {
    title: "Frontend Developer intern",
    company_name: "Sompo Sigorta",
    icon: sompo,
    location: "Istanbul, Turkey (Remote)",
    iconBg: "#383E56",
    date: "March 2023 - August 2023",
    points: [
      "Technologies: Vue.js, React.js, PrimeReact, Tailwind.",
      "Maintained and improved the client portal web applications.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "I contributed to the development of the word application, which uses +200 thousand users in the Android market.",
    ],
  },
];

const education = [
  {
    title: "Master of Science - Product Engineering",
    company_name: "Poznan University Of Technology",
    icon: poznan,
    iconBg: "#E6DEDD",
    date: "February 2023 - July 2024",
    location: " Poznan Poland",
    points: [],
  },
  {
    title: "Full Stack Bootcamp",
    company_name: "Patika.dev",
    icon: patika,
    iconBg: "#E6DEDD",
    location: "Remote",
    date: "October 2022 - March 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Aeronautical Engineering",
    company_name: "Erciyes University",
    icon: eru,
    location: "  Turkey",
    iconBg: "#383E56",
    date: "September 2018 - September 2022",
    points: [],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    title: "Consultancy",
    description:
      "Consultancy is a company website that shows the services and offers of the company. It is built css and javascript. It features a responsive design and a user-friendly interface.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    demoLink: "https://consultancy-two-coral.vercel.app/",
    thumbnail: consult,
    link: "https://consultancy-two-coral.vercel.app/",
  },
  {
    title: "NakilPort",
    description:
      "NakilPort is a platform that connects carriers and shippers. It allows carriers to find loads and shippers to find carriers. The platform is built with Next.js and Firebase, and it features a responsive design, user authentication, and a restful API.",
    tags: [
      {
        name: "Next.js",
        color: "bg-gradient-to-r from-slate-300 to-slate-500",
      },
      {
        name: "RestFul API",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "bg-gradient-to-r from-blue-600 to-violet-600",
      },
    ],
    demoLink: "https://nakilport.com/",
    thumbnail: nakilport,
    link: "https://nakilport.com/",
  },
  {
    title: "3D Art Exhibition",
    description:
      "This project demonstrates my web development skills through visually appealing 3D scenes and animations. With a user-friendly interface on any device, the gallery seamlessly integrates interactive elements, showcasing the captivating potential of art and technology. ",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    demoLink: "https://3d-gallery-lime.vercel.app/",
    thumbnail: ecommerce,
    link: "https://3d-gallery-lime.vercel.app/",
  },
  {
    title: "MercanSoft",
    description:
      "MercanSoft is a company website that shows the services and offers of the company. It is built css and javascript. It features a responsive design and a user-friendly interface.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    demoLink: "https://mercan-soft-3qxnl786k-aliozzaim.vercel.app/",
    thumbnail: MercanSoft,
    link: "https://mercan-soft-3qxnl786k-aliozzaim.vercel.app/",
  },
  {
    title: "UpBox",
    description:
      "UpBox is a company website that shows the services and offers of the company. It is built css and javascript. It features a responsive design and a user-friendly interface.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    demoLink: "https://up-box.vercel.app/#",
    thumbnail: upBox,
    link: "https://up-box.vercel.app/#",
  },
  {
    title: "Decorotika",
    description:
      "Decorotika is a TypeScript-based e-commerce platform for home furniture and decor. Built with PostgreSQL and Express.js, it features user authentication, product management, order processing, and an admin panel. The platform operates in Serbia, Turkey, Albania, and Montenegro, attracting over 2,000 daily visitors.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
    ],
    demoLink: "https://decorotika.rs/",
    thumbnail: deco,
    link: "https://decorotika.rs/",
  },
  {
    title: "Portfolio Website",
    description:
      "This project a modern and interactive portfolio website built with React.js, Three Fiber, and Framer Motion. With a sleek design and smooth animations, the website effectively highlights my projects, expertise, and achievements.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Three Fiber",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
    ],
    demoLink: "https://faycal-djanane.vercel.app/",
    thumbnail: faycalWP2,
    link: "https://github.com/Aliozzaim/FaycalDjanane",
  },
  {
    title: "Garden Planner",
    description:
      "Garden Planner is a web application that showcases a responsive image gallery with a Masonry layout. It allows users to explore a collection of images, view them in a modal, and navigate through a slideshow. The application also features a search functionality for easy image discovery.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Masonry",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    demoLink: "https://adtask-jet.vercel.app/",
    thumbnail: garden,
    link: "https://github.com/Aliozzaim/AdTask",
  },

  {
    title: "TripBook",
    description:
      "This project is a full-stack application that allows users to create, view, update, and delete places. It consists of a backend API built with Node.js, Express.js, and MongoDB, and a frontend user interface built with React.js.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
    ],
    demoLink: "https://github.com/Aliozzaim/TravelExplorer",
    thumbnail: ss1,
    link: "https://github.com/Aliozzaim/TravelExplorer",
  },
  {
    title: "Daily Meal",
    description:
      "Daily Meal is a web application that allows users to search for recipes based on ingredients. It features a responsive design, user authentication, and a restful API.",
    tags: [
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
      {
        name: "Vue.js",
        color: "green-text-gradient",
      },
      {
        name: "Vuex",
        color: "pink-text-gradient",
      },
    ],
    demoLink: "https://dailymeal.vercel.app/",
    thumbnail: Meal,
    link: "https://github.com/Aliozzaim/dailymeal",
  },
  {
    title: "Consultancy",
    description:
      "Consultancy is a company website that shows the services and offers of the company. It is built css and javascript. It features a responsive design and a user-friendly interface.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    demoLink: "https://consultancy-two-coral.vercel.app/",
    thumbnail: consult,
    link: "https://consultancy-two-coral.vercel.app/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  education,
};
