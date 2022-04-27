import React from "react"
import { Routes, Route, Outlet, Navigate, useNavigate } from "react-router-dom";
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Dashboard } from "./dashboard/Dashboard";
import { Generate } from "./generate/Generate";
import { Prompts } from "./prompts/Prompts";
import { FinishPost } from "./posts/FinishPost";
import { UpdatePost } from "./posts/UpdatePost";
import { PostDashboard } from "./dashboard/PostDashboard";
import { OtherPostDashboard } from "./dashboard/OtherPostDashboard";

export const ApplicationViews = ({isAuthenticated, setAuthUser, getLoggedInUser,}) => {
    
    const PrivateOutlet = () => {
      return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
    };

    return (

        <>
            <Routes>
                <Route path="/" element={<PrivateOutlet/>}>
                    <Route path="/" element={<Dashboard getLoggedInUser={getLoggedInUser}/>}/>
                    <Route path="/generate" element={<Generate/>}/>
                    <Route path="/prompt" element={<Prompts getLoggedInUser={getLoggedInUser}/>}/>
                    <Route path="/complete_prompt" element={<FinishPost getLoggedInUser={getLoggedInUser}/>}/>
                    <Route path="/:postId/update_post/" element={<UpdatePost getLoggedInUser={getLoggedInUser}/>}/>
                    <Route path="/all_posts" element={<PostDashboard getLoggedInUser={getLoggedInUser}/>}/>
                    <Route path="/other_posts" element={<OtherPostDashboard getLoggedInUser={getLoggedInUser}/>}/>
                    <Route path="/:postId/complete_prompt" element={<FinishPost getLoggedInUser={getLoggedInUser}/>}/>
                    <Route/>
                    <Route/>
                    <Route/>
                </Route>

                <Route path="/login" element={<Login setAuthUser={setAuthUser}/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>

        </>


    )
}