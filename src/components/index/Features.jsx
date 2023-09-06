"use  client";

import SVG from "react-inlinesvg";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { RevealContainer } from "@/app/utils/RevealContainer";

const data = [
	{
		id: 0,
		heading: "Experienced Individuals",
		para: `Our network is made up of highly experienced professionals who are passionate about what they do.`,
		svg: "icon-person",
	},
	{
		id: 1,
		heading: "Easy to Implement",
		para: `Our processes have been refined over years of implementation meaning our teams always deliver.`,
		svg: "icon-cog",
	},
	{
		id: 2,
		heading: "Enhanced Productivity",
		para: `Our customized platform with in-built analytics helps you manage your distributed teams.`,
		svg: "icon-chart",
	},
];
const Features = () => {
	return (
		<section className="features">
			<div className="features__container section-container">
				<div className="features__left">
					<RevealContainer
						transition={{ ease: "linear", duration: 0.5, delay: 1.3 }}
						variants={{
							visible: { opacity: 1, x: 0 },
							hidden: { opacity: 0, x: -20 },
						}}
					>
						<div className="text--deco-coral"></div>
					</RevealContainer>

					<div className="features__content">
						<RevealContainer
							transition={{ ease: "easeInOut", duration: 0.8, delay: 0.5 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: 20 },
							}}
						>
							<h1 className="body-heading">
								Build & manage distributed teams like no one else.
							</h1>
						</RevealContainer>
					</div>
				</div>

				<div className="features__right">
					{data.map((feature) => {
						return (
							<RevealContainer
								key={feature.id}
								transition={{ ease: "easeInOut", duration: 0.8, delay: 0.5 }}
								variants={{
									visible: { opacity: 1, y: 0, x: 0 },
									hidden: { opacity: 0, y: 20, x: 30 },
								}}
								className="feature-group"
							>
								<div className="feature-group--svg">
									<SVG src={`/assets/${feature.svg}.svg`} />
								</div>

								<div className="feature-group--content">
									<h3 className="text-center--sm">{feature.heading}</h3>
									<p className="body-text text-center--sm">{feature.para}</p>
								</div>
							</RevealContainer>
						);
					})}
				</div>
			</div>

			<RevealContainer
				className="features__deco"
				transition={{ ease: "easeOut", duration: 0.8, delay: 0.8 }}
				variants={{
					visible: { opacity: 1, x: 0 },
					hidden: { opacity: 1, x: 100 },
				}}
			>
				<SVG src="/assets/bg-pattern-home-3.svg" />
			</RevealContainer>

			<RevealContainer
				transition={{ ease: "easeOut", duration: 1, delay: 0.8 }}
				variants={{
					visible: { opacity: 1, x: 0 },
					hidden: { opacity: 1, x: 100 },
				}}
			>
				<div className="features__deco-bottom">
					<SVG src="/assets/bg-pattern-home-3.svg" />
				</div>
			</RevealContainer>
		</section>
	);
};

export default Features;
