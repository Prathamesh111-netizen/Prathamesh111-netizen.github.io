import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import ProximaPng from "@/public/proxima.png";
import ozdevsImg from "@/public/ozdevs-two.png";
import GameofLifePng from "@/public/GameofLifePng.jpg";
import euphorusImg from "@/public/euphorus-two.png";
import techprowlImg from "@/public/techprowl-two.png";
import { Icon } from "@iconify/react";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Technology Analyst Intern",
    location: "Deutsche Bank Group- Pune, India",
    description: "Accomplishments include creating a Grafana dashboard for Google Cloud resource monitoring, developing an AI Bot Creator Platform prototype, optimizing deployment workflows for a 40% reduction in time, achieving 99.8% accuracy in loan eligibility prediction, and enhancing user experience in the SRE toolkit and cloud monitoring platform.",
    icon: React.createElement(Icon,{ icon : "simple-icons:deutschebank", color:"#08197b"}),
    date: "May 2023 - July 2023",
  },
  {
    title: "Backend Developer",
    location: "Sarvm.AI - Remote",
    description: "Owned and managed the User Authentication module, Implemented multi-factor authentication (MFA), Utilised Elastic search, Kibana, and Logstash for efficient Logs Processing and Visualization.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 - September 2022",
  },
  {
    title: "Full Stack Developer",
    location: "Vidyadaan Sahayyak Mandal - Mumbai, India",
    description: "Enhanced the management of Donations records of approx 10-15cr for the organization, Deployed and monitored the infrastructure on AWS, including EC2 instances, RDBMS",
    icon: React.createElement(CgWorkAlt),
    date: "November 2022 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Proxima",
    description:
      "Proxima is a Collaborative Decentralized Video Meeting Website designed exclusively for developers to enhance their virtual collaboration and communication efforts. The platform provides real-time audio/video conferencing, file sharing, and a live code share feature, making it an ideal solution for developers who want to work together on projects.",
    tags: ["JavaScript", "React", "Express.js", "Nodejs", "Metamask", "Mongodb"],
    icons: [
      "logos:react",
      "devicon:socketio",
      "devicon:nodejs",
      "logos:metamask-icon",
      "devicon:mongodb-wordmark"
    ],
    imageUrl: ProximaPng,
    githubLink: "https://github.com/Prathamesh111-netizen/Proxima",
    urlLink: "https://proxima-prathamesh111-netizen.cloud.okteto.net/",
    demoLink: "https://proxima-prathamesh111-netizen.cloud.okteto.net/",
  },
  {
    title: "Banglore Food Bank",
    description:
      "The Project was created as a part of JP Morgan Chase & Co. Code for food Event. Bangalore food bank till date has served over 54 mn feeds, distributed over 250 tonnes of food, and touched lives of over 3.6 lakh beneficiaries.      The goal of this solution is to use technology to increase awareness about the issue of hunger in India and to make it easier for individuals and organizations to donate to the Bangalore Food Bank and other organizations working to combat hunger.",
    tags: ["Razorpay", "React", "JavaScript", "NodeJS", "MongoDB"],
    icons: [
      "simple-icons:razorpay",
      "logos:react",
      "devicon:nodejs",
      "devicon:mongodb"
    ],
    imageUrl: ozdevsImg,
    urlLink: "https://bgbank-bgbank-prathamesh111-netizen.cloud.okteto.net/",
    demoLink:"https://youtu.be/WOmhhXmyG3U",
    githubLink: "https://github.com/Prathamesh111-netizen/Banglore-Food-Bank",
  },
  {
    title: "Zeno",
    description:
      "Project Zeno is a solution for complex and fragmented supply chain issues created by disrupted market. It utilizes the Ethereum blockchain network and cloud off-chain databases to provide effective gas pricing. Zeno provides an easy-to-use interface to manage inventory and connect with various parties throughout the supply chain journey, such as transportation providers and retailers. Products are tracked using a unique Certificate of Origin, ensuring transparency and traceability.",
    tags: ["JavaScript", "React", "Bootstrap"],
    icons: ["logos:ethereum", "vscode-icons:file-type-light-solidity", "logos:react"],
    imageUrl: euphorusImg,
    githubLink: "https://github.com/Prathamesh111-netizen/Zeno",
    demoLink: "https://youtu.be/xkflRKNt940"
  },
  {
    title: "Game of Life",
    description:
      "Play the Game of Life online, a single player game invented in 1970 by Cambridge mathematician John Conway. Conway's Game of Life simulates the birth and death of cells on a rectangular grid. The state of a given cell in any generation depends on the state of the cell and its eight immediate neighbors in the preceding generation.",
    tags: ["Java", "MariaDB", "Swing"],
    icons: ["logos:p5js", "vscode-icons:file-type-html", "vscode-icons:file-type-css"],
    imageUrl: GameofLifePng,
    urlLink: "https://prathamesh111-netizen.github.io/Game-of-Life-Simulation/",
    githubLink: "https://github.com/Prathamesh111-netizen/Game-of-Life-Simulation",
  },
  
  {
    title: "Data Structures Visualizer",
    description: "The best way to understand complex data structures is to see them in action. We've developed interactive animations for a variety of data structures and algorithms. Our visualization tool is written in javascript using the HTML5 canvas element, and run in just about any modern browser -- including iOS devices like the iPhone and iPad, and even the web browser in the Kindle! ",
    tags: ["Python", "Flask", "Bootstrap", "SQLite"],
    icons: ["vscode-icons:file-type-html", "vscode-icons:file-type-css"],
    imageUrl: techprowlImg,
    githubLink: "https://github.com/Prathamesh111-netizen/Data-Structures-visualizer",
    urlLink: "https://techprowl.herokuapp.com",
  },
] as const;

export const skillsData = [
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "Java",
    icon: "logos:java",
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
  },
  {
    name: "Kubernetes",
    icon: "logos:kubernetes",
  },
  {
    name: "Terraform",
    icon: "devicon:terraform",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "Express.js",
    icon: "skill-icons:expressjs-light",
  },
  {
    name: "Next.js",
    icon: "skill-icons:nextjs-light",
  },
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "SCSS",
    icon: "logos:sass",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "Linux",
    icon: "flat-color-icons:linux",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
  {
    name: "PostgreSQL",
    icon: "logos:postgresql",
  },
  {
    name: "MongoDB",
    icon: "logos:mongodb-icon",
  },
  {
    name: "AWS",
    icon: "skill-icons:aws-light",
  },
  {
    name: "GCP",
    icon: "skill-icons:gcp-light",
  },
] as const;
