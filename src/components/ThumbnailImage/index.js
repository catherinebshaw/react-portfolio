import React from "react"
import "./style.css"
import headshot from "../../assets/headshot.png"


function ThumbnailImage(){
    return (
        <img src={headshot} alt="headshot" className="float-start" />
    )
}

export default ThumbnailImage