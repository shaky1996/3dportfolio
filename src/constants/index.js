import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    threejs,
    barcelona,
    portfolio,
    ufit
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const technologies = [
    {
        title: "HTML 5",
      icon: html,
    },
    {
        title: "CSS 3",
      icon: css,
    },
    {
        title: "JavaScript",
      icon: javascript,
    },
    {
        title: "React JS",
      icon: reactjs,
    },
    {
        title: "Tailwind CSS",
      icon: tailwind,
    },
    {
        title: "Three JS",
      icon: threejs,
    },
    {
        title: "git",
      icon: git,
    },
  ];
  
  const projects = [
    {
      name: "FC Barcelona",
      description:
        "One-page responsive HTML website serves as a demonstration of my expertise in web fundamentals through the utilization of HTML, CSS, JavaScript and fetching data from an API without using any frameworks.",
      tags: [
        {
          name: "html5",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javaScript",
          color: "pink-text-gradient",
        },
        {
            name: "restapi",
            color: "green-text-gradient",
          },
      ],
      image: barcelona,
      source_code_link: "https://github.com/shaky1996/portfolio_barcelona",
      demo_link: 'https://shakbarcelona2024.web.app/'
    },
    {
      name: "uFit",
      description:
        "*Still under developement. React Native fitness app — lets users find instructions for different workouts with an easy-to-use interface. Users also can track workouts using built-in templates.",
      tags: [
        {
          name: "reactNative",
          color: "blue-text-gradient",
        },
        {
          name: "javaScript",
          color: "green-text-gradient",
        },
        {
          name: "expoGo",
          color: "pink-text-gradient",
        },
      ],
      image: ufit,
      source_code_link: "https://github.com/shaky1996/uFit",
      demo_link: 'https://snack.expo.dev/@yuldashev1996/ufit---portfolio-project-?platform=ios'
    },
    {
      name: "Portfolio v1",
      description:
        "My first portfolio website. Fully reponsive website built with React and react-bootstrap. Implemneted the use of framer motion animations as well as bootstrap classes for resposnive design.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/shaky1996/Portfolio",
      demo_link: 'https://portfolioshakhzod2024.web.app/'
    },
  ];
  
  export { technologies,  projects };