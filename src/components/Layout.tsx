import { Outlet } from "react-router-dom";

export const Layout = () => {
	return (
		<div className="p-10">
			<Outlet />
		</div>
	);
};
