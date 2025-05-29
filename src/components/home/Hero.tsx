// import Image from "next/image";
import React from "react";

function Hero() {
	return (
		<div
			className="relative h-[100dvh] bg-cover bg-center"
			style={{
				backgroundImage: `url("https://res.cloudinary.com/degrggosz/image/upload/v1748501295/home2_bg_ito8po.jpg")`,
			}}>
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-white text-9xl font-bold mb-8">Sree Creative</h1>
					<div className="flex items-center justify-center gap-x-8">
						<div className="text-7xl font-semibold space-y-4">
							<p>8 Years of</p>
							<p>Making</p>
							<p>Our Mark</p>
						</div>
						<div className="text-start  space-y-2">
							<p>Building Brands. Performance Oriented.</p>
							<p> PAN Indian Brands. Impactful Campaigns.</p>
							<p>Your Business, Our Mission.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;

{
	/* <Image
				src="https://res.cloudinary.com/degrggosz/image/upload/v1748501295/home2_bg_ito8po.jpg"
				alt="hero"
				width={1040}
				height={600}
				className=" absolute left-0 top-0 -z-0 w-full h-full"
			/> */
}
