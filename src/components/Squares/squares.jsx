import React from "react";
import "./styleSqure.css"

export default function Square(props){

    return(
        <button
            onClick={() => props.onClick('X')}
            className="square"
        >
            {props.value}
        </button>
    )
}