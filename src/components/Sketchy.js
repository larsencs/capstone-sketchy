import React, {useState, useEffect} from "react"
import { ApplicationViews } from "./ApplicationViews"
import { Header } from "./header/Header"
import { NavBar } from "./navbar/NavBar"
import { Footer } from "./footer/Footer"
import { BrowserRouter as Router } from "react-router-dom";
import { onLoginStatusChange } from "./modules/AuthManager"

export const Sketchy = ({getLoggedInUser}) =>{

  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    onLoginStatusChange(setIsLoggedIn);
  }, []);

    // const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("sketchy_user") !== null)

    // const setAuthUser = (user) => {
    //     sessionStorage.setItem("sketchy_user", JSON.stringify(user))
    //     setIsAuthenticated(sessionStorage.getItem("sketchy_user") !== null)
    // }

    // const getLoggedInUser = () => {
    //   const thisUserId = parseInt(sessionStorage.getItem("sketchy_user"))
    //   return thisUserId;
    // }
    
    // const clearUser = () => {
    //     sessionStorage.clear();
    //     setIsAuthenticated(sessionStorage.getItem("sketchy_user") !== null)
    //   }

    return(

        <div className="Looks-Sketchy">
          <Router>
          <Header isLoggedIn={isLoggedIn} getLoggedInUser={getLoggedInUser}/>
        <NavBar isLoggedIn={isLoggedIn} getLoggedInUser={getLoggedInUser}/>
        <ApplicationViews getLoggedInUser={getLoggedInUser} isLoggedIn={isLoggedIn}/>
        <Footer/>
          </Router>
        </div>
    )
}