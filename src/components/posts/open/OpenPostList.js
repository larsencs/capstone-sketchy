import React, { useEffect, useState } from "react"
import { OpenPost } from "./OpenPost"



export const OpenPostList = ({getLoggedInUser, post}) =>{


    return (
      <>
        <h3>Open Prompts</h3>

        <div>
          {post.map((mappedPost) => <OpenPost key={mappedPost.id}  post={mappedPost}/>)}
        </div>
      </>
    );
}