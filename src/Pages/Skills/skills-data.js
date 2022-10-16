import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import L_GIT from "../../assets/img/skills/git-icon.svg";
import L_HEROKU from "../../assets/img/skills/heroku.svg";
import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
import L_NETLIFY_PAGES from "../../assets/img/skills/netlify.png";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import EXPRESS from "../../assets/img/skills/express2.png";
import SELFDISCIPLINE from "../../assets/img/skills/selfdisiciplineicon.jpg";
import ALGORITHMS from "../../assets/img/skills/algorithms.png";
import REMOTECOLLAB from "../../assets/img/skills/remotecollabicon.jpg";
import TEAMANAGE from "../../assets/img/skills/teammanagementicon.png";
import TIMEMANAGE from "../../assets/img/skills/timemanagmenticon.png";
import PROBLEMSOLVING from "../../assets/img/skills/problemsolving.png";

export const skills = {
  frontend: [
    {
      link: "https://en.wikipedia.org/wiki/HTML5",
      imgAltText: "HTML 5",
      imgSrc: L_HTML5,
      skillName: "HTML5",
    },
    {
      link:
        "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
      imgAltText: "CSS 3",
      imgSrc: L_CSS3,
      skillName: "CSS3",
    },
    {
      link: "https://www.javascript.com/",
      imgAltText: "JavaScript",
      imgSrc: L_JAVASCRIPT,
      skillName: "JavaScript",
    },
    {
      link: "https://reactjs.org/",
      imgAltText: "React JS",
      imgSrc: L_REACT,
      skillName: "React JS",
    },
    {
      link: "https://material-ui.com/",
      imgAltText: "Material-UI",
      imgSrc: L_MATERIALUI,
      skillName: "Material-UI",
    },

    {
      link: "https://getbootstrap.com/",
      imgAltText: "Bootstrap",
      imgSrc: L_BOOTSTRAP,
      skillName: "Bootstrap",
    },

    // {
    //   link: "https://redux.js.org/",
    //   imgAltText: "Redux",
    //   imgSrc: L_REDUX,
    //   skillName: "Redux",
    // },
  ],

  backend: [
    {
      link: "https://nodejs.org/en/",
      imgAltText: "Node.js",
      imgSrc: L_NODE_JS,
      skillName: "Node.js",
    },
    {
      link: "https://expressjs.com/",
      imgAltText: "Express",
      imgSrc: EXPRESS,
      skillName: "Express",
    },
    {
      link: "https://www.mongodb.com/",
      imgAltText: "MongoDB",
      imgSrc: L_MONGODB,
      skillName: "MongoDB",
    },
  ],
  hostingPlatforms: [
    {
      link: "https://www.heroku.com/",
      imgAltText: "Heroku",
      imgSrc: L_HEROKU,
      skillName: "Heroku",
    },
    // {
    //   link: "https://pages.github.com/",
    //   imgAltText: "GitHub Pages",
    //   imgSrc: L_GITHUB_PAGES,
    //   skillName: "GitHub Pages",
    // },
    
    {
      link: "https://cli.netlify.com/",
      imgAltText: "Netlify Deploy",
      imgSrc: L_NETLIFY_PAGES,
      skillName: "Netlify",
    }
  ],
  softskills: [
    {
      link: "https://cli.netlify.com/",
      imgAltText: "DS Algorithms",
      imgSrc: ALGORITHMS,
      skillName: "DS  Algorithms",
    },
    {
      link: "https://cli.netlify.com/",
      imgAltText: "Self Discipline",
      imgSrc: SELFDISCIPLINE,
      skillName: "Self-Discipline",
    },
    {
      link: "https://cli.netlify.com/",
      imgAltText: "Netlify Deploy",
      imgSrc: TIMEMANAGE,
      skillName: "Time Management",
    },
    {
      link: "https://cli.netlify.com/",
      imgAltText: "Netlify Deploy",
      imgSrc: REMOTECOLLAB,
      skillName: "Remote Collaboration",
    },
    {
      link: "https://cli.netlify.com/",
      imgAltText: "Netlify Deploy",
      imgSrc: TEAMANAGE,
      skillName: "Team Management",
    },
    {
      link: "https://cli.netlify.com/",
      imgAltText: "Netlify Deploy",
      imgSrc: PROBLEMSOLVING,
      skillName: "Problem Solving",
    },
  ],
  databases: [
 
  ],
  versionControl: [
    {
      link: "https://git-scm.com/",
      imgAltText: "GIT",
      imgSrc: L_GIT,
      skillName: "GIT",
    },
  ],
};
