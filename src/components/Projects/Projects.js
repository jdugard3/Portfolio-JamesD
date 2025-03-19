import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import connectionWarmerVideo from "../../Assets/Projects/Connection Warmer Vid.mp4";
import hoopLegendSneakers from "../../Assets/Projects/HoopLegendSneakers.png";
import investmentOpportunityCostCalculator from "../../Assets/Projects/investmentOpportunityCostCalculator.jpeg";
import chatify from "../../Assets/Projects/chatify.png";

// Define Loom GIF URLs
const screenQuestGif = "https://cdn.loom.com/sessions/thumbnails/863ac61b185c48fc8b2b08a95bb2a5ed-9dad633aaeecf3c5-full-play.gif";
const medicineMindGif = "https://cdn.loom.com/sessions/thumbnails/66b8118e9e9f4413926bfdb2fafe9e47-7682ea9716da39de-full-play.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Check out some of my recent projects on GitHub.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Portfolio Website"
              description="My personal portfolio website built with React.js showcasing my projects, skills, and experience. Features responsive design, smooth animations, and a clean UI with a modern color scheme."
              ghLink="https://github.com/jdugard3/Portfolio-JamesD"
              demoLink="https://jdugard3.github.io/Portfolio-JamesD/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Miami Music Works"
              description="A fully responsive website for a local music store, showcasing products, services, and location information. Designed with a focus on user experience, brand identity, and driving in-store traffic."
              demoLink="https://www.miamimusicworks.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={connectionWarmerVideo}
              isVideo={true}
              isBlog={false}
              title="Connection Warmer"
              description="Week 4 of the 4 Apps in 4 Weeks challenge. A tool designed to help maintain professional relationships by tracking and scheduling connection touchpoints with your network."
              ghLink="https://github.com/jdugard3/4AppsIn4Weeks-4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={screenQuestGif}
              isBlog={false}
              title="ScreenQuest"
              description="Week 3 of the 4 Apps in 4 Weeks challenge. A screen time tracking application that helps users monitor and manage their digital usage habits across devices."
              ghLink="https://github.com/jdugard3/4appsin4weeks-screenquest"
              demoLink="https://www.loom.com/share/863ac61b185c48fc8b2b08a95bb2a5ed"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medicineMindGif}
              isBlog={false}
              title="Medicine Minder"
              description="Week 2 of the 4 Apps in 4 Weeks challenge. A medication tracking application that helps users manage prescriptions, dosages, and schedules with timely reminders."
              ghLink="https://github.com/jdugard3/4apps4weeks-Medicine-Minder"
              demoLink="https://www.loom.com/share/66b8118e9e9f4413926bfdb2fafe9e47"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={investmentOpportunityCostCalculator}
              isBlog={false}
              title="Investment Opportunity Cost Calculator"
              description="A tool designed to help users calculate the opportunity cost of investing in a particular asset or project."
              ghLink="https://github.com/jdugard3/4AppsIn4Days-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hoopLegendSneakers}
              isBlog={false}
              title="The Dream Team Project"
              description="A collaborative project delivering a team-based solution. Features modern design elements and demonstrates effective collaboration in a development environment."
              ghLink="https://github.com/jdugard3/The-Dream-Team-Project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
