import React from "react"
import { useNavigate } from "react-router-dom"

export const MundanePrompt = ({post}) =>{

    const navigate = useNavigate()
    
    return (

        <>
                <div
      className="open_prompts"
      id={post?.emotion?.emotion}
      onClick={() => navigate(`/${post.id}/complete_prompt`)}
    >
      {/* <div><p>x</p></div> */}
      <h4>{post?.prompt?.prompt}</h4>
      {console.log("post", post)}
    </div>
        </>
    )
}