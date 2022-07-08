import "./App.css";
import Home from "./Pages/Home/Home";

import About from "./Pages/About/About";
import Nav from "./Components/Nav/Nav";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Container from "react-bootstrap/Container";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Particles from "react-particles-js";

function App() {
  return (
    <div className="App">
      <Nav />
      <div>
        <Particles
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgb(46,50,81)",
          }}
        />
      </div>
      <Home />
      <div>
        <div>
          <Container className="container-box rounded">
            <Slide bottom duration={500}>
              <Fade duration={500}>
                <About />
              </Fade>
            </Slide>
          </Container>
        </div>
      </div>

      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>

      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Projects />
        </Slide>
      </Container>

      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Contact />
        </Slide>
      </Container>
    </div>
  );
}

export default App;
