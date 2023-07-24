"use client";

import Features from "@/components/index/Features";
import Hero from "@/components/index/Hero";
import Navbar from "@/components/layouts/navbar/Navbar";
import React from "react";

export default function Home() {
	return (
		<React.Fragment>
			<Navbar />
			<Hero />
			<Features />
		</React.Fragment>
	);
}
