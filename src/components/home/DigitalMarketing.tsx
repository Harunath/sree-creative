"use client";

import { motion } from "framer-motion";
import { FiTarget, FiTrendingUp, FiGlobe, FiUsers } from "react-icons/fi";
import Image from "next/image";

export const metadata = {
	title: "Digital Marketing | HS Dev",
	description:
		"Empowering brands with data-driven digital marketing — from SEO and social media to performance advertising and strategy.",
};

const highlights = [
	{
		icon: <FiTarget className="text-orange-500 text-2xl" />,
		title: "Performance Marketing",
		desc: "We run data-backed ad campaigns that deliver measurable ROI across Google, Meta, and other digital platforms.",
	},
	{
		icon: <FiTrendingUp className="text-orange-500 text-2xl" />,
		title: "SEO & Content Strategy",
		desc: "Boost your visibility through targeted keywords, optimized content, and smart link-building strategies.",
	},
	{
		icon: <FiUsers className="text-orange-500 text-2xl" />,
		title: "Social Media Growth",
		desc: "Engage your audience through creative storytelling, influencer collaborations, and viral content strategies.",
	},
	{
		icon: <FiGlobe className="text-orange-500 text-2xl" />,
		title: "Brand Awareness",
		desc: "From logo to launch — build a brand presence that inspires trust and drives conversions online.",
	},
];

export default function DigitalMarketingPage() {
	return (
		<section className="min-h-screen bg-neutral-950 text-white overflow-hidden">
			{/* Orange Glow Background */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_600px_at_50%_-10%,rgba(255,115,0,0.15),transparent_80%)]"
			/>

			{/* Header Section */}
			<div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 text-center">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="text-4xl md:text-6xl font-bold text-orange-500 tracking-tight">
					Digital Marketing Excellence
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.6 }}
					className="mt-4 text-zinc-300 max-w-2xl mx-auto">
					From SEO to Social Media, we help your brand dominate the digital
					space with strategy, creativity, and measurable results.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.4, duration: 0.6 }}
					className="mt-10 flex justify-center">
					<Image
						src="https://res.cloudinary.com/dmtrqpza7/image/upload/v1750498414/76500fab-1fdc-44e8-aba5-1eea7435d275_isber7.jpg"
						alt="Digital Marketing Banner"
						width={1000}
						height={500}
						className="rounded-2xl border border-white/10 shadow-lg shadow-orange-500/20"
					/>
				</motion.div>
			</div>

			{/* Highlights Section */}
			<div className="relative mx-auto max-w-6xl px-6 pb-20">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center text-3xl font-semibold text-orange-500 mb-12">
					Our Digital Edge
				</motion.h2>

				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{highlights.map((item, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: idx * 0.1 }}
							className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 shadow-xl hover:shadow-orange-500/20 transition">
							<div className="mb-3">{item.icon}</div>
							<h3 className="text-lg font-semibold text-white mb-2">
								{item.title}
							</h3>
							<p className="text-sm text-zinc-400 leading-relaxed">
								{item.desc}
							</p>
						</motion.div>
					))}
				</div>
			</div>

			{/* CTA Section */}
			<div className="relative bg-gradient-to-r from-orange-600/20 to-orange-800/10 py-16 border-t border-white/10">
				<div className="mx-auto max-w-5xl text-center px-6">
					<motion.h3
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-2xl font-semibold text-white mb-4">
						Let’s Grow Your Business Digitally
					</motion.h3>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						className="text-zinc-400 mb-6">
						Get in touch with our digital marketing experts and start scaling
						your online presence today.
					</motion.p>
					<motion.a
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.97 }}
						href="/contact"
						className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-white shadow-md shadow-orange-500/40 hover:bg-orange-600 transition">
						Get Started
					</motion.a>
				</div>
			</div>
		</section>
	);
}
