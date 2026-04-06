"use client";

import Image from "next/image";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
	{
		question: "What services does Digi Ink provide?",
		answer:
			"Digi Ink offers premium digital printing, branding design, packaging, and promotional materials tailored to elevate your business presence.",
	},
	{
		question: "Can I order custom designs?",
		answer:
			"Absolutely. Our in-house designers can bring your vision to life, or you can upload your own artwork for print-ready processing.",
	},
	{
		question: "Do you offer bulk or business discounts?",
		answer:
			"Yes, we provide special pricing for large orders, businesses, and repeat customers. Get in touch to learn more about our flexible pricing.",
	},
];

export default function Faq() {
	const [activeIndex, setActiveIndex] = useState<number | null>(0);

	const toggle = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<section className="bg-black text-white px-6 py-20">
			<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
				{/* LEFT SIDE */}
				<div>
					<div className="rounded-2xl overflow-hidden mb-6 border border-white/10">
						<Image
							src="https://res.cloudinary.com/dip2khkyo/image/upload/v1739210128/contact-us-img_xfcru4.webp"
							alt="Customer support"
							width={600}
							height={600}
							className="w-full h-auto object-cover"
						/>
					</div>

					<h3 className="text-2xl font-bold">
						Still Have <span className="text-orange-500">Questions?</span>
					</h3>

					<p className="text-gray-400 mt-3">
						Whether it&apos;s printing, design, or marketing — our team is ready
						to guide you and deliver the best solutions.
					</p>

					<button className="mt-6 px-6 py-3 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-semibold transition shadow-md hover:shadow-orange-600/20">
						Contact Support
					</button>
				</div>

				{/* RIGHT SIDE */}
				<div>
					<span className="text-orange-500 text-sm uppercase tracking-wider font-semibold">
						FAQs
					</span>

					<h2 className="text-3xl md:text-4xl font-bold mt-2 leading-tight">
						Everything You Need to Know About{" "}
						<span className="text-orange-500">Digi Ink</span>
					</h2>

					<p className="text-gray-400 mt-4 mb-8">
						Get answers to common questions about our services, process, and how
						we help businesses grow with premium printing and design solutions.
					</p>

					<div className="space-y-4">
						{faqs.map((faq, i) => {
							const isActive = activeIndex === i;

							return (
								<div
									key={i}
									className={`rounded-xl border transition duration-300 ${
										isActive
											? "border-orange-600 bg-white/5"
											: "border-white/10 bg-white/5 hover:border-orange-600/40"
									}`}>
									{/* Question */}
									<button
										onClick={() => toggle(i)}
										className="w-full flex items-center justify-between text-left px-5 py-4">
										<h4 className="font-medium text-white text-base">
											{faq.question}
										</h4>

										<span className="text-orange-500">
											{isActive ? <FiMinus /> : <FiPlus />}
										</span>
									</button>

									{/* Answer */}
									<div
										className={`px-5 overflow-hidden transition-all duration-300 ${
											isActive ? "max-h-40 pb-4" : "max-h-0"
										}`}>
										<p className="text-gray-400 text-sm leading-relaxed">
											{faq.answer}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
