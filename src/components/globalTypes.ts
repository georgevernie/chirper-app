import React from "react";
import Chirps from "./chirps";

//Typescript
export interface ChirpsProps {
    name?: string;
    city?: string;
    createChirpLoaded?: Boolean;
    homePageLoaded?: Boolean;
    editChirpLoaded?: Boolean; 
    loaded?:Boolean;
    hasLoaded?:Boolean;
  }
  
  let myArray = [true, false, true, false, true];
  
  export interface StateLoaded{
    createChirpLoaded?: Boolean;
    homePageLoaded?: Boolean;
    editChirpLoaded?: Boolean; 
    loaded?: Boolean;
    hasLoaded?: Boolean;
  }