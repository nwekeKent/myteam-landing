"use client";

import SVG from "react-inlinesvg";
import React from "react";

const data = [
	{
		id: 0,
		name: "Kady Baker",
		para: ` “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”`,
		avatar: "avatar-kady.jpg",
		role: "Product Manager at Bookmark",
	},
	{
		id: 1,
		name: "Aiysha Reese",
		para: ` “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”`,
		avatar: "avatar-aiysha.jpg",
		role: "Founder of Manage",
	},
	{
		id: 2,
		name: "Arthur Clarke",
		para: `“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”`,
		avatar: "avatar-arthur.jpg",
		role: "Co-founder of MyPhysio",
	},
];

const Testimonial = () => {
	return (
		<section className=" testimonial">
			<div className="section-container  testimonial__container">
				<div className="testimonial__content">
					{" "}
					<h1 className="body-heading text-center">
						Delivering real results for top companies. Some of our{" "}
						<span> success stories.</span>
					</h1>
				</div>
				<div className="testimonial__section">
					{data.map(testimonial => {
						return (
							<div className="single__testimonial" key={testimonial.id}>
								<div className="quotes-svg">
									<SVG src="/assets/icon-quotes.svg" />
								</div>
								<p className="body-text text-center">{testimonial.para}</p>

								<h5>{testimonial.name}</h5>
								<small>{testimonial.role}</small>

								<img src={`/assets/${testimonial.avatar}`} alt="user-avatar" />
							</div>
						);
					})}
				</div>
				<div className="testimonial__deco">
					<SVG src="/assets/bg-pattern-home-4-about-3.svg" />
				</div>

				<div className="testimonial__deco--bottom">
					<SVG src="/assets/bg-pattern-home-5.svg" />
				</div>
			</div>
		</section>
	);
};

export default Testimonial;

{
	/* <h1 className="body-heading text-center">
				Delivering real results for top
			</h1>
			<h1 className="body-heading text-center">
				companies. Some of our <span> success stories.</span>
			</h1> */
}
