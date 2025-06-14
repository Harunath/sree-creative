"use client";

import {
	FiFeather,
	FiGlobe,
	FiSmartphone,
	FiImage,
	FiLayout,
	FiVideo,
} from "react-icons/fi";

const services = [
	{
		title: "Branding & Identity Design",
		description:
			"We build impactful brand identities that leave a lasting impression — from logos to complete brand systems.",
		icon: <FiFeather size={28} className="text-orange-500" />,
	},
	{
		title: "Website Design & Development",
		description:
			"Modern, responsive websites that blend aesthetics with performance to help your business grow online.",
		icon: <FiGlobe size={28} className="text-orange-500" />,
	},
	{
		title: "Social Media Design",
		description:
			"Consistent, visually engaging designs tailored for Instagram, Facebook, LinkedIn, and more.",
		icon: <FiImage size={28} className="text-orange-500" />,
	},
	{
		title: "Marketing Collateral",
		description:
			"From brochures to packaging, we design marketing materials that reflect your brand’s essence.",
		icon: <FiLayout size={28} className="text-orange-500" />,
	},
	{
		title: "UI/UX Design",
		description:
			"Designing intuitive, modern user interfaces for websites and mobile apps with focus on experience.",
		icon: <FiSmartphone size={28} className="text-orange-500" />,
	},
	{
		title: "Creative Content & Video",
		description:
			"Engaging creatives like short videos, reels, and animations to communicate your brand story.",
		icon: <FiVideo size={28} className="text-orange-500" />,
	},
];

export default function ServicesSection() {
	return (
		<section className="bg-[#0f0f0f] text-white py-24 px-6">
			<div className="max-w-7xl mx-auto text-center mb-16">
				<h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
				<p className="text-gray-400 max-w-2xl mx-auto">
					We offer a comprehensive suite of creative and digital solutions to
					elevate your brand and business presence.
				</p>
			</div>

			<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
				{services.map((service, index) => (
					<div
						key={index}
						className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg hover:shadow-orange-500/20 transition-shadow">
						<div className="mb-4">{service.icon}</div>
						<h3 className="text-xl font-semibold text-white mb-2">
							{service.title}
						</h3>
						<p className="text-gray-400 text-sm">{service.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}
