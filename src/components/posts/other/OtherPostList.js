import { OtherPost } from "./OtherPost"
import React from "react"
import { useNavigate } from "react-router-dom"


export const OtherPostList = ({getLoggedInUser, post, madness}) =>{
    
    const userId = getLoggedInUser()
    const navigate = useNavigate()

    return (
      <>
        <div className="title_div">
        <h3 onClick={() => navigate("/other_posts")} id="other_post_nav">Other Posts</h3>
        <div className="post_container">
          {post.map((mappedPost) =>
            mappedPost.userId !== userId && mappedPost.isComplete ? (
              <OtherPost key={mappedPost.id} post={mappedPost} />
            ) : (
              ""
            )
          )}
                    {madness.map((mappedMadness) =>
            mappedMadness.userId !== userId && mappedMadness.isComplete ? (
              <OtherPost key={mappedMadness.id} madness={mappedMadness} />
            ) : (
              ""
            )
          )}
        </div>
        </div>
      </>
    );

}