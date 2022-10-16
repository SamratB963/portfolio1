import Project1 from "../../assets/img/projects/biggbasket.png";
import Project2 from "../../assets/img/projects/mynetdiary.png";
import Project3 from "../../assets/img/projects/pharmeasy.png";
import HTML5 from "../../assets/img/skills/html.png";
import CSS3 from "../../assets/img/skills/css3.svg";
import BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import REACT from "../../assets/img/skills/react.svg";
import REDUX from "../../assets/img/skills/redux.png";
import MATERIALUI from "../../assets/img/skills/materialUi.png";
import JAVASCRIPT from "../../assets/img/skills/javascript1.svg";
import NODEJS from "../../assets/img/skills/nodejsic.png";
// import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import EXPRESS from "../../assets/img/skills/express2.png";
import CHAKRAUI from "../../assets/img/skills/chakraui.png";
import MONGODB from "../../assets/img/skills/mongicon.png";


export const projects = [

  {
    project_name: "Big Basket Clone",
    project_image: Project1,
    Project_description:
      "Bigbasket is India’s largest online food and grocery store. With over 18,000 products and over a 1000 brands in our catalogue you will find everything you are looking for. Right from fresh Fruits and Vegetables, Rice and Dals, Spices and Seasonings to Packaged products, Beverages, Personal care products, Meats",
    github_link: "https://github.com/SamratB963/Big-Basket-Clone.git",
    deployed_link: "https://bigbasket-clone26.netlify.app/",
    technologies: [HTML5, CSS3, JAVASCRIPT, BOOTSTRAP ],
  },
  {
    project_name: "My Net Diary Clone",
    project_image: Project2,
    Project_description:
      "MyNetDiary is a diet app that focuses on calorie tracking. Users begin by setting a weight goal and viewing the advice and tips that the app provides. Users can then track their food by searching the app's database or scanning a barcode with the built-in scanner.",
    github_link: "https://github.com/SamratB963/MyNetDiary_Clone.git",
    deployed_link: "https://mynetdiary-website-clone.netlify.app/",
    technologies: [REACT,CHAKRAUI,NODEJS,EXPRESS,MONGODB]
  },
  {
    project_name: "Pharmeasy Clone",
    project_image: Project3,
    Project_description:
      "PharmEasy is a consumer healthcare “super app” that provides consumers with on-demand, home delivered access to a wide range of prescription, OTC pharmaceutical, healthcare products, comprehensive diagnostic test services, and teleconsultations thereby serving their healthcare needs.",
    github_link: "https://github.com/SamratB963/Pharmeasy-Clone.git",
    deployed_link: "https://pharmeasy-webclone.netlify.app/",
    technologies: [REACT,CHAKRAUI,NODEJS,EXPRESS,MONGODB],
  },
];
