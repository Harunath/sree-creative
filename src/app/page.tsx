import Hero from "@/components/home/Hero";
import IconBar from "@/components/home/IconBar";
import HorizontalScroll from "@/components/home/HorizontalScroll";
import Numbers from "@/components/home/Numbers";
import OurServices from "@/components/home/OurServices";
import ClientsSection from "@/components/home/ClientSection";
import TestimonialsSection from "@/components/home/TestimonialSection";
import OurWorks from "@/components/home/OurWorks";

export default function Home() {
	return (
		<div className=" min-h-screen">
			<Hero />
			<IconBar />
			<OurServices />
			<OurWorks />
			<HorizontalScroll content="Branding_Digital Marketing_Ad Films" />
			<HorizontalScroll
				content="Branding_Digital Marketing_Ad Films"
				initialX={200}
			/>
			<Numbers />
			<ClientsSection />
			<TestimonialsSection />
		</div>
	);
}
