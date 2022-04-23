import React from "react"
import { ClosedPost } from "./ClosedPost"


export const ClosedPostList = ({getLoggedInUser, post}) =>{  

    const userId = getLoggedInUser()

    return (
      <>
        <div>
          <h3>Finished Posts</h3>
          <div>
            {post.map((mappedPost) =>
              mappedPost.userId === userId && mappedPost.isComplete ? (
                <ClosedPost key={mappedPost.id} post={mappedPost} />
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </>
    );
}