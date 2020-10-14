import React from "react";
import {Component} from "react";
import Nav from "./nav-bar";
import Chirp from "./chirp";
import {AppProps} from "./globalTypes";
import {AppLoaded} from "./globalTypes";
import EditAChirp from "./editChirp";
import MakeAChirp from "./makeAChirp";

class App extends Component<AppProps, AppLoaded>{
  constructor(props: AppProps){
    super(props);
    this.state = {
      createChirpLoaded:false,
      homePageLoaded:true,
      editChirpLoaded:false,
    };
     //this.goHome = this.goHome.bind(this);
     //this.makeAChirp = this.makeAChirp.bind(this);
     //this.editAChirp = this.editAChirp.bind(this);
  }
  goHome = () =>{
    this.setState({
      homePageLoaded:true,
      createChirpLoaded:false,
      editChirpLoaded:false,
    });
  }
  makeAChirp = () =>{
    this.setState({
      homePageLoaded:false,
      createChirpLoaded:true,
    });
  }
  editAChirp = () =>{
    this.setState({
      homePageLoaded:false,
      createChirpLoaded:false,
      editChirpLoaded:true,
    });
  }

  render() {
      const {homePageLoaded, createChirpLoaded, editChirpLoaded} = this.state;
      //! To be done using arr.map
      let chirpArr = [
      <div>
      <Chirp name={"Sabra"} post={"Neon lights are beautiful!"} method={this.editAChirp}></Chirp>
      <Chirp name={"Mathew"}post={"Always remember your zip code..."}method={this.editAChirp}></Chirp>
      <Chirp name={"Steve"} post={"GOOOAAATTTTSSSS!!!!!!"}method={this.editAChirp}></Chirp></div>
      ];
      if(homePageLoaded === true){  
        //Home Page...  
        return(
               <div> 
                <Nav goHome={this.goHome} createAChirp={this.makeAChirp}></Nav>
                {chirpArr}
              </div>   
            );
        }
        //Chirp Creator Loads Chirps Creator Component, and Nav Bar.
        else if(createChirpLoaded === true){
           return( 
            <div>
              <Nav goHome={this.goHome} createAChirp={this.makeAChirp}></Nav>
              <MakeAChirp></MakeAChirp>
          </div>
           );
        }
        //Chirp Editor loads admin component.
        else if(editChirpLoaded === true){
          return(
            <div>
            <Nav goHome={this.goHome} createAChirp={this.makeAChirp}></Nav>
            <EditAChirp></EditAChirp> 
            </div>
          );
        }
    } 
}

export default App;