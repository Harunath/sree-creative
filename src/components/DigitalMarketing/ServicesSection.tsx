"use client";

import React from "react";
import {
	FaBuilding,
	FaFileAlt,
	FaBriefcase,
	FaLandmark,
	FaGem,
} from "react-icons/fa";

const services = [
	{
		title: "Property Brochures",
		desc: "Residential & commercial brochures designed to highlight property value and attract buyers.",
		icon: FaBuilding,
	},
	{
		title: "Project Launch Brochures",
		desc: "Impactful designs to create buzz and drive early-stage bookings for new projects.",
		icon: FaFileAlt,
	},
	{
		title: "Company Profiles",
		desc: "Professional real estate profiles that build credibility and trust with clients.",
		icon: FaBriefcase,
	},
	{
		title: "Investment Proposals",
		desc: "Clear and persuasive brochures designed to attract investors and stakeholders.",
		icon: FaLandmark,
	},
	{
		title: "Luxury Property Catalogs",
		desc: "Premium catalogs showcasing high-end properties with elegance and sophistication.",
		icon: FaGem,
	},
];

const features = [
	"Modern, clean, and premium layouts",
	"High-quality image placement",
	"Clear property highlights & USP sections",
	"Location advantages & amenities visualization",
	"Brand-consistent design",
];

export default function ServicesSection() {
	return (
		<section className="bg-black py-20 px-6">
			<div className="max-w-6xl mx-auto">
				{/* Heading */}
				<div className="text-center max-w-3xl mx-auto">
					<span className="text-orange-600 text-sm font-semibold uppercase tracking-wide">
						Our Services
					</span>

					<h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
						Real Estate Brochure Design{" "}
						<span className="text-orange-600">Services</span>
					</h2>

					<p className="text-gray-400 mt-5 leading-relaxed">
						We design brochures that are not just visually appealing but also
						strategically built to convert prospects into serious buyers.
					</p>
				</div>

				{/* Services Grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
					{services.map((service, index) => {
						const Icon = service.icon;
						return (
							<div
								key={index}
								className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:border-orange-600/40 hover:bg-white/10 transition duration-300">
								<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-600/10 mb-4">
									<Icon className="text-orange-600" size={20} />
								</div>

								<h3 className="text-lg font-semibold text-white mb-2">
									{service.title}
								</h3>

								<p className="text-gray-400 text-sm leading-relaxed">
									{service.desc}
								</p>
							</div>
						);
					})}
				</div>

				{/* Features Section */}
				<div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
					{/* Left Image */}
					<div className="relative">
						<img
							src="https://res.cloudinary.com/degrggosz/image/upload/v1748501295/home2_bg_ito8po.jpg"
							alt="Brochure Features"
							className="rounded-xl border border-orange-600/20 shadow-xl"
						/>
						<div className="absolute -inset-2 bg-orange-600/10 blur-2xl rounded-xl -z-10" />
					</div>

					{/* Features List */}
					<div>
						<h3 className="text-2xl font-bold text-white mb-6">
							Key Features of Our Designs
						</h3>

						<div className="space-y-4">
							{features.map((feature, index) => (
								<div key={index} className="flex items-start gap-3">
									<span className="w-2 h-2 bg-orange-600 rounded-full mt-2" />
									<p className="text-gray-300">{feature}</p>
								</div>
							))}
						</div>

						{/* CTA */}
						<div className="mt-8">
							<button className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg transition">
								Request Brochure Design
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
