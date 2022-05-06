import React, {useEffect, useState} from "react"
import { useLocation } from "react-router-dom"
import { savePost, saveMadness } from "../modules/PostManager"
import { useNavigate } from "react-router-dom"
import "../styles/prompts/prompt.css"


export const Prompts = ({getLoggedInUser, prompt, show, setUpdateShow, emo}) =>{

    // const [prompt, updatePrompt] = useState({})

    // const [emoPrompt, updateEmoPrompt] = useState([])
    const navigate = useNavigate()
    // let index = Math.floor(Math.random()* emoPrompt?.length);
    
    //This is importing the state from navigate in Generate and saving it as an object named prompt
    const state = useLocation()
    const userId = getLoggedInUser()

    // useEffect(()=>{
    //   updatePrompt(state)
    //   console.log(state)
    // },[])

    // useEffect(()=>{
    //   getEmoPrompts(emotionId).then(res => updateEmoPrompt(res)).then(console.log(state))
    // },[])

    // useEffect(()=>{
    //   getPromptById(parseInt(emoPrompt[index]?.promptId)).then( res => updatePrompt(res))
    // },[emoPrompt])

    const handleSave = () =>{
      
      let emotionId = []
      let index = Math.floor(Math.random()* emotionId.length)
      const post = {}

      if(isNaN(prompt?.id)){

          post.userId = userId
          post.prompt = prompt.prompt
          // post.madnessId = Math.floor(Math.random() * prompt.prompt.length) * 999999999999
          post.emotionId = 8
          post.isComplete = false

          saveMadness(post).then( navigate("/"))
      }else{
        for(let emote of emo){
          if(emote.promptId === prompt.id){
            emotionId.push(emote.emotionId)

            post.userId = userId
            post.promptId = prompt?.id
            post.emotionId = emotionId[0]
            post.isComplete = false
            
          }
        }
        savePost(post).then( navigate("/"))
  
          
          
          
      }


    }




    return (
      <div className="open_prompt_card">
        <div id="prompt_div">
          <h1>{prompt?.prompt}</h1>

        </div>
        <div id="button_div">
          <button onClick={() => setUpdateShow(false)}>Generate</button>
          <button type="button" onClick={handleSave}>
            Save
          </button>
          </div>

      </div>
    );
}