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
		<section className="relative bg-black py-20 overflow-hidden">
			{/* Heading */}
			<div className="max-w-7xl mx-auto text-center mb-12 px-6">
				<h2 className="text-3xl md:text-5xl font-bold text-white">
					Our <span className="text-orange-600">Clients</span>
				</h2>
				<p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
					Trusted by growing brands and businesses across industries.
				</p>
			</div>

			{/* Scroller */}
			<div className="relative w-full overflow-hidden">
				<div className="flex w-max animate-scroll gap-6 sm:gap-8 px-4 sm:px-6 hover:[animation-play-state:paused]">
					{[...clients, ...clients].map((client, index) => (
						<div
							key={index}
							className="
              flex items-center justify-center
              min-w-[100px] sm:min-w-[130px] md:min-w-[160px]
              h-[55px] sm:h-[70px] md:h-[80px]
              bg-white/5 border border-white/10 rounded-xl px-3 sm:px-6
              hover:border-orange-600/40 transition group
              ">
							<Image
								src={client.logo}
								alt={client.name}
								width={100}
								height={50}
								className="
                object-contain
                w-[60px] sm:w-[80px] md:w-[100px]
                grayscale group-hover:grayscale-0 transition
                "
							/>
						</div>
					))}
				</div>

				{/* Fade edges */}
				<div className="absolute left-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-r from-black to-transparent pointer-events-none" />
				<div className="absolute right-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-l from-black to-transparent pointer-events-none" />
			</div>
		</section>
	);
}
