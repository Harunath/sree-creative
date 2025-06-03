"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
	{
		title: "Branding & Identity",
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1748502352/branding_ckrf8i.jpg",
	},
	{
		title: "Digital Marketing",
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1748502430/social-media-2-scaled_z42hoz.jpg",
	},
	{
		title: "Ad Films",
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1748502439/ad-film_knktbv.jpg",
	},
];

export default function OurServices() {
	return (
		<section className="bg-black text-white py-16 relative">
			<div className="container mx-auto px-4">
				<h3 className="text-sm uppercase text-gray-400 tracking-widest mb-2">
					What we offer
				</h3>
				<div className="flex items-center justify-between mb-8">
					<h2 className="text-4xl font-bold">Our Services</h2>
					<button className="bg-gray-800 text-sm px-5 py-2 rounded-full hover:bg-gray-700">
						View All Services
					</button>
				</div>

				<div className="flex gap-6 md:flex-wrap md:justify-between">
					{services.map((service, index) => (
						<motion.div
							key={index}
							initial={{ y: 50, opacity: 0 }}
							whileInView={{ y: index + 1 * 50, opacity: 1 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							viewport={{ once: true }}
							className="min-w-[300px] w-[300px] md:w-[32%] rounded-lg overflow-hidden relative group cursor-pointer">
							<Image
								src={service.image}
								alt={service.title}
								width={400}
								height={400}
								className="object-cover w-full min-h-[400px] transition-transform duration-300 group-hover:scale-105"
							/>
							<div className="absolute inset-0  flex items-center justify-center">
								<h3 className="text-white text-xl font-bold">
									{service.title}
								</h3>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

