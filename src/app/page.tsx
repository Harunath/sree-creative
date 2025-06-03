import Hero from "@/components/home/Hero";
import HorizontalScroll from "@/components/home/HorizontalScroll";
import Numbers from "@/components/home/Numbers";
import OurServices from "@/components/home/OurServices";

export default function Home() {
	return (
		<div className=" min-h-screen">
			<Hero />
			<OurServices />
			<HorizontalScroll content="Branding_Digital Marketing_Ad Films" />
			<HorizontalScroll
				content="Branding_Digital Marketing_Ad Films"
				initialX={200}
			/>
			<Numbers />
		</div>
	);
}
