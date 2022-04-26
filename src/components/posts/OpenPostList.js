import React from "react"
import { OpenPost } from "./OpenPost"



export const OpenPostList = ({getLoggedInUser, post}) =>{

    const userId = getLoggedInUser()

    return (
      <>
        <h3>Open Prompts</h3>

        <div>
          {post.map((mappedPost) =>
            mappedPost.userId === userId && mappedPost.isComplete === false ? (
              <OpenPost key={mappedPost.id} post={mappedPost} />
            ) : (
              ""
            )
          )}
        </div>
      </>
    );
}