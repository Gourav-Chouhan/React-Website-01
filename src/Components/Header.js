import React from "react";
import logo from "../assets/Clapingo Logo.png";
import { useNavigate } from "react-router-dom";

function Header(props) {
	const navigate = useNavigate();
	// get values of props
	const { buttonContent, setButtonContent } = props;

	return (
		<nav className="header">
			<div
				className="logo"
				style={{ cursor: "pointer" }}
				onClick={() => {
					setButtonContent("login");

					navigate("/");
				}}
			>
				<img src={logo} alt="logo" />
			</div>
			<div>
				<div>Plans & Pricing</div>
				<div>Teach with us</div>
				<div>Affiliate Program</div>
				<div>Kids</div>
			</div>
			<div
				className="login-logo"
				onClick={() => {
					if (
						localStorage.getItem("userID") &&
						localStorage.getItem("password")
					) {
						setButtonContent("Logout");

						navigate("/afterLogin");
					} else {
						setButtonContent("create account");
						navigate("/login");
					}
				}}
			>
				<div></div>
				<div>{buttonContent}</div>
			</div>
		</nav>
	);
}

export default Header;
