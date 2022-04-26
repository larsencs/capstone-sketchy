import React, {useState, useEffect} from "react";
import { AllOtherPostList } from "../posts/AllOtherPostList";
import { getPosts } from "../modules/PostManager";

export const OtherPostDashboard = ({getLoggedInUser}) =>{

    const [post, updatePost] = useState([]);
    const userId = getLoggedInUser();


    useEffect(()=>{
        getPosts().then(p => updatePost(p));
    },[]);

    return (
        <section>
            <AllOtherPostList post={post} getLoggedInUser={getLoggedInUser}/>
        </section>
    )
}