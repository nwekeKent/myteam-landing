"use client";

import React from "react";
import SVG from "react-inlinesvg";

const Navbar = () => {
	return (
		<nav className="nav">
			<div className="nav__left">
				<SVG src="/assets/logo.svg" />
				<ul className="nav__links">
					<li className="nav__linkItem">home</li>
					<li className="nav__linkItem">about</li>
				</ul>
			</div>

			<div className="nav__right">
				<button className="btn_outline">Contact us</button>
			</div>
		</nav>
	);
};

export default Navbar;
