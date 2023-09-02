"use client";

import Image from "next/image";
import React, { useState } from "react";
import SVG from "react-inlinesvg";
import { motion, AnimatePresence } from "framer-motion";

const data = [
	{
		id: 0,
		avatar: "avatar-nikita.jpg",
		name: "Nikita Marks",
		role: "Founder & CEO",
		quote: `"It always amazes me how much talent there is in every corner of the globe."`,
	},
	{
		id: 1,
		avatar: "avatar-christian.jpg",
		name: "Cristian Duncan",
		role: "Co-founder & COO",
		quote: `"Distributed teams required unique processes. You need to approach work in a new way."`,
	},
	{
		id: 2,
		avatar: "avatar-cruz.jpg",
		name: "Cruz Hamer",
		role: "Co-founder & CTO",
		quote: `"Technology is at the forefront of enabling distributed teams. That's where we come in."`,
	},
	{
		id: 3,
		avatar: "avatar-drake.jpg",
		name: "Drake Heaton",
		role: "Business Development Lead",
		quote: `"Hiring similar people from similar backgrounds is a surefire way to stunt innovation."`,
	},
	{
		id: 4,
		avatar: "avatar-griffin.jpg",
		name: "Griffin Wise",
		role: "Lead Marketing",
		quote: `"Unique perspectives shape unique products, which is what you need to survive these days."`,
	},
	{
		id: 5,
		avatar: "avatar-aden.jpg",
		name: "Aden Allan",
		role: "Head of Talent",
		quote: `"Empowered teams create truly amazing products. Set the north star and let them follow it."`,
	},
];

const imageStyle = {
	borderRadius: "50%",
	border: " 2px solid #c4fffe",
	textAlign: "center",
};

const Directors = () => {
	const [flipped, setFlipped] = useState(null);

	const handleToggle = (index) => {
		if (index === flipped) {
			setFlipped(null);
		}
		setFlipped(index);
	};
	return (
		<section className="directors">
			<div className="section-container directors__container">
				<h1 className="body-heading text-center">Meet the directors</h1>
				<div className="directors__section">
					{data.map((director, index) => {
						return (
							<div className="directors__details" key={director.id}>
								<AnimatePresence mode="wait">
									{flipped === index ? (
										<motion.div
											className="directors__card flipped-card"
											key="back"
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
											transition={{ duration: 0.1 }}
										>
											<h5>{director.name}</h5>
											<p>{director.quote}</p>
										</motion.div>
									) : (
										<motion.div
											className="directors__card"
											key="front"
											exit={{ opacity: 0 }}
											transition={{ duration: 0.1 }}
										>
											<div className="directors__avatar">
												<Image
													src={`/assets/${director.avatar}`}
													height={96}
													width={96}
													alt="directors avatar"
													// objectFit="contain"
													style={imageStyle}
												/>
											</div>

											<h5>{director.name}</h5>
											<small>{director.role}</small>
										</motion.div>
									)}
								</AnimatePresence>
								<div
									className="toggle-director"
									onClick={() => {
										handleToggle(index);
									}}
								>
									<SVG
										src={
											flipped === index
												? "/assets/director-close.svg"
												: "/assets/director-open.svg"
										}
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<div className="directors__deco-bottom">
				<SVG src="/assets/bg-pattern-home-4-about-3.svg" />
			</div>

			<div className="directors__deco-top">
				<SVG src="/assets/bg-pattern-about-2-contact-1.svg" />
			</div>
		</section>
	);
};

export default Directors;
