import React from 'react';
import { useContext } from "react";
import "./style.css"
import ProfileContext from "../../utils/ProfileContext";

function Bio(){
    const { info }= useContext( ProfileContext )

    return (
        <>
            <div className="card-body">
            <p className="card-text">{info}</p>
            </div>     
        </>
    )
}

export default Bio