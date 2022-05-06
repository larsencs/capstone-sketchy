import React, {useState, useEffect} from "react"
import { OpenPostList } from "../posts/open/OpenPostList"
import { ClosedPostList } from "../posts/closed/ClosedPostList"
import { OtherPostList } from "../posts/other/OtherPostList"
import { getPosts, getMadness } from "../modules/PostManager"
import "../styles/dashboard/dashboard.css"
import { useNavigate } from "react-router-dom"
import { getComments } from "../modules/CommentManager"


export const Dashboard = ({getLoggedInUser}) =>{

    const navigate = useNavigate()

    const [post, updatePost] = useState([])
    const [madness, updateMadness] = useState([])
    const [comment, updateComment] = useState([])
    const [show, updateShow] = useState([])
    
    //populating post state
    useEffect(()=>{
        getPosts().then(res => updatePost(res))
    },[])

    //populating comment state
    useEffect(()=>{
        getComments().then(res => updateComment(res))
    },[]);

    useEffect(()=>{
        getMadness().then(res => updateMadness(res))
    },[])


    //When finally called, it will sort an array of objects into largest >> smallest according to id. In theory.
    const selectSort = (postArr) =>{

        let sortedArr = [...postArr]
        let largest = [{id:0}]

        for(let i = 0; i < sortedArr.length; i++){
            for(let j = i+1; j< sortedArr.length; j++){
                if(sortedArr[j].id > largest[i].id){
                    largest[i] = sortedArr[j]
                }
                if(largest[j].id !== sortedArr[i].id){
                    let tempItem = sortedArr[i]
                    sortedArr[i] = largest[j]
                    sortedArr[j] = tempItem
                }
            }
        }


    }




    return(
        <>
            <div className="dashboard_main_container">
                {/* <div className="dashboard_titles"><h3>Open Prompts</h3><h3>Recently Finished Prompts</h3><h3>Other Posts</h3></div> */}
                <div className="dashboard_prompts_container">
                <section className="prompts_section" id="open_section">
                <OpenPostList getLoggedInUser={getLoggedInUser} post={post} updatePost={updatePost} madness={madness}/>
            </section>
            <section className="prompts_section" id="closed_section">
                <ClosedPostList getLoggedInUser={getLoggedInUser} post={post} updatePost={updatePost} comments={comment} madness={madness} show={show} updateShow={updateShow}/>
            </section>
            <section className="prompts_section" id="other_section">
                <OtherPostList getLoggedInUser={getLoggedInUser} post={post} updatePost={updatePost} madness={madness}/>
            </section>
                </div>
            </div>
        </>
    )
}