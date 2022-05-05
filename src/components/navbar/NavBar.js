import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { getUserById } from "../modules/UserManager"
import { useNavigate } from "react-router-dom"
import "../styles/navbar/NavBar.css"

export const NavBar = ({clearUser, getLoggedInUser, isAuthenticated}) =>{

    const[user, updateUser] = useState({
        name: ""
    })

    const componentArr = [
      <>
        <nav className="navbar_container">
          <span className="nav_links">
            <div><Link to="/" className="link">Dashboard</Link></div>
            <div><Link to="/all_posts" className="link">Posts</Link></div>
            <div><Link to="/generate" className="link">Generate</Link></div>
          </span>
          <span className="finish_link">
            {/* <Link to="/complete_prompt" className="link">Finish Prompt</Link> */}
          </span>
        </nav>
      </>,
            <>
            <nav className="navbar_container">
              <span className="nav_links">
                <div><Link to="/" className="link">Dashboard</Link></div>
              </span>
            </nav>
          </>
    ];

    const navigate = useNavigate()




    return(
    <>
        {isAuthenticated? componentArr[0] : componentArr[1]}
    </>)

}