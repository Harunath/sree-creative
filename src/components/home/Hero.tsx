import React from "react";

function Hero() {
	return (
		<div
			className="relative bg-cover bg-center overflow-hidden px-4 sm:px-6 lg:px-16 py-16 lg:py-0 lg:min-h-screen flex items-center justify-center"
			style={{
				backgroundImage:
					'url("https://res.cloudinary.com/degrggosz/image/upload/v1748501295/home2_bg_ito8po.jpg")',
			}}>
			{/* Content */}
			<div className="relative z-10 w-full max-w-6xl mx-auto text-white text-center space-y-8 flex flex-col items-center justify-center">
				<h1 className="mt-10 lg:mt-0 text-[42px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-extrabold leading-tight">
					Sree Creatives
				</h1>

				{/* Subtext */}
				<div className="text-[16px] sm:text-[18px] lg:text-[20px] font-medium space-y-3 max-w-2xl leading-relaxed">
					<p>Building Brands. Performance Oriented.</p>
					<p>PAN Indian Brands. Impactful Campaigns.</p>
					<p>Your Business, Our Mission.</p>
				</div>
			</div>
		</div>
	);
}

export default Hero;
