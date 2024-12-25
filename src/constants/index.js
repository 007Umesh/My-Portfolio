import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.png";
import moreReposImage from "../assets/moreReposImage.jpg"

export const HERO_CONTENT = `I am a passionate software developer with a keen interest in building responsive and intuitive web applications. My expertise spans modern front-end frameworks like ReactJS and Tailwind CSS, along with experience in backend technologies such as Firebase and intermediate SQL. Through hands-on projects, I have demonstrated my ability to create innovative and user-centric solutions that blend functionality with aesthetic design. I aim to contribute to impactful projects that push the boundaries of technology and elevate user experiences.`;  

export const ABOUT_TEXT = `I am an enthusiastic and driven software developer with a strong foundation in web technologies and a passion for crafting seamless digital experiences. With expertise in ReactJS, Tailwind CSS, Firebase, and JavaScript, I have developed and deployed projects like a Personal Finance Dashboard and a Responsive News Website. These experiences have sharpened my problem-solving abilities, attention to detail, and capacity for creating efficient and scalable solutions. I thrive on learning new tools, tackling challenges head-on, and collaborating with teams to bring ideas to life. Beyond development, I enjoy exploring emerging technologies, staying current with industry trends, and contributing to projects that make a difference.`;  

export const PROJECTS = [
    {
      title: "Personal Finance Dashboard",
      image: project1,
      description:
        "A web application for managing personal finances with features like real-time expense tracking and interactive visualizations .",
      technologies: ["ReactJS", "Tailwind CSS", "Firebase"],
      liveDemo:"https://budgetvista.netlify.app/"
    },
    {
      title: "SUMMAREASE",
      image: project2,
      description:
        "A dialogue summarization app providing concise summaries of lengthy conversations using NLP techniques.",
      technologies: ["ReactJS", "JavaScript", "NLP APIs"],
    },
    {
      title: "Responsive News Website",
      image: project3,
      description:
        "A responsive website for browsing news articles with a focus on readability and mobile-friendly design.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Personal PortFolio",
      image: project4,
      description:
        "A modern personal portfolio website showcasing projects, skills. Designed with a clean UI and interactive animations to leave a lasting impression.",
      technologies: ["React", "Tailwind Css", "Framer Motions"],
    },
    {
      title: "Click here for more repositories",
      image: moreReposImage,
      description:
        "Explore additional projects and contributions on my GitHub profile.",
      technologies: ["GitHub"],
    },
  ];

  export const CONTACT = {
    address: "282 1ST MAIN, 7TH CROSS,KEREANGALA, KAMALANAGAR, BANGALORE-79 ",
    phoneNo: "+91 8088174820",
    email: "umeshsgowda770@gmail.com",
  };