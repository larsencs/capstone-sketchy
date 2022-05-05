import React, {useState, useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom"
import { completePost, getPostById } from "../../modules/PostManager"
// import { Settings } from "../../Settings"

export const CompleteMundane = ({getLoggedInUser, post, updatePost}) =>{

        //grabs the postID from the url and saves it in postID
        const navigate = useNavigate()
    
        const userId = getLoggedInUser()
        //Stores a file upload when actually in use. Feature still in development.
        const [file, updateFile] = useState(null)
    
        //feature in development
        const handleFile = (event) =>{
            updateFile(event.target.file)
            console.log("file", file)
    
        }
    
        const controlInput = (event) =>{
            const selected = {...post}
           
            selected[event.target.id] = event.target.value
    
            updatePost(selected)
        }
    
        const savePost = () =>{
            // formData.file = file
            // formData.upload_preset = `${Settings.preset}`
            // const data = new FormData()                
            // data.append("file", file)
            // data.append("upload_preset", `${Settings.preset}`)
            // data.append("cloud_name", `${Settings.cloudName}`)
    
    
            // console.log("preset", Settings.preset)
            
            const completed = {
                id: post.id,
                userId: post.userId,
                title: post.title,
                description: post.description,
                image: post.image,
                promptId: post.promptId,
                emotionId: post.emotionId,
                isComplete: true
            }
            
            completePost(completed).then(navigate("/"))
            
        }
    

    return (
        <div className="form_container">
        <form className="form_box">
            <fieldset className="prompts_field">
            <div className="post_image" style={{ backgroundImage: `url(${post.image})` }}></div>
                <input type="text" id="prompt" placeholder="chosen prompt" defaultValue={post.promptId} disabled={true}></input>
                <input type="text" id="mood" placeholder="mood" defaultValue={post.emotionId} disabled={true}></input>
                <input type="text" id="title" placeholder="title" onChange={controlInput}></input>
                {/* <input type="file" id="image" onChange={handleFile}></input> */}
                <input type="text" id="image" onChange={controlInput} placeholder="image url"></input>
                <input type="text" id="description" placeholder="description" onChange={controlInput}></input>
                <button type="button" onClick={savePost}>Submit</button>
            </fieldset>
        </form>
    </div>
    )
}