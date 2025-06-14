import React from "react";
import AnimateNumbers from "../common/AnimateNumbers";

function Numbers() {
	return (
		<div className="pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4">
			<AnimateNumbers n={8} content="Years of Experience" sign="+" />
			<AnimateNumbers n={150} content="Clients Across India" sign="+" />
			<AnimateNumbers n={30} content="Brands Launched Across India" sign="+" />
			<AnimateNumbers n={75} content="Digital Revenue Generated" sign="+" />
		</div>
	);
}

export default Numbers;
