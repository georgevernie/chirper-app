import React, { Component } from "react"    

class EditAChirp extends Component{
    render(){
        //Cancel will just send user back to home without editting the chirp.
      return( 
           <div>
           <div className="col card text-center">
                <h3>Edit Chirp:</h3>
                    <form>     
                        <label htmlFor="fname">Name</label>
                        <input className="col bg-light" type="text" id="fname" name="fname"></input>
                        <label htmlFor="lname">Chirp</label>
                        <input className="col bg-light" type="text" id="lname" name="lname"></input>
                    </form>       
            </div>
            <div className="row">
                <button className="col btn btn-primary">Submit Changes</button>
                <button className="col btn btn-primary">Cancel</button> 
            </div>
          </div>  
      ); 
    };
}

export default EditAChirp;