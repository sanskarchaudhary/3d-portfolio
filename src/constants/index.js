import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  typescript,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  paintchat,
  chasit,
  threejs,
  collab,
  forecast,
  moviesystem,
  techstore,
  shoestore,
  appstore,
  artstore,
  algosort,
  supermario,
  dbnormalization,
} from "../assets";

import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import project6 from "../assets/images/project-6.png";
import project7 from "../assets/images/project-7.png";
import project8 from "../assets/images/project-8.png";
import project9 from "../assets/images/project-9.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education and Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Back End Developer",
    icon: backend,
  },
  {
    title: "Front End Developer",
    icon: mobile,
  },
  {
    title: "Quick Learner",
    icon: web,
  },
  {
    title: "Android Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    //Spring
    name: "figma",
    icon: figma,
  },
  {
    //Aspnet core
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    //Mysql
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    //Postgresql
    name: "git",
    icon: git,
  },
  {
    //Mongodb
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  // {
  //   title: "Degree of Master of Laws, LL.M.",
  //   company_name: "Stockholm University",
  //   icon: starbucks,
  //   iconBg: "#ffffff", //#383E56
  //   date: "Aug 2015 - Dec 2020",
  //   points: [
  //     "IT-Law & Gdpr",
  //     "My thesis was about the relationship between law and technology",
  //   ],
  // },
  {
    title: "Online courses",
    company_name: "Udemy",
    icon: tesla,
    iconBg: "#ffffff", //#E6DEDD
    date: "Feb 2021 - Aug 2022",
    points: [
      "Java Programming Masteclass",
      "Build Responsive Real-World Websites with Html and Css",
      "The Complete Javascript Course 2022",
      "Advanced Css and Sass",
      "Java Data Structures & Algorithms",
    ],
  },
  {
    title: "Java Developer",
    company_name: "Chitkara University",
    icon: "https://media.licdn.com/dms/image/v2/C4D0BAQFhoSxToxhXuQ/company-logo_200_200/company-logo_200_200/0/1659503334979?e=2147483647&v=beta&t=OHNAnQTPBCB4kjh7u6xbNEtc3wUrGBQqFV3RrzTuTNo",
    iconBg: "#ffffff", //#383E56
    date: "Aug 2022 - Present",
    points: [
      "Java Programming",
      "Development and databases",
      "Java tools and frameworks",
      "Complex Java development",
      "Web services and integrations",
      "Web application development",
      "Agile development",
    ],
  },
  {
    title: "Full stack Developer .NET",
    company_name: "Chitkara University",
    icon: "https://media.licdn.com/dms/image/v2/C4D0BAQFhoSxToxhXuQ/company-logo_200_200/company-logo_200_200/0/1659503334979?e=2147483647&v=beta&t=OHNAnQTPBCB4kjh7u6xbNEtc3wUrGBQqFV3RrzTuTNo",
    iconBg: "#ffffff", //#E6DEDD
    date: "Aug 2022 - Present",
    points: [
      "IT Tech and Operations",
      "Programming in C# and .NET",
      "Project methodology and agile methods",
      "Backend development and databases",
      "Frontend development and UX",
      "Programming methodology and testing",
      "Web technology",
    ],
  },
];

const testimonials = [
  {
    testimonial: "",
    name: "Person1",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "",
    name: "Person2",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "",
    name: "Person3",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Calculator",
    description:
      "A simple yet powerful web-based calculator supporting basic arithmetic operations with a user-friendly interface.",
    tags: [
      {
        name: "Web Development",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://calculator-kappa-coral.vercel.app/",
  },
  {
    name: "Note App",
    description:
      "A web-based note-taking application with a simple UI, allowing users to create, edit, and delete notes seamlessly.",
    tags: [
      {
        name: "Web Development",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://note-app-two-rho.vercel.app/",
  },
  {
    name: "Perfect Computing",
    description:
      "An e-commerce platform specializing in second-hand laptops with real-time price listings and secure checkout options.",
    tags: [
      {
        name: "Web Development",
        color: "orange-text-gradient",
      },
      {
        name: "Next.js",
        color: "yellow-text-gradient",
      },
      {
        name: "E-commerce",
        color: "green-text-gradient",
      },
    ],
    image: project7,
    source_code_link: "https://webapp-laptop-shoping.vercel.app/",
  },
  {
    name: "Dropshipping",
    description:
      "An e-commerce web project designed to simplify online product sourcing and automate order fulfillment for entrepreneurs.",
    tags: [
      {
        name: "E-commerce",
        color: "blue-text-gradient",
      },
      {
        name: "Automation",
        color: "purple-text-gradient",
      },
      {
        name: "Web App",
        color: "orange-text-gradient",
      },
    ],
    image: project9,
    source_code_link: "https://dropshipping-azure-eta.vercel.app/",
  },
  {
    name: "Portfolio-1",
    description:
      "A modern and responsive personal portfolio showcasing projects, skills, and experience in an interactive layout.",
    tags: [
      {
        name: "Web Design",
        color: "pink-text-gradient",
      },
      {
        name: "UI/UX",
        color: "purple-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://portfolio-dun-delta-67.vercel.app/",
  },
  {
    name: "HNM",
    description:
      "A digital platform designed to connect donors with people in need, helping combat hunger through an online support system.",
    tags: [
      {
        name: "Web Design",
        color: "violet-text-gradient",
      },
      {
        name: "Non-Profit",
        color: "blue-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://hunger-no-more-hnm-evfh.vercel.app/",
  },
  {
    name: "Tik Tak Toe",
    description:
      "A simple yet engaging browser-based Tic Tac Toe game with multiplayer support and an intuitive interface.",
    tags: [
      {
        name: "Web Design",
        color: "grey-text-gradient2",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://tik-tac-toe-two.vercel.app/",
  },
  {
    name: "Hotel Booking Website",
    description:
      "A seamless hotel booking platform with real-time availability, booking confirmation, and user-friendly navigation.",
    tags: [
      {
        name: "Applications",
        color: "blue-text-gradient",
      },
      {
        name: "TravelTech",
        color: "orange-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://hotel-booking-lovat.vercel.app/",
  },
  {
    name: "Chat App",
    description:
      "A feature-rich real-time chat application supporting instant messaging, user authentication, and group chats.",
    tags: [
      {
        name: "Applications",
        color: "green-text-gradient",
      },
      {
        name: "Real-Time",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.io",
        color: "purple-text-gradient",
      },
    ],
    image: project8,
    source_code_link:
      "https://chat-app-git-main-sanskars-projects-dee1c0b9.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
