import React, { Component } from "react";
import "./Faq.css";

export default class Faq extends Component {
  render() {
    return (
      <div>
        <section className="bg_faq">
          <div className="container">
            <div className="inner_faq">
              <div className="inner_faq_title">Des questions ?</div>
              <div className="inner_faq_content">
                <span>
                  N'hésitez pas à visiter notre <a href="">FAQ</a> ou contacter
                  un conseiller Reezocar
                </span>
              </div>
              <div className="inner_end">
                <span>+33 (0)1 76 24 06 10</span>
                <button className="button_end">Se faire rappeler</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
