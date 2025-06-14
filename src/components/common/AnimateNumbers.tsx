"use client";

import { motion, useMotionValue, animate, useInView } from "framer-motion";
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
	const isInView = useInView(divRef, { once: true, amount: 0.6 }); // ← run every time it's at least 60% in view

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
		<motion.div
			ref={divRef}
			initial={
				{
					// rotateX: 45,
					// rotateY: -45,
					// rotateZ: -45,
				}
			}
			whileHover={{
				// rotateX: 0,
				// rotateZ: 0,

				transition: { duration: 2 },
			}}
			className="text-9xl font-bold">
			<p className="text-7xl text-center">
				{displayNumber}
				{sign}
			</p>
			<p className="text-3xl text-center">{content}</p>
		</motion.div>
	);
};

export default AnimateNumbers;
