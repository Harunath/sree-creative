"use client";

import { FaBullseye, FaRocket } from "react-icons/fa";

export default function VisionMission() {
	return (
		<section className="relative bg-black py-28 px-6 overflow-hidden">
			{/* Background Glow */}
			<div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-transparent to-orange-600/5 pointer-events-none" />

			{/* Heading */}
			<div className="relative max-w-7xl mx-auto text-center mb-16">
				<h2 className="text-3xl md:text-5xl font-bold text-white">
					Our <span className="text-orange-600">Vision & Mission</span>
				</h2>
				<p className="text-gray-400 mt-5 max-w-2xl mx-auto">
					Driven by purpose and guided by strategy, we help brands grow with
					clarity, creativity, and consistency.
				</p>
			</div>

			{/* Cards */}
			<div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
				{/* VISION */}
				<div className="relative group p-8 md:p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:bg-white/10 transition duration-300">
					{/* Watermark */}
					<span className="absolute inset-0 flex items-center justify-center text-[70px] md:text-[110px] font-bold text-white/10 tracking-widest pointer-events-none select-none">
						VISION
					</span>

					{/* Icon */}
					<div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-lg bg-orange-600/10 text-orange-600 text-xl mb-6">
						<FaBullseye />
					</div>

					<h3 className="text-2xl md:text-3xl font-semibold text-white relative z-10">
						Our <span className="text-orange-600">Vision</span>
					</h3>

					<p className="text-gray-300 mt-6 leading-relaxed relative z-10">
						To become a leading creative and digital agency that empowers brands
						to stand out globally through innovative design, strategic thinking,
						and impactful storytelling.
					</p>

					{/* Hover Border Glow */}
					<div className="absolute inset-0 border border-orange-600/0 group-hover:border-orange-600/50 rounded-2xl transition duration-300" />
				</div>

				{/* MISSION */}
				<div className="relative group p-8 md:p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:bg-white/10 transition duration-300">
					{/* Watermark */}
					<span className="absolute inset-0 flex items-center justify-center text-[70px] md:text-[110px] font-bold text-white/10 tracking-widest pointer-events-none select-none">
						MISSION
					</span>

					{/* Icon */}
					<div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-lg bg-orange-600/10 text-orange-600 text-xl mb-6">
						<FaRocket />
					</div>

					<h3 className="text-2xl md:text-3xl font-semibold text-white relative z-10">
						Our <span className="text-orange-600">Mission</span>
					</h3>

					<p className="text-gray-300 mt-6 leading-relaxed relative z-10">
						To deliver high-quality branding, design, and digital solutions that
						help businesses grow, connect with their audience, and achieve
						measurable success.
					</p>

					{/* Hover Border Glow */}
					<div className="absolute inset-0 border border-orange-600/0 group-hover:border-orange-600/50 rounded-2xl transition duration-300" />
				</div>
			</div>
		</section>
	);
}
