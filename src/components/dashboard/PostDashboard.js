import React, {useState, useEffect} from "react";
import { getPostByUserId } from "../modules/PostManager";
import { AllPostList } from "../posts/userpost/AllPostList";

export const PostDashboard = ({getLoggedInUser}) =>{

    const [post, updatePost] = useState([]);
    const userId = getLoggedInUser();


    useEffect(()=>{
        getPostByUserId(userId).then(p => updatePost(p));
    },[]);

    return (
        <section>
            <AllPostList post={post} getLoggedInUser={getLoggedInUser}/>
        </section>
    )




}