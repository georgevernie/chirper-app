import React from "react";
import {Component} from "react";
//import ChirperCreater from "./chirp-creator";

interface NavProps {
  loaded?:Boolean;
  hasLoaded?:Boolean;
}
interface StateLoaded{
  loaded?: Boolean;
  hasLoaded?: Boolean;
}

class Nav extends Component<NavProps, StateLoaded>{
    constructor(props: NavProps){
      super(props);
      this.state = {
        loaded: false,
        hasLoaded:false,
      };
       this.goHome = this.goHome.bind(this);
       this.makeAChirp = this.makeAChirp.bind(this);
    }
    
    goHome(){
      console.log("Howdy.");
    }

    makeAChirp(){
      this.setState({
        loaded: true,
        //hasLoaded: true
      });
    }

    render() {
        if(this.state.loaded === true){
          //RUN THE CHIRP CREATOR HERE:
          <div>Work in Progress</div>
        }
        else{
          return(
            <div className="container-fluid">
                <div className="row">
                  <button onClick={this.goHome} className="col btn btn-primary">Chirper Home</button>
                  <button onClick={this.makeAChirp} className="col btn btn-primary">Make a Chirps AWAY!</button>
                </div>
              </div>   
          );
        }
      } 
}


export default Nav;