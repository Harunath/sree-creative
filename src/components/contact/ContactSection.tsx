"use client";

import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import React from "react";
import Image from "next/image";

export default function ContactSection() {
	return (
		<section
			className="relative w-full px-6 py-16 sm:px-12 md:px-16 lg:px-24 xl:px-32 min-h-[480px] text-white bg-cover bg-center bg-no-repeat"
			style={{
				backgroundImage:
					"url('https://res.cloudinary.com/degrggosz/image/upload/v1748501295/home2_bg_ito8po.jpg')",
			}}>
			{/* Content container */}
			<div className="relative max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
				{/* Left: Image */}
				<div className="flex justify-center items-center">
					<Image
						src="https://res.cloudinary.com/dip2khkyo/image/upload/v1739210128/contact-us-img_xfcru4.webp"
						alt="Support Team"
						className="rounded-xl shadow-xl object-cover w-full max-w-md"
						width={600}
						height={400}
						priority
					/>
				</div>

				{/* Right: Contact Information */}
				<div className="bg-black bg-opacity-40 border border-orange-400 rounded-3xl shadow-lg p-8 sm:p-10 flex flex-col justify-center">
					<h2 className="text-4xl font-extrabold mb-8 tracking-wide drop-shadow-md">
						Contact Us
					</h2>

					<div className="flex items-start mb-8 text-orange-300">
						<FiMapPin className="text-2xl mt-1 mr-5 flex-shrink-0 text-orange-500 hover:text-orange-400 transition-colors" />
						<p className="leading-relaxed text-lg md:text-base max-w-lg">
							RR Heights, 1st Floor, 102,
							<br />
							Above AOB India, Opp. Hanuman Temple,
							<br />
							East Srinivas Nagar Colony,
							<br />
							Srinivasa Nagar, Sanjeeva Reddy Nagar,
							<br />
							Hyderabad, Telangana 500038
						</p>
					</div>

					<div className="flex items-center mb-6 text-orange-300 text-lg md:text-base">
						<FiPhone className="text-2xl mr-4 flex-shrink-0 text-orange-500 hover:text-orange-400 transition-colors" />
						<a
							href="tel:9704186069"
							className="hover:underline focus:outline-none focus:ring-2 focus:ring-orange-400 rounded">
							9704186069
						</a>
					</div>

					<div className="flex items-center text-orange-300 text-lg md:text-base">
						<FiMail className="text-2xl mr-4 flex-shrink-0 text-orange-500 hover:text-orange-400 transition-colors" />
						<a
							href="mailto:info@sreecreative.com"
							className="hover:underline focus:outline-none focus:ring-2 focus:ring-orange-400 rounded">
							info@sreecreative.com
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
