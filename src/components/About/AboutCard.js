import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Piyush Rawat</span> from{" "}
            <span className="purple">Delhi, India.</span>
            <br />
            I am currently pursuing{" "}
            <span className="purple">B.E. in Computer Science & Engineering</span> 
            from <span className="purple">Chandigarh University</span>.
            <br />
            I am a passionate{" "}
            <span className="purple">Full Stack Web Developer</span> with hands-on
            experience in building dynamic, scalable, and responsive web
            applications.
            <br />
            <br />
            Apart from coding, here are a few activities I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games & Watching Tech Podcasts
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & Photography
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code. Build. Innovate. Repeat."{" "}
          </p>
          <footer className="blockquote-footer">Piyush Rawat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
