import React, {useEffect, useState} from "react"
import { useLocation } from "react-router-dom"
import { getPromptByMood, getPrompts, getEmoPrompts, getPromptById } from "../modules/PromptManager"
import { savePost } from "../modules/PostManager"
import { useNavigate } from "react-router-dom"
import "../styles/prompts/prompt.css"


export const Prompts = ({getLoggedInUser}) =>{

    const [prompt, updatePrompt] = useState({})
    // const [emoPrompt, updateEmoPrompt] = useState([])
    const navigate = useNavigate()
    // let index = Math.floor(Math.random()* emoPrompt?.length);
    
    //This is importing the state from navigate in Generate and saving it as an object named prompt
    const state = useLocation()
    const generatedPrompt = state.state.prompt
    const userId = getLoggedInUser()

    useEffect(()=>{
      updatePrompt(state)
    },[])

    // useEffect(()=>{
    //   getEmoPrompts(emotionId).then(res => updateEmoPrompt(res)).then(console.log(state))
    // },[])

    // useEffect(()=>{
    //   getPromptById(parseInt(emoPrompt[index]?.promptId)).then( res => updatePrompt(res))
    // },[emoPrompt])

    const handleSave = () =>{
        const post = {
            userId: userId,
            promptId: prompt?.id,
            // emotionId: parseInt(emotionId),
            isComplete: false

        }
        
        savePost(post).then( navigate("/"))
    }




    return (
      <div className="open_prompt_card">
        <div id="prompt_div">
          <h1>{prompt?.prompt?.prompt}</h1>
        </div>
        <button onClick={()=>navigate("/prompt")}>Generate</button>
          <button type="button" onClick={handleSave}>
            Save
          </button>
      </div>
    );
}