"use client";

import React from "react";
import SVG from "react-inlinesvg";
import { RevealContainer } from "@/app/utils/RevealContainer";
import Link from "next/link";

const Started = () => {
	return (
		<section className="started">
			<div className="started__container">
				<div className="started__content">
					<RevealContainer
						transition={{ ease: "easeOut", duration: 0.8, delay: 0.8 }}
						variants={{
							visible: { opacity: 1, x: 0 },
							hidden: { opacity: 0, x: -30 },
						}}
					>
						<h1 className="body-heading text-center">Ready to get started?</h1>
					</RevealContainer>
				</div>

				<RevealContainer
					transition={{ ease: "easeOut", duration: 0.8, delay: 0.8 }}
					variants={{
						visible: { opacity: 1, x: 0 },
						hidden: { opacity: 0, x: 30 },
					}}
				>
					<Link href="/contact">
						<button className="btn_outline-dark">Contact us</button>
					</Link>
				</RevealContainer>
			</div>

			<RevealContainer
				className="started__deco"
				transition={{ ease: "easeOut", duration: 0.8, delay: 0.8 }}
				variants={{
					visible: { opacity: 1, x: 0 },
					hidden: { opacity: 0, x: -100 },
				}}
			>
				<SVG src="/assets/bg-pattern-home-6-about-5.svg" />
			</RevealContainer>
		</section>
	);
};

export default Started;
