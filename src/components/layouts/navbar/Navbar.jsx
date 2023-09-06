"use client";

import MobileNavbar from "@/components/layouts/navbar/MobileNav";
import React, { useState } from "react";
import SVG from "react-inlinesvg";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);
	const router = useRouter();

	const pathname = usePathname();

	const onActiveLink = (route) => {
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
					<SVG src="/assets/logo.svg" onClick={() => router.push("/")} />
					<ul className="nav__links">
						<li
							className={`nav__linkItem  ${onActiveLink("/")}`}
							onClick={() => router.push("/")}
						>
							home
						</li>
						<li
							className={`nav__linkItem ${onActiveLink("/about")}`}
							onClick={() => router.push("/about")}
						>
							about
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
						<button
							className="btn_outline"
							onClick={() => router.push("/contact")}
						>
							Contact us
						</button>
					</div>
				</div>
			</motion.nav>
			{mobileNavOpen && <MobileNavbar setMobileNavOpen={setMobileNavOpen} />}
		</React.Fragment>
	);
};

export default Navbar;
