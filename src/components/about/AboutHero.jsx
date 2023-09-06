"use  client";

import React from "react";
import SVG from "react-inlinesvg";
import { RevealContainer } from "@/app/utils/RevealContainer";

const AboutHero = () => {
	return (
		<section className="about-hero">
			<div className="section-container about-hero-container">
				<div className="hero__left">
					<RevealContainer
						transition={{ ease: "linear", duration: 0.8, delay: 0.5 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: 20 },
						}}
					>
						<h1 className="inner-hero-heading">About</h1>
					</RevealContainer>
				</div>

				<div className="hero__right">
					<RevealContainer
						transition={{ ease: "linear", duration: 0.5, delay: 1.2 }}
						variants={{
							visible: { opacity: 1, x: 0 },
							hidden: { opacity: 0, x: -20 },
						}}
					>
						<div className="text--deco-coral deco--line"></div>
					</RevealContainer>
					<div className="hero__content">
						<RevealContainer
							transition={{ ease: "easeOut", duration: 0.8, delay: 0.5 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: "20" },
							}}
						>
							<p className="hero-paragraph">
								We help companies build dynamic teams made up of top global
								talent. Using our network of passionate professionals we drive
								innovation and deliver incredible outcomes. Talented, diverse
								teams shape the best products and experiences. We’ll bring those
								teams to you.
							</p>
						</RevealContainer>
					</div>
				</div>
			</div>

			<RevealContainer
				className="hero_deco_right"
				transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
				variants={{
					visible: { x: 0 },
					hidden: { x: 100 },
				}}
			>
				<SVG src="/assets/bg-pattern-about-1-mobile-nav-1.svg" />
			</RevealContainer>
		</section>
	);
};

export default AboutHero;
