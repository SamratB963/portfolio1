import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import {projects} from './ProjectData'
import "./Projects.css";
import Grid from '@material-ui/core/Grid';
// import Aos from "aos";
// import "aos/dist/aos.css";



const useStyles = makeStyles ({
  card: {
    
    maxWidth: 350,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 0 15px rgb(0,255,255)"
    }
  },
  media: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "left",
   
  },
  divider: {
    margin: "10px"
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
     
    }
  }
});

function Projects() {
  const classes = useStyles()
  return (
    <div id  ="projects">

      <h1 className="text-center font-details-b pb-4">PROJECTS</h1>
    <Grid container className = "projects__wrapper" spacing = {0}>

        {projects && projects.map((project) => {
          return (
            <Grid item  xs = {12} md = {6} className="project">
        <Card className={classes.card} >
        <CardMedia
          className={classes.media}
          image={project.project_image}
          />
        <CardContent className={classes.content}>
          <Typography
            className={classes.heading}
            variant={"h6"}
            gutterBottom
            >
          {project.project_name}
          </Typography>
          <Typography
            className={classes.subheading}
            variant={"caption"}
            >
           {project.Project_description}
          </Typography>
          <div className = "projects__links">

            <a href = {project.github_link} target="_blank" rel="noopener noreferrer"> Source Code</a>
            <a href = {project.deployed_link} target="_blank" rel="noopener noreferrer"> Demo Link</a>
          </div>
          <Divider className={classes.divider} light />
          { project.technologies && project.technologies.map(face => (
            
            <Avatar className={classes.avatar} key={face} src={face} />
            
            
            
            ))}
          
        </CardContent>
      </Card>
    </Grid>
          )
        })}
    </Grid>
    
        </div>
  );
}




export default Projects