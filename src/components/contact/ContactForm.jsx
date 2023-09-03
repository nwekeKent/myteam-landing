"use client";

import React from "react";

const ContactForm = () => {
	return (
		<form className="contact__form">
			<div className="input--container">
				<input type="text" placeholder="Name" />
			</div>
			<div className="input--container">
				<input type="text" placeholder="Email Address" />
			</div>
			<div className="input--container">
				<input type="text" placeholder="Company Name" />
			</div>
			<div className="input--container">
				<input type="text" placeholder="Title" />
			</div>

			<div className="input--container">
				<textarea type="text" placeholder="Message" />
			</div>

			<button className="btn_solid" type="button">
				Submit
			</button>
		</form>
	);
};

export default ContactForm;
