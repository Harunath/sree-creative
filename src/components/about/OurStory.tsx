"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OurStory() {
	return (
		<motion.section
			className="bg-black text-white py-16 px-4 md:px-8"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			viewport={{ once: true, amount: 0.3 }}>
			<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
				{/* Left: Image */}
				<div>
					<h4 className="text-sm uppercase tracking-widest text-orange-500 font-semibold mb-2">
						Our Story
					</h4>
					<h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
						Creating Impactful Visuals Since 2012
					</h2>
					<p className="text-gray-300 mb-4 leading-relaxed">
						Founded in 2012, Sree Creative has grown into a dynamic design
						agency that specializes in a wide range of graphic design services,
						including logo design, branding, print media, web design, digital
						marketing materials — all aimed at elevating your brand&apos;s identity.
					</p>
					<p className="text-gray-300 mb-4 leading-relaxed">
						Our dedicated team combines creativity and strategic thinking to
						craft unique solutions that engage audiences and drive results,
						ensuring that every project reflects our commitment to excellence
						and innovation. At Sree Creative, your vision is our mission, and we
						are here to bring it to life through exceptional design and
						marketing strategies.
					</p>
					<p className="text-gray-300 leading-relaxed">
						Sree Creative&apos;s story is rooted in a passion for transforming ideas
						into impactful visual experiences.
					</p>
				</div>

				{/* Right: Content */}

				<div className="rounded-xl overflow-hidden shadow-lg">
					<Image
						src="https://res.cloudinary.com/dip2khkyo/image/upload/v1739210128/contact-us-img_xfcru4.webp"
						alt="Our Story"
						width={600}
						height={400}
						className="w-full h-auto object-cover rounded-xl"
					/>
				</div>
			</div>
		</motion.section>
	);
}
