"use client";

import Features from "@/components/index/Features";
import Hero from "@/components/index/Hero";
import Started from "@/components/index/Started";
import Testimonial from "@/components/index/Testimonial";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import React from "react";

export default function Home() {
	return (
		<React.Fragment>
			<Navbar />
			<Hero />
			<Features />
			<Testimonial />
			<Started />
			<Footer />
		</React.Fragment>
	);
}
