import React, {useState} from "react"
import { postComment, postMadnessComment } from "../../modules/CommentManager"
import "../../styles/posts/post.css"
import { AllOtherMadness } from "./AllOtherMadness"
import { AllOtherMundane } from "./AllOtherMundane"


export const AllOtherPost = ({post, getLoggedInUser, madness}) =>{


    const userId = getLoggedInUser();
    const [leaveComment, updateLeaveComment] = useState(false)
    const [comment, updateComment] = useState({
        postId: post?.id,
        comment: "",
        userId: userId

    })
    const [madnessComment, updateMadnessComment] = useState({
        madnessId: madness?.id,
        comment: "",
        userId: userId

    })

    const saveComment = () =>{
        postComment(comment)
            .then(updateLeaveComment(false))
    }

    const saveMadnessComment = () =>{
        postMadnessComment()
            .then(updateLeaveComment(false))
    }
   

    return (
        <>
        {post ? <AllOtherMundane post={post} leaveComment={leaveComment} saveComment={saveComment} comment={comment} updateComment={updateComment} updateLeaveComment={updateLeaveComment}/> :
         <AllOtherMadness madness={madness} leaveComment={leaveComment} comment={madnessComment} saveComment={saveMadnessComment} updateComment={updateMadnessComment} updateLeaveComment={updateLeaveComment}/>}
        </>
    )
}