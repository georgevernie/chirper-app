import React, { Component } from "react";

class MakeAChirp extends Component{
    render(){
        //Cancel will just send user back to home without submitting a chirp.
        return(
            <div>
            <div className="col card text-center">
              <h3>Make A Chirp:</h3>
                    <form>     
                        <label htmlFor="fname">Name</label>
                        <input className="col bg-light" type="text" id="fname" name="fname"></input>
                        <label htmlFor="lname">Chirp</label>
                        <input className="col bg-light" type="text" id="lname" name="lname"></input>
                    </form>     
              </div>
             <div className="row">
                <button className="col btn btn-primary">Chirp It!</button>
                <button className="col btn btn-primary">Cancel</button> 
             </div>
            </div>  
        );
    }

}

export default MakeAChirp;