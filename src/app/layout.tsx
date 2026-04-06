import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import Footer from "@/components/common/Footer";
import FloatingWhatsApp from "@/components/home/FloatingWhatsap";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://digiink.ink"), // 🔥 change this

	title: {
		default: "Digi Ink | Real Estate Brochure Design & Printing Services",
		template: "%s | Digi Ink",
	},

	description:
		"Digi Ink offers premium brochure design, printing, and digital marketing services for real estate developers, builders, and businesses.",

	keywords: [
		"brochure design",
		"printing services",
		"real estate brochure design",
		"digital marketing services",
		"branding agency India",
	],

	openGraph: {
		title: "Digi Ink | Brochure Design & Digital Marketing",
		description:
			"High-quality brochure design and marketing services to grow your business.",
		url: "https://digiink.ink",
		siteName: "Digi Ink",
		// images: [
		// 	{
		// 		url: "https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1774979617/real_estate_brochure_bg.jpg",
		// 		width: 1200,
		// 		height: 630,
		// 		alt: "Digi Ink Brochure Design",
		// 	},
		// ],
		type: "website",
	},

	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Providers>{children}</Providers>
				<FloatingWhatsApp />
				<Footer />
			</body>
		</html>
	);
}
