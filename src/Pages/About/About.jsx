import React from "react";
import "./About.css";
import AboutImage from "../../images/aboutImg.jpg";


function About() {
  return (
    <div id="about">
      <section className="about-section section">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2 data-heading="main info">About me</h2>
            </div>
          </div>
          <div className="row">
            
            <div className="about-info">
              <p>
                <h6>Hi! I am Samrat Bandalakunta</h6>
                🏡 I am from Kadapa, Andhra Pradesh.
                <br />
                <br />
                Aspiring full-Stack developer skilled in all aspects of
                front-end and MERN stack technologies. Looking forward to
                bring creative and strong technical skills to the working
                environment.
                <br />
                <br />
                Keen to build and develop high-quality user-friendly platforms
                by using my technical knowledge and skills.
                <br />
                <br />
                Eager to obtain a challenging position at a dynamic company to
                enhance my learning and contribute to exciting projects.
              </p>
  

              <div></div>
            </div>
            <div className="about-img">
              <div className="img-box">
                <img src={AboutImage} alt="about" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
