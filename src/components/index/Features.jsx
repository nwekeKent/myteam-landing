"use  client";

import SVG from "react-inlinesvg";
import React from "react";

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
					<div className="text--deco-coral"></div>
					<div className="features__content">
						<h1 className="body-heading">
							Build & manage distributed teams like no one else.
						</h1>
					</div>
				</div>

				<div className="features__right">
					{data.map((feature) => {
						return (
							<div className="feature-group" key={feature.id}>
								<div className="feature-group--svg">
									<SVG src={`/assets/${feature.svg}.svg`} />
								</div>

								<div className="feature-group--content">
									<h3 className="text-center--sm">{feature.heading}</h3>
									<p className="body-text text-center--sm">{feature.para}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<div className="features__deco">
				<SVG src="/assets/bg-pattern-home-3.svg" />
			</div>

			<div className="features__deco-bottom">
				<SVG src="/assets/bg-pattern-home-3.svg" />
			</div>
		</section>
	);
};

export default Features;
