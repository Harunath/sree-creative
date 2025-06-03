"use client";

import { useMotionValue, animate, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const AnimateNumbers = ({
	n,
	sign = "+",
	content,
}: {
	n: number;
	sign: "+" | "-";
	content: string;
}) => {
	const [displayNumber, setDisplayNumber] = useState(0);
	const motionValue = useMotionValue(0);
	const divRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(divRef, { once: false, amount: 0.6 }); // ← run every time it's at least 60% in view

	useEffect(() => {
		if (isInView) {
			// Reset value before each animation
			motionValue.set(0);
			setDisplayNumber(0);

			const controls = animate(motionValue, n, {
				duration: 1,
				ease: "easeOut",
				onUpdate: (latest) => {
					setDisplayNumber(Math.floor(latest));
				},
			});

			return controls.stop;
		}
	}, [isInView, n, motionValue]);

	return (
		<div ref={divRef} className="text-9xl font-bold">
			<p className="text-7xl">
				{displayNumber}
				{sign}
			</p>
			<p className="text-3xl">{content}</p>
		</div>
	);
};

export default AnimateNumbers;
