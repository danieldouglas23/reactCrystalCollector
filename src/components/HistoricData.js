import React from "react";

function Data(props) {
    return (
        <div>
            <h3>Wins: {props.wins}</h3>
            <h3>Losses: {props.losses}</h3>

        </div>

    )
}

export default Data;