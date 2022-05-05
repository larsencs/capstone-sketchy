import React, {useState, useEffect} from "react";
import { getPostByUserId, getMadnessByUserId } from "../modules/PostManager";
import { AllPostList } from "../posts/userpost/AllPostList";

export const PostDashboard = ({getLoggedInUser}) =>{

    const [post, updatePost] = useState([]);
    const [madness, updateMadness] = useState([])
    const userId = getLoggedInUser();


    useEffect(()=>{
        getPostByUserId(userId).then(p => updatePost(p));
    },[]);

    useEffect(()=>{
        getMadnessByUserId(userId).then(p => updateMadness(p));
    },[]);

    return (
        <section>
            <AllPostList post={post} madness={madness} getLoggedInUser={getLoggedInUser}/>
        </section>
    )




}