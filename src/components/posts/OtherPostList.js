import { OtherPost } from "./OtherPost"
import React from "react"


export const OtherPostList = ({getLoggedInUser, post}) =>{
    
    const userId = getLoggedInUser()

    return (
      <>
        <div>
        <h3>Other Posts</h3>
        <div className="post_container">
          {post.map((mappedPost) =>
            mappedPost.userId !== userId && mappedPost.isComplete ? (
              <OtherPost key={mappedPost.id} post={mappedPost} />
            ) : (
              ""
            )
          )}
        </div>
        </div>
      </>
    );

}