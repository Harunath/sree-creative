"use client";

import React from "react";

export default function ContactBanner() {
	return (
		<section
			className="relative w-full h-56 md:h-96 flex items-center justify-center"
			style={{
				backgroundImage: `url('https://res.cloudinary.com/dip2khkyo/image/upload/v1739210096/Contact-us-banner_dhlcsf.jpg')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}>
			{/* Centered Text */}
			{/* <h1 className="relative text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg">
				Contact Us
			</h1> */}
		</section>
	);
}
