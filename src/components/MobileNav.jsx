"use  client";

import React from "react";
import SVG from "react-inlinesvg";

const MobileNavbar = () => {
	return (
		<div className="mobile-nav-overlay">
			<nav className="mobile__nav">
				<div className="mobile__nav-close">
					<SVG src="/assets/icon-close.svg" />
				</div>

				<ul className="mobile__nav_links">
					<li className="mobile__nav_linkItem">home</li>
					<li className="mobile__nav_linkItem">about</li>

					<button className="btn_outline">Contact us</button>
				</ul>
			</nav>
		</div>
	);
};

export default MobileNavbar;
