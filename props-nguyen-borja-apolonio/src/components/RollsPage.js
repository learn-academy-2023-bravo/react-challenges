import React from "react";

const RollsPage = (props) => {

    return(
        <>
            <div className="Page">
                <h1>Rolls</h1>
                <h2>{props.rollResults}</h2>
                <h2>{props.rollHistory}</h2>


                

            </div>
        </>
    )
}

export default RollsPage