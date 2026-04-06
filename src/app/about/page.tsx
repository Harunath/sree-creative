import React from "react";
import VisionMission from "@/components/about/VisionMission";
import OurStory from "@/components/about/OurStory";
import WhyUs from "@/components/about/WhyUs";
import AboutBanner from "@/components/about/AboutBanner";
function page() {
	return (
		<>
			<AboutBanner />
			<WhyUs />
			<OurStory />
			<VisionMission />
		</>
	);
}

export default page;
