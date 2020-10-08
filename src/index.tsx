import React from "react";
import ReactDOM from "react-dom";
import Chirps from "./components/chirps";
import Nav from "./components/nav-bar";
import "bootstrap/dist/css/bootstrap.css";


ReactDOM.render(<div><Nav/> <Chirps/></div>,  document.getElementById("root"));
