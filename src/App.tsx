import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
	AsynchronousSelect,
	BasicSelect,
	HookFormSelect,
	Layout,
	Navbar,
} from "./components";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/basic-select" element={<BasicSelect />} />
					<Route path="/async-select" element={<AsynchronousSelect />} />
					<Route path="/hook-form-select" element={<HookFormSelect />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
