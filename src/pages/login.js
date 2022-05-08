import { React, useState } from "react";
import logo from "../assets/Clapingo Logo.png";
import { useNavigate } from "react-router-dom";

function Login() {
	const [userID, setUserID] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const submit = () => {
		localStorage.setItem("userID", userID);
		localStorage.setItem("password", password);
		navigate("/afterLogin");
	};

	return (
		<>
			<div className="login">
				<div>
					<h1 style={{ color: "#52a49a" }}>Login to</h1>
					<br />
					<img alt="logo" src={logo} />
				</div>
				<div className="login-form">
					<div>
						<div>UserID</div>
						<input
							type="text"
							value={userID}
							onChange={(event) => {
								setUserID(event.target.value);
							}}
						/>
						<div>Password</div>
						<input
							type="password"
							value={password}
							onChange={(event) => {
								setPassword(event.target.value);
							}}
							onKeyDown={(event) => {
								if (event.key === "Enter") {
									submit();
								}
							}}
						/>
					</div>

					<div className="login-button" onClick={submit}>
						Login
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;
