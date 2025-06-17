"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Navigation links
const links = [
	{ name: "Home", link: "/" },
	{ name: "About Us", link: "/about" },
	{ name: "Services", link: "/services" },
	{ name: "Our Works", link: "/works" },
	// { name: "Clients", link: "/clients" },
	{ name: "Blog", link: "/blog" },
	// { name: "Plan Yours", link: "/plan-your-projects" },
	{ name: "Careers", link: "/careers" },
	{ name: "Contact Us", link: "/contact-us" },
];

// Mobile animation
const mobileMenuVariants = {
	hidden: { x: "100%" },
	visible: { x: "30%" }, // Not full screen
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
		const handleScroll = () => setScrolled(window.scrollY > 10);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [pathname]);

	useEffect(() => {
		setSelected(pathname);
	}, [pathname]);

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50 text-white ${
				scrolled ? "backdrop-blur-sm shadow-md " : "bg-transparent"
			}`}>
			<div className="max-w-7xl mx-auto px-4 lg:px-16 h-16 lg:h-24 flex items-center justify-between">
				<h1 className="text-2xl lg:text-4xl font-bold tracking-wide">
					Digi Ink
				</h1>

				{/* Desktop Nav */}
				<div className="hidden lg:flex items-center gap-x-6 text-sm font-medium">
					{links.map((link) => (
						<div
							key={link.link}
							onMouseEnter={() => setHovered(link.link)}
							onMouseLeave={() => setHovered(null)}
							className="relative px-2 py-1">
							<Link
								href={link.link}
								className={`transition duration-300 ${
									selected === link.link
										? "text-orange-500"
										: "hover:text-orange-400"
								}`}>
								{link.name}
							</Link>
							{/* Animated underline */}
							<AnimatePresence>
								{(hovered === link.link || selected === link.link) && (
									<motion.div
										layoutId="underline"
										className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-500"
										transition={{ type: "spring", stiffness: 500, damping: 30 }}
									/>
								)}
							</AnimatePresence>
						</div>
					))}
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={() => setMenuOpen(true)}
					className="lg:hidden text-white"
					aria-label="Open Menu">
					<FaBars size={22} />
				</button>
			</div>

			{/* Mobile Menu Overlay */}
			<AnimatePresence>
				{menuOpen && (
					<>
						{/* Dim background */}
						<motion.div
							className="fixed inset-0 bg-black/60 z-40 lg:hidden"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setMenuOpen(false)}
						/>

						{/* Sidebar Menu */}
						<motion.div
							className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-black text-white flex flex-col px-6 pt-24 space-y-6 z-50 shadow-xl"
							initial="hidden"
							animate="visible"
							exit="exit"
							variants={mobileMenuVariants}
							transition={{ type: "spring", stiffness: 300, damping: 30 }}>
							{/* Close Button */}
							<button
								onClick={() => setMenuOpen(false)}
								className="absolute top-6 right-6 text-orange-500 hover:rotate-90 transition-transform duration-300"
								aria-label="Close Menu">
								<FaTimes size={26} />
							</button>

							{/* Mobile Links */}
							{links.map((link) => (
								<Link
									key={link.link}
									href={link.link}
									onClick={() => setMenuOpen(false)}
									className={`text-base font-medium transition-colors duration-300 ${
										selected === link.link
											? "text-orange-500"
											: "hover:text-orange-400"
									}`}>
									{link.name}
								</Link>
							))}
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default NavBar;
