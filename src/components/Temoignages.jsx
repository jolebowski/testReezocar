import React, { Component } from "react";
import { Jumbotron, Grid, Row, Col, Image } from "react-bootstrap";
import "./Temoignages.css";

export default class Temoignages extends Component {
  render() {
    let photo = require("../../src/images/loa-testimonial-1.jpg");
    return (
      <div>
        <section className="bg">
          <div className="container_img_text">
            <div className="testimonial">
              <div className="testimonial_img">
                <div
                  className="photo"
                  style={{ backgroundImage: "url(" + photo + ")" }}
                />
              </div>
              <div className="testimonial_text">
                <div className="content">
                  Simplicité, transparence et service client au top ! On m'a
                  conseillé la LOA d'occasion pour les loyers attractifs
                  permettant de rouler surclassé et je ne suis pas déçu. Je
                  recommande vivement Reezocar pour son sérieux et son
                  efficacité.
                </div>
                <div className="sign">
                  Sylvain A. Paris
                  <a href="" className="model">
                    {" "}
                    Audi A1
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
