"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function HorizontalScroll({
	content,
	initialX = 0,
}: {
	content: string;
	initialX?: number;
}) {
	const contentRef = useRef<HTMLDivElement>(null);
	const offsetRef = useRef<HTMLElement>(null);
	const [width, setWidth] = useState(0);
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		if (offsetRef.current) {
			setOffset(offsetRef.current.scrollWidth);
		}
		if (contentRef.current) {
			// Get half the scrollable width, since we duplicated the content
			setWidth(contentRef.current.scrollWidth / 3 + offset);
		}
	}, []);

	return (
		<div className="w-full overflow-hidden bg-black pt-4">
			<motion.div
				ref={contentRef}
				className="flex whitespace-nowrap text-8xl font-bold text-white"
				initial={{ x: -initialX }}
				animate={{ x: -width - initialX }}
				transition={{
					duration: 10,
					ease: "linear",
					repeat: Infinity,
				}}>
				{/* Repeat content for seamless loop */}
				<span>
					{content}
					<span ref={offsetRef}>&nbsp;</span>
				</span>
				<span>{content}&nbsp;</span>
				<span>{content}&nbsp;</span>
			</motion.div>
		</div>
	);
}

export default HorizontalScroll;
