"use client";

import React from "react";
import Image from "next/image";
import { blogPosts } from "@/app/data/BlogPosts";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

type BlogPost = (typeof blogPosts)[number];

export default function BlogMeta({ post }: { post: BlogPost }) {
	return (
		<div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
			{/* Author + Date */}
			<div className="flex items-center gap-4">
				<Image
					src={post.author.avatar}
					alt={post.author.name}
					width={40}
					height={40}
					className="rounded-full border border-white/10"
				/>

				<div className="flex flex-col text-sm">
					<span className="text-white font-medium flex items-center gap-2">
						<FaUser className="text-orange-500" size={12} />
						{post.author.name}
					</span>

					<span className="text-gray-400 flex items-center gap-2 mt-1">
						<FaRegCalendarAlt className="text-orange-500" size={12} />
						{post.date}
					</span>
				</div>
			</div>

			{/* Tags */}
			<div className="flex flex-wrap gap-2">
				{post.hashtags.map((tag, idx) => (
					<span
						key={idx}
						className="px-3 py-1 text-xs rounded-full bg-orange-600/10 text-orange-500 border border-orange-600/20 hover:bg-orange-600 hover:text-white transition">
						#{tag}
					</span>
				))}
			</div>
		</div>
	);
}
