"use client";

import Image from "next/image";
import React, { useState } from "react";
import SVG from "react-inlinesvg";

const data = [
	{
		id: 0,
		avatar: "logo-the-verge.png",
	},
	{
		id: 1,
		avatar: "logo-jakarta-post.png",
	},
	{
		id: 2,
		avatar: "logo-the-guardian.png",
	},

	{
		id: 3,
		avatar: "logo-tech-radar.png",
	},

	{
		id: 4,
		avatar: "logo-gadgets-now.png",
	},
];

const imageStyle = {
	borderRadius: "50%",
	border: " 2px solid #c4fffe",
	textAlign: "center",
};

const Clients = () => {
	return (
		<section className="clients">
			<div className="section-container clients__container">
				<h1 className="body-heading text-center">Some of our clients</h1>
				<div className="clients__section">
					{data.map((client, index) => {
						return (
							<img
								src={`/assets/${client.avatar}`}
								alt="clients image"
								key={index}
							/>
						);
					})}
				</div>
			</div>

			<div className="clients__deco">
				<SVG src="/assets/bg-pattern-about-4.svg" />
			</div>
		</section>
	);
};

export default Clients;
