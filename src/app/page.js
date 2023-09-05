"use client";

import Features from "@/components/index/Features";
import Hero from "@/components/index/Hero";
import Started from "@/components/index/Started";
import Testimonial from "@/components/index/Testimonial";
import React, { useEffect } from "react";

export default function Home() {
	return (
		<React.Fragment>
			<Hero />
			<Features />
			<Testimonial />
			<Started />
		</React.Fragment>
	);
}
