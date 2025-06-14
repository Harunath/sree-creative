import Hero from "@/components/home/Hero";
import IconBar from "@/components/home/IconBar";
import OurServices from "@/components/home/OurServices";

export default function Home() {
	return (
		<div className=" min-h-screen">
			<Hero />
			<IconBar />
			<OurServices />
		</div>
	);
}
