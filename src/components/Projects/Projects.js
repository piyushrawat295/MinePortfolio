import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import your project images
import expenscape from "../../Assets/Projects/Expenscape.png";
import cityscape from "../../Assets/Projects/CityScape.png";
import voiceassistant from "../../Assets/Projects/Ai_Medical_Assistant.png";

// Dummy project images
import dummy1 from "../../Assets/Projects/leaf.png";
import dummy2 from "../../Assets/Projects/emotion.png";
import dummy3 from "../../Assets/Projects/codeEditor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Ongoing Project First */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voiceassistant}
              isBlog={false}
              title="AI Medical Assistant (Ongoing)"
              description="An AI-based assistant for healthcare, helping users get medical guidance using VAPI and Assembly AI APIs."
              ghLink="https://github.com/piyushrawat295/AI_Project"
              demoLink="#"
            />
          </Col>

          {/* Main Projects */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expenscape}
              isBlog={false}
              title="ExpenScape"
              description="A complete money management app built with React, TypeScript, Neon/Postgres, and Drizzle ORM to help users track, add, update, and delete expenses efficiently."
              ghLink="https://github.com/piyushrawat295/ExpenScape"
              demoLink="https://expenscape.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cityscape}
              isBlog={false}
              title="CityScape"
              description="A property listing platform built with MERN stack. Allows users to browse 2D listings, and converts images to 3D for a better viewing experience."
              ghLink="https://github.com/piyushrawat295/CityScape"
              demoLink="https://cityscape.onrender.com/"
            />
          </Col>

          {/* Dummy Projects */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dummy1}
              isBlog={false}
              title="Dummy Project 1"
              description="This is a placeholder project for display purposes."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dummy2}
              isBlog={false}
              title="Dummy Project 2"
              description="This is a placeholder project for display purposes."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dummy3}
              isBlog={false}
              title="Dummy Project 3"
              description="This is a placeholder project for display purposes."
              ghLink="#"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
