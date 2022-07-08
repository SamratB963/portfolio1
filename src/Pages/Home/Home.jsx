import React from 'react'
import './Home.css'
import TitleMessage from './Title'
import AboutImage from "../../images/profilepic.jpg";


function Home() {
    return (
        <div id = "home">
           
           <section className = "home-section section ">
                <div className = "container">
                    <div className = "row full-screen ">
                        <div className = "home-text " style = {{color:"cyan"}}>
                            <h3>Hello</h3>
                            <h2>I'm Samrat</h2>
                            <h1 className = "title"> <TitleMessage/></h1>.
                            <a style = {{textDecoration:"none"}}
                            href="https://docs.google.com/document/d/1Kla8So8T5BRE39_aMmFhbMKenwgHoh65/edit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="about-me-btn"
                            >
                            Resume
                            </a>
                        </div>
                        <div className = "home-img ">
                            <div className = "img-box shadow">
                                <img src = {AboutImage} alt = "profile-pic"/>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Home
