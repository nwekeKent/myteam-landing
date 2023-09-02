"use client";

import AboutHero from "@/components/about/AboutHero";
import Clients from "@/components/about/Clients";
import Directors from "@/components/about/Directors";
import Started from "@/components/index/Started";
import React from "react";

export default function Home() {
	return (
		<React.Fragment>
			<AboutHero />
			<Directors />
			<Clients />
			<Started />
		</React.Fragment>
	);
}
