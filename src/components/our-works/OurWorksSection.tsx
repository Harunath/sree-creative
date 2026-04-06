"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

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

export default function OurWorksSection() {
	const [lightbox, setLightbox] = useState<{
		workIndex: number;
		imageIndex: number;
	} | null>(null);

	const allImages = useMemo(() => {
		return works.flatMap((work, wIdx) =>
			work.images.map((img, i) => ({
				src: img,
				workIndex: wIdx,
				imageIndex: i,
				title: work.title,
			})),
		);
	}, []);

	const open = (index: number) => {
		const img = allImages[index];
		setLightbox({ workIndex: img.workIndex, imageIndex: img.imageIndex });
	};

	const close = () => setLightbox(null);

	const currentIndex = useMemo(() => {
		if (!lightbox) return -1;
		return allImages.findIndex(
			(img) =>
				img.workIndex === lightbox.workIndex &&
				img.imageIndex === lightbox.imageIndex,
		);
	}, [lightbox, allImages]);

	const goto = (dir: "prev" | "next") => {
		if (currentIndex === -1) return;

		const newIndex =
			dir === "next"
				? (currentIndex + 1) % allImages.length
				: (currentIndex - 1 + allImages.length) % allImages.length;

		const next = allImages[newIndex];

		setLightbox({
			workIndex: next.workIndex,
			imageIndex: next.imageIndex,
		});
	};

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (!lightbox) return;
			if (e.key === "Escape") close();
			if (e.key === "ArrowRight") goto("next");
			if (e.key === "ArrowLeft") goto("prev");
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, [lightbox, currentIndex]);

	return (
		<section className="bg-black text-white py-24 px-4">
			<div className="max-w-7xl mx-auto">
				{/* HEADER */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold">
						Our <span className="text-orange-500">Works</span>
					</h2>
					<p className="text-gray-400 mt-4">
						Explore our creative work across branding, design, and marketing.
					</p>
				</div>

				{/* BIG MASONRY GRID */}
				<div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
					{allImages.map((img, index) => (
						<motion.div
							key={index}
							whileHover={{ scale: 1.02 }}
							className="break-inside-avoid cursor-pointer group"
							onClick={() => open(index)}>
							<div className="relative overflow-hidden rounded-2xl border border-white/10">
								<Image
									src={img.src}
									alt=""
									width={800}
									height={600}
									className="w-full h-auto object-cover"
								/>

								{/* Hover Overlay */}
								<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
									<span className="bg-orange-500 px-4 py-2 rounded-full text-sm">
										View
									</span>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* MODAL */}
			<AnimatePresence>
				{lightbox && (
					<motion.div
						className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={close}>
						<div
							className="relative w-full max-w-6xl px-4"
							onClick={(e) => e.stopPropagation()}>
							{/* Close */}
							<button
								onClick={close}
								className="absolute -top-12 right-4 text-white">
								<FiX size={30} />
							</button>

							{/* Image */}
							<Image
								src={allImages[currentIndex].src}
								alt=""
								width={1600}
								height={1000}
								className="w-full max-h-[85vh] object-contain rounded-xl"
							/>

							{/* LEFT ARROW */}
							<button
								onClick={() => goto("prev")}
								className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-orange-500 transition">
								<FiChevronLeft size={24} />
							</button>

							{/* RIGHT ARROW */}
							<button
								onClick={() => goto("next")}
								className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-orange-500 transition">
								<FiChevronRight size={24} />
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
