import Project1 from "../../assets/img/projects/Unsplash.png";
import Project2 from "../../assets/img/projects/Bigbasket.png";
import Project3 from "../../assets/img/projects/fabbag.png";
import HTML5 from "../../assets/img/skills/html.png";
import CSS3 from "../../assets/img/skills/css3.svg";
import BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import REACT from "../../assets/img/skills/react.svg";
import REDUX from "../../assets/img/skills/redux.png";
import MATERIALUI from "../../assets/img/skills/materialUi.png";
import JAVASCRIPT from "../../assets/img/skills/javascript1.svg";


export const projects = [

  {
    project_name: "Unsplash Clone",
    project_image: Project1,
    Project_description:
      "Unsplash is a platform powered by an amazing community that has gifted hundreds of thousands of their own photos to fuel creativity around the world. So sign up for free, or don’t. Either way, you’ve got access to over 3 million photos under the Unsplash license—which makes them free to do-whatever-you-want with.",
    github_link: "https://github.com/SamratB963/Unsplash-Clone.git",
    deployed_link: "https://unsplash-clone-site.netlify.app/",
    technologies: [HTML5, CSS3, JAVASCRIPT],
  },
  {
    project_name: "BigBasket Clone",
    project_image: Project2,
    Project_description:
      "Bigbasket is India’s largest online food and grocery store. With over 18,000 products and over a 1000 brands in our catalogue you will find everything you are looking for. Right from fresh Fruits and Vegetables, Rice and Dals, Spices and Seasonings to Packaged products, Beverages, Personal care products, Meats",
    github_link: "https://github.com/SamratB963/Big-Basket-Clone.git",
    deployed_link: "https://bigbasket-clone26.netlify.app/",
    technologies: [HTML5, CSS3, JAVASCRIPT, BOOTSTRAP,],
  },
  {
    project_name: "Fabbag Clone",
    project_image: Project3,
    Project_description:
      "Fabbag is one of the latest emerging online cosmotics' store driven by passionate beauty experts and addicts for beauty enthusiastic women looking for great products that would work for their specific beauty needs and tastes, but do not have enough time, access or resources to try out and experience all that is available",
    github_link: "https://github.com/SamratB963/fabbagclone.git",
    deployed_link: "https://peppy-frangipane-9fee86.netlify.app/",
    technologies: [CSS3, JAVASCRIPT, REACT, REDUX, MATERIALUI],
  },
];
