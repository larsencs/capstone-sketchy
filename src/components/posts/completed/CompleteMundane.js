import React, {useState, useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom"
import { completePost, getPostById } from "../../modules/PostManager"
import "../../styles/forms/Complete.css"
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
<>
<div className="complete_container">
        <div className="complete_card_container">
          <div
            className="complete_finished_picture"
            style={{ backgroundImage: `url(${post?.image})` }}
          ></div>
          <div className="complete_closed_prompt">
          <div className="complete_prompts_field">
        <div>
                <input type="text" id="title" placeholder="title" required onChange={controlInput}></input>
        <input type="text" id="image" onChange={controlInput} required placeholder="image url"></input>
        <textarea type="text" rows="4" columns="10" id="description" required onChange={controlInput} placeholder="description"></textarea>

        </div>
    </div>
            <div className="complete_chosen_prompts" id={post?.emotion?.emotion}>
        <p id="prompt_text">Draw:</p>
        <p> {post?.prompt?.prompt}</p>
      </div>
      <div className="complete_buttons">
      <button type="button" onClick={savePost}>Submit</button>
      </div>
          </div>
        </div>
        </div>
</>
    )
}