import React from "react"
import { useNavigate } from "react-router-dom"

export const MadnessPrompt = ({madness}) =>{
  
    const navigate = useNavigate()
  
    return (
      <>
            <div
        className="open_prompts"
        id={madness?.emotion?.emotion}
        onClick={() => navigate(`/${madness.id}/complete_prompt`)}
      >
        {/* <div><p>x</p></div> */}
        <h4>{madness?.prompt}</h4>
        {console.log("madness", madness)}
      </div>
      </>
    )
  }