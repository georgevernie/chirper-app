import React from "react";
import {Component} from "react";

interface NavProps {

}

class Nav extends Component{
    render() {
        return(
          <div className="container-fluid">
              <div className="row">
                <button className="col btn btn-primary">Home</button>
                <button className="col btn btn-primary">Make a Chirp</button>
              </div>
            </div>   
        );
      } 
}


export default Nav;