"use  client";

import React from "react";
import SVG from "react-inlinesvg";
import Link from "next/link";

const MobileNavbar = ({ setMobileNavOpen }) => {
	return (
		<div className="mobile-nav-overlay">
			<nav className="mobile__nav">
				<div
					className="mobile__nav-close"
					onClick={() => setMobileNavOpen(false)}
				>
					<SVG src="/assets/icon-close.svg" />
				</div>

				<ul className="mobile__nav_links">
					<li className="mobile__nav_linkItem">
						<Link href="/">home</Link>
					</li>
					<li className="mobile__nav_linkItem">
						<Link href="/about">about</Link>
					</li>

					<Link href="/contact">
						<button className="btn_outline">Contact us</button>
					</Link>
				</ul>
			</nav>
		</div>
	);
};

export default MobileNavbar;
