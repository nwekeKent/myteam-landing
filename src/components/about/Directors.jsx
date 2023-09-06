"use client";

import Image from "next/image";
import React, { useState } from "react";
import SVG from "react-inlinesvg";
import { motion, AnimatePresence } from "framer-motion";
import { RevealContainer } from "@/app/utils/RevealContainer";

const data = [
	{
		id: 0,
		avatar: "avatar-nikita.jpg",
		name: "Nikita Marks",
		role: "Founder & CEO",
		quote: `"It always amazes me how much talent there is in every corner of the globe."`,
		delay: 0.5,
	},
	{
		id: 1,
		avatar: "avatar-christian.jpg",
		name: "Cristian Duncan",
		role: "Co-founder & COO",
		quote: `"Distributed teams required unique processes. You need to approach work in a new way."`,
		delay: 0.7,
	},
	{
		id: 2,
		avatar: "avatar-cruz.jpg",
		name: "Cruz Hamer",
		role: "Co-founder & CTO",
		quote: `"Technology is at the forefront of enabling distributed teams. That's where we come in."`,
		delay: 0.9,
	},
	{
		id: 3,
		avatar: "avatar-drake.jpg",
		name: "Drake Heaton",
		role: "Business Development Lead",
		quote: `"Hiring similar people from similar backgrounds is a surefire way to stunt innovation."`,
		delay: 1.1,
	},
	{
		id: 4,
		avatar: "avatar-griffin.jpg",
		name: "Griffin Wise",
		role: "Lead Marketing",
		quote: `"Unique perspectives shape unique products, which is what you need to survive these days."`,
		delay: 1.2,
	},
	{
		id: 5,
		avatar: "avatar-aden.jpg",
		name: "Aden Allan",
		role: "Head of Talent",
		quote: `"Empowered teams create truly amazing products. Set the north star and let them follow it."`,
		delay: 1.3,
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
				<RevealContainer
					transition={{ ease: "linear", duration: 0.5, delay: 1 }}
					variants={{
						visible: { opacity: 1, y: 0 },
						hidden: { opacity: 0, y: 20 },
					}}
				>
					<h1 className="body-heading text-center">Meet the directors</h1>
				</RevealContainer>
				<div className="directors__section">
					{data.map((director, index) => {
						return (
							<RevealContainer
								className="directors__details"
								key={director.id}
								transition={{
									ease: "easeInOut",
									duration: 0.8,
									delay: director.delay,
								}}
								variants={{
									visible: { opacity: 1, y: 0, x: 0 },
									hidden: { opacity: 0, y: 20, x: 30 },
								}}
							>
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
							</RevealContainer>
						);
					})}
				</div>
			</div>

			<RevealContainer
				className="directors__deco-bottom"
				transition={{ ease: "easeOut", duration: 0.8, delay: 0.8 }}
				variants={{
					visible: { opacity: 1, x: 0 },
					hidden: { opacity: 0, x: 100 },
				}}
			>
				<SVG src="/assets/bg-pattern-home-4-about-3.svg" />
			</RevealContainer>

			<RevealContainer
				className="directors__deco-top"
				transition={{ ease: "easeOut", duration: 0.8, delay: 0.8 }}
				variants={{
					visible: { opacity: 1, x: 0 },
					hidden: { opacity: 0, x: -100 },
				}}
			>
				<SVG src="/assets/bg-pattern-about-2-contact-1.svg" />
			</RevealContainer>
		</section>
	);
};

export default Directors;
