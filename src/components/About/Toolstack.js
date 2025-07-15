import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiSlack,
  SiNpm,
  SiDocker,
  SiAmazonaws,
  SiJira,
  SiWindowsterminal
} from "react-icons/si";
import { BsCursor } from "react-icons/bs";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-name">
          <BsCursor />
          <p>Cursor AI</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-name">
          <SiWindowsterminal />
          <p>Terminal</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-name">
          <SiVisualstudiocode />
          <p>VS Code</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-name">
          <SiGithub />
          <p>GitHub</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-name">
          <SiPostman />
          <p>Postman</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-name">
          <SiNpm />
          <p>NPM</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-name">
          <SiSlack />
          <p>Slack</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-name">
          <SiDocker />
          <p>Docker</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-name">
          <SiAmazonaws />
          <p>AWS</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-name">
          <SiJira />
          <p>Jira</p>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
