import React from "react"
import { ClosedPost } from "./ClosedPost"
import { useNavigate } from "react-router-dom"


export const ClosedPostList = ({getLoggedInUser, post, comments, madness}) =>{  

    const userId = getLoggedInUser()


    return (
      <>
        <div className="title_div">
          <h3 > Recently Finished Prompts</h3>
          <div>
            {post.map((mappedPost) =>
              mappedPost.userId === userId && mappedPost.isComplete ? (
                <ClosedPost key={mappedPost.id} post={mappedPost} comments={comments}/>
              ) : (
                ""
              )
            )}
            {madness.map((mappedMadness) =>
              mappedMadness.userId === userId && mappedMadness.isComplete ? (
                <ClosedPost key={mappedMadness.id} madness={mappedMadness} comments={comments}/>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </>
    );
}