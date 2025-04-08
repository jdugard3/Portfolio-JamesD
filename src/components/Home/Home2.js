import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a tech nerd in Real Estate. My passion is helping people and building cool things! 🚀
              <br />
              <br />
              I specialize in
              <i>
                <b className="purple"> JavaScript, Python, and Modern Web Technologies </b>
              </i>
              <br />
              <br />
              My expertise includes building
              <i>
                <b className="purple"> Full Stack Applications </b> and working with{" "}
                <b className="purple">
                  Artificial Intelligence
                </b>
              </i>
              <br />
              <br />
              I develop solutions using <b className="purple">React</b> and
              <i>
                <b className="purple">
                  {" "}
                  Node.js
                </b>
              </i>
              , while also leveraging
              <i>
                <b className="purple"> Flask and AI technologies</b>
              </i>
              &nbsp;to create innovative solutions in real estate.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <p>
              Let's <span className="purple">collaborate </span>on something amazing
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
