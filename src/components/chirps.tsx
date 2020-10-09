import React from "react";
import {Component} from "react";
import Nav from "./nav-bar";
import Chirp from "./chirp";

//Typescript
interface ChirpsProps {
  name?: string;
  city?: string;
  createChirpLoaded?: Boolean;
  homePageLoaded?: Boolean;
  editChirpLoaded?: Boolean; 
  loaded?:Boolean;
  hasLoaded?:Boolean;
}
interface StateLoaded{
  createChirpLoaded?: Boolean;
  homePageLoaded?: Boolean;
  editChirpLoaded?: Boolean; 
  loaded?: Boolean;
  hasLoaded?: Boolean;
}


class Chirps extends Component<ChirpsProps, StateLoaded>{
  constructor(props: ChirpsProps){
    super(props);
    this.state = {
      loaded: false,
      hasLoaded:false,
      createChirpLoaded:false,
      homePageLoaded:true,
      editChirpLoaded:false,
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
      if(this.state.homePageLoaded === true){  
          return(
              <div>
                <Nav loaded={false} hasLoaded={false}/>
                <Chirp name={"Sabra"} post= {"Neon lights are beautiful!"} loaded={false}></Chirp>
                <Chirp name={"Mathew"} post= "Always remember your zip code..." loaded={false}></Chirp>
                <Chirp name={"Steve"} post= "GOOOAAATTTTSSSS!!!!!!" loaded={false}></Chirp>
              </div>   
            );
        }
        else if(this.state.createChirpLoaded === true){
           return( 
              <div>
              <div className="card text-center">
                      <form>     
                          <label htmlFor="fname">Name</label>
                          <input type="text" id="fname" name="fname"></input>
                          <label htmlFor="lname">Chirp</label>
                          <input type="text" id="lname" name="lname"></input>
                          <input type="button" value="Chirp It!"></input>
                      </form>       
              </div>
            </div>
           );
        }
        else if(this.state.editChirpLoaded === true){
          return(
            <div>CHIRP TO EDIT MON.</div>
          );
        }
        else{
          return(
            <div>ERRONOUS ROUTE!</div>
          );
        }  
    } 
}

export default Chirps;