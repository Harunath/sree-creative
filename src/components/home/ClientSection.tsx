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
		<section className="bg-[#0f0f0f] py-20 px-6">
			<div className="max-w-7xl mx-auto text-center mb-12">
				<h2 className="text-3xl md:text-4xl font-bold text-white">
					Our Clients
				</h2>
				<p className="text-gray-400 mt-4">
					We’re proud to have worked with diverse brands, helping them grow with
					strategic design and digital presence.
				</p>
			</div>

			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center max-w-6xl mx-auto">
				{clients.map((client, index) => (
					<div
						key={index}
						className="flex justify-center items-center opacity-80 hover:opacity-100 transition">
						<Image
							src={client.logo}
							alt={client.name}
							width={120}
							height={60}
							className="object-contain grayscale hover:grayscale-0 transition"
						/>
					</div>
				))}
			</div>
		</section>
	);
}
