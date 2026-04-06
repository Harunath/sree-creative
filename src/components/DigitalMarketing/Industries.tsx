"use client";

import React from "react";
import {
	FaBuilding,
	FaHardHat,
	FaUserFriends,
	FaCity,
	FaCrown,
} from "react-icons/fa";

const industries = [
	{
		title: "Real Estate Developers",
		desc: "Showcase large-scale projects with high-impact brochures that drive bookings and investor interest.",
		icon: FaBuilding,
	},
	{
		title: "Builders & Construction Companies",
		desc: "Present ongoing and completed projects with clarity, professionalism, and trust-building visuals.",
		icon: FaHardHat,
	},
	{
		title: "Property Consultants",
		desc: "Equip your sales team with persuasive brochures that simplify decision-making for clients.",
		icon: FaUserFriends,
	},
	{
		title: "Commercial Real Estate Firms",
		desc: "Highlight office spaces, retail hubs, and business properties with corporate-grade designs.",
		icon: FaCity,
	},
	{
		title: "Luxury Housing Brands",
		desc: "Deliver premium, visually stunning catalogs that reflect exclusivity and high-end living.",
		icon: FaCrown,
	},
];

export default function Industries() {
	return (
		<section className="bg-black py-20 px-6">
			<div className="max-w-5xl mx-auto">
				{/* Heading */}
				<div className="text-center mb-16">
					<span className="text-orange-600 text-sm font-semibold uppercase tracking-wide">
						Industries
					</span>

					<h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
						Industries We <span className="text-orange-600">Serve</span>
					</h2>

					<p className="text-gray-400 mt-5 max-w-2xl mx-auto">
						We work with a wide range of real estate professionals, delivering
						tailored brochure designs and marketing solutions for every segment.
					</p>
				</div>

				{/* Timeline Layout */}
				<div className="relative border-l border-orange-600/30 pl-8 space-y-12">
					{industries.map((item, index) => {
						const Icon = item.icon;
						return (
							<div key={index} className="relative group">
								{/* Dot */}
								<div className="absolute -left-[34px] top-1 w-5 h-5 bg-black border-2 border-orange-600 rounded-full flex items-center justify-center">
									<div className="w-2 h-2 bg-orange-600 rounded-full group-hover:scale-125 transition" />
								</div>

								{/* Content */}
								<div className="flex items-start gap-4">
									<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-600/10 group-hover:bg-orange-600/20 transition">
										<Icon className="text-orange-600" size={20} />
									</div>

									<div>
										<h3 className="text-lg font-semibold text-white">
											{item.title}
										</h3>
										<p className="text-gray-400 text-sm mt-1 leading-relaxed">
											{item.desc}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				{/* Bottom CTA */}
				<div className="mt-16 text-center">
					<button className="px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg transition">
						Work With Us
					</button>
				</div>
			</div>
		</section>
	);
}
