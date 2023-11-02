import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout, Navbar } from "./components";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Layout />}>
					{/* <Route path="/link" element={<Component />} /> */}
				</Route>
			</Routes>
		</div>
	);
}

export default App;
