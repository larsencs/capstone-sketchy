import React, {useState, useEffect} from "react"
import { OpenPostList } from "../posts/open/OpenPostList"
import { ClosedPostList } from "../posts/closed/ClosedPostList"
import { OtherPostList } from "../posts/other/OtherPostList"
import { getRecentUserPosts, getRecentOtherPosts, getOpenPosts } from "../modules/PostManager"
import "../styles/dashboard/dashboard.css"
import { useNavigate } from "react-router-dom"
import { getComments } from "../modules/CommentManager"


export const Dashboard = ({getLoggedInUser}) =>{

    const navigate = useNavigate()
    const [userPost, updateUserPost] = useState([])
    const [openPost, updateOpenPost] = useState([])
    const [otherPost, updateOtherPost] = useState([])

    const [show, updateShow] = useState([])
    
    //populating post state
    useEffect(()=>{
        getRecentUserPosts().then(res => updateUserPost(res))
        getRecentOtherPosts().then(res => updateOtherPost(res))
        getOpenPosts().then(res => updateOpenPost(res))
    },[])

    //When finally called, it will sort an array of objects into largest >> smallest according to id. In theory.

    return(
        <>
            <div className="dashboard_main_container">
                {/* <div className="dashboard_titles"><h3>Open Prompts</h3><h3>Recently Finished Prompts</h3><h3>Other Posts</h3></div> */}
                <div className="dashboard_prompts_container">
                <section className="prompts_section" id="open_section">
                <OpenPostList getLoggedInUser={getLoggedInUser} post={openPost}/>
            </section>
            <section className="prompts_section" id="closed_section">
                <ClosedPostList getLoggedInUser={getLoggedInUser} post={userPost}/>
            </section>
            <section className="prompts_section" id="other_section">
                <OtherPostList getLoggedInUser={getLoggedInUser} post={otherPost}/>
            </section>
                </div>
            </div>
        </>
    )
}