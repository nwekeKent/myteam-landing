"use client";

import React from "react";
import SVG from "react-inlinesvg";

const address = [
	"987 Hillcrest Lane",
	"Irvine, CA",
	"California 92714",
	"Call Us: 949-833-7432",
];

const socials = ["icon-facebook.svg", "icon-pinterest.svg", "icon-twitter.svg"];

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container section-container">
				<div className="footer__left">
					<div className="footer__nav">
						<SVG src="/assets/logo.svg" />
						<ul className="nav__links">
							<li className="nav__linkItem">home</li>
							<li className="nav__linkItem">about</li>
						</ul>
					</div>
					<div className="footer__address">
						{address.map((addy, index) => {
							return <p key={index}>{addy}</p>;
						})}
					</div>
				</div>
				<div className="footer__right">
					<div className="socials-svg">
						{socials.map((social, index) => {
							return <SVG src={`/assets/${social}`} key={index} />;
						})}
					</div>

					<p>Copyright 2020. All Rights Reserved</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
