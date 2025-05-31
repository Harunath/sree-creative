import React from "react";
import ContactBanner from "./ContactBanner";
import ContactSection from "./ContactSection";
import Map from "./Map";
import Faq from "./Faq";

function ContactHome() {
	return (
		<>
			<ContactBanner />
			<ContactSection />
			<Faq />
			<Map />
		</>
	);
}

export default ContactHome;
