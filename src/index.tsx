import React from "react";
import ReactDOM from "react-dom";
import Chirps from "./components/chirps";
import "bootstrap/dist/css/bootstrap.css";


ReactDOM.render(<div><Chirps homePageLoaded={true} editChirpLoaded={false} createChirpLoaded={false}/></div>,  document.getElementById("root"));
