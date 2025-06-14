"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
	{
		title: "Brand Identity for Cafe Brew",
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1748501295/home2_bg_ito8po.jpg",
		category: "Branding",
	},
	{
		title: "UI/UX Design for Finance App",
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1748501295/home2_bg_ito8po.jpg",
		category: "UI/UX",
	},
	{
		title: "Social Media Reels – Fashion Brand",
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1748501295/home2_bg_ito8po.jpg",
		category: "Social Media",
	},
	{
		title: "Website Design – Tech Agency",
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1748501295/home2_bg_ito8po.jpg",
		category: "Web Design",
	},
	{
		title: "Packaging Design – Organic Foods",
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1748501295/home2_bg_ito8po.jpg",
		category: "Packaging",
	},
	{
		title: "Event Promo Video",
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1748501295/home2_bg_ito8po.jpg",
		category: "Video Editing",
	},
];

export default function OurWorksSection() {
	return (
		<section className="bg-[#0f0f0f] text-white py-24 px-6">
			<div className="max-w-7xl mx-auto text-center mb-16">
				<h2 className="text-4xl font-bold mb-4">Our Works</h2>
				<p className="text-gray-400 max-w-2xl mx-auto">
					A glimpse into our recent creative projects - from branding and
					digital designs to immersive visual content.
				</p>
			</div>

			<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
				{projects.map((work, index) => (
					<motion.div
						key={index}
						whileHover={{ scale: 1.03 }}
						className="group bg-[#1a1a1a] rounded-xl overflow-hidden shadow-md hover:shadow-orange-500/20 transition">
						<div className="relative h-60 w-full">
							<Image
								src={work.image}
								alt={work.title}
								fill
								className="object-cover group-hover:opacity-80 transition"
							/>
						</div>
						<div className="p-4">
							<h3 className="text-lg font-semibold text-white">{work.title}</h3>
							<p className="text-sm text-orange-400 mt-1">{work.category}</p>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
