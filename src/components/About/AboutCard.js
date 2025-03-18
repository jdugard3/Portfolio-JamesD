import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">James Dugard </span>
            from <span className="purple">Miami, FL.</span>
            <br />
            I am currently searching for a job in the field of software development.
            <br />
            I have completed a Full Stack Development Bootcamp at 4Geeks Academy.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Being a Dad & Husband!
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You gain the most experience when you make mistakes!"{" "}
          </p>
          <footer className="blockquote-footer">James Dugard (Or someone else)</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
