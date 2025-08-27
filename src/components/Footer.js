import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        {/* Left Section */}
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Piyush Rawat</h3>
        </Col>

        {/* Center Section */}
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} PR</h3>
        </Col>

        {/* Right Section */}
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {/* Optional: Remove all social links if you want */}
            {/* Example if you want to keep LinkedIn */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/piyushrawat295/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
