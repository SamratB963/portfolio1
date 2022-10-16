import React from 'react'
import './Home.css'
import TitleMessage from './Title'
import AboutImage from "../../images/linkedinselfpic.jpg";


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
                            href="https://drive.google.com/file/d/16c1a8wP4zj1TDO7JuQRgV0Pew56EwpP1/view?usp=sharing"
                            target="_blank"
                            // rel="noopener noreferrer"
                            className="about-me-btn"
                            download
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
