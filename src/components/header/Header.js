import React,{useState, useEffect} from "react"
import "../styles/header/header.css"
import { logout } from "../modules/AuthManager"

export const Header = ({getLoggedInUser, isLoggedIn}) =>{

  const [user, updateUser] = useState({})
    const componentArr = [
      <>
      <div className="header_div">

          <div className="logo_div">
          <img id="logo" src="../images/sketchy-logo.png"></img>
        </div>
        <div className="title_div">
          {/* <img id="title" src="../images/title.png"></img> */}
          <h1>Looks Sketchy</h1>
        </div>

        <div className="navbar_user_functions">
        {`Hello, ${user?.name}`}
        <button onClick={logout}>Logout</button>
      </div>
      </div>

    </>
    ,
    <>
    <div className="login_header_div">
        <div className="logo_div">
        <img id="logo" src="../images/sketchy-logo.png"></img>
      </div>
      <div className="title_div">
        {/* <img id="title" src="../images/title.png"></img> */}
        <h1>Looks Sketchy</h1>
      </div>
    </div>

  </>
    ]

    return (
      <>
        {isLoggedIn? componentArr[0] : componentArr[1]}
      </>
    );
}