"use client";

import MobileNavbar from "@/components/layouts/navbar/MobileNav";
import React, { useState } from "react";
import SVG from "react-inlinesvg";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);
	const pathname = usePathname();

	const onActiveLink = route => {
		return pathname === route ? "nav__link--active" : null;
	};

	return (
		<React.Fragment>
			<motion.nav
				className="nav"
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					type: "spring",
					stiffness: 100,
					duration: 0.5,
					delay: 0.5,
				}}
			>
				<div className="nav__left">
					<Link href="/">
						<SVG src="/assets/logo.svg" />
					</Link>
					<ul className="nav__links">
						<li className={`nav__linkItem ${onActiveLink("/")}`}>
							<Link href="/">home</Link>
						</li>
						<li className={`nav__linkItem ${onActiveLink("/about")}`}>
							<Link href="/about">about</Link>
						</li>
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
						<Link href="/contact">
							<button className="btn_outline">Contact us</button>
						</Link>
					</div>
				</div>
			</motion.nav>
			{mobileNavOpen && <MobileNavbar setMobileNavOpen={setMobileNavOpen} />}
		</React.Fragment>
	);
};

export default Navbar;
