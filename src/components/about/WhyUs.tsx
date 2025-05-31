"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface SkillBarProps {
	title: string;
	percentage: number;
	index?: number;
}

const skillBarVariants = {
	hidden: { opacity: 0, x: -50 },
	visible: (i = 0) => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: i * 0.2,
			type: "spring",
			stiffness: 100,
		},
	}),
};

const barFillVariants = {
	hidden: { width: 0 },
	visible: ([i = 0, percentage = 100]: [number, number]) => ({
		width: `${percentage}%`,
		transition: {
			duration: 1.5,
			ease: "easeInOut",
			delay: i * 0.2 + 0.3,
		},
	}),
};

const SkillBar = ({ title, percentage, index = 0 }: SkillBarProps) => (
	<motion.div
		className="mb-6"
		variants={skillBarVariants}
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true }}
		custom={index}>
		<div className="flex justify-between text-sm font-semibold text-white uppercase mb-1">
			<span>{title}</span>
			<span>{percentage}%</span>
		</div>
		<div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
			<motion.div
				className="h-1 bg-orange-500 rounded-full"
				variants={barFillVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				custom={[index, percentage]}
			/>
		</div>
	</motion.div>
);

const containerVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			staggerChildren: 0.15,
			when: "beforeChildren",
		},
	},
};

export default function WhyUs() {
	return (
		<motion.section
			className="bg-gray-950 text-white py-16 px-4 md:px-8"
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.3 }}>
			<motion.div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
				{/* Image Section */}
				<motion.div
					className="rounded-lg overflow-hidden shadow-lg"
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, delay: 0.2 }}>
					<Image
						src="https://res.cloudinary.com/dip2khkyo/image/upload/v1739210128/contact-us-img_xfcru4.webp"
						width={600}
						height={400}
						className="w-full h-auto object-cover rounded-lg"
						alt="Why Us"
						priority
					/>
				</motion.div>

				{/* Text Section */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, delay: 0.4 }}>
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

					<div>
						<SkillBar title="Logo & Brand Identity" percentage={98} index={0} />
						<SkillBar title="Social Media Design" percentage={95} index={1} />
						<SkillBar title="UI/UX & Web Design" percentage={90} index={2} />
						<SkillBar title="Print & Publication" percentage={85} index={3} />
					</div>
				</motion.div>
			</motion.div>
		</motion.section>
	);
}
