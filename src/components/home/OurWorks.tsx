"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const works = [
	{
		title: "Corporate Brochure",
		image:
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750496989/b98ffd06-1a6d-422b-bc84-3d956e5b051d_u2xauc.jpg",
	},
	{
		title: "Business Card Design",
		image:
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750497588/eebfcbfe-70bb-4af0-ae2c-8b88b517252f_ellmxm.jpg",
	},
	{
		title: "Event Flyer",
		image:
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750497955/d30eea3a-51df-49e4-ae26-3eb3fe1d9c98_dzbuuk.jpg",
	},
	{
		title: "Logo Design",
		image:
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750499727/f5c025af-8e8c-4171-bbad-c7f15ba99c1d_ertxro.jpg",
	},
	{
		title: "Packaging Design",
		image:
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750499531/74ff19dd-ab72-48cd-8e08-9911720f2e69_h01h3h.jpg",
	},
	{
		title: "Sticker Design",
		image:
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750499505/342237cf-5bc1-4195-9283-19621f3ca274_vvehxe.jpg",
	},
];

export default function OurWorks() {
	return (
		<section className="bg-black text-white py-16 relative">
			<div className="container mx-auto px-4">
				<h3 className="text-sm uppercase text-gray-400 tracking-widest mb-2">
					Our Projects
				</h3>
				<div className="flex items-center justify-between mb-8">
					<h2 className="text-4xl font-bold">Our Works</h2>
					<Link href="/works">
						<button className="bg-gray-800 text-sm px-5 py-2 rounded-full hover:bg-gray-700">
							View All Works
						</button>
					</Link>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
					{works.map((work, index) => (
						<motion.div
							key={index}
							initial={{ y: 0, opacity: 0 }}
							whileInView={{ y: index * 50, opacity: 1 }}
							transition={{ duration: 1, delay: index * 0.2 }}
							whileHover={{
								filter: "grayscale(90%)",
								transition: { duration: 0.3 },
							}}
							viewport={{ once: true }}
							className="justify-self-center lg:flex-1 w-[60%] lg:w-auto min-w-[300px] overflow-hidden relative group cursor-pointer">
							<Image
								src={work.image}
								alt={work.title}
								width={400}
								height={400}
								className="object-cover w-full h-auto min-h-[400px] transition-transform duration-300 group-hover:scale-105"
							/>
							<div className="absolute inset-0 flex items-center justify-center">
								<h3 className="text-white text-3xl font-bold text-center px-2">
									{work.title}
								</h3>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
