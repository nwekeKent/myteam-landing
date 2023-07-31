"use client";

import React from "react";
import SVG from "react-inlinesvg";

const Started = () => {
	return (
		<section className="started">
			<div className="started__container">
				<div className="started__content">
					<h1 className="body-heading text-center">Ready to get started?</h1>
				</div>

				<button className="btn_outline-dark">Contact us</button>
			</div>

			<div className="started__deco">
				<SVG src="/assets/bg-pattern-home-6-about-5.svg" />
			</div>
		</section>
	);
};

export default Started;
