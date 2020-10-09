import React from "react";
import {Component} from "react";

let timer: number = 0;
let postTime = "Posted a few seconds ago...";

interface ChirpComponent{
    name?: String;
    post?: String;
    loaded?: Boolean;
}

interface stateComponent{
    loaded?: Boolean;
}

class Chirp extends Component<ChirpComponent, stateComponent>{
    constructor(props:ChirpComponent){
        super(props);
        this.state = {
            loaded:false,
          };
          this.handleClick = this.handleClick.bind(this);  
    }

    aSec(){
        timer++;
        if (timer < 30){
            postTime = "Posted some time ago...";
        }
        else{
            postTime = "Posted a long time ago...";
        } 
    }    
    componentDidMount(){
        setInterval(this.aSec,1000)
        this.setState({
            loaded:false,
          });
    }
    handleClick(){
        this.setState({
            loaded:true,
        });
    }
    render(){
        if(this.state.loaded === false){
            return(
                <div className="card text-center">
                    <div className="card-header text-muted">{postTime}</div>
                    <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">{this.props.post}</p>
                        <button onClick={this.handleClick} className="btn btn-primary">Edit Chirp</button>
                    </div>
                </div>
              );
        }
        else if(this.state.loaded === true){
            return(
                <div className="card text-center">
                    <div className="card-header text-muted">{postTime}</div>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text">{this.props.post}</p>
                        <button onClick={this.handleClick} className="btn btn-primary">Edit Chirp</button>
                    </div>
                </div>
              );
        }
        
    }
} 


export default Chirp;