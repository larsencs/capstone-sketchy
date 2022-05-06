import React,{useState, useEffect} from "react"
import "../styles/header/header.css"
import { getUserById } from "../modules/UserManager"

export const Header = ({getLoggedInUser, clearUser, isAuthenticated}) =>{

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
        <button onClick={clearUser}>Logout</button>
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

    

    useEffect(()=>{
        getUserById(getLoggedInUser())
            .then(res => {
                const temp ={
                    name: res[0]?.name
                }
                updateUser(temp)

            })
    },[])

    return (
      <>
        {isAuthenticated? componentArr[0] : componentArr[1]}
      </>
    );
}