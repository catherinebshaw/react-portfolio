import React from 'react';
import { useContext } from "react";
import ProfileContext from "../../utils/ProfileContext";

function Bio(){
    const { info }= useContext( ProfileContext )

    return (
        <>
            <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text">{info}</p>
            </div>     
        </>
    )
}

export default Bio