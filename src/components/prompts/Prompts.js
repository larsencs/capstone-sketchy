import React, {useEffect, useState} from "react"
import { useLocation } from "react-router-dom"
import { getPromptByMood } from "../modules/PromptManager"
import { savePost } from "../modules/PostManager"
import { useNavigate } from "react-router-dom"


export const Prompts = ({getLoggedInUser}) =>{

    const [prompt, updatePrompt] = useState({})
    const navigate = useNavigate()
    
    //This is importing the state from navigate in Generate and saving it as an object named prompt
    const state = useLocation()
    const promptId = state.state.prompt.emotionId
    const userId = getLoggedInUser()

    useEffect(()=>{
        getPromptByMood(promptId).then(res => updatePrompt(res))
    },[])

    const handleSave = () =>{
        const post = {
            userId: userId,
            promptId: promptId,
            emotionId: prompt[0].id,
            isComplete: false

        }
        savePost(post).then( navigate("/"))
    }



    return(
        <div className="open_prompt_card">
            <img src="https://picsum.photos/300/400"></img>
            <p>{prompt[0]?.prompt}</p>
            <button>Generate</button>
            <button type="button" onClick={handleSave}>Save</button>
            
        </div>
    )
}