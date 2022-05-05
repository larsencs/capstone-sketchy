import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { completePost, deletePost, getPostById, deleteMadness, getMadnessById, completeMadness } from "../../modules/PostManager"
import { useParams } from "react-router-dom"
import { UpdateMadness } from "./UpdateMadness"
import { UpdateMundane } from "./UpdateMundane"


export const UpdatePost = () =>{

    const [post, updatePost] = useState({})
    const [madness, updateMadness] = useState({})

    const {postId} = useParams()

    const navigate = useNavigate()

    const controlInput = (event) =>{
        let target = {...post}

        target[event.target.id] = event.target.value
        console.log(target)
        console.log("post", post)

        updatePost(target)

    }

    const handleDeletePost = (event) =>{
        deletePost(postId)
            .then(navigate("/"))
    }

    const handleDeleteMadness = (event) =>{
        deleteMadness(postId)
            .then(navigate("/"))
    }

    const handleEditPost = () =>{
        completePost(post).then(navigate("/"))
    }

    const handleEditMadness = () =>{
        completeMadness(madness).then(navigate("/"))
    }

    useEffect(()=>{
        if(postId < 100){
            getPostById(postId)
            .then(res => updatePost(res))
        }else{
            getMadnessById(postId)
            .then(res => updateMadness(res))
        }
    },[])
    
    return (
    <>
        {postId < 100 ? <UpdateMundane post={post} postId={postId} handleEditPost={handleEditPost} handleDeletePost={handleDeletePost} updatePost={updatePost}/> : <UpdateMadness madness={madness} handleEditMadness={handleEditMadness} handleDeleteMadness={handleDeleteMadness} updateMadness={updateMadness} postId={postId}/>}
    </>)

}