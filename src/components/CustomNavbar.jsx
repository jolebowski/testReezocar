import React, { Component } from "react";
import logo from "../logo.png"; // Tell Webpack this JS file uses this image
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CustomNavbar.css";

export default class CustomNavbar extends Component {
  render() {
    return (
      <div>
        <header>
          <a href="#" className="logo">
            <img src={logo} alt="" className="logo" />
          </a>
          <nav className="navbar">
            <ul className="navList">
              <li className="navItem">
                <a href="">Rechercher un véhicule</a>
              </li>
              <li className="navItem">
                <a href="">Comment acheter ?</a>
              </li>
              <li className="navItem">
                <a href="">Rechercher un véhicule</a>
              </li>
              <li className="navItem">
                <a href="">Contact</a>
              </li>
              <li className="navItem">
                <button className="button_login"> Connexion</button>
              </li>
              <li className="navItem">
                <button className="button_register"> Inscription</button>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}
