"use client";

import React from "react";
import Image from "next/image";

interface SkillBarProps {
	title: string;
	percentage: number;
}

const SkillBar = ({ title, percentage }: SkillBarProps) => (
	<div className="mb-6">
		<div className="flex justify-between text-sm font-semibold text-white uppercase mb-1">
			<span>{title}</span>
			<span>{percentage}%</span>
		</div>
		<div className="w-full h-1 bg-gray-700 rounded-full">
			<div
				className="h-1 bg-blue-600 rounded-full"
				style={{ width: `${percentage}%` }}
			/>
		</div>
	</div>
);

export default function WhyUs() {
	return (
		<section className="bg-gray-950 text-white py-16 px-4 md:px-8">
			<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
				{/* Image Section */}
				<div className="rounded-lg overflow-hidden shadow-lg">
					<Image
						src="/why-us-banner.png" // Place this image in your public/ directory
						alt="Creative Design"
						width={600}
						height={400}
						className="w-full h-auto object-cover rounded-lg"
					/>
				</div>

				{/* Text Section */}
				<div>
					<h4 className="text-sm text-gray-400 tracking-widest uppercase mb-2">
						Why Choose Us
					</h4>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Elevate Your Brand with Stunning Visuals
					</h2>
					<p className="text-gray-300 mb-8 max-w-xl leading-relaxed">
						At our creative studio, we specialize in crafting visually
						captivating designs that resonate with your audience. From logos to
						full branding packages, we bring your ideas to life with strategic
						creativity and precision.
					</p>

					{/* Skill Bars */}
					<SkillBar title="Logo & Brand Identity" percentage={98} />
					<SkillBar title="Social Media Design" percentage={95} />
					<SkillBar title="UI/UX & Web Design" percentage={90} />
					<SkillBar title="Print & Publication" percentage={85} />
				</div>
			</div>
		</section>
	);
}
