import React from "react";
import {Component} from "react";

class Nav extends Component{
    render() {
          return(
            <div className="container-fluid">
            <div className="row">
              <button className="col btn btn-primary">Chirper Home</button>
              <button className="col btn btn-primary">Create a Chirp</button>
            </div>
            </div> 
          );
      } 
}

export default Nav;