"use client";

import { FiMapPin, FiPhone, FiMail, FiGlobe } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-black text-gray-300 px-6 pt-16 pb-8">
			<div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-12">
				{/* 🔶 BRAND */}
				<div className="space-y-5">
					<div className="flex items-center gap-3">
						<div className="w-11 h-11 bg-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md">
							D
						</div>
						<div>
							<h3 className="text-xl font-semibold text-white">
								Digi <span className="text-orange-500">Ink</span>
							</h3>
							<p className="text-[10px] text-gray-500 tracking-widest uppercase">
								Creative Agency
							</p>
						</div>
					</div>

					<p className="text-gray-400 text-sm leading-relaxed">
						We craft premium brochure designs, branding, and digital marketing
						solutions that help businesses stand out and generate real results.
					</p>

					<Link
						href="/contact-us"
						className="inline-block px-5 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium transition shadow-md hover:shadow-orange-500/20">
						Get Free Consultation
					</Link>

					<div className="flex gap-3 pt-2">
						{[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
							<a
								key={i}
								href="#"
								className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-orange-600 hover:text-white transition">
								<Icon size={14} />
							</a>
						))}
					</div>
				</div>

				{/* 📍 CONTACT */}
				<div>
					<h4 className="text-white font-semibold mb-5">Contact Info</h4>
					<div className="space-y-4 text-sm">
						<div className="flex items-start gap-3">
							<FiMapPin className="text-orange-500 mt-1" />
							<p className="text-gray-400 leading-relaxed">
								SR Nagar, Hyderabad <br />
								Telangana, India
							</p>
						</div>

						<div className="flex items-center gap-3">
							<FiPhone className="text-orange-500" />
							<a href="tel:9704186069" className="hover:text-white transition">
								9704186069
							</a>
						</div>

						<div className="flex items-center gap-3">
							<FiMail className="text-orange-500" />
							<a
								href="mailto:info@sreecreative.com"
								className="hover:text-white transition">
								info@sreecreative.com
							</a>
						</div>

						<div className="flex items-center gap-3">
							<FiGlobe className="text-orange-500" />
							<a
								href="https://www.sreecreative.com"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-white transition">
								www.sreecreative.com
							</a>
						</div>
					</div>
				</div>

				{/* 🔗 QUICK LINKS */}
				<div>
					<h4 className="text-white font-semibold mb-5">Quick Links</h4>
					<ul className="space-y-3 text-sm">
						{[
							{ name: "Home", href: "/" },
							{ name: "About", href: "/about" },
							{ name: "Services", href: "/services" },
							{ name: "Works", href: "/works" },
							{ name: "Contact", href: "/contact-us" },
						].map((item, i) => (
							<li key={i}>
								<Link
									href={item.href}
									className="text-gray-400 hover:text-orange-500 transition">
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* 🧠 SERVICES */}
				<div>
					<h4 className="text-white font-semibold mb-5">Services</h4>
					<ul className="space-y-3 text-sm">
						{[
							"Brochure Design",
							"Digital Marketing",
							"Branding",
							"Printing Solutions",
						].map((service, i) => (
							<li
								key={i}
								className="text-gray-400 hover:text-orange-500 transition cursor-pointer">
								{service}
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* 🔻 Bottom Bar (FIXED) */}
			<div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
				{/* Left */}
				<p>© {new Date().getFullYear()} Digi Ink. All rights reserved.</p>

				{/* Center */}

				{/* Right (🔥 FIXED VISIBILITY) */}
				<a
					href="https://hsdev.in"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-300 hover:text-orange-500 transition text-sm tracking-wide">
					Developed by{" "}
					<span className="text-orange-500 font-semibold">hsdev</span>
				</a>
				<div className="flex gap-4">
					<span className="hover:text-white cursor-pointer transition">
						Privacy Policy
					</span>
					<span className="hover:text-white cursor-pointer transition">
						Terms
					</span>
				</div>
			</div>
		</footer>
	);
}
