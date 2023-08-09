"use client";

import AboutHero from "@/components/about/AboutHero";
import Directors from "@/components/about/Directors";
import React from "react";

export default function Home() {
	return (
		<React.Fragment>
			<AboutHero />
			<Directors />
		</React.Fragment>
	);
}
