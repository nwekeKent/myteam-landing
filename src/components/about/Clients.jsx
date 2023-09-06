"use client";

import { RevealContainer } from "@/app/utils/RevealContainer";
import Image from "next/image";
import React, { useState } from "react";
import SVG from "react-inlinesvg";

const data = [
	{
		id: 0,
		avatar: "logo-the-verge.png",
		delay: 0.5,
	},
	{
		id: 1,
		avatar: "logo-jakarta-post.png",
		delay: 0.7,
	},
	{
		id: 2,
		avatar: "logo-the-guardian.png",
		delay: 0.9,
	},

	{
		id: 3,
		avatar: "logo-tech-radar.png",
		delay: 1.1,
	},

	{
		id: 4,
		avatar: "logo-gadgets-now.png",
		delay: 1.3,
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
				<RevealContainer
					transition={{ ease: "linear", duration: 0.5, delay: 1 }}
					variants={{
						visible: { opacity: 1, y: 0 },
						hidden: { opacity: 0, y: -20 },
					}}
				>
					<h1 className="body-heading text-center">Some of our clients</h1>
				</RevealContainer>
				<div className="clients__section">
					{data.map((client, index) => {
						return (
							<RevealContainer
								key={index}
								transition={{
									ease: "easeInOut",
									duration: 0.8,
									delay: client.delay,
								}}
								variants={{
									visible: { opacity: 1, y: 0, x: 0 },
									hidden: { opacity: 0, y: 20, x: 30 },
								}}
							>
								<img src={`/assets/${client.avatar}`} alt="clients image" />
							</RevealContainer>
						);
					})}
				</div>
			</div>

			<RevealContainer
				className="clients__deco"
				transition={{ ease: "easeOut", duration: 0.8, delay: 0.8 }}
				variants={{
					visible: { opacity: 1, x: 0 },
					hidden: { opacity: 0, x: -100 },
				}}
			>
				<SVG src="/assets/bg-pattern-about-4.svg" />
			</RevealContainer>
		</section>
	);
};

export default Clients;
