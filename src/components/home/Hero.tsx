import React from "react";

function Hero() {
	return (
		<div
			className="relative bg-cover bg-center overflow-hidden px-4 sm:px-6 lg:px-16 py-16 lg:min-h-screen flex items-center"
			style={{
				backgroundImage:
					'url("https://res.cloudinary.com/degrggosz/image/upload/v1748501295/home2_bg_ito8po.jpg")',
			}}>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black/60 z-0" />

			{/* Content */}
			<div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">
				{/* Left: Big Stacked Heading */}
				<div className="text-white font-bold text-left space-y-0 leading-none">
					<p className="text-[48px] sm:text-[72px] md:text-[90px] lg:text-[110px]">
						8 Years of
					</p>
					<p className="text-[48px] sm:text-[72px] md:text-[90px] lg:text-[110px]">
						Making
					</p>
					<p className="text-[48px] sm:text-[72px] md:text-[90px] lg:text-[110px]">
						Our Mark
					</p>
				</div>

				{/* Right: Paragraph block */}
				<div className="text-white max-w-md text-[16px] sm:text-[18px] lg:text-[20px] space-y-3 font-medium leading-relaxed text-left">
					<p>Building Brands. Performance Oriented.</p>
					<p>PAN Indian Brands. Impactful Campaigns.</p>
					<p>Your Business, Our Mission.</p>
				</div>
			</div>
		</div>
	);
}

export default Hero;
