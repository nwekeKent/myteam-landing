"use client";

import React from "react";
import SVG from "react-inlinesvg";
import ContactForm from "./ContactForm";
import { RevealContainer } from "@/app/utils/RevealContainer";

const data = [
	{
		id: 0,
		heading: "The quality of our talent network",
		svg: "icon-person",
		delay: 0.7,
	},
	{
		id: 1,
		heading: "Usage & implementation of our software",
		svg: "icon-cog",
		delay: 0.9,
	},
	{
		id: 2,
		heading: "How we help drive innovation",
		svg: "icon-chart",
		delay: 1.1,
	},
];

const Contact = () => {
	return (
		<section className="contact">
			<div className="contact__container section-container">
				<div className="contact__left">
					<RevealContainer
						transition={{ ease: "linear", duration: 0.8, delay: 0.5 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: 20 },
						}}
					>
						<h1 className="inner-hero-heading">Contact</h1>
					</RevealContainer>

					<div className="contact__content">
						<RevealContainer
							transition={{ ease: "linear", duration: 0.5, delay: 1 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: 20 },
							}}
						>
							<h4>Ask us about</h4>
						</RevealContainer>
						{data.map((contact) => {
							return (
								<RevealContainer
									className="contact-group"
									key={contact.id}
									transition={{
										ease: "easeInOut",
										duration: 0.8,
										delay: contact.delay,
									}}
									variants={{
										visible: { opacity: 1, y: 0, x: 0 },
										hidden: { opacity: 0, y: 20, x: 30 },
									}}
								>
									<div className="contact-group--svg">
										<SVG src={`/assets/${contact.svg}.svg`} />
									</div>

									<div className="contact-group--content">
										<h3>{contact.heading}</h3>
									</div>
								</RevealContainer>
							);
						})}
					</div>
				</div>

				<div className="contact__right">
					<ContactForm />
				</div>
			</div>

			<RevealContainer
				className="contact__deco"
				transition={{ ease: "easeOut", duration: 0.8, delay: 0.8 }}
				variants={{
					visible: { opacity: 1, x: 0 },
					hidden: { opacity: 0, x: 100 },
				}}
			>
				<SVG src="/assets/bg-pattern-contact-2.svg" />
			</RevealContainer>
		</section>
	);
};

export default Contact;
