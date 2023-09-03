"use client";

import React from "react";
import SVG from "react-inlinesvg";
import ContactForm from "./ContactForm";

const data = [
	{
		id: 0,
		heading: "The quality of our talent network",
		svg: "icon-person",
	},
	{
		id: 1,
		heading: "Usage & implementation of our software",
		svg: "icon-cog",
	},
	{
		id: 2,
		heading: "How we help drive innovation",
		svg: "icon-chart",
	},
];

const Contact = () => {
	return (
		<section className="contact">
			<div className="contact__container section-container">
				<div className="contact__left">
					<h1 className="inner-hero-heading">Contact</h1>

					<div className="contact__content">
						<h4>Ask us about</h4>
						{data.map((contact) => {
							return (
								<div className="contact-group" key={contact.id}>
									<div className="contact-group--svg">
										<SVG src={`/assets/${contact.svg}.svg`} />
									</div>

									<div className="contact-group--content">
										<h3>{contact.heading}</h3>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				<div className="contact__right">
					<ContactForm />
				</div>
			</div>

			<div className="contact__deco">
				<SVG src="/assets/bg-pattern-contact-2.svg" />
			</div>
		</section>
	);
};

export default Contact;
