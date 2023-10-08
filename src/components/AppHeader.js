import React from "react";
import { NavLink } from "react-router-dom";

const AppHeader = () => {
	return (
		<header>
			<h1>Book Repository</h1>
			<hr />
			<div className="links">
				<NavLink to="/" className="link" exact="true">
					Book List
				</NavLink>

				<NavLink to="/add" className="link">
					{" "}
					Add Book
				</NavLink>
			</div>
		</header>
	);
};

export default AppHeader;
