import React, { Component } from "react";
import { Grid, Col, Image, Well } from "react-bootstrap";
import "./Header.css";

export default class Header extends Component {
  render() {
    let bg = require("../../src/images/headbanner.jpg");

    return (
      <div>
        <section
          className="headerBanner"
          style={{ backgroundImage: "url(" + bg + ")" }}
        >
          <div className="container_img">
            <h1 className="headrer_title">
              <div className="title_line_1">LOA (OU LEASING D'OCCASION)</div>
              <div className="title_line_2">
                Vous profitez de loyers mini défiants toute concurrence grâce à
                la LOA d'occasion !
              </div>
            </h1>
          </div>
        </section>
        <section className="step_all">
          <div className="container_step">
            <div className="step">
              <div className="step_1">1</div>
              <div className="step_1_text">Au début du contrat</div>
              <ul className="substep">
                <li>Définissez votre loyer mensuel</li>
                <li>Avec ou sans apport</li>
              </ul>
            </div>
            <div className="step">
              <div className="step_1">2</div>
              <div className="step_1_text">Pendant la durée du contrat</div>
              <ul className="substep">
                <li>Payez uniquement l'usage et non la possession</li>
              </ul>
            </div>
            <div className="step">
              <div className="step_1">3</div>
              <div className="step_1_text">A la fin du contrat</div>
              <ul className="substep">
                <li>Devenez propriétaire</li>
                <li>Changez de véhicule</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
