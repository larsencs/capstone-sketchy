import React, {useEffect, useState} from "react"
import { useLocation } from "react-router-dom"
import { getPromptByMood, getPrompts } from "../modules/PromptManager"
import { savePost } from "../modules/PostManager"
import { useNavigate } from "react-router-dom"
import "../styles/prompts/prompt.css"


export const Prompts = ({getLoggedInUser}) =>{

    const [prompt, updatePrompt] = useState()
    const navigate = useNavigate()
    
    //This is importing the state from navigate in Generate and saving it as an object named prompt
    const state = useLocation()
    const promptId = state.state.prompt.emotionId
    const userId = getLoggedInUser()

    useEffect(()=>{
        getPrompts().then(res => { 
          sortArr(res)

        })
    },[])

    const sortArr = (arr) =>{
      const sortedArr = []
      for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].emotionId.length; j++){
            if(arr[i].emotionId[j] === parseInt(promptId)){
              sortedArr.push(arr[i])
            }
        }
      }
      randomize(sortedArr)
    }

    const randomize = (arr) =>{
      let random;
      let index = Math.floor(Math.random() * parseInt(arr.length))

        random = arr[index]

      
      updatePrompt(random)
    }

    const handleSave = () =>{
        const post = {
            userId: userId,
            promptId: prompt?.id,
            emotionId: parseInt(promptId),
            isComplete: false

        }
        console.log(post)
        savePost(post).then( navigate("/"))
    }




    return (
      <div className="open_prompt_card">
        <div id="prompt_div">
          <h1>{prompt?.prompt}</h1>
        </div>
        <button onClick={()=>navigate("/prompt")}>Generate</button>
          <button type="button" onClick={handleSave}>
            Save
          </button>
      </div>
    );
}