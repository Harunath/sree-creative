"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
	const phoneNumber = "919704186069";
	const message = "Hello! I am interested in Digi Ink services.";
	const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
		message,
	)}`;

	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center transition-transform duration-300 hover:scale-110"
			title="Chat with Sree Digi Ink on WhatsApp">
			<FaWhatsapp className="text-2xl" />
		</a>
	);
}
