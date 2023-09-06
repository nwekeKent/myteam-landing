"use  client";

import React, { useEffect, useRef } from "react";
import SVG from "react-inlinesvg";
import { useInView } from "framer-motion";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
	const ref = useRef(null);
	const controls = useAnimation();
	const inView = useInView(ref);

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<section ref={ref} className="hero">
			<div className="section-container hero-container">
				<div className="hero__left">
					<motion.h1
						animate={controls}
						initial="hidden"
						transition={{ ease: "linear", duration: 0.5, delay: 0.5 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: 20 },
						}}
						className="hero-heading"
					>
						Find the
					</motion.h1>
					<motion.h1
						className="hero-heading"
						animate={controls}
						initial="hidden"
						transition={{ ease: "linear", duration: 0.5, delay: 1 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: 20 },
						}}
					>
						best <span>talent</span>
					</motion.h1>
				</div>

				<div className="hero__right">
					<motion.div
						className="text--deco deco--line"
						animate={controls}
						initial="hidden"
						transition={{ ease: "linear", duration: 0.5, delay: 1.3 }}
						variants={{
							visible: { opacity: 1, x: 0 },
							hidden: { opacity: 0, x: -20 },
						}}
					></motion.div>
					<div className="hero__content">
						<motion.p
							animate={controls}
							className="hero-paragraph"
							initial="hidden"
							transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: "20" },
							}}
						>
							Finding the right people and building high performing teams can be
							hard. Most companies aren’t tapping into the abundance of global
							talent. We’re about to change that.
						</motion.p>
					</div>
				</div>
			</div>
			<motion.div
				className="hero_deco_bottom"
				animate={controls}
				initial="hidden"
				transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
				variants={{
					visible: { x: 0 },
					hidden: { x: "100vw" },
				}}
			>
				<SVG src="/assets/bg-pattern-home-2.svg" />
			</motion.div>

			<motion.div
				className="hero_deco_left"
				animate={controls}
				initial="hidden"
				transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
				variants={{
					visible: { x: 0 },
					hidden: { x: -100 },
				}}
			>
				<SVG src="/assets/bg-pattern-home-1.svg" />
			</motion.div>
		</section>
	);
};

export default Hero;
