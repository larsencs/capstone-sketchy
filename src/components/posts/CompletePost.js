import React, {useState, useEffect} from "react"
import { getPostByUserId, completePost, getPostById } from "../modules/PostManager"
import { getPromptById } from "../modules/PromptManager"
import { useNavigate, useParams } from "react-router-dom"
import { uploadImage } from "../api/cloudinary"
import { Settings } from "../../Settings.js"



export const CompletePost = ({getLoggedInUser}) =>{

    const {postId} = useParams()
    const navigate = useNavigate()

    const userId = getLoggedInUser()
    const [file, updateFile] = useState()
    const [post, updatePost] = useState([])
    const [selectedPost, updateSelected] = useState({
        userId: getLoggedInUser(),
        id: "",
        description: "",
        title: "",
        image: "",
        isComplete: false,
        promptId : "",
        emotionId: ""
    })

    const handleFile = (event) =>{
        updateFile(event.target.files)

    }

    const controlInput = (event) =>{
        const selected = {...post}
       
        selected[event.target.id] = event.target.value

        updatePost(selected)
    }

    const savePost = () =>{
        // const formData = {}
        // formData.file = file
        // formData.upload_preset = `${Settings.preset}`
        // // const formData = new FormData()                
        // // formData.append("file", file)
        // // formData.append("upload_preset", `${Settings.preset}`)

        // console.log(formData)

        // uploadImage(formData)
        //     .then(res => {
        //         console.log(res)
        //     })

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
        console.log(completed)
    }

    useEffect(()=>{
        getPostById(postId)
            .then(res => updatePost(res))
    },[])
    

    return(
        <>

        <div>
            <form>
                <fieldset>
                    <p>image placeholder</p>
                    <input type="text" id="prompt" placeholder="chosen prompt" defaultValue={post.prompt?.prompt} disabled={true}></input>
                    <input type="text" id="mood" placeholder="mood" defaultValue={post.emotion?.emotion} disabled={true}></input>
                    <input type="text" id="title" placeholder="title" onChange={controlInput}></input>
                    {/* <input type="file" id="image" onChange={handleFile}></input> */}
                    <input type="text" id="image" onChange={controlInput} placeholder="image url"></input>
                    <input type="text" id="description" placeholder="description" onChange={controlInput}></input>
                    <button type="button" onClick={savePost}>Submit</button>
                </fieldset>
            </form>
        </div>

        </>
    )
}