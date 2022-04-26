import React, {useState} from "react"
import { ApplicationViews } from "./ApplicationViews"
import { Header } from "./header/Header"
import { NavBar } from "./navbar/NavBar"
import { Footer } from "./footer/Footer"

export const Sketchy = () =>{

    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("sketchy_user") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("sketchy_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("sketchy_user") !== null)
    }

    const getLoggedInUser = () => {
      const thisUserId = parseInt(sessionStorage.getItem("sketchy_user"))
      return thisUserId;
    }
    
    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("sketchy_user") !== null)
      }

    return(

        <>
        <Header getLoggedInUser={getLoggedInUser} clearUser={clearUser} isAuthenticated={isAuthenticated}/>
        <NavBar getLoggedInUser={getLoggedInUser} clearUser={clearUser} isAuthenticated={isAuthenticated}/>
        <ApplicationViews setAuthUser={setAuthUser} getLoggedInUser={getLoggedInUser} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}/>
        <Footer/>
        </>
    )
}