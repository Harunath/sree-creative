"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import clsx from "clsx";

const works = [
	{
		title: "Elegant Brochure Design",
		images: [
			"https://res.cloudinary.com/degrggosz/image/upload/v1748502352/branding_ckrf8i.jpg",
			"https://res.cloudinary.com/degrggosz/image/upload/v1748502430/social-media-2-scaled_z42hoz.jpg",
		],
		category: "Brochures",
	},
	{
		title: "Modern Business Card",
		images: [
			"https://res.cloudinary.com/degrggosz/image/upload/v1748502430/social-media-2-scaled_z42hoz.jpg",
		],
		category: "Business Cards",
	},
	{
		title: "Creative Flyer Layout",
		images: [
			"https://res.cloudinary.com/degrggosz/image/upload/v1748502439/ad-film_knktbv.jpg",
		],
		category: "Flyer",
	},
	{
		title: "Professional ID Card",
		images: [
			"https://res.cloudinary.com/degrggosz/image/upload/v1748502430/social-media-2-scaled_z42hoz.jpg",
		],
		category: "ID Cards",
	},
	{
		title: "Wedding Invitation",
		images: [
			"https://res.cloudinary.com/degrggosz/image/upload/v1748502352/branding_ckrf8i.jpg",
		],
		category: "Invitation",
	},
	{
		title: "Letterhead Template",
		images: [
			"https://res.cloudinary.com/degrggosz/image/upload/v1748502439/ad-film_knktbv.jpg",
		],
		category: "Letterhead",
	},
	{
		title: "Logo Branding",
		images: [
			"https://res.cloudinary.com/degrggosz/image/upload/v1748502430/social-media-2-scaled_z42hoz.jpg",
		],
		category: "Logo",
	},
	{
		title: "Custom Notepads",
		images: [
			"https://res.cloudinary.com/degrggosz/image/upload/v1748502352/branding_ckrf8i.jpg",
		],
		category: "Notepads",
	},
	{
		title: "Product Packaging",
		images: [
			"https://res.cloudinary.com/degrggosz/image/upload/v1748502439/ad-film_knktbv.jpg",
		],
		category: "Packaging",
	},
	{
		title: "Sticker Sheets",
		images: [
			"https://res.cloudinary.com/degrggosz/image/upload/v1748502430/social-media-2-scaled_z42hoz.jpg",
		],
		category: "Stickers",
	},
];

const allCategories = ["All", ...new Set(works.map((work) => work.category))];

export default function OurWorksSection() {
	const [selectedCategory, setSelectedCategory] = useState("All");

	const filteredWorks = useMemo(() => {
		if (selectedCategory === "All") return works;
		return works.filter((work) => work.category === selectedCategory);
	}, [selectedCategory]);

	return (
		<div className="p-6 pt-16 min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
			<h1 className="text-4xl font-bold mb-8 text-center">Our Works</h1>

			{/* Filter Tabs */}
			<div className="flex flex-wrap justify-center gap-4 mb-10">
				{allCategories.map((cat) => (
					<button
						key={cat}
						onClick={() => setSelectedCategory(cat)}
						className={clsx(
							"px-4 py-2 rounded-full border transition-all text-sm sm:text-base",
							selectedCategory === cat
								? "bg-orange-500 text-white border-orange-500 shadow-lg"
								: "border-gray-500 text-gray-300 hover:bg-gray-800 hover:border-gray-300"
						)}>
						{cat}
					</button>
				))}
			</div>

			{/* Grid of Works */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{filteredWorks.map((work, index) => (
					<div
						key={index}
						className="bg-white text-black rounded-xl overflow-hidden shadow-xl hover:shadow-orange-400 transition-shadow duration-300">
						<div className="grid grid-cols-2 gap-2 p-4">
							{work.images.map((img, i) => (
								<Image
									key={i}
									src={img}
									alt={`${work.title} ${i + 1}`}
									width={300}
									height={200}
									className="w-full h-40 object-cover rounded-md"
								/>
							))}
						</div>
						<div className="p-4 border-t">
							<h3 className="font-bold text-lg">{work.title}</h3>
							<p className="text-sm text-gray-600">{work.category}</p>
						</div>
					</div>
				))}

				{filteredWorks.length === 0 && (
					<p className="text-center text-gray-400 col-span-full">
						No works found for the selected category.
					</p>
				)}
			</div>
		</div>
	);
}
