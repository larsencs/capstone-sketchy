import React from "react"
import { ClosedPost } from "./ClosedPost"
import { useNavigate } from "react-router-dom"


export const ClosedPostList = ({getLoggedInUser, post}) =>{  

    const userId = getLoggedInUser()


    return (
      <>
        <div className="title_div">
          <h3 > Recently Finished Prompts</h3>
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