import React, {useState, useEffect} from "react"
import { OpenPostList } from "../posts/OpenPostList"
import { ClosedPostList } from "../posts/ClosedPostList"
import { OtherPostList } from "../posts/OtherPostList"
import { getPosts } from "../modules/PostManager"
import "../styles/dashboard/dashboard.css"


export const Dashboard = ({getLoggedInUser}) =>{

    const [post, updatePost] = useState([])
    
    useEffect(()=>{
        getPosts().then(res => updatePost(res))
    },[])


    return(
        <>
            <div class="dashboard_main_container">
            <section className="prompts_section">
                <OpenPostList getLoggedInUser={getLoggedInUser} post={post} updatePost={updatePost}/>
            </section>
            <section className="prompts_section">
                <ClosedPostList getLoggedInUser={getLoggedInUser} post={post} updatePost={updatePost}/>
            </section>
            <section className="posts_section">
                <OtherPostList getLoggedInUser={getLoggedInUser} post={post} updatePost={updatePost}/>
            </section>
            </div>
        </>
    )
}