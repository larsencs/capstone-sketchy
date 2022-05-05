import React, {useState, useEffect} from "react";
import { AllOtherPostList } from "../posts/other/AllOtherPostList";
import { getPosts, getMadness } from "../modules/PostManager";

export const OtherPostDashboard = ({getLoggedInUser}) =>{

    const [post, updatePost] = useState([]);
    const [madness, updateMadness] = useState([])
    const userId = getLoggedInUser();


    useEffect(()=>{
        getPosts().then(p => updatePost(p));
    },[]);

    useEffect(()=>{
        getMadness().then(p => updateMadness(p));
    },[]);

    

    return (
        <section>
            <AllOtherPostList post={post} getLoggedInUser={getLoggedInUser} madness={madness}/>
        </section>
    )
}