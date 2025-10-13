"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import { motion, AnimatePresence } from "motion/react";
import { FiX } from "react-icons/fi";

const works = [
	{
		title: "Brochure Design",
		images: [
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750496989/b98ffd06-1a6d-422b-bc84-3d956e5b051d_u2xauc.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750496987/b6cb7569-1094-48c1-8ea2-b35c13b52884_bhygdn.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750496983/abb802dc-f043-4296-b539-031776477678_tyfg4x.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750496979/f8e313b1-56d8-45c7-8fa5-28f324aa76ad_l5glfc.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750496975/a6088738-21e3-485e-9b04-07e30771652d_unhq73.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750496973/447306f3-3b4c-4b08-9834-8481d14a0f02_mqna8f.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750496967/42f96d25-09d0-4db6-8ec7-a7cfa46669e7_lp4ien.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750496959/3b46b7ad-ebec-4a49-a0fb-016b450e8855_y1kyoi.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750496956/3bc97708-eb9f-45dc-81f6-e54b74443dbf_uktv2n.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750496953/3c3fee5c-d85e-48a6-b9b4-8e5108aa3f33_z94q4h.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750496950/05ac505d-e40b-457d-9cce-9b2b7c06aa81_y1okum.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750496946/06ddd70c-4e77-4360-ba42-8aadb27e6df9_lt980o.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750496944/7a077889-bd1a-425d-bb83-5ec46f0e5d63_vyc459.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750496942/0d32fd56-6c49-466d-89c2-ec485c323c8f_t08po5.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750496938/0dd199bd-b536-47b3-abf3-df50fdb8e1a0_rktmem.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750496936/01dcd470-1957-4872-88b2-d1c25e05c145_tpat2c.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750496933/1_hrn1fm.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750496930/1fa33eb6-2e36-4986-b6bc-91019fd421af_ftbdta.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750496927/2ace74ed-0009-4627-925e-865107372871_tcijke.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750496909/0c564beb-15de-46e7-a2a4-756fe9af4afd_fw4bc8.jpg",
		],
		category: "Brochures",
	},
	{
		title: "Business Card",
		images: [
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750497588/eebfcbfe-70bb-4af0-ae2c-8b88b517252f_ellmxm.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750497585/f9c3d033-eb96-46f3-8d2b-09d9eb0caabe_aiqo1r.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750497583/83c5b0c6-0f85-4d79-8c67-f6884b39d59d_luezik.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750497582/2189a8f0-92c4-49a7-9c0d-a8e3900e9e7a_i4ad9a.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750497579/ac537f50-0713-4ee4-9f48-dce81847d6c0_cwnqxs.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750497577/b2642665-2bdd-4436-9d12-b18de246bc41_vnqpyu.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750497575/d2b45ec0-73dc-4a77-a17c-1069ab241d9f_djb5uz.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750497573/e917a6e4-e2a9-423a-96d2-cc2a4d80c114_aezrcs.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750497572/ee4bce02-5fa5-4b95-8c52-ba17ba5751d9_uhxbkr.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750497569/7_rzyfa4.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750497567/8_odumye.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750497565/9_qz7nsm.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750497563/9db3ef51-db4d-45d6-bf13-6f1cfe95f883_wtgtkm.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750497562/10_xhlt3z.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750497559/11_lnaiey.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750497552/5_ecjzzg.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750497541/1_p6xnaz.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750497545/3_rrlsll.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750497549/4_klcb3q.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750497547/3e6dcfd1-e61c-46a2-bff6-243a4dbcad66_vge4nj.jpg",
		],
		category: "Business Cards",
	},
	{
		title: "Flyer Layout",
		images: [
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750497955/d30eea3a-51df-49e4-ae26-3eb3fe1d9c98_dzbuuk.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750497953/eb80b272-c83a-4690-afef-a6cf91a5a0a4_rg5l4u.jpg",
		],
		category: "Flyer",
	},
	{
		title: "Professional ID Card",
		images: [
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750498039/fe42563e-d7df-4a69-9a94-c78d7d669c5d_ucksvz.jpg",
		],
		category: "ID Cards",
	},
	{
		title: "Invitation",
		images: [
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750498114/6b315d0c-6b0a-425d-86ae-60cae27dc546_tovcp2.jpg",
		],
		category: "Invitation",
	},
	{
		title: "Letterhead",
		images: [
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750498245/b7d9c958-15b3-40cc-b6ad-11dd4ea6761b_jqxxsw.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750498244/7da74c3f-93a9-43c9-8655-af6ed595cd79_lzvmlv.jpg",
		],
		category: "Letterhead",
	},
	{
		title: "Logo Branding",
		images: [
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750499727/f5c025af-8e8c-4171-bbad-c7f15ba99c1d_ertxro.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750499725/f49e9a93-dea6-4c2b-a631-dcaed9f2df5b_nyu4c5.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750499721/e21b0301-3b03-4c63-b6fb-f50f482a4df5_xwbfwp.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750499719/c185be99-7317-44b6-a1d9-b85b395e9ff0_zw49qi.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750499717/993d9837-7114-4ef7-af0b-8c781a1c4116_x1ztpu.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750499715/656cf1b0-a31a-46aa-9791-2d82c011a018_qaogeq.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750499714/31c4de8b-98ac-4c9f-8787-d73210f2358d_yr49jh.jpg",
		],
		category: "Logo",
	},
	{
		title: "Custom Notepads",
		images: [
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750498414/76500fab-1fdc-44e8-aba5-1eea7435d275_isber7.jpg",
		],
		category: "Notepads",
	},
	{
		title: "Product Packaging",
		images: [
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750499531/74ff19dd-ab72-48cd-8e08-9911720f2e69_h01h3h.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750499530/ea56ca6c-3a60-4599-8fc2-ce345bfc84d1_hzg1v1.jpg",
		],
		category: "Packaging",
	},
	{
		title: "Sticker Sheets",
		images: [
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750499505/342237cf-5bc1-4195-9283-19621f3ca274_vvehxe.jpg",
		],
		category: "Stickers",
	},
];

// const baseCategories = ["All", ...new Set(works.map((w) => w.category))];

type Work = (typeof works)[number];

export default function OurWorksSection() {
	const [selectedCategory] = useState("All");

	// const categoryCounts = useMemo(() => {
	// 	const map = new Map<string, number>();
	// 	works.forEach((w) => {
	// 		map.set(w.category, (map.get(w.category) ?? 0) + 1);
	// 	});
	// 	return map;
	// }, []);

	const filteredWorks = useMemo<Work[]>(() => {
		if (selectedCategory === "All") return works;
		return works.filter((w) => w.category === selectedCategory);
	}, [selectedCategory]);

	const getColumnClass = useCallback(() => {
		const count = filteredWorks.length;
		if (count <= 1) return "columns-1";
		if (count === 2) return "columns-1 sm:columns-2";
		if (count === 3) return "columns-1 sm:columns-2 md:columns-3";
		return "columns-1 sm:columns-2 md:columns-3 lg:columns-4";
	}, [filteredWorks.length]);

	const [lightbox, setLightbox] = useState<{
		workIndex: number;
		imageIndex: number;
	} | null>(null);

	const openLightbox = (workIndex: number, imageIndex: number) =>
		setLightbox({ workIndex, imageIndex });

	const closeLightbox = () => setLightbox(null);

	const goto = (dir: "prev" | "next") => {
		if (!lightbox) return;
		const w = filteredWorks[lightbox.workIndex];
		const total = w.images.length;
		const nextImageIndex =
			dir === "next"
				? (lightbox.imageIndex + 1) % total
				: (lightbox.imageIndex - 1 + total) % total;
		setLightbox({ workIndex: lightbox.workIndex, imageIndex: nextImageIndex });
	};

	// keyboard navigation
	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (!lightbox) return;
			if (e.key === "Escape") closeLightbox();
			if (e.key === "ArrowRight") goto("next");
			if (e.key === "ArrowLeft") goto("prev");
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, [lightbox]);

	return (
		<div className="relative min-h-screen bg-neutral-950 text-white">
			{/* Ambient grid & glow */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_800px_at_50%_-10%,rgba(255,115,0,0.1),transparent_70%)]"
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:22px_22px] opacity-10"
			/>

			<div className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-20">
				{/* Title */}
				<motion.h1
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="text-center text-4xl font-bold tracking-tight md:text-5xl">
					Our Works
				</motion.h1>
				<p className="mx-auto mt-3 max-w-2xl text-center text-sm text-zinc-300">
					Explore our brochures, logos, cards, and more — curated to inspire and
					convert. Click any image to view it large.
				</p>

				{/* Filter bar (sticky on scroll) */}

				{/* Masonry Grid */}
				<div className={clsx("mx-auto mt-10 space-y-6", getColumnClass())}>
					{filteredWorks.map((work, wIdx) => (
						<motion.article
							key={wIdx}
							initial={{ y: 24, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true, amount: 0.25 }}
							transition={{ duration: 0.4, ease: "easeOut" }}
							className="break-inside-avoid rounded-2xl border border-white/10 bg-neutral-900/60 shadow-xl ring-1 ring-white/5 backdrop-blur">
							{/* Card header */}
							<div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
								<div className="min-w-0">
									<h3 className="truncate text-lg font-semibold text-white">
										{work.title}
									</h3>
									<p className="truncate text-xs text-zinc-400">
										{work.category}
									</p>
								</div>
								<span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-zinc-300">
									{work.images.length} shots
								</span>
							</div>

							{/* Image grid (per card) */}
							<div className="grid grid-cols-2 gap-2 p-3 sm:p-4">
								{work.images.map((src, i) => (
									<button
										key={i}
										onClick={() => openLightbox(wIdx, i)}
										className="group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-800/40"
										aria-label={`${work.title} ${i + 1}`}>
										{/* Soft overlay + hover lift */}
										<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
										<motion.div
											whileHover={{ scale: 1.02 }}
											whileTap={{ scale: 0.99 }}
											className="relative">
											<Image
												src={src}
												alt={`${work.title} ${i + 1}`}
												width={600}
												height={400}
												loading="lazy"
												className="h-auto w-full object-cover transition-opacity duration-300"
											/>
										</motion.div>

										{/* Badge on hover */}
										<span className="pointer-events-none absolute bottom-2 left-2 rounded-full bg-black/60 px-2 py-1 text-[10px] text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
											View
										</span>
									</button>
								))}
							</div>
						</motion.article>
					))}

					{filteredWorks.length === 0 && (
						<p className="col-span-full text-center text-zinc-400">
							No works found for the selected category.
						</p>
					)}
				</div>
			</div>

			{/* LIGHTBOX MODAL */}
			<AnimatePresence>
				{lightbox && (
					<motion.div
						key="lb"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-[80]  flex items-center justify-center bg-black/80 p-4"
						onClick={closeLightbox}>
						<motion.div
							initial={{ y: 24, scale: 0.98, opacity: 0 }}
							animate={{ y: 0, scale: 1, opacity: 1 }}
							exit={{ y: 24, scale: 0.98, opacity: 0 }}
							transition={{ type: "spring", stiffness: 260, damping: 24 }}
							className="relative w-full max-w-5xl"
							onClick={(e) => e.stopPropagation()}>
							{/* Top bar */}
							<div className="mb-3 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white">
								<div className="truncate">
									{filteredWorks[lightbox.workIndex].title} ·{" "}
									<span className="text-zinc-300">
										{filteredWorks[lightbox.workIndex].category}
									</span>
								</div>
								<button
									onClick={closeLightbox}
									className="flex items-center gap-2 mt-2 rounded-lg border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-white transition hover:bg-orange-500/60">
									<FiX className="text-sm" />
									<span className="hidden sm:inline">Close</span>
								</button>
							</div>

							{/* Image */}
							<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
								<Image
									src={
										filteredWorks[lightbox.workIndex].images[
											lightbox.imageIndex
										]
									}
									alt="Preview"
									width={1600}
									height={1000}
									priority
									className="h-auto w-full object-contain"
								/>
								{/* Controls */}
								<div className="pointer-events-none absolute inset-0 flex items-center justify-between p-3">
									<button
										onClick={() => goto("prev")}
										className="pointer-events-auto rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20">
										← Prev
									</button>
									<button
										onClick={() => goto("next")}
										className="pointer-events-auto rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20">
										Next →
									</button>
								</div>
							</div>

							{/* Dots */}
							<div className="mt-3 flex flex-wrap items-center justify-center gap-2">
								{filteredWorks[lightbox.workIndex].images.map((_, i) => {
									const active = i === lightbox.imageIndex;
									return (
										<button
											key={i}
											onClick={() =>
												setLightbox({
													workIndex: lightbox.workIndex,
													imageIndex: i,
												})
											}
											className={clsx(
												"h-2 w-2 rounded-full",
												active
													? "bg-orange-500"
													: "bg-white/30 hover:bg-white/60"
											)}
											aria-label={`Go to image ${i + 1}`}
										/>
									);
								})}
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
