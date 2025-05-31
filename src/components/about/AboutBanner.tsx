"use client";

import React from "react";

export default function ContactBanner() {
	return (
		<section
			className="relative w-full h-64 md:h-96 flex items-center justify-center"
			style={{
				backgroundImage: `url('/path-to-your-bg-image.jpg')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}>
			{/* Dark overlay */}
			<div className="absolute inset-0 bg-black bg-opacity-60"></div>

			{/* Centered Text */}
			<h1 className="relative text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg">
				About Us
			</h1>
		</section>
	);
}
