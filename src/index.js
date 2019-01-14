import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer.jsx";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Footer />, document.getElementById("footer"));

registerServiceWorker();
