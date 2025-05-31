"use client";
import Image from "next/image";
import { useState } from "react";

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
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<section className="bg-zinc-900 text-white px-6 py-16">
			<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
				{/* Left Column: Image & CTA */}
				<div>
					<div className=" overflow-hidden mb-6">
						<Image
							src="https://res.cloudinary.com/dip2khkyo/image/upload/v1739210128/contact-us-img_xfcru4.webp" // Place your image in the public folder with this name
							alt="Customer support"
							width={600}
							height={600}
							className="w-full h-auto object-cover"
						/>
					</div>
					<h3 className="text-2xl font-bold">Still Have Questions?</h3>
					<p className="text-zinc-400 mt-2">
						We&apos;re here to help. Whether it&apos;s printing, design, or delivery —
						let&apos;s make your vision a reality.
					</p>
					<button className="mt-4 px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold">
						Contact Support
					</button>
				</div>

				{/* Right Column: FAQ */}
				<div>
					<h2 className="text-4xl font-bold leading-tight mb-4">
						Discover What Digi Ink Can Do
					</h2>
					<p className="text-zinc-400 mb-6">
						Your ideas deserve more than generic prints. Explore our most asked
						questions to see how Digi Ink can help make your brand shine.
					</p>
					<div className="space-y-4">
						{faqs.map((faq, i) => (
							<div
								key={i}
								onClick={() => setActiveIndex(i)}
								className={`p-5 rounded-xl cursor-pointer transition ${
									activeIndex === i
										? "bg-orange-600 text-white"
										: "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
								}`}>
								<h4 className="font-semibold text-lg">{faq.question}</h4>
								{activeIndex === i && (
									<p className="text-sm mt-2 text-white">{faq.answer}</p>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
