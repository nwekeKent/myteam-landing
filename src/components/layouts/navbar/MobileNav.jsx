"use  client";

import React from "react";
import SVG from "react-inlinesvg";
import { useRouter } from "next/navigation";

const MobileNavbar = ({ setMobileNavOpen }) => {
	const router = useRouter();
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
					<li className="mobile__nav_linkItem" onClick={() => router.push("/")}>
						home
					</li>
					<li
						className="mobile__nav_linkItem"
						onClick={() => router.push("/about")}
					>
						about
					</li>

					<button
						className="btn_outline"
						onClick={() => router.push("/contact")}
					>
						Contact us
					</button>
				</ul>
			</nav>
		</div>
	);
};

export default MobileNavbar;
