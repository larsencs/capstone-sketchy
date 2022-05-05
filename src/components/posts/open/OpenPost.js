import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MadnessPrompt } from "./OpenMadness";
import { MundanePrompt } from "./OpenMundane";

export const OpenPost = ({post, madness}) =>{

  const navigate = useNavigate()

    return (
      <>
        {post ? <MundanePrompt post={post}/> : <MadnessPrompt madness={madness}/>}

      </>
    );
}