"use client";

import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
	{
		name: "Ravi Kumar",
		role: "Founder, RK Builders",
		quote:
			"Sree Creatives brought our vision to life with stunning branding and web design. Their professionalism and creativity stood out throughout the project.",
	},
	{
		name: "Sneha Reddy",
		role: "Marketing Lead, TechUp",
		quote:
			"The team at Sree Creatives was responsive, strategic, and very talented. Their design work elevated our brand across all platforms.",
	},
	{
		name: "Amit Shah",
		role: "Director, FreshMart",
		quote:
			"From logo to packaging design, every deliverable was on point. We loved how they understood our brand and audience instantly.",
	},
];

export default function TestimonialsSection() {
	return (
		<section className="bg-black text-white py-20 px-6">
			<div className="max-w-6xl mx-auto text-center mb-12">
				<h2 className="text-3xl md:text-4xl font-bold text-white">What Our Clients Say</h2>
				<p className="text-gray-400 mt-4">
					We&apos;ve helped businesses across industries stand out with powerful design and strategy.
				</p>
			</div>

			<div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
				{testimonials.map((t, index) => (
					<div
						key={index}
						className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition"
					>
						<FaQuoteLeft className="text-orange-500 text-3xl mb-4" />
						<p className="text-gray-300 text-sm mb-6 italic">&quot;{t.quote}&quot;</p>
						<h4 className="font-semibold text-white">{t.name}</h4>
						<p className="text-gray-500 text-xs">{t.role}</p>
					</div>
				))}
			</div>
		</section>
	);
}
