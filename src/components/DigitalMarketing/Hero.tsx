"use client";

import React from "react";

export default function Hero() {
	return (
		<section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
			{/* Background Image */}
			<img
				src="https://res.cloudinary.com/degrggosz/image/upload/v1748501295/home2_bg_ito8po.jpg"
				alt="Real Estate Brochure"
				className="absolute inset-0 w-full h-full object-cover opacity-40"
			/>

			{/* Content */}
			<div className="relative z-10 max-w-6xl px-6 text-center md:text-left">
				<div className="max-w-3xl">
					{/* Badge */}
					<span className="inline-block mb-4 px-4 py-1 text-sm  text-orange-500 border border-orange-600/30 rounded-full">
						Real Estate Marketing Experts
					</span>

					{/* Heading */}
					<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
						Real Estate Brochure Design &{" "}
						<span className="text-orange-600">Digital Marketing Services</span>
					</h1>

					{/* Description */}
					<p className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed">
						We create high-impact real estate brochures and performance-driven
						digital marketing strategies that help builders, developers, and
						agents generate quality leads and close deals faster.
					</p>

					{/* CTA Buttons */}
					<div className="mt-8 flex flex-col sm:flex-row gap-4">
						<button className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg transition">
							Get Free Consultation
						</button>

						<button className="px-6 py-3 border border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white rounded-lg transition">
							View Portfolio
						</button>
					</div>

					{/* Stats */}
					<div className="mt-10 flex flex-wrap gap-8 text-sm text-gray-400">
						<div>
							<p className="text-orange-600 text-xl font-bold">150+</p>
							<p>Projects Completed</p>
						</div>
						<div>
							<p className="text-orange-600 text-xl font-bold">10X</p>
							<p>Lead Growth</p>
						</div>
						<div>
							<p className="text-orange-600 text-xl font-bold">95%</p>
							<p>Client Satisfaction</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
