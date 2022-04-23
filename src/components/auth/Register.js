import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Register = () => {
	const [registerUser, setRegisterUser] = useState({
		firstName: "",
		lastName: "",
		email: "",
	});
	const [conflictDialog, setConflictDialog] = useState(false);

	const navigate = useNavigate();

	const handleInputChange = (event) => {
		const newUser = { ...registerUser };
		newUser[event.target.id] = event.target.value;
		setRegisterUser(newUser);
	};

	const existingUserCheck = () => {
		// If your json-server URL is different, please change it below!
		return fetch(`http://localhost:8088/users?email=${registerUser.email}`)
			.then((res) => res.json())
			.then((user) => !!user.length);
	};

	const handleRegister = (e) => {
		e.preventDefault();

		existingUserCheck().then((userExists) => {
			if (!userExists) {
				// If your json-server URL is different, please change it below!
				fetch("http://localhost:8088/users", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: registerUser.email,
						name: `${registerUser.firstName} ${registerUser.lastName}`,
					}),
				})
					.then((res) => res.json())
					.then((createdUser) => {
						if (createdUser.hasOwnProperty("id")) {
							// The user id is saved under the key nutshell_user in session Storage. Change below if needed!
							sessionStorage.setItem("sketchy_user", createdUser.id);
							navigate("/");
						}
					});
			} else {
				setConflictDialog(true);
			}
		});
	};

    //Register form will go here
	return (
        <form onSubmit={handleRegister}>
            <fieldset>
                <label htmlFor="firstName">First name:</label>
                <input type="text" id="firstName" placeholder="First name" required value={registerUser.firstName} onChange={handleInputChange}></input>
                <label htmlFor="lastName">Last name:</label>
                <input type="text" id="lastName" placeholder="Last name" required value={registerUser.lastName} onChange={handleInputChange}></input>
                <input type="email" id="email" placeholder="email" required value={registerUser.email} onChange={handleInputChange}></input>
            </fieldset>
            <fieldset>
                <button type="submit">Register</button>
            </fieldset>
        </form>
    );
};
