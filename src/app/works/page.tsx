import React, { Suspense } from "react";
import OurWorksHome from "@/components/our-works/OurWorksHome";

export default function Page() {
	return (
		<Suspense fallback={<div className="text-white p-6">Loading works...</div>}>
			<OurWorksHome />
		</Suspense>
	);
}
