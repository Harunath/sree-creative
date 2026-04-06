import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const points = [
	"Showcase properties with clarity and elegance",
	"Build trust with premium design and messaging",
	"Convert prospects into serious buyers",
	"Support online campaigns with high-quality visuals",
];

export default function WhyUsn() {
	return (
		<section className="bg-black py-20 px-6">
			<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
				<div>
					<span className="text-orange-600 text-sm font-semibold uppercase tracking-wide">
						Why It Matters
					</span>

					<h2 className="text-3xl md:text-4xl font-bold text-white mt-3 leading-snug">
						Why Real Estate Needs Strong{" "}
						<span className="text-orange-600">
							Brochure + Digital Marketing
						</span>
					</h2>

					<p className="text-gray-400 mt-6 leading-relaxed">
						The real estate industry is highly competitive, and first
						impressions matter.
					</p>

					<div className="mt-8 space-y-4">
						{points.map((point, index) => (
							<div key={index} className="flex items-start gap-3">
								<FaCheckCircle className="text-orange-600 mt-1" size={20} />
								<p className="text-gray-300">{point}</p>
							</div>
						))}
					</div>

					<div className="mt-8">
						<button className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg transition">
							Start Your Project
						</button>
					</div>
				</div>

				<div className="relative">
					<img
						src="https://res.cloudinary.com/degrggosz/image/upload/v1748501295/home2_bg_ito8po.jpg"
						alt="Real Estate Marketing"
						className="rounded-xl shadow-2xl border border-orange-600/20"
					/>
					<div className="absolute -inset-2 bg-orange-600/10 blur-2xl rounded-xl -z-10" />
				</div>
			</div>
		</section>
	);
}
