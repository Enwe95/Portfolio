import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          👋 Hello tout le monde ! Je m'appelle <span className="purple">Kevin Pereira, </span>
            et je suis passionné par le  <span className="purple"> développement logiciel.</span>
            <br />
            Actuellement, je travaille en tant que <span className="purple">développeur fullstack,</span>
            <br />
            et je suis titulaire d'un <span className="purple">Master en Architecture Logicielle et Développement d'Applications.</span> 
            <br />
            <br />
            💻 En dehors du code, j’aime aussi :
          </p>
          <ul>
          <li className="about-activity">
               🌍 Voyager et découvrir de nouvelles cultures
            </li>
            <li className="about-activity">
               ⚽ Faire du sport
            </li>
            <li className="about-activity">
               🎮 Jouer aux jeux vidéo
            </li>
            
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          ✨ "Mon objectif : créer des solutions qui font la différence !"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
