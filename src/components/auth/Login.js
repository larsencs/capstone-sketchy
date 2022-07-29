import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login/login.css"
import { login } from "../modules/AuthManager";

export const Login = ({setAuthUser}) => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const [existDialog, setExistDialog] = useState(false);

	const navigate = useNavigate();

	// const handleInputChange = (event) => {
	// 	const newUser = { ...loginUser };
	// 	newUser[event.target.id] = event.target.value;
	// 	setLoginUser(newUser);
	// };

	// const existingUserCheck = () => {
	// 	// If your json-server URL is different, please change it below!
	// 	return fetch(`http://localhost:8088/users?email=${loginUser.email}`)
	// 		.then((res) => res.json())
	// 		.then((user) => (user.length ? user[0] : false));
	// };

    const loginSubmit = (e) => {
		e.preventDefault();
		login(email, password)
		  .then(() => navigate("/"))
		  .catch(() => alert("Invalid email or password"));
	  };

	return (
    <div className="login_form_container">
      <div id="form_container">
        <form onSubmit={loginSubmit}>
          <fieldset>
            <input
              type="email"
              id="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
			            <input
              type="text"
              id="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div id="login_btn">
              <button>Login</button>
            </div>
          </fieldset>
        </form>
      </div>
      <div id="register">
        <Link to="/register">Click here to register for an account</Link>
      </div>
    </div>
  );
};
