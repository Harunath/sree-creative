import { blogPosts } from "@/app/data/BlogPosts";
import BlogContent from "@/components/blog/BlogContent";
import BlogMeta from "@/components/blog/BlogMeta";
import Image from "next/image";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
	params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
	const { slug } = await params;

	const post = blogPosts.find((p) => p.slug === slug);
	if (!post) return notFound();

	return (
		<main className="p-6 md:p-12 max-w-3xl mx-auto bg-black text-white min-h-screen">
			<Image
				src={post.image}
				alt={post.title}
				width={800}
				height={500}
				className="rounded-2xl pt-16 mb-8 w-full h-auto object-cover"
			/>

			<h1 className="text-4xl font-extrabold text-orange-500 mb-4">
				{post.title}
			</h1>

			<BlogMeta post={post} />

			<div className="mt-8">
				<BlogContent post={post} />
			</div>
		</main>
	);
}
