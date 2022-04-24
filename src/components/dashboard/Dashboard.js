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
            <section className="open_prompts_section">
                <OpenPostList getLoggedInUser={getLoggedInUser} post={post} updatePost={updatePost}/>
            </section>
            <section className="closed_prompts_section">
                <ClosedPostList getLoggedInUser={getLoggedInUser} post={post} updatePost={updatePost}/>
            </section>
            <section className="other_posts_section">
                <OtherPostList getLoggedInUser={getLoggedInUser} post={post} updatePost={updatePost}/>
            </section>
            </div>
        </>
    )
}