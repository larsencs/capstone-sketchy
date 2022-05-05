import React, { useEffect, useState } from "react"
import { OpenPost } from "./OpenPost"



export const OpenPostList = ({getLoggedInUser, post, madness}) =>{

    const userId = getLoggedInUser()
    const [combined, updateCombined] = useState([])

    useEffect(()=>{
      const tempPost = [...post]
      const tempMadness = [...madness]

      const combo = {
        ...tempPost,
        ...tempMadness
      }
      updateCombined(combo)
    },[])


    return (
      <>
        <h3>Open Prompts</h3>

        <div>
          {post.map((mappedPost) =>
            mappedPost.userId === userId && mappedPost.isComplete === false ? (
              <OpenPost key={mappedPost.id}  post={mappedPost}/>) : ( "" ))}
          {madness.map(mappedMadness => mappedMadness.userId === userId && mappedMadness.isComplete === false ?
           <OpenPost key={mappedMadness.id * 5} madness={mappedMadness}/> : "")}
        </div>
      </>
    );
}