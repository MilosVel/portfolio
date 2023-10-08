import myFirstChatApp from "@/public/My_First_Chat_App.png";
import advancedChatApp from "@/public/Advanced_Chat_App.png";
import threads from "@/public/Threads.png";
import postSharingApp from "@/public/Post_Sharing_App.png";
import favouritePlacesApp from "@/public/favourite_places_app.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
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
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
  {
    title: "Master's degree",
    faculty: "Faculty of Organizational Science",
    data: "2015-2016 | Grade: 9.29",
  },
  {
    title: "Bachelor's degree",
    faculty: "Graduate School of Business Studies",
    data: "2014-2015 | Grade: 8.58",
  },
  {
    title: "Bachelor of Appleid Studies",
    faculty: "Belgrade Business Studies",
    data: "2011-2014 | Grade: 8.27",
  },
  {
    title: "Web Developer (JS + React)",
    faculty: "IT BootCamp",
    data: "2021-2021 | Grade: 9.18"
  },
];

export const experiencesData = [
  {
    title: "Software Developer",
    date: "Nov. 2021 - Oct. 2023",
    firm: "HireApp",
    fullTime: false,
  },
  {
    title: "Administrator",
    date: "Jan. 2022 - present",
    firm: "City Administration",
    fullTime: true,
  },
  {
    title: "General Affair Specialist",
    date: "May 2020 - Dec. 2021",
    firm: "Atlantic Group",
    fullTime: true,
  },
  {
    title: "Operations Scheduling Engineer",
    date: "Avg. 2019 - Apr. 2020",
    firm: "Kromberg & Schubert",
    fullTime: true,
  },
  {
    title: "General Affair Specialist",
    date: "Dec. 2017 - Jul 2019",
    firm: "Atlantic Group",
    fullTime: true,
  },
] as const;


export const projectsData = [
  {
    title: "My First Chat App",
    description:
      "This is my first chat app. Users can login or signup, and after creating profile they can have real-time communication",
    tags: ["React", "Node", "Express", "Socket.IO", "Mongo DB"],
    imageUrl: myFirstChatApp,
    projectLinks: [
      "https://github.com/MilosVel/ChatApp1-frontend",
      "https://github.com/MilosVel/ChatApp1-backend",
      "https://milos-velickovic-chatapp1.onrender.com",
    ],
  },
  {
    title: "Advanced Chat App",
    description:
      "App for group and private real-time communication. App also covers: authorization, authentification, image upload on cloudinary...",
    tags: ["React", "Redux", "Node", "Express", "Socket.IO", "Mongo DB"],
    imageUrl: advancedChatApp,
    projectLinks: [
      "https://github.com/MilosVel/ChatApp-frontend",
      "https://github.com/MilosVel/ChatApp-backend",
      "https://milos-velickovic-chatapp.onrender.com",
    ],
  },
  {
    title: "Threads",
    description:
      "Feature-rich app. Clerk is used for authentification, UploadThing for uploading image, forms are managed with react hook form, data validation with Zod...",
    tags: ["TypeScript", "Next.js", "React", "Mongo DB"],
    imageUrl: threads,
    projectLinks: [
      "https://github.com/MilosVel/ThreadsApp",
      "https://threads-g04cg9zbr-milosvel.vercel.app/",
    ],
  },
  {
    title: " Post Sharing App",
    description:
      "Next-auth is used for authorization. After authentification user can create, update and delete its own posts. Other users's post he can only read",
    tags: ["Next.js"],
    imageUrl: postSharingApp,
    projectLinks: [
      "https://github.com/MilosVel/Next2023",
      "https://next2023-ex31bt2fb-milosvel.vercel.app/",
    ],
  },
  {
    title: "Favourite Places App",
    description:
      "Users can have look at other users's favourite places. After authorization and authentification, user can create, update, delete its own favourite places. User cann't change other places, except its own",
    tags: ["React", "Node", "Express", "JWT", "Mongo DB"],
    imageUrl: favouritePlacesApp,
    projectLinks: [
      "https://github.com/MilosVel/Mern-Stack-App",
      "https://milos-velickovic-mern-stack-app.onrender.com/",
    ],
  },
] as const;

export const skillsData = [
  "JavaScript",
  "React",
  "ReactNative",
  "Express",
  "Next.js",
  "Nest",
  "HTML",
  "CSS",
  "MongoDB",
  "MySQL",
  "TypeScript",
  "Socket.IO",
  "Python",
  "Git",
  "Docker",
] as const;
