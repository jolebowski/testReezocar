import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <section className="section_footer">
          <div className="container_footer">
            <ul className="container_list">
              <li className="reason">
                <span>simplifiez vous la vie</span>
              </li>
              <li className="reason">
                <span>Gagnez du temps</span>
              </li>
              <li className="reason">
                <span>Sécurisez l'achat de votre voiture d'occasion</span>
              </li>
              <li className="reason">
                <span>Économisez de l'argent</span>
              </li>
            </ul>
          </div>
        </section>
        <div className="container_">
          <ul className="list">
            <li>
              <div className="listTitle">A propos de</div>
            </li>
            <div>
              <div className="content_">
                <li>
                  <span>Comment acheter ?</span>
                </li>
                <li>
                  <span>Témoignages Reezocar</span>
                </li>
                <li>
                  <span>Contact</span>
                </li>
                <li>
                  <span>Presse</span>
                </li>
                <li>
                  <span>Jobs</span>
                </li>
                <li>
                  <span>FAQ</span>
                </li>
                <li>
                  <span>Blog</span>
                </li>
              </div>
            </div>
          </ul>

          <ul className="list">
            <div className="listTitle">Catalogue</div>
            <div>
              <div className="content_">
                <li>
                  <span>Toutes les marques</span>
                </li>
                <li>
                  <span>Tous les modèles</span>
                </li>
                <li>
                  <span>Toutes les marques LOA</span>
                </li>
                <li>
                  <span>Tous les modèles LOA</span>
                </li>
              </div>
            </div>
          </ul>
          <ul className="list">
            <div className="listTitle">Autres</div>
            <div>
              <div className="content_">
                <li>
                  <span>Location avec option d'achat</span>
                </li>
                <li>
                  <span>Financement</span>
                </li>
                <li>
                  <span>Services professionels</span>
                </li>
                <li>
                  <span>CGU - CGV - Mentions Légales</span>
                </li>
              </div>
            </div>
          </ul>
          <div className="langSociaux">
            <div>
              <p>langues</p>
            </div>
            <div>
              <p>reseaux sociaux</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
