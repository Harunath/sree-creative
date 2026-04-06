"use client";

import React from "react";
import { FiMapPin, FiNavigation } from "react-icons/fi";

export default function Map() {
	return (
		<section className="px-6 py-16 bg-black text-white">
			<div className="max-w-7xl mx-auto">
				{/* Heading */}
				<div className="mb-10 text-center">
					<span className="text-orange-500 text-sm uppercase tracking-wider font-semibold">
						Our Location
					</span>
					<h2 className="text-3xl md:text-4xl font-bold mt-2">
						Visit Our Office
					</h2>
					<p className="text-gray-400 mt-3 text-sm md:text-base max-w-2xl mx-auto">
						We are located in the heart of Hyderabad. Feel free to visit or
						connect with us for your next project.
					</p>
				</div>

				{/* Map Container */}
				<div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl">
					{/* Map */}
					<iframe
						title="Location Map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2105638924394!2d78.42506347495966!3d17.432889503378334!2m3!1f0!2f0!3f0!2m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973ed8ecb2bb%3A0xfbc01d0a5a3f6a82!2sSanjeeva%20Reddy%20Nagar%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1685600000000!5m2!1sen!2sin"
						className="w-full h-64 md:h-[450px] grayscale-[0.3] contrast-110"
						style={{ border: 0 }}
						loading="lazy"
					/>

					{/* Overlay Card */}
					<div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-[350px] bg-black/80 backdrop-blur-lg border border-white/10 rounded-xl p-5 shadow-lg">
						<div className="flex items-start gap-3">
							<div className="p-2 bg-orange-600/10 rounded-lg text-orange-500">
								<FiMapPin size={18} />
							</div>

							<div>
								<p className="text-white font-semibold text-sm">
									Digi Ink Office
								</p>
								<p className="text-gray-400 text-xs mt-1 leading-relaxed">
									SR Nagar, Hyderabad <br />
									Telangana, India
								</p>
							</div>
						</div>

						{/* CTA */}
						<a
							href="https://www.google.com/maps?q=17.4328895,78.4250634"
							target="_blank"
							rel="noopener noreferrer"
							className="mt-4 inline-flex items-center gap-2 text-sm text-orange-500 hover:text-white transition">
							<FiNavigation size={14} />
							Get Directions
						</a>
					</div>

					{/* Glow Effect */}
					<div className="absolute -inset-1 bg-orange-600/10 blur-2xl opacity-20 pointer-events-none" />
				</div>
			</div>
		</section>
	);
}
