import Header from "./Components/Header";
import AfterLogin from "./pages/afterLogin";
import FrontPage from "./pages/frontPage";
import Login from "./pages/login";

const { React, useState } = require("react");
const { BrowserRouter, Routes, Route } = require("react-router-dom");

function App() {
	const [buttonContent, setButtonContent] = useState("login");

	return (
		<BrowserRouter>
			<Header
				buttonContent={buttonContent}
				setButtonContent={setButtonContent}
			/>
			<Routes>
				<Route path="/" element={<FrontPage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/afterLogin" element={<AfterLogin />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
