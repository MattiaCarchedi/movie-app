import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import logo from "./pngwing.com.png";

function Nav() {
	return (
		<div>
			<nav className="nav">
				<NavLink to="/" className="nav_list-link">
					<img className="nav-logo" src={logo} alt="" />				</NavLink>

				<ul className="nav_list">
					<NavLink to="/" className="nav_list-link">
						<li>Home</li>
					</NavLink>
					<NavLink to="/shop" className="nav_list-link">
						<li>Counter</li>
					</NavLink>
					<NavLink to="/bio" className="nav_list-link">
						<li>Bio</li>
					</NavLink>
					<NavLink to="/about" className="nav_list-link">
						<li>My Movies</li>
					</NavLink>
				</ul>
			</nav>
		</div>
	);
}

export default Nav;
