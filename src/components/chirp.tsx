import React from "react";
import {Component} from "react";

let timer: number = 0;
let postTime = "Posted a few seconds ago...";

interface ChirpComponent{
    name: String;
    post: String;
    method: any;
}

interface ChirpLoaded{
    loaded: Boolean;
}

class Chirp extends Component<ChirpComponent, ChirpLoaded>{
    constructor(props:ChirpComponent){
        super(props);
        this.state = {
            loaded:false,
          }; 
    }

    aSec(){
        timer++;
        if (timer < 30){postTime = "Posted some time ago...";}
        else{postTime = "Posted a long time ago...";} 
    }    
    componentDidMount(){
        setInterval(this.aSec,1000)
        this.setState({
            loaded:false,
          });
    }
    render(){
        const {post, name, method} = this.props;
        return(
            <div className="card text-center">
                <div className="card-header text-muted">{postTime}</div>
                <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{post}</p>
                <button onClick={method} className="col btn btn-primary">Edit Component</button>
                </div>
            </div>
            );
    }
} 


export default Chirp;