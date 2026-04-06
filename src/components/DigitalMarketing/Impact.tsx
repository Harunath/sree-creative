"use client";

import React from "react";
import { FaBullhorn, FaWhatsapp, FaUserTie, FaShieldAlt } from "react-icons/fa";

const points = [
	{
		title: "Multi-Channel Marketing",
		desc: "Used in ads, websites, and performance-driven campaigns to attract high-quality leads.",
		icon: FaBullhorn,
	},
	{
		title: "Easy Sharing",
		desc: "Seamlessly shared via WhatsApp, email marketing, and social media platforms.",
		icon: FaWhatsapp,
	},
	{
		title: "Faster Conversions",
		desc: "Empowers sales teams with structured information to convert prospects quickly.",
		icon: FaUserTie,
	},
	{
		title: "Builds Credibility",
		desc: "Professional brochures elevate your brand image and build buyer trust instantly.",
		icon: FaShieldAlt,
	},
];

export default function Impact() {
	return (
		<section className="bg-black py-20 px-6">
			<div className="max-w-6xl mx-auto">
				{/* Heading */}
				<div className="text-center max-w-3xl mx-auto">
					<span className="text-orange-600 text-sm font-semibold uppercase tracking-wide">
						Marketing Impact
					</span>

					<h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
						How Brochures Boost{" "}
						<span className="text-orange-600">Real Estate Marketing</span>
					</h2>

					<p className="text-gray-400 mt-5 leading-relaxed">
						A well-designed brochure plays a key role in both online and offline
						marketing, helping you present properties professionally and convert
						leads more effectively.
					</p>
				</div>

				{/* Cards */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
					{points.map((item, index) => {
						const Icon = item.icon;
						return (
							<div
								key={index}
								className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-orange-600/40 transition duration-300">
								{/* Icon */}
								<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-600/10 mb-4 group-hover:scale-110 transition">
									<Icon className="text-orange-600" size={22} />
								</div>

								{/* Title */}
								<h3 className="text-lg font-semibold text-white mb-2">
									{item.title}
								</h3>

								{/* Description */}
								<p className="text-gray-400 text-sm leading-relaxed">
									{item.desc}
								</p>
							</div>
						);
					})}
				</div>

				{/* Bottom CTA */}
				<div className="mt-16 text-center">
					<button className="px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg transition">
						Boost Your Marketing Today
					</button>
				</div>
			</div>
		</section>
	);
}
