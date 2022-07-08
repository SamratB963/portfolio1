import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Contact.css";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import CallIcon from "@material-ui/icons/Call";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=samratkrishna345@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-danger" title="samratkrishna345@gmail.com">
                  <EmailIcon /> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://www.linkedin.com/in/samrat-bandalakunta/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <LinkedInIcon /> LinkedIn
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a
                href="https://github.com/SamratB963"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark" title="My other projects">
                  <GitHubIcon /> GitHub
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a
                href="https://twitter.com/SamratB963"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-info" title="Tweets are welcomed!">
                  <TwitterIcon /> Twitter
                </Button>
              </a>
            </div>
          </Col>
        </Row>
        <div className="about-desc-icon">
          {" "}
          <EmailIcon />
          <sapn className="about-desc-span">samratkrishna345@gmail.com</sapn>
        </div>
        <div className="about-desc-icon">
          {" "}
          <CallIcon />
          <sapn className="about-desc-span">
            <a id="telPhone" href="tel:8500591806">
              +91 789 3412 207
            </a>
          </sapn>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Contact;
