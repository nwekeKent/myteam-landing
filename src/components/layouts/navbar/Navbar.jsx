"use client";

import MobileNavbar from "@/components/layouts/navbar/MobileNav";
import React, { useState } from "react";
import SVG from "react-inlinesvg";

const Navbar = () => {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);
	return (
		<React.Fragment>
			<nav className="nav">
				<div className="nav__left">
					<SVG src="/assets/logo.svg" />
					<ul className="nav__links">
						<li className="nav__linkItem">home</li>
						<li className="nav__linkItem">about</li>
					</ul>
				</div>

				<div className="nav__right">
					<div
						className="nav__hamburger"
						onClick={() => setMobileNavOpen(true)}
					>
						<SVG src="/assets/icon-hamburger.svg" />
					</div>

					<div className="nav__cta">
						<button className="btn_outline">Contact us</button>
					</div>
				</div>
			</nav>
			{mobileNavOpen && <MobileNavbar setMobileNavOpen={setMobileNavOpen} />}
		</React.Fragment>
	);
};

export default Navbar;
