"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const printServices = [
	{
		title: "Brochures",
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1748502352/branding_ckrf8i.jpg",
	},
	{
		title: "Business Cards",
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1748502430/social-media-2-scaled_z42hoz.jpg",
	},
	{
		title: "Flyer",
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1748502439/ad-film_knktbv.jpg",
	},
	{
		title: "ID Cards",
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1748502430/social-media-2-scaled_z42hoz.jpg",
	},
	{
		title: "Invitation",
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1748502352/branding_ckrf8i.jpg",
	},
	{
		title: "Letterhead",
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1748502439/ad-film_knktbv.jpg",
	},
	{
		title: "Logo",
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1748502430/social-media-2-scaled_z42hoz.jpg",
	},
	{
		title: "Notepads",
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1748502352/branding_ckrf8i.jpg",
	},
	{
		title: "Packaging",
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1748502439/ad-film_knktbv.jpg",
	},
	{
		title: "Stickers",
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1748502430/social-media-2-scaled_z42hoz.jpg",
	},
];

export default function ServicesMain() {
	return (
		<section className="bg-black text-white py-16 pt-20 relative">
			<div className="container mx-auto px-4">
				<h3 className="text-sm uppercase text-orange-600 tracking-widest mb-2">
					Print Solutions
				</h3>
				<div className="flex items-center justify-between mb-8 flex-wrap gap-4">
					<h2 className="text-4xl font-bold">Our Services</h2>
					<Link href="/works">
						<button className="bg-gray-800 text-sm px-5 py-2 rounded-full hover:bg-gray-700">
							View All
						</button>
					</Link>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
					{printServices.map((service, index) => (
						<Link
							key={index}
							href={`/works?category=${encodeURIComponent(service.title)}`}
							className="block">
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								whileHover={{
									scale: 1.02,
									filter: "grayscale(90%)",
									transition: { duration: 0.3 },
								}}
								viewport={{ once: true }}
								className="bg-yellow-300 overflow-hidden relative rounded-xl shadow-lg group cursor-pointer min-h-[400px]">
								<Image
									src={service.image}
									alt={service.title}
									width={400}
									height={400}
									className="object-cover w-full h-[400px] transition-transform duration-300 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-black/40 flex items-center justify-center">
									<h3 className="text-white text-2xl font-semibold text-center px-4">
										{service.title}
									</h3>
								</div>
							</motion.div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
