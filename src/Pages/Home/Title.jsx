import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";



const TitleMessage = () => (
 
    <div className="titleMessage">
      <div className="heading">
       
        <div className="sub" style = {{color:"cyan"}}>
          <Typewriter
            options={{
              strings: ["Full Stack Web Developer", "Learner", "ReactJS Developer"],
              autoStart: true,
              loop: true,
              delay: 60
            }}
          />
        </div>
      </div>
    </div>
 
);

export default TitleMessage;
