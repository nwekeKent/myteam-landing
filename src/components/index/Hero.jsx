"use  client";

import React from "react";
import SVG from "react-inlinesvg";

const Hero = () => {
	return (
		<section className="section-container hero">
			<div className="hero__left">
				<h1 className="hero-heading">Find the</h1>
				<h1 className="hero-heading">
					best <span>talent</span>
				</h1>
			</div>

			<div className="hero__right">
				<div className="text--deco deco--line"></div>
				<div className="hero__content">
					<p className="hero-paragraph">
						Finding the right people and building high performing teams can be
						hard. Most companies aren’t tapping into the abundance of global
						talent. We’re about to change that.
					</p>
				</div>
			</div>

			<div className="hero_deco_bottom">
				<SVG src="/assets/bg-pattern-home-2.svg" />
			</div>

			<div className="hero_deco_left">
				<SVG src="/assets/bg-pattern-home-1.svg" />
			</div>
		</section>
	);
};

export default Hero;
