import React from "react"
import { Routes, Route, Outlet, Navigate, useNavigate } from "react-router-dom";
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Dashboard } from "./dashboard/Dashboard";
import { Generate } from "./generate/Generate";
import { Prompts } from "./prompts/Prompts";
import { FinishPost } from "./posts/FinishPost";

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
                    <Route/>
                    <Route/>
                    <Route/>
                    <Route/>
                    <Route/>
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