import NavBar from "@/components/common/navbar/NavBar";
import React, { ReactNode } from "react";

function Providers({ children }: { children: ReactNode }) {
	return (
		<div className="min-h-screen bg-neutral-900 text-white">
			<NavBar />

			<div className="pt-24">{children}</div>
		</div>
	);
}

export default Providers;
