import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            LAISSEZ-MOI ME <span className="purple"> PRÉSENTER </span> 
            </h1>
            <p className="home-about-body">
            Passionné par l’innovation et le développement informatique, 
            je mets ma créativité et mon expertise au service de solutions performantes et efficaces. 👨‍💻
              <br />
              <br />🚀 Maîtrisant
              <i>
                <b className="purple"> Java et Angular </b>
              </i>
               à différents niveaux, j’aime concevoir et optimiser des applications modernes.
              <br />
              <br />
              Mon intérêt se porte particulièrement sur  &nbsp;
              <i>
                <b className="purple">la création de nouvelles technologies  </b> et de
                 {" "}
                <b className="purple">
                produits web innovants.
                </b>
              </i>
              <br />
              <br />
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
            <h1>OÙ ME TROUVER ?</h1>
            <p>
            N'hésitez pas à <span className="purple">me contacter et à échanger </span> avec moi ! 😊
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pereirak/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/KevinP93"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
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
