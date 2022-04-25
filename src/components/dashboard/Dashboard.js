import React, {useState, useEffect} from "react"
import { OpenPostList } from "../posts/OpenPostList"
import { ClosedPostList } from "../posts/ClosedPostList"
import { OtherPostList } from "../posts/OtherPostList"
import { getPosts } from "../modules/PostManager"
import "../styles/dashboard/dashboard.css"
import { useNavigate } from "react-router-dom"


export const Dashboard = ({getLoggedInUser}) =>{

    const navigate = useNavigate()

    const [post, updatePost] = useState([])
    
    useEffect(()=>{
        getPosts().then(res => updatePost(res))
    },[])


    return(
        <>
            <div className="dashboard_main_container">
            <section className="prompts_section" id="open_section">
                <OpenPostList getLoggedInUser={getLoggedInUser} post={post} updatePost={updatePost}/>
            </section>
            <section className="prompts_section" id="closed_section">
                <ClosedPostList getLoggedInUser={getLoggedInUser} post={post} updatePost={updatePost}/>
            </section>
            <section className="prompts_section" id="other_section">
                <OtherPostList getLoggedInUser={getLoggedInUser} post={post} updatePost={updatePost}/>
            </section>
            </div>
        </>
    )
}