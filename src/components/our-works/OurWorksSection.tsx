"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import Image from "next/image";

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

export default function OurWorksSection() {
	const searchParams = useSearchParams();
	const category = searchParams.get("category");

	const filteredWorks = useMemo(() => {
		if (!category) return works;
		return works.filter((work) => work.category === category);
	}, [category]);

	return (
		<div className="p-6 text-white bg-black min-h-screen">
			<h1 className="text-4xl font-bold mb-4">Our Works</h1>

			{category && (
				<p className="text-lg mb-6">
					Showing works for:{" "}
					<strong className="text-orange-400">{category}</strong>
				</p>
			)}

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{filteredWorks.map((work, index) => (
					<div
						key={index}
						className="bg-white text-black rounded-xl overflow-hidden shadow-lg p-4">
						<h3 className="font-bold text-lg mb-2">{work.title}</h3>
						<p className="text-sm text-gray-600 mb-4">{work.category}</p>
						<div className="grid grid-cols-2 gap-2">
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
					</div>
				))}

				{filteredWorks.length === 0 && (
					<p className="text-gray-400">
						No works found for the selected category.
					</p>
				)}
			</div>
		</div>
	);
}
