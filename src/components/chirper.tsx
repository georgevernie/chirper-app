import React from "react"

const Chirps = (props: any) => {
    return (
        props.chirpValues.map((item: any, index: any) => {
            return( 
                <div className="pt-5 pb-5 color-acc-sky" key={item.id}>
                    <h3 className="color-acc-black pt-3">{item.chirpName}</h3> 
                    <h4 className="color-acc-white rounded-circle">{item.chirpTxt}</h4>
                    <button className="color-acc-black rounded-circle btn-lg mb-4" onClick={props.deleteAChirp.bind(this, index)}>Delete Chirp</button>
                </div>
            );
        })

    );
}

export default Chirps;