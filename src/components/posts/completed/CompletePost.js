import React, {useState, useEffect} from "react"
import { getPostByUserId, completePost, getPostById, getMadnessById } from "../../modules/PostManager"
import { getPromptById } from "../../modules/PromptManager"
import { useNavigate, useParams } from "react-router-dom"
import "../../styles/forms/Complete.css"
import { CompleteMadness } from "./CompleteMadness"
import { CompleteMundane } from "./CompleteMundane"



export const CompletePost = ({getLoggedInUser}) =>{

    //grabs the postID from the url and saves it in postID
    const {postId} = useParams()
    const navigate = useNavigate()


    const userId = getLoggedInUser()
    //Stores a file upload when actually in use. Feature still in development.
    const [file, updateFile] = useState(null)
    const [post, updatePost] = useState({})
    const [madness, updateMadness] = useState({})

    useEffect(()=>{
        getPostById(postId)
            .then(res => updatePost(res))
    },[])

    useEffect(()=>{
        getMadnessById(postId)
            .then(res => updateMadness(res))
    },[])
  

    return(
        <>
            {!post.promptId ? <CompleteMadness getLoggedInUser={getLoggedInUser} madness={madness} updateMadness={updateMadness}/> : <CompleteMundane getLoggedInUser={getLoggedInUser} post={post} updatePost={updatePost}/>}
            {console.log("postId",postId)}
        </>
    )
}