import React, {useState, useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom"
import { completePost, getMadnessById, completeMadness } from "../../modules/PostManager"
// import { Settings } from "../../Settings"

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

        <div className="form_container">
        <form className="form_box">
            <fieldset className="prompts_field">
            <div className="madness_image" style={{ backgroundImage: `url(${madness.image})` }}></div>
                <input type="text" id="prompt" placeholder="chosen prompt" defaultValue={madness.prompt} disabled={true}></input>
                <input type="text" id="mood" placeholder="mood" defaultValue={madness.emotion?.emotion} disabled={true}></input>
                <input type="text" id="title" placeholder="title" onChange={controlInput}></input>
                {/* <input type="file" id="image" onChange={handleFile}></input> */}
                <input type="text" id="image" onChange={controlInput} placeholder="image url"></input>
                <input type="text" id="description" placeholder="description" onChange={controlInput}></input>
                <button type="button" onClick={saveMadness}>Submit</button>
            </fieldset>
        </form>
    </div>
    )
}