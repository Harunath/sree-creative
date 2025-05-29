"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

const NavBar = () => {
	const [selected, setSelected] = useState("/");
	const [currentHover, setCoverHover] = useState<null | string>(null);
	const pathname = usePathname();
	useEffect(() => {
		setSelected(pathname);
		console.log(pathname, "pathname");
	}, [pathname]);
	const links = [
		{ name: "Home", link: "/" },
		{ name: "About Us", link: "/about" },
		{ name: "Services", link: "/services" },
		{ name: "Our Works", link: "/works" },
		{ name: "Clients", link: "/clients" },
		{ name: "Blog", link: "/blog" },
		{ name: "Plan Yours", link: "/plan-your-projects" },
		{ name: "Careers", link: "/careers" },
		{ name: "Contact Us", link: "/contact-us" },
	];
	return (
		<nav className=" absolute left-0 top-0 z-10 w-full min-h-16 lg:h-24 flex items-center justify-between px-16">
			<h1 className="text-4xl">SREE</h1>
			<div className="h-full flex gap-x-4 items-center">
				{links &&
					links.map((link, idx) => (
						<div
							key={idx}
							className="h-full flex items-center min-w-[90px] hover:text-[#4089ff] font-medium hover:font-normal transition duration-500"
							onMouseEnter={() => setCoverHover(link.link)}
							onMouseLeave={() => setCoverHover(null)}>
							<Link
								href={link.link}
								className={`${
									selected === link.link ? "text-[#4089ff] font-normal" : ""
								} relative z-10 w-full`}>
								{(currentHover === link.link ||
									(!currentHover && selected === link.link)) && (
									<motion.div
										layoutId="nav-highlighting"
										transition={{ duration: currentHover ? 0.3 : 0.5 }}
										className="absolute inset-0 rounded border-b border-b-[#4089ff] z-0"
									/>
								)}
								<p className="text-center py-1 px-2 min-w-24">{link.name}</p>
							</Link>
						</div>
					))}
			</div>
		</nav>
	);
};

export default NavBar;
