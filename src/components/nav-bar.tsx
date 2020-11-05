import React from "react";

const NavBar = (props: any) => {
    return (
        <div className="container-fluid">
        <div className="row">
        <button onClick={props.goHome} className="col btn-lg font-weight-bolder color-acc-amber">Chirper Home</button>
        <button onClick={props.chirpCreator} className="col btn-lg font-weight-bolder color-acc-amber">Create a Chirp</button>
        </div>
    </div>  

    );
}

export default NavBar;