import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { completePost, deletePost, getPostById } from "../modules/PostManager"
import { useParams } from "react-router-dom"


export const UpdatePost = () =>{

    const [post, updatePost] = useState({})

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

    const handleEditPost = () =>{
        completePost(post).then(navigate("/"))
    }

    useEffect(()=>{
        getPostById(postId)
            .then(res => updatePost(res))
    },[])

    return (
    <>
        <img src="https://picsum.photos/300/400"></img>
        <form>
            <fieldset>
                
                <input type="text" id="prompt" placeholder="chosen prompt"  disabled={true} value={post.prompt?.prompt}></input>
                <input type="text" id="mood" placeholder="mood" disabled={true} value={post.emotion?.emotion}></input>
                <input type="text" id="title" placeholder="title" onChange={controlInput} value={post.title}></input>
                <input type="text" id="image" placeholder="image" onChange={controlInput} value={post.image}></input>
                <input type="text" id="description" placeholder="description" onChange={controlInput} value={post.description}></input>
                <button type="button" onClick={handleDeletePost}>Delete</button>
                <button type="button" onClick={handleEditPost}>Submit</button>
            </fieldset>
        </form>
    </>)

}