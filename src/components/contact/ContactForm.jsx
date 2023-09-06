"use client";

import { RevealContainer } from "@/app/utils/RevealContainer";
import React from "react";

const ContactForm = () => {
	return (
		<form className="contact__form">
			<RevealContainer
				className="input--container"
				transition={{ ease: "linear", duration: 0.8, delay: 1 }}
				variants={{
					visible: { opacity: 1, y: 0 },
					hidden: { opacity: 0, y: -20 },
				}}
			>
				<input type="text" placeholder="Name" />
			</RevealContainer>
			<RevealContainer
				className="input--container"
				transition={{ ease: "linear", duration: 0.8, delay: 1.1 }}
				variants={{
					visible: { opacity: 1, y: 0 },
					hidden: { opacity: 0, y: -20 },
				}}
			>
				<input type="text" placeholder="Email Address" />
			</RevealContainer>
			<RevealContainer
				className="input--container"
				transition={{ ease: "linear", duration: 0.8, delay: 1.2 }}
				variants={{
					visible: { opacity: 1, y: 0 },
					hidden: { opacity: 0, y: -20 },
				}}
			>
				<input type="text" placeholder="Company Name" />
			</RevealContainer>
			<RevealContainer
				className="input--container"
				transition={{ ease: "linear", duration: 0.8, delay: 1.3 }}
				variants={{
					visible: { opacity: 1, y: 0 },
					hidden: { opacity: 0, y: -20 },
				}}
			>
				<input type="text" placeholder="Title" />
			</RevealContainer>

			<RevealContainer
				className="input--container"
				transition={{ ease: "linear", duration: 0.8, delay: 1.4 }}
				variants={{
					visible: { opacity: 1, y: 0 },
					hidden: { opacity: 0, y: -20 },
				}}
			>
				<textarea type="text" placeholder="Message" />
			</RevealContainer>

			<RevealContainer
				transition={{ ease: "linear", duration: 0.5, delay: 1.6 }}
				variants={{
					visible: { opacity: 1, x: 0 },
					hidden: { opacity: 0, x: -30 },
				}}
			>
				<button className="btn_solid" type="button">
					Submit
				</button>
			</RevealContainer>
		</form>
	);
};

export default ContactForm;
