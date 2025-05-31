import React from "react";

function Hero() {
	return (
		<div
			className="relative min-h-screen bg-cover bg-center overflow-hidden"
			style={{
				backgroundImage:
					'url("https://res.cloudinary.com/degrggosz/image/upload/v1748501295/home2_bg_ito8po.jpg")',
			}}>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black/60 z-0" />

			{/* Content */}
			<div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-12">
				<div className="text-white w-full max-w-4xl space-y-8">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center sm:text-left leading-tight">
						Sree Creative
					</h1>

					<div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-6 md:gap-12">
						{/* Left block */}
						<div className="text-xl sm:text-2xl md:text-3xl font-semibold space-y-1 text-center md:text-left">
							<p>8 Years of</p>
							<p>Making</p>
							<p>Our Mark</p>
						</div>

						{/* Right block */}
						<div className="text-sm sm:text-base md:text-lg text-center md:text-left space-y-2 max-w-md">
							<p>Building Brands. Performance Oriented.</p>
							<p>PAN Indian Brands. Impactful Campaigns.</p>
							<p>Your Business, Our Mission.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
