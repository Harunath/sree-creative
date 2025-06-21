"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import clsx from "clsx";

const works = [
	{
		title: "Elegant Brochure Design",
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
		title: "Modern Business Card",
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
		title: "Creative Flyer Layout",
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
		title: "Letterhead Template",
		images: [
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750498245/b7d9c958-15b3-40cc-b6ad-11dd4ea6761b_jqxxsw.jpg",
			"https://res.cloudinary.com/dmtrqpza7/image/upload/v1750498244/7da74c3f-93a9-43c9-8655-af6ed595cd79_lzvmlv.jpg",
		],
		category: "Letterhead",
	},
	{
		title: "Logo Branding",
		images: [
			"https://res.cloudinary.com/degrggosz/image/upload/v1748502430/social-media-2-scaled_z42hoz.jpg",
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
			"https://res.cloudinary.com/degrggosz/image/upload/v1748502439/ad-film_knktbv.jpg",
		],
		category: "Packaging",
	},
	{
		title: "Sticker Sheets",
		images: [
			"https://res.cloudinary.com/degrggosz/image/upload/v1748502430/social-media-2-scaled_z42hoz.jpg",
		],
		category: "Stickers",
	},
];

const allCategories = ["All", ...new Set(works.map((work) => work.category))];

export default function OurWorksSection() {
	const [selectedCategory, setSelectedCategory] = useState("All");

	const filteredWorks = useMemo(() => {
		if (selectedCategory === "All") return works;
		return works.filter((work) => work.category === selectedCategory);
	}, [selectedCategory]);

	// Dynamically adjust columns
	const getColumnClass = () => {
		const count = filteredWorks.length;
		if (count === 1) return "columns-1";
		if (count === 2) return "columns-1 sm:columns-2";
		if (count === 3) return "columns-1 sm:columns-2 md:columns-3";
		return "columns-1 sm:columns-2 md:columns-3 lg:columns-4";
	};

	return (
		<div className="p-6 pt-16 min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
			<h1 className="text-4xl font-bold mb-8 text-center">Our Works</h1>

			{/* Filter Tabs */}
			<div className="flex flex-wrap justify-center gap-4 mb-10">
				{allCategories.map((cat) => (
					<button
						key={cat}
						onClick={() => setSelectedCategory(cat)}
						className={clsx(
							"px-4 py-2 rounded-full border transition-all text-sm sm:text-base",
							selectedCategory === cat
								? "bg-orange-500 text-white border-orange-500 shadow-lg"
								: "border-gray-500 text-gray-300 hover:bg-gray-800 hover:border-gray-300"
						)}>
						{cat}
					</button>
				))}
			</div>

			{/* Masonry Grid */}
			<div className={`mx-auto ${getColumnClass()} gap-6 space-y-6`}>
				{filteredWorks.map((work, index) => (
					<div
						key={index}
						className="break-inside-avoid bg-white text-black rounded-xl overflow-hidden shadow-lg hover:shadow-orange-400 transition-shadow duration-300">
						<div className="grid grid-cols-2 gap-2 p-4">
							{work.images.map((img, i) => (
								<Image
									key={i}
									src={img}
									alt={`${work.title} ${i + 1}`}
									width={300}
									height={200}
									className="w-full h-auto object-cover rounded-md"
								/>
							))}
						</div>
						<div className="p-4 border-t">
							<h3 className="font-bold text-lg">{work.title}</h3>
							<p className="text-sm text-gray-600">{work.category}</p>
						</div>
					</div>
				))}

				{filteredWorks.length === 0 && (
					<p className="text-center text-gray-400 col-span-full">
						No works found for the selected category.
					</p>
				)}
			</div>
		</div>
	);
}
