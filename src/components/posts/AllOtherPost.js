import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import { postComment } from "../modules/CommentManager"
import "../styles/posts/post.css"

export const AllOtherPost = ({post, getLoggedInUser}) =>{


    const userId = getLoggedInUser();
    const [leaveComment, updateLeaveComment] = useState(false)
    const [comment, updateComment] = useState({
        postId: post.id,
        comment: "",
        userId: userId

    })

    const saveComment = () =>{
        postComment(comment)
            .then(updateLeaveComment(false))
    }

    //handles changes to input fields and updates state with the additional values
    const handleChange = (event) =>{
        const tempCom = {...comment}

        tempCom[event.target.id] = event.target.value

        updateComment(tempCom)
    }

    const componentSubArr = [
        
        
    ]

    //An array of React components which are rendered depending on if leaveComment is true or false
    const componentArr = [<>
        <div className="post_div" style={{backgroundImage:`url(${post.image})`} }>
        <div>
            <h4>{post.title}</h4>
            <p>{post.description}</p>
        </div>
        <div>
            <p>{post.prompt?.prompt}</p>
        </div>
        </div>

        <input type="text" id="comment" onChange={handleChange} placeholder="leave a comment"></input>
        <div>
            <button onClick={()=> updateLeaveComment(false)}>Cancel</button>
            <button type="button" onClick={saveComment}>Submit</button>
        </div>
    </>
    ,
    <div>
    <div style={{backgroundImage:`url(${post.image})`}}>
    <div>
        <h4>{post.title}</h4>
        <p>{post.description}</p>
    </div>
    </div>

    <div>
        <p>{post.prompt?.prompt}</p>
        <button onClick={()=> updateLeaveComment(true)}>Add a comment</button>
    </div>
    </div>]

    

    const navigate = useNavigate();

    return (
        <>
        {leaveComment ? componentArr[0] : componentArr[1]}
        </>
    )
}