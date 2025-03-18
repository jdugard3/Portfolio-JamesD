import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  DiJavascript1, 
  DiReact, 
  DiNodejs, 
  DiPython, 
  DiGit,
  DiHtml5,
  DiCss3,
  DiBootstrap
} from "react-icons/di";
import {
  SiRedux,
  SiExpress,
  SiFlask,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiTypescript
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-name">
          <DiJavascript1 />
          <p>JavaScript</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-name">
          <SiTypescript />
          <p>TypeScript</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-name">
          <DiPython />
          <p>Python</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-name">
          <DiHtml5 />
          <p>HTML5</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-name">
          <DiCss3 />
          <p>CSS3</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-name">
          <DiReact />
          <p>React</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-name">
          <SiRedux />
          <p>Redux</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-name">
          <TbBrandNextjs />
          <p>Next.js</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-name">
          <DiNodejs />
          <p>Node.js</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-name">
          <SiExpress />
          <p>Express</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-name">
          <SiFlask />
          <p>Flask</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-name">
          <DiBootstrap />
          <p>Bootstrap</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-name">
          <SiMysql />
          <p>MySQL</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-name">
          <SiPostgresql />
          <p>PostgreSQL</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-name">
          <SiMongodb />
          <p>MongoDB</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-name">
          <SiFirebase />
          <p>Firebase</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-name">
          <DiGit />
          <p>Git</p>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
