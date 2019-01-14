import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Advantages from "./components/Advantages";
import Header from "./components/Header";
import Temoignages from "./components/Temoignages";
import Navbar from "./components/CustomNavbar";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Header />
          <Advantages />
          <Temoignages />
          <Faq />
        </div>
      </Router>
    );
  }
}

export default App;
