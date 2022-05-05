import React from "react";

export const OtherMadness = ({madness}) =>{

    return(
        <div className="other_posts" style={{backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.3)
          ),url(${madness.image})`}}>
            <h4>{madness.title}</h4>
            <p>{madness.description}</p>
        </div>
    )
}