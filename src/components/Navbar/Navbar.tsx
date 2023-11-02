import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";

export const Navbar = () => {
	return (
		<div className="bg-slate-100">
			<ul className="flex justify-center items-center gap-4 font-bold text-red-500 px-5 py-5 shadow-md">
				<li>
					<Link
						to="/"
						className="block px-3 py-2 shadow-md rounded-lg text-2xl bg-white" // text size only for icons
					>
						<FcHome />
					</Link>
				</li>

				{/* <li>
					<Link
						to="/link"
						className="block px-3 py-2 shadow-md rounded-lg bg-white"
					>
						Menu
					</Link>
				</li> */}
			</ul>
		</div>
	);
};
