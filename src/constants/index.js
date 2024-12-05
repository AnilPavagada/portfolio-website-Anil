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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  you,
  midbook,
  forver,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
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
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
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
    title: "Signal Telecommunication Intern at South Western Railways",
    company_name: "SOUTH WESTERN RAILWAYS Bangalore Division ",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sep 2023 - Oct 2023",
    points: ["Interned in the Signal Telecommunication department at South Western Railways, gaining hands-on experience in OFC, Railnet, Network Management Systems, and signaling technologies."
      
    ],
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
    name: "youtube-clone",
    description:
      "A responsive YouTube Clone built with ReactJS, Vite, and YouTube API. Features video search, playback, and trending videos display.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "youtube data api v3",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: you,
    source_code_link: "https://github.com/AnilPavagada/YOUTUBECLONE-FROM-ANIL",
  },
  {
    name: "Fashion Forever",
    description:
      "Fashion Forever is a modern clothing e-commerce platform offering seamless navigation, exclusive features, and stylish design built with React and Tailwind CSS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
    ],
    image: forver,
    source_code_link: "https://github.com/AnilPavagada/Fashion-Forever",
  },
  {
    name: "MediBook",
    description:
      "The Doctor Appointment Booking website allows users to view doctor profiles, book appointments, and manage them, built with ReactJS, Vite, and styled using Tailwind CSS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "React Router",
        color: "pink-text-gradient",
      },
    ],
    image: midbook,
    source_code_link: "https://github.com/AnilPavagada/Doctor-Appointment-Booking-Website-in-ReactJS-",
  },
];

export { services, technologies, experiences, testimonials, projects };
