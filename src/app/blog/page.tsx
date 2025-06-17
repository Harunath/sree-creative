import React from "react";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "../data/BlogPosts";

export default function Page() {
	return (
		<main className="px-4 md:px-8 lg:px-12 py-12 max-w-7xl mx-auto bg-black min-h-screen">
			<header className="text-center mb-20">
				<h1 className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-4 mt-16">
					Our Printing Blog
				</h1>
				<p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
					Ideas, inspiration, and insights on design and printing - discover tips, trends, and techniques to elevate your print work.
				</p>
			</header>

			<section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{blogPosts.map((post, idx) => (
					<BlogCard key={idx} post={post} />
				))}
			</section>
		</main>
	);
}
