import React from "react";
import {Component} from "react";

interface NavProps{
  goHome: any;
  createAChirp: any;
}

class Nav extends Component<NavProps>{
   constructor(props: NavProps){
     super(props);

   } 
  
  render() {
      const {goHome, createAChirp} = this.props;
          return(
            <div className="container-fluid">
            <div className="row">
              <button onClick={goHome} className="col btn btn-primary">Chirper Home</button>
              <button onClick={createAChirp} className="col btn btn-primary">Create a Chirp</button>
            </div>
            </div> 
          );
      } 
}

export default Nav;