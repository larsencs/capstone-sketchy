import React, {useState, useEffect} from "react"
import { getPostByUserId, completePost } from "../modules/PostManager"
import { getPromptById } from "../modules/PromptManager"
import { useNavigate } from "react-router-dom"



export const FinishPost = ({getLoggedInUser}) =>{

    const navigate = useNavigate()

    const userId = getLoggedInUser()
    const [post, updatePost] = useState([])

    const [selectedPost, updateSelected] = useState({})

    const handleSelect = (event) =>{
        let selectedTarget = {}
        for(const thing of post){
            console.log("thing", thing)
            console.log("eventId", event.target.value)
            if(thing.id === parseInt(event.target.value)){
                selectedTarget=thing
            }
        }

        updateSelected(selectedTarget)


        
    }

    const controlInput = (event) =>{
        const selected = {...selectedPost}

        selected[event.target.id] = event.target.value

        updateSelected(selected)
    }

    const savePost = (event) =>{
        const completed = {...selectedPost}
        completed.isComplete = true
        completePost(completed).then(navigate("/"))
    }

    useEffect(()=>{
        getPostByUserId(userId)
            .then(res => updatePost(res))
    },[])

    return(
        <>
            <div>
                <form>
                    <fieldset>
                        <select value={post.id} onChange={handleSelect}>
                            <option>Select an open prompt</option>
                            {post.map(mappedPost => mappedPost.isComplete === false? <option key={mappedPost.id} id={mappedPost.id} value={mappedPost.id}>{mappedPost.prompt.prompt}</option> : "")}
                        </select>
                    </fieldset>
                    <fieldset>
                        <p>image placeholder</p>
                        <input type="text" id="prompt" placeholder="chosen prompt" defaultValue={selectedPost.prompt?.prompt} disabled={true}></input>
                        <input type="text" id="mood" placeholder="mood" defaultValue={selectedPost.emotion?.emotion} disabled={true}></input>
                        <input type="text" id="title" placeholder="title" onChange={controlInput}></input>
                        <input type="text" id="image" placeholder="image" onChange={controlInput}></input>
                        <input type="text" id="description" placeholder="description" onChange={controlInput}></input>
                        <button type="button" onClick={savePost}>Submit</button>
                    </fieldset>
                </form>
            </div>
        </>
    )
}