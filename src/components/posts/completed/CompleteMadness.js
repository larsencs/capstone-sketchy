import React, {useState, useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom"
import { completePost, getMadnessById, completeMadness } from "../../modules/PostManager"
// import { Settings } from "../../Settings"
import "../../styles/forms/Complete.css"

export const CompleteMadness = ({getLoggedInUser, madness, updateMadness}) =>{

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
            const selected = {...madness}
           
            selected[event.target.id] = event.target.value
    
            updateMadness(selected)
        }
    
        const saveMadness = () =>{
            // formData.file = file
            // formData.upload_preset = `${Settings.preset}`
            // const data = new FormData()                
            // data.append("file", file)
            // data.append("upload_preset", `${Settings.preset}`)
            // data.append("cloud_name", `${Settings.cloudName}`)
    
    
            // console.log("preset", Settings.preset)
            
            const completed = {
                id: madness.id,
                userId: madness.userId,
                title: madness.title,
                description: madness.description,
                image: madness.image,
                prompt: madness.prompt,
                emotionId: madness.emotionId,
                isComplete: true
            }
            
            completeMadness(completed).then(navigate("/"))
            
        }
    
        // useEffect(()=>{
        //     getMadnessById(madnessId)
        //         .then(res => updateMadness(res))
        // },[])

    return (
        <>
                    <div className="complete_container">
        <div className="complete_card_container">
          <div
            className="complete_finished_picture"
            style={{ backgroundImage: `url(${madness?.image})` }}
          ></div>
          <div className="complete_closed_prompt">
          <div className="complete_prompts_field">
        <div>
                <input type="text" id="title" placeholder="title" required onChange={controlInput}></input>
        <input type="text" id="image" onChange={controlInput} required placeholder="image url"></input>
        <textarea type="text" rows="4" columns="10" id="description" required onChange={controlInput} placeholder="description"></textarea>

        </div>
    </div>
            <div className="complete_chosen_prompts" id={madness?.emotion?.emotion}>
        <p id="prompt_text">Draw:</p>
        <p> {madness?.prompt}</p>
      </div>
      <div className="complete_buttons">
      <button type="button" onClick={saveMadness}>Submit</button>
      </div>
          </div>
        </div>
        </div>
        </>

    )
}
//  <div className="form_container">
// <form className="form_box">
//     <fieldset className="prompts_field">
//     <div className="post_image" style={{ backgroundImage: `url(${madness.image})` }}></div>
//         <input type="text" id="prompt" placeholder="chosen prompt"defaultValue={madness.prompt} disabled={true}></input>
//         <input type="text" id="mood" placeholder="mood" defaultValue={madness.emotion?.emotion} disabled={true}></input>
//         <input type="text" id="title" placeholder="title" required onChange={controlInput}></input>
//          <input type="file" id="image" onChange={handleFile}></input>
//         <input type="text" id="image" onChange={controlInput} required placeholder="image url"></input>
//         <textarea type="text" rows="4" columns="10" id="description" required onChange={controlInput} placeholder="description"></textarea>
//         <button type="button" onClick={saveMadness}>Submit</button>
//     </fieldset>
// </form>
// </div>