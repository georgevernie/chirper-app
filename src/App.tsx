import React, { Component } from "react";
import ChirpCreator from "./components/chirp-creator";
import Chirps from "./components/chirper";
import NavBar from "./components/nav-bar";

class App extends Component {
    state = {
        chirps: [
            { id: 0, chirpName: "Cheyanne Armitage", chirpTxt: "Exciting news: it is almost Thanksgiving!" },
            { id: 1, chirpName: "Cole Cantu", chirpTxt: "We are going to have a Corn Cob roast soon." },
            { id: 2, chirpName: "George Vernie", chirpTxt: "I got an A on my C++ Exam!" },
        ],
        userNameVal: "",
        chirpVal: "",
        homePageLoaded: true,
        chirpCreatorLoaded: false,
    }
    newChirpInputHandler = (e: any) => {
        if (e.target.name === "userName") {
            this.setState({
                userNameVal: e.target.value
            })
        }
        else {
            this.setState({
                chirpVal: e.target.value
            })
        }
    }
    addChirp = (e: any) => {
        let randKeyGen = Math.round(Math.random() * 100000000000);
        e.preventDefault();
        const { chirps } = this.state;
        this.setState({
            chirps: [...chirps, { id: randKeyGen, chirpName: this.state.userNameVal, chirpTxt: this.state.chirpVal }],
            homePageLoaded: true,
            chirpCreatorLoaded: false
        });
    }
    deleteChirp = (index: any, e: any,) => {
        const { chirps } = this.state;
        let arrayDupe = chirps;
        arrayDupe.splice(index, 1);
        this.setState({
            chirps: arrayDupe,
        });
    }
    homePage = () => {
        this.setState({
            homePageLoaded: true,
            chirpCreatorLoaded: false,
        });
    }
    chirpCreator = () => {
        this.setState({
            homePageLoaded: false,
            chirpCreatorLoaded: true,
        });
    }

    render() {
        const { chirps, homePageLoaded, chirpCreatorLoaded } = this.state;
        if (homePageLoaded === true) {
            return (

                <div>
                    <div className="text-center">
                        <h1 className="text-center font-weight-bold">&#9788; Chirper &#9788;</h1>
                        <NavBar goHome={this.homePage} chirpCreator={this.chirpCreator}></NavBar>
                        <Chirps deleteAChirp={this.deleteChirp} chirpValues={chirps}></Chirps>
                    </div>
                </div>
            );
        }
        if (chirpCreatorLoaded === true) {
            return (
                <div>
                    <div className="color-acc-sky">
                        <NavBar goHome={this.homePage} chirpCreator={this.chirpCreator}></NavBar>
                    </div>
                    <div className="color-acc-sky">
                        <ChirpCreator addAChirp={this.addChirp} newChirpHandler={this.newChirpInputHandler}></ChirpCreator>
                    </div>
                </div>
            );
        }
    }

}


export default App;