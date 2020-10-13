import React from "react";
import {Component} from "react";
import Nav from "./nav-bar";
import Chirp from "./chirp";
import {ChirpsProps} from "./globalTypes";
import {StateLoaded} from "./globalTypes";

class Chirps extends Component<ChirpsProps, StateLoaded>{
  constructor(props: ChirpsProps){
    super(props);
    this.state = {
      createChirpLoaded:true,
      homePageLoaded:false,
      editChirpLoaded:false,
    };
     this.goHome = this.goHome.bind(this);
     this.makeAChirp = this.makeAChirp.bind(this);
     this.editAChirp = this.editAChirp.bind(this);
  }
  goHome(){
    this.setState({
      homePageLoaded:true,
      createChirpLoaded:false,
      editChirpLoaded:false,
    });
  }
  makeAChirp(){
    this.setState({
      homePageLoaded:false,
      createChirpLoaded:true,
    });
  }
  editAChirp(){
    this.setState({
      homePageLoaded:false,
      createChirpLoaded:false,
      editChirpLoaded:true,
    });
  }

  render() {
      if(this.state.homePageLoaded === true){  
        //Home Page...  
        return(
               <div> 
                 <Nav></Nav>
                <Chirp name={"Sabra"} post= {"Neon lights are beautiful!"}></Chirp>
                <Chirp name={"Mathew"} post= "Always remember your zip code..."></Chirp>
                <Chirp name={"Steve"} post= "GOOOAAATTTTSSSS!!!!!!"></Chirp>
              </div>   
            );
        }
        //Chirp Creator Loads Chirps Creator Component, and Nav Bar.
        else if(this.state.createChirpLoaded === true){
           return( 
            <div>
              <Nav></Nav> 
              <div className="col card text-center">
              <h3>Make A Chirp:</h3>
                    <form>     
                        <label htmlFor="fname">Name</label>
                        <input className="col bg-light" type="text" id="fname" name="fname"></input>
                        <label htmlFor="lname">Chirp</label>
                        <input className="col bg-light" type="text" id="lname" name="lname"></input>
                        <input className="col btn btn-primary" type="button" value="Chirp It!"></input>
                    </form>       
              </div>
          </div>
           );
        }
        //Chirp Editor loads admin component.
        else if(this.state.editChirpLoaded === true){
          return(
            <div>
            <Nav></Nav> 
            <div className="col card text-center">
              <h3>Edit Chirp:</h3>
                  <form>     
                      <label htmlFor="fname">Name</label>
                      <input className="col bg-light" type="text" id="fname" name="fname"></input>
                      <label htmlFor="lname">Chirp</label>
                      <input className="col bg-light" type="text" id="lname" name="lname"></input>
                      <input className="col btn btn-primary" type="button" value="Submit Changes"></input>
                  </form>       
            </div>
        </div>
          );
        }
    } 
}

export default Chirps;