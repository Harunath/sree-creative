export default function CareersSection() {
	return (
		<section className="bg-[#0f0f0f] text-gray-200 px-6 py-24">
			<div className="max-w-6xl mx-auto space-y-16">
				{/* Hero */}
				<div className="text-center max-w-3xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
						Careers at <span className="text-orange-500">Digi Ink</span>
					</h1>
					<p className="text-gray-400 text-lg">
						We&apoas;re always looking for passionate individuals who are ready
						to bring creativity, strategy, and energy to the table. Join our
						growing team and help shape impactful digital experiences.
					</p>
				</div>

				{/* Current Openings */}
				<div>
					<h2 className="text-2xl font-semibold text-orange-500 mb-6">
						Current Openings
					</h2>
					<div className="grid md:grid-cols-2 gap-8">
						{/* Job Card */}
						<div className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition">
							<h3 className="text-xl font-semibold text-white mb-2">
								UI/UX Designer
							</h3>
							<p className="text-gray-400 text-sm mb-4">
								Looking for someone with a strong design portfolio and a solid
								understanding of user-centered design.
							</p>
							<p className="text-sm text-gray-500 mb-2">Location: Hyderabad</p>
							<p className="text-sm text-gray-500 mb-4">Experience: 2+ years</p>
							<a
								href="mailto:info@sreecreative.com?subject=Application%20for%20UI%2FUX%20Designer"
								className="text-orange-500 hover:underline font-medium">
								Apply Now →
							</a>
						</div>

						<div className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition">
							<h3 className="text-xl font-semibold text-white mb-2">
								Frontend Developer
							</h3>
							<p className="text-gray-400 text-sm mb-4">
								Skilled in React, Tailwind CSS, and frontend performance
								optimization. Creative mindset preferred.
							</p>
							<p className="text-sm text-gray-500 mb-2">
								Location: Remote / Hybrid
							</p>
							<p className="text-sm text-gray-500 mb-4">
								Experience: 1–3 years
							</p>
							<a
								href="mailto:info@sreecreative.com?subject=Application%20for%20Frontend%20Developer"
								className="text-orange-500 hover:underline font-medium">
								Apply Now →
							</a>
						</div>

						{/* Add more positions as needed */}
					</div>
				</div>

				{/* Life at Sree Creatives */}
				<div>
					<h2 className="text-2xl font-semibold text-orange-500 mb-6">
						Life at Digi Ink
					</h2>
					<ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-400">
						<li className="bg-[#1a1a1a] p-5 rounded-xl border border-gray-800">
							<span className="block text-white font-semibold mb-2">
								Creative Freedom
							</span>
							<p className="text-sm">
								We believe in ownership, autonomy, and fresh thinking - every
								voice counts.
							</p>
						</li>
						<li className="bg-[#1a1a1a] p-5 rounded-xl border border-gray-800">
							<span className="block text-white font-semibold mb-2">
								Flexible Work Culture
							</span>
							<p className="text-sm">
								Remote options, hybrid schedules, and work-life balance at the
								core of our values.
							</p>
						</li>
						<li className="bg-[#1a1a1a] p-5 rounded-xl border border-gray-800">
							<span className="block text-white font-semibold mb-2">
								Growth-Oriented Team
							</span>
							<p className="text-sm">
								Join a fast-paced environment that nurtures learning and career
								growth.
							</p>
						</li>
					</ul>
				</div>

				{/* Final CTA */}
				<div className="text-center mt-10">
					<p className="text-gray-400 mb-4">
						Didn’t find a matching role? Let’s still get in touch.
					</p>
					<a
						href="mailto:info@sreecreative.com?subject=Career%20Opportunity"
						className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded hover:bg-orange-600 transition">
						Send Your Resume
					</a>
				</div>
			</div>
		</section>
	);
}
