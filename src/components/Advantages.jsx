import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Jumbotron,
  Grid,
  Row,
  Col,
  Image,
  Button,
  Well
} from "react-bootstrap";
import "./Advantages.css";

export default class Advantages extends Component {
  render() {
    let bg = require("../../src/images/loa-advantage-monthly.jpg");
    let bg2 = require("../../src/images/loa-advantage-upgrade.jpg");
    let bg3 = require("../../src/images/loa-advantage-zen.jpg");
    return (
      <div>
        <div className="container">
          <button>Contacter un conseiller</button>
        </div>
        <div>
          <div className="advantage">
            <div className="advantage_1_image">
              <div
                className="image_1"
                style={{ backgroundImage: "url(" + bg + ")" }}
              >
                <h2>
                  <div className="title_advantage_1">
                    Bénéficiez de loyers attractifs
                  </div>
                </h2>
              </div>
            </div>
            <div className="advantage_text">
              <div className="euro glyphicon glyphicon-euro	" />
              En effet, les loyers d'une LOA sont bien moindres que ceux d'un
              financement classique, car n'étant pas propriétaire du véhicule,
              vous ne payez que l'usage que vous faites de celui-ci plutôt que
              la possession. De plus, le catalogue de véhicules éligibles à la
              LOA sont des véhicules d’occasion. La décote sur des véhicules en
              leasing d’occasion permet donc de bénéficier de loyers encore plus
              attractifs.
            </div>
          </div>
          <div className="advantage">
            <div className="advantage_text">
              <div className="cog glyphicon glyphicon-cog" />
              Les loyers attractifs de la location avec option d'achat (aussi
              appelé LOA ou Leasing) vous permettent de rouler dans des
              véhicules suréquipés et les contrats étant de 2 à 4 ans, vous
              pouvez changer de véhicules régulièrement.
            </div>
            <div className="advantage_2_image">
              <div
                className="image_2"
                style={{ backgroundImage: "url(" + bg2 + ")" }}
              >
                <h2>
                  <div className="title_advantage_2">Roulez surclassé</div>
                  <div className="subtitle_advantage_2">
                    en changeant de véhicule régulièrement
                  </div>
                </h2>
              </div>
            </div>
          </div>
          <div className="advantage">
            <div className="advantage_1_image">
              <div
                className="image_1"
                style={{ backgroundImage: "url(" + bg3 + ")" }}
              >
                <h2>
                  <div className="title_advantage_1">
                    Ne vous souciez plus de la revente
                  </div>
                </h2>
              </div>
            </div>
            <div className="advantage_text">
              <div className="ok glyphicon glyphicon-ok	" />
              Vous pouvez restituer votre véhicule à la fin du contrat pour
              renouveler un contrat de LOA sur un autre modèle si vous le
              souhaitez. Vous avez aussi la possibilité de racheter le véhicule
              à une valeur qui aura été définie à l'avance.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
