"use client";

import React from "react";

export default function ContactBanner() {
	return (
		<section
			className="relative w-full h-64 md:h-96 flex items-center justify-center"
			style={{
				backgroundImage: `url('https://res.cloudinary.com/degrggosz/image/upload/v1748501295/home2_bg_ito8po.jpg')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}>
			{/* Centered Text */}
			<h1 className="relative text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg">
				About Us
			</h1>
		</section>
	);
}
