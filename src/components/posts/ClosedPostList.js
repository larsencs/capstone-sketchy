import React from "react"
import { ClosedPost } from "./ClosedPost"
import { useNavigate } from "react-router-dom"


export const ClosedPostList = ({getLoggedInUser, post}) =>{  

  const navigate = useNavigate()

    const userId = getLoggedInUser()

    const handleMakeChanges = () =>{
      navigate("/update_post")
    }

    return (
      <>
        <div>
          <h3>Finished Posts</h3>
          <div>
            {post.map((mappedPost) =>
              mappedPost.userId === userId && mappedPost.isComplete ? (
                <ClosedPost key={mappedPost.id} post={mappedPost} handleMakeChanges={handleMakeChanges} />
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </>
    );
}