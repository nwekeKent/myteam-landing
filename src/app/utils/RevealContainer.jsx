"use  client";

import React, { useEffect, useRef } from "react";

import { useInView } from "framer-motion";
import { motion, useAnimation } from "framer-motion";

export const RevealContainer = ({
	children,
	variants,
	transition,
	className,
}) => {
	const ref = useRef(null);
	const controls = useAnimation();
	const inView = useInView(ref);

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<motion.div
			ref={ref}
			animate={controls}
			initial="hidden"
			transition={transition}
			variants={variants}
			className={className}
		>
			{children}
		</motion.div>
	);
};
