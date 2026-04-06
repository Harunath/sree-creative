import React from "react";
import Hero from "@/components/DigitalMarketing/Hero";
import WhyUs from "@/components/DigitalMarketing/WhyUs";
import ServicesSection from "@/components/DigitalMarketing/ServicesSection";
import Impact from "@/components/DigitalMarketing/Impact";
import Industries from "@/components/DigitalMarketing/Industries";
function page() {
	return (
		<>
			<Hero />
			<WhyUs />
			<ServicesSection />
			<Impact />
			<Industries />
		</>
	);
}

export default page;
