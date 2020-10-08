import React from "react";
import {Component} from "react";
import checkTime from "./cardTime";

//Typescript
interface ChirpsProps {
  name?: string;
  city?: string;
  hasLoaded?: Boolean;
  onChange?: string;
}

class Chirps extends Component{
    render() {
      checkTime(); // Going to be used to check when a card was posted.
        return(
          <div className="container-fluid">
              <div className="mt-3 d-flex justify-content-center row">
                <div className="card w-50">
                  <div className="card-header">sometime ago</div>
                  <div className="card-body">
                    <h5 className="card-title">Crazy Frog</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <button className="btn btn-primary">Edit Chirp</button>
                  </div>
                </div>
              </div>
              <div className="mt-3 d-flex justify-content-center row">
                <div className="card w-50">
                  <div className="card-header">little while ago</div>
                  <div className="card-body">
                    <h5 className="card-title">Henry The Dragon Slayer</h5>
                    <p className="card-text">Waiting for a worthy opponent...</p>
                    <button className="btn btn-primary">Edit Chirp</button>
                  </div>
                </div>
              </div>
              <div className="mt-3 d-flex justify-content-center row row-lg">
                <div className="card w-50">
                  <div className="card-header"> A few seconds ago</div>
                  <div className="card-body">
                    <h5 className="card-title">T-Rex 17</h5>
                    <p className="card-text">All shall fall before me!</p>
                    <button className="btn btn-primary">Edit Chirp</button>
                  </div>
                </div>
              </div>
              <div className="mt-3 d-flex justify-content-center row">
                <div className="card w-50">
                  <div className="card-header">little while ago</div>
                  <div className="card-body">
                    <h5 className="card-title">Henry The Dragon Slayer</h5>
                    <p className="card-text">Come at me @T-Rex 17!</p>
                    <button className="btn btn-primary">Edit Chirp</button>
                  </div>
                </div>
              </div>
            </div>   
        );
      } 
}

export default Chirps;