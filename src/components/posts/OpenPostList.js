import React from "react"
import { OpenPost } from "./OpenPost"



export const OpenPostList = ({getLoggedInUser, post}) =>{

    const userId = getLoggedInUser()

    return (
      <>
        <div>
          <h3>Open Posts</h3>
          <div>
            {post.map((mappedPost) =>
              mappedPost.userId === userId &&
              mappedPost.isComplete === false ? (
                <OpenPost key={mappedPost.id} post={mappedPost} />
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </>
    );
}