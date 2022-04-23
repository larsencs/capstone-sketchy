import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login/login.css"

export const Login = ({setAuthUser}) => {
	const [loginUser, setLoginUser] = useState({ email: "" });
	const [existDialog, setExistDialog] = useState(false);

	const navigate = useNavigate();

	const handleInputChange = (event) => {
		const newUser = { ...loginUser };
		newUser[event.target.id] = event.target.value;
		setLoginUser(newUser);
	};

	const existingUserCheck = () => {
		// If your json-server URL is different, please change it below!
		return fetch(`http://localhost:8088/users?email=${loginUser.email}`)
			.then((res) => res.json())
			.then((user) => (user.length ? user[0] : false));
	};

	const handleLogin = (e) => {
		e.preventDefault();

		existingUserCheck().then((exists) => {
			if (exists) {
				// The user id is saved under the key nutshell_user in session Storage. Change below if needed!
				setAuthUser(exists.id)
				navigate("/");
			} else {
				setExistDialog(true);
			}
		});
	};

	return (
    <div className="login_form_container">
      <form onSubmit={handleLogin}>
        <fieldset>
          <input
            type="email"
            id="email"
            placeholder="email"
            value={loginUser.email}
            onChange={handleInputChange}
          />
          <button type="submit">Login</button>
        </fieldset>
        <div>
          <Link to="/register">Click here to register for an account</Link>
        </div>
      </form>
    </div>
  );
};
