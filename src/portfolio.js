/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};


const bigProjects = {
  title: "My Projects",
  subtitle:
    "Explore my creative designs, UI/UX projects, frontend development work and AI-powered applications.",

  projects: [
    {
      image: require("./assets/images/project/aquaguardian-login.jpg.jpeg"),
      projectName: "AquaGuardian",
      projectDesc:
        "A water management application designed to monitor water usage, explore water quality information and encourage sustainable water consumption.",
      footerLink: []
    },
    {
      image: require("./assets/images/project/brewbloom-logo.jpg.jpeg"),
      projectName: "BrewBloom",
      projectDesc:
        "A creative cafe brand identity concept featuring logo design, colour selection, typography and promotional visuals.",
      footerLink: []
    },
    {
      image: require("./assets/images/project/findesign-ai.jpg.jpeg"),
      projectName: "FinDesign AI",
      projectDesc:
        "An AI-powered banking marketing assistant designed to support campaign planning, creative content generation and visual marketing strategies.",
      footerLink: []
    },
    {
      image: require("./assets/images/project/ai-recruitment.jpg.jpeg"),
      projectName: "AI Recruitment Platform",
      projectDesc:
        "Group project | Frontend Developer. Developed user-friendly frontend interfaces using React, JavaScript, HTML and CSS.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Thilini-samanthika/AI-Recruitment-Platform"
        }
      ]
    },
    {
      image: require("./assets/images/project/movie-recommendation.jpg.jpeg"),
      projectName: "Movie Recommendation AI",
      projectDesc:
        "Group project | Frontend Developer. Contributed to frontend development for a movie recommendation application.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Thilini-samanthika/Movie-recommendation-ai"
        }
      ]
    }
  ],

  display: true
};




// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};


const greeting = {
  username: "Harshani Medhavi",

  title: "Hi, I'm Harshani Medhavi 👋",

  subTitle: emoji(
    "Software Engineering Undergraduate at Horizon Campus, passionate about UI/UX Design, Graphic Design and Software Development. I enjoy creating creative, user-friendly digital experiences and continuously improving my technical skills. I am currently looking for internship opportunities where I can learn, grow and contribute."
  ),

  resumeLink: "",

  displayGreeting: true
};


// Social Media Links



const socialMediaLinks = {
  github: "https://github.com/harshanimedhavi-create",

  linkedin: "https://www.linkedin.com/in/harshani-medhavi-09075434b",

  gmail: "harshanimedhavi@gmaile.com",

  gitlab: "",
  facebook: "",
  medium: "",

  display: true
};



// Skills Section


const skillsSection = {
  title: "What I Do",
  subTitle: "SOFTWARE ENGINEERING | UI/UX DESIGN | GRAPHIC DESIGN",

  skills: [
    emoji(
      " Create creative and attractive graphic designs for digital platforms and social media."
    ),
    emoji(
      " Design modern, user-friendly interfaces and wireframes using Figma."
    ),
    emoji(
      " Develop foundational knowledge in web development and programming."
    ),
    emoji(
      " Explore new technologies and improve my problem-solving skills."
    ),
    emoji(
      " Collaborate with teams and continuously learn new skills."
    )
  ],

  softwareSkills: [
    {
      skillName: "Canva",
      fontAwesomeClassname: "fab fa-canva"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    }
  ],

  display: true
};


// Education Section



const educationInfo = {
  display: true,

  schools: [
    {
      schoolName: "Horizon Campus",
      subHeader: "BSc (Hons) in Software Engineering",
      duration: "Currently Studying | Expected Graduation: March 2028",
      desc: "Pursuing a degree in Software Engineering with an interest in UI/UX Design, Graphic Design and Software Development.",
      descBullets: [
        "Developing programming and software engineering skills.",
        "Learning software development concepts and technologies.",
        "Working on academic and practical projects."
      ]
    },
    {
      schoolName: "ICBT Campus",
      subHeader: "Diploma in Information Technology",
      duration: "2023",
      desc: "Completed studies in Information Technology.",
      descBullets: [
        "Developed foundational IT knowledge and technical skills."
      ]
    },
    {
      schoolName: "ICBT Campus",
      subHeader: "Diploma in English",
      duration: "February 2023 – July 2023",
      desc: "Completed a Diploma in English.",
      descBullets: [
        "Developed English language and communication skills."
      ]
    },
    {
      schoolName: "Sir John Kotelawala College",
      subHeader: "G.C.E. Advanced Level Examination (Arts Stream)",
      duration: "2019 – February 2022",
      desc: "Completed Advanced Level studies in the Arts stream."
    },
    {
      schoolName: "Sir John Kotelawala College",
      subHeader: "G.C.E. Ordinary Level Examination",
      duration: "December 2018",
      desc: "Completed General Certificate of Education Ordinary Level studies."
    }
  ]
};



// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
















// Achievement Section
// Include certificates, talks etc


const achievementSection = {
  title: emoji("Certificates & Achievements 🏆"),
  subtitle:
    "Professional courses and certifications that support my continuous learning journey in technology.",

  achievementsCards: [
    {
      title: "Shell Scripts for Beginners",
      subtitle:
        "Successfully completed the Shell Scripts for Beginners course offered by KodeKloud.",
      image: require("./assets/images/certificates/shell-scripts-for-beginners.jpg"),
      imageAlt: "Shell Scripts for Beginners Certificate",
      footerLink: []
    },
    {
      title: "Python for Beginners",
      subtitle:
        "Participated in the Python for Beginners online learning programme conducted by the University of Moratuwa.",
      image: require("./assets/images/certificates/python-for-beginners.jpg"),
      imageAlt: "Python for Beginners Certificate",
      footerLink: [
        {
          name: "Verify Certificate",
          url: "https://open.uom.lk/verify"
        }
      ]
    },
    {
      title: "Generative AI Fundamentals",
      subtitle:
        "Successfully completed the Generative AI Fundamentals course offered by Databricks Academy.",
      image: require("./assets/images/certificates/generative-ai-fundamentals.jpg"),
      imageAlt: "Generative AI Fundamentals Certificate",
      footerLink: []
    },
    {
      title: "Jenkins Pipelines",
      subtitle:
        "Successfully completed the Jenkins Pipelines course offered by KodeKloud.",
      image: require("./assets/images/certificates/jenkins-pipelines.jpg"),
      imageAlt: "Jenkins Pipelines Certificate",
      footerLink: []
    }
  ],

  display: true
};


// Blogs Section

const blogSection = {
  title: "My Learning Journey",
  subtitle:
    "I believe in continuous learning, exploring new technologies, and improving my skills through practical experience.",

  displayMediumBlogs: false,

  blogs: [
    {
      url: "#skills",
      title: "UI/UX Design",
      description:
        "Learning Figma, user interface design, wireframing, prototyping, and creating user-friendly digital experiences."
    },
    {
      url: "#skills",
      title: "Graphic Design",
      description:
        "Exploring creative design using Canva, colour combinations, typography, branding, and visual communication."
    },
    {
      url: "#projects",
      title: "Web Development",
      description:
        "Improving my frontend development skills with React, JavaScript, HTML, and CSS through practical projects."
    },
    {
      url: "#projects",
      title: "AI & Technology",
      description:
        "Exploring artificial intelligence, AI-powered applications, and modern technologies through personal projects."
    }
  ],

  display: true
};

// Talks Sections


const talkSection = {
  title: "What I Bring ✨",
  subtitle:
    "My strengths, creativity, and passion that I bring to every project and team.",

  talks: [
    {
      title: "Creativity",
      subtitle:
        "I enjoy creating fresh ideas and attractive visual designs using creativity and imagination.",
      icon: "lightbulb",
      color: "#E63946"
    },
    {
      title: "Problem Solving",
      subtitle:
        "I enjoy understanding challenges and finding practical solutions through logical thinking.",
      icon: "brain",
      color: "#4CC9F0"
    },
    {
      title: "Teamwork",
      subtitle:
        "I enjoy sharing ideas, collaborating with others, and achieving goals as a team.",
      icon: "users",
      color: "#2A9D8F"
    },
    {
      title: "Quick Learning",
      subtitle:
        "I am always excited to learn new tools, explore technologies, and improve my skills.",
      icon: "rocket",
      color: "#F4A261"
    }
  ],

  display: true
};


// Podcast Section

const podcastSection = {
  title: "Podcast",
  subtitle: "",
  podcast: [],
  display: false
};
// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Let's Connect! 👋"),
  subtitle:
    "Have a project, internship opportunity, or just want to say hello? I'd love to hear from you.",
  number: "",
  email_address: "harshanimedhavi@gmaile.com"
};

// Twitter Section

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
