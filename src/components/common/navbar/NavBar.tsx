"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const links = [
	{ name: "Home", link: "/" },
	{ name: "About", link: "/about" },
	{ name: "Services", link: "/services" },
	{ name: "Works", link: "/works" },
	{ name: "Digital Marketing", link: "/digital-marketing" },
	{ name: "Blog", link: "/blog" },
	{ name: "Careers", link: "/careers" },
	{ name: "Contact", link: "/contact-us" },
];

const mobileMenuVariants = {
	hidden: { x: "100%" },
	visible: { x: "0%" },
	exit: { x: "100%" },
};

const NavBar = () => {
	const pathname = usePathname();
	const [selected, setSelected] = useState("/");
	const [hovered, setHovered] = useState<null | string>(null);
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		setSelected(pathname);
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [pathname]);

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
				scrolled
					? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
					: "bg-black lg:bg-transparent"
			}`}>
			<div className="max-w-7xl mx-auto px-6 lg:px-16 h-16 lg:h-20 flex items-center justify-between">
				{/* 🔶 LOGO */}
				<Link href="/" className="flex items-center gap-2 group">
					<div className="w-9 h-9 rounded-lg bg-orange-600 flex items-center justify-center font-bold text-white shadow-md">
						D
					</div>
					<div className="flex flex-col leading-tight">
						<span className="text-white font-semibold text-lg tracking-wide">
							Digi <span className="text-orange-500">Ink</span>
						</span>
						<span className="text-[10px] text-gray-400 tracking-widest uppercase">
							Creative Agency
						</span>
					</div>
				</Link>

				{/* Desktop Nav */}
				<div className="hidden lg:flex items-center gap-x-8 text-sm font-medium">
					{links.map((link) => (
						<div
							key={link.link}
							onMouseEnter={() => setHovered(link.link)}
							onMouseLeave={() => setHovered(null)}
							className="relative">
							<Link
								href={link.link}
								className={`transition duration-300 ${
									selected === link.link
										? "text-orange-500"
										: "text-gray-300 hover:text-white"
								}`}>
								{link.name}
							</Link>

							{/* Underline */}
							<AnimatePresence>
								{(hovered === link.link || selected === link.link) && (
									<motion.div
										layoutId="underline"
										className="absolute -bottom-1 left-0 w-full h-[2px] bg-orange-500"
										transition={{
											type: "spring",
											stiffness: 500,
											damping: 30,
										}}
									/>
								)}
							</AnimatePresence>
						</div>
					))}

					{/* CTA */}
					<Link
						href="/contact-us"
						className="ml-4 px-5 py-2 rounded-lg bg-orange-600 text-white font-semibold hover:bg-orange-500 transition shadow-md">
						Get Quote
					</Link>
				</div>

				{/* Mobile Button */}
				<button
					onClick={() => setMenuOpen(true)}
					className="lg:hidden text-white">
					<FaBars size={22} />
				</button>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{menuOpen && (
					<>
						{/* Overlay */}
						<motion.div
							className="fixed inset-0 bg-black/70 z-40"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setMenuOpen(false)}
						/>

						{/* Sidebar */}
						<motion.div
							className="fixed top-0 right-0 h-full w-[85%] max-w-sm 
              bg-[#0b0b0b] text-white flex flex-col px-6 pt-24 space-y-6 z-50 shadow-2xl"
							initial="hidden"
							animate="visible"
							exit="exit"
							variants={mobileMenuVariants}
							transition={{ type: "spring", stiffness: 300, damping: 30 }}>
							{/* Close */}
							<button
								onClick={() => setMenuOpen(false)}
								className="absolute top-6 right-6 text-orange-500">
								<FaTimes size={26} />
							</button>

							{/* Links */}
							{links.map((link) => (
								<Link
									key={link.link}
									href={link.link}
									onClick={() => setMenuOpen(false)}
									className={`text-lg font-medium transition ${
										selected === link.link
											? "text-orange-500"
											: "text-gray-300 hover:text-white"
									}`}>
									{link.name}
								</Link>
							))}

							{/* CTA */}
							<Link
								href="/contact-us"
								onClick={() => setMenuOpen(false)}
								className="mt-6 px-5 py-3 rounded-lg bg-orange-600 text-center font-semibold hover:bg-orange-500 transition">
								Get Free Consultation
							</Link>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default NavBar;
