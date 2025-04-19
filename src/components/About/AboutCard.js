import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          👋 Hello tout le monde ! Je m'appelle <span className="purple">Enwe95, </span>
            et je suis passionnée par le  <span className="purple"> développement logiciel.</span>
            <br />
            Actuellement, je cherche un travail en tant que <span className="purple">développeuse fullstack,</span>
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
