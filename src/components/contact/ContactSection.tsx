import { FiMapPin, FiPhone, FiMail, FiGlobe, FiSend } from "react-icons/fi";

export default function ContactSection() {
	return (
		<section className="bg-[#0f0f0f] text-white px-6 py-24">
			<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
				{/* Left Info Panel */}
				<div className="flex flex-col justify-center gap-8 border border-orange-500 border-opacity-30 p-4 md:p-12 bg-[#151515] shadow-lg">
					<div className="space-y-2">
						<p className="text-orange-500 uppercase text-sm font-semibold tracking-wider">
							Contact Us
						</p>
						<h2 className="text-4xl font-bold leading-tight">
							Let&apos;s Start a Conversation
						</h2>
						<p className="text-gray-400">
							Have questions or inquiries? We&apos;re here to help. Reach out to
							us anytime and we&apos;ll respond promptly.
						</p>
					</div>

					<div className="border-t border-orange-500 border-opacity-20 pt-8 space-y-6">
						<ContactItem
							icon={<FiMapPin size={24} />}
							title="Address"
							text={
								<>
									RR Heights, 1st Floor, 102, <br />
									Above AOB India, Opp. Hanuman Temple, <br />
									East Srinivas Nagar Colony, SR Nagar, <br />
									Hyderabad, Telangana 500038
								</>
							}
						/>
						<ContactItem
							icon={<FiPhone size={22} />}
							title="Phone"
							text="9704186069"
						/>
						<ContactItem
							icon={<FiMail size={22} />}
							title="Email"
							text="info@sreecreative.com"
						/>
						<ContactItem
							icon={<FiGlobe size={22} />}
							title="Website"
							text="www.sreecreative.com"
						/>
					</div>
				</div>

				{/* Right Form */}
				<div className="bg-[#1a1a1a] p-4 md:p-10">
					<form className="space-y-6">
						{/* Name + Email */}
						<div className="grid md:grid-cols-2 gap-4">
							<FormField label="Full Name" required />
							<FormField label="Email Address" type="email" required />
						</div>

						{/* Phone + Service */}
						<div className="grid md:grid-cols-2 gap-4">
							<FormField label="Phone Number" type="tel" />

							<div>
								<label className="block text-sm font-medium mb-1">
									Service Required
								</label>
								<select className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#0f0f0f] text-gray-300 focus:ring-2 focus:ring-orange-500 outline-none transition">
									<option>Select a service</option>
									<option>Brochure Design</option>
									<option>Digital Marketing</option>
									<option>Branding</option>
									<option>Printing</option>
									<option>Other</option>
								</select>
							</div>
						</div>

						{/* Message */}
						<FormField label="Project Details" textarea />

						{/* CTA */}
						<button
							type="submit"
							className="w-full md:w-auto flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition duration-200 shadow-md hover:shadow-orange-500/20">
							<FiSend className="text-lg" />
							Get Free Consultation
						</button>

						{/* Trust Note */}
						<p className="text-xs text-gray-500">
							We respect your privacy. Your information will not be shared.
						</p>
					</form>
				</div>
			</div>
		</section>
	);
}

function ContactItem({
	icon,
	title,
	text,
}: {
	icon: React.ReactNode;
	title: string;
	text: React.ReactNode;
}) {
	return (
		<div className="flex items-start gap-4">
			<div className="text-orange-400 mt-1">{icon}</div>
			<div>
				<p className="font-semibold">{title}</p>
				<p className="text-gray-400 text-sm">{text}</p>
			</div>
		</div>
	);
}

function FormField({
	label,
	type = "text",
	required = false,
	textarea = false,
}: {
	label: string;
	type?: string;
	required?: boolean;
	textarea?: boolean;
}) {
	return (
		<div>
			<label className="block font-medium mb-1">
				{label} {required && <span className="text-orange-400">*</span>}
			</label>
			{textarea ? (
				<textarea
					rows={5}
					placeholder={`Your ${label}`}
					className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-[#0f0f0f] text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500 outline-none transition"
				/>
			) : (
				<input
					type={type}
					placeholder={`Your ${label}`}
					className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-[#0f0f0f] text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500 outline-none transition"
				/>
			)}
		</div>
	);
}
