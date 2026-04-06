"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/app/data/BlogPosts";
import { FaArrowRight } from "react-icons/fa";

type BlogPost = (typeof blogPosts)[number];

export default function BlogCard({ post }: { post: BlogPost }) {
	return (
		<div className="group rounded-2xl overflow-hidden bg-[#0f0f0f] border border-white/10 hover:border-orange-600/40 transition duration-300 shadow-lg hover:shadow-xl">
			{/* Image */}
			<div className="relative overflow-hidden">
				<Image
					src={post.image}
					alt={post.title}
					width={600}
					height={400}
					className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
				/>

				{/* Gradient Overlay */}
				<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
			</div>

			{/* Content */}
			<div className="p-5">
				{/* Title */}
				<h2 className="text-lg md:text-xl font-semibold text-white leading-snug group-hover:text-orange-500 transition">
					{post.title}
				</h2>

				{/* Excerpt */}
				<p className="text-gray-400 text-sm mt-3 line-clamp-3">
					{post.excerpt}
				</p>

				{/* Author + Date */}
				<div className="flex items-center justify-between mt-5 text-xs text-gray-500">
					<div className="flex items-center gap-2">
						<Image
							src={post.author.avatar}
							alt={post.author.name}
							width={28}
							height={28}
							className="rounded-full border border-white/10"
						/>
						<span className="text-gray-300">{post.author.name}</span>
					</div>

					<span>{post.date}</span>
				</div>

				{/* CTA */}
				<Link
					href={`/blog/${post.slug}`}
					className="mt-5 inline-flex items-center gap-2 text-orange-500 text-sm font-medium group-hover:gap-3 transition-all">
					Read Article
					<FaArrowRight size={12} />
				</Link>
			</div>
		</div>
	);
}
