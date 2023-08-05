"use  client";

import React from "react";
import SVG from "react-inlinesvg";

const AboutHero = () => {
	return (
		<section className="about-hero">
			<div className="section-container about-hero-container">
				<div className="hero__left">
					<h1 className="inner-hero-heading">About</h1>
				</div>

				<div className="hero__right">
					<div className="text--deco-coral deco--line"></div>
					<div className="hero__content">
						<p className="hero-paragraph">
							We help companies build dynamic teams made up of top global
							talent. Using our network of passionate professionals we drive
							innovation and deliver incredible outcomes. Talented, diverse
							teams shape the best products and experiences. We’ll bring those
							teams to you.
						</p>
					</div>
				</div>
			</div>

			<div className="hero_deco_right">
				<SVG src="/assets/bg-pattern-about-1-mobile-nav-1.svg" />
			</div>
		</section>
	);
};

export default AboutHero;
