"use  client";

import React, { useEffect, useRef } from "react";

import { useInView } from "framer-motion";
import { motion, useAnimate, stagger } from "framer-motion";

export const StaggerContainer = ({ children, el, className }) => {
	const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

	const ref = useRef(null);
	const [scope, animate] = useAnimate();
	const inView = useInView(ref);

	useEffect(() => {
		if (inView) {
			animate(
				el,
				{ opacity: 0, x: 30, y: 30 },
				{ opacity: 1, x: 0, y: 0 },
				{
					duration: 0.8,
					delay: staggerMenuItems,
				}
			);
		}
	}, [inView]);

	return (
		<motion.div ref={scope}>
			<motion.div className={className} ref={ref}>
				{children}
			</motion.div>
		</motion.div>
	);
};
