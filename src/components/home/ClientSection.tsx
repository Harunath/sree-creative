"use client";

import Image from "next/image";

const clients = [
	{ name: "Client One", logo: "/logos/client1.png" },
	{ name: "Client Two", logo: "/logos/client2.png" },
	{ name: "Client Three", logo: "/logos/client3.png" },
	{ name: "Client Four", logo: "/logos/client4.png" },
	{ name: "Client Five", logo: "/logos/client5.png" },
];

export default function ClientsSection() {
	return (
		<section className="relative bg-black py-24 overflow-hidden">
			<div className="max-w-7xl mx-auto text-center mb-16 px-6">
				<h2 className="text-3xl md:text-5xl font-bold text-white">
					Our <span className="text-orange-600">Clients</span>
				</h2>
				<p className="text-gray-400 mt-5 max-w-2xl mx-auto">
					Trusted by growing brands and businesses across industries.
				</p>
			</div>

			<div className="relative w-full overflow-hidden">
				<div className="flex w-max animate-scroll gap-10 px-6 hover:[animation-play-state:paused]">
					{[...clients, ...clients].map((client, index) => (
						<div
							key={index}
							className="flex items-center justify-center min-w-[140px] h-[80px] 
							bg-white/5 border border-white/10 rounded-xl px-6 
							hover:border-orange-600/40 transition group">
							<Image
								src={client.logo}
								alt={client.name}
								width={100}
								height={50}
								className="object-contain grayscale group-hover:grayscale-0 transition"
							/>
						</div>
					))}
				</div>

				{/* fade edges */}
				<div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent pointer-events-none" />
				<div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent pointer-events-none" />
			</div>
		</section>
	);
}
