import React, {useState, useEffect} from "react"
import { getPostByUserId, completePost, getPostById } from "../modules/PostManager"
import { getPromptById } from "../modules/PromptManager"
import { useNavigate, useParams } from "react-router-dom"
import { uploadImage } from "../api/cloudinary"
import { Settings } from "../../Settings.js"
import "../styles/forms/Complete.css"



export const FinishPost = ({getLoggedInUser}) =>{

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



    const handleSelect = (event) =>{
        let selectedTarget = {}
        for(const thing of post){
            if(thing.id === parseInt(event.target.value)){
                selectedTarget=thing
            }
        }

        updateSelected(selectedTarget)
     
    }

    const handleFile = (event) =>{
        updateFile(event.target.files)

    }

    const controlInput = (event) =>{
        const selected = {...selectedPost}
       
        selected[event.target.id] = event.target.value

        updateSelected(selected)
    }

    const savePost = () =>{
        // const formData = {...file}
        // formData.file = file
        // formData.upload_preset = `${Settings.preset}`
        // const formData = new FormData()                
        // formData.append("file", file)
        // formData.append("upload_preset", `${Settings.preset}`)

        // console.log(formData)

        // uploadImage(formData)
        //     .then(res => {
        //         console.log(res)
        //     })

        const completed = {
            id: selectedPost.id,
            userId: selectedPost.userId,
            title: selectedPost.title,
            description: selectedPost.description,
            image: selectedPost.image,
            promptId: selectedPost.promptId,
            emotionId: selectedPost.emotionId,
            isComplete: true
        }
        
        completed.isComplete = true
        if(selectedPost.title && selectedPost.description && selectedPost.image && selectedPost.prompt){
            completePost(completed).then(navigate("/"))
            console.log(completed)
        }else{
            window.alert("Required fields are empty.")
        }

    }

    useEffect(()=>{
        getPostByUserId(userId)
            .then(res => updatePost(res))
    },[])
    

    return (
      <>
            <div className="form_container">
                <form className="form_box">
                    <fieldset className="prompts_field">
                        <div className="post_image" style={{ backgroundImage: `url(${selectedPost.image})` }}></div>
                        <select value={post.id} onChange={handleSelect}>
                            <option selected={true} disabled={true}>
                                Select an open prompt
                            </option>
                            {post.map((mappedPost) =>
                                mappedPost.isComplete === false ? (
                                    <option
                                        key={mappedPost.id}
                                        id={mappedPost.id}
                                        value={mappedPost.id}
                                    >
                                        {mappedPost.prompt.prompt}
                                    </option>
                                ) : (
                                    ""
                                )
                            )}
                        </select>
                    </fieldset>
                    <fieldset>
                        <input
                            type="text"
                            id="prompt"
                            placeholder="chosen prompt"
                            defaultValue={selectedPost.prompt?.prompt}
                            disabled={true}
                        ></input>
                        <input
                            type="text"
                            id="mood"
                            placeholder="mood"
                            defaultValue={selectedPost.emotion?.emotion}
                            disabled={true}
                        ></input>
                        <input
                            type="text"
                            id="title"
                            placeholder="title"
                            onChange={controlInput}
                        ></input>
                        {/* <input type="file" id="image" onChange={handleFile}></input> */}
                        <input
                            type="text"
                            id="description"
                            placeholder="description"
                            onChange={controlInput}
                        ></input>
                        <input
                            type="text"
                            id="image"
                            onChange={controlInput}
                            placeholder="image url"
                        ></input>
                        <button type="button" onClick={savePost}>
                            Submit
                        </button>
                    </fieldset>
                </form>
            </div>
        </>
    );
}