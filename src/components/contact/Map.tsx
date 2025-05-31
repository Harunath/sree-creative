"use client";

import React from "react";

export default function Map() {
	return (
		<section className="w-full max-w-7xl mx-auto rounded-2xl overflow-hidden border border-gray-700 shadow-inner my-8 h-64 md:h-96">
			<iframe
				title="Location Map"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2105638924394!2d78.42506347495966!3d17.432889503378334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973ed8ecb2bb%3A0xfbc01d0a5a3f6a82!2sSanjeeva%20Reddy%20Nagar%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1685600000000!5m2!1sen!2sin"
				width="100%"
				height="100%"
				style={{ border: 0 }}
				allowFullScreen={false}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			/>
		</section>
	);
}
