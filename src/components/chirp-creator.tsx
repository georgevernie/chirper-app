import React from "react"

const ChirpCreator = (props: any) => {
    return (
        <form className="text-center pt-5" onSubmit={props.addAChirp}>
            <h2>Create a New Chirp:</h2>
            <h3>Who is Chirping:</h3>
            <div><input className="text-center rounded-pill"name="userName" onChange={props.newChirpHandler} type="text" id="newChirpNameInput" /> </div>
            <h3>What you would like to Chirp:</h3>
            <div className="mb-4"><input className="w-50 rounded-pill text-center" type="text" name="chirpText" onChange={props.newChirpHandler} id="newChirpChirpInput" /></div>
            <button type="submit" className="color-acc-black btn-lg mb-5">Chirp It!</button>
        </form>
    );
}

export default ChirpCreator;