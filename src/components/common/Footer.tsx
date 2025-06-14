import { FiMapPin, FiPhone, FiMail, FiGlobe } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="bg-[#0f0f0f] text-gray-300 py-14 px-6">
			<div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
				{/* Brand Intro */}
				<div className="col-span-2">
					<h3 className="text-2xl font-bold text-white mb-4">Digi Ink</h3>
					<p className="text-gray-400">
						Your trusted partner for creative design, branding, and digital
						solutions. We help businesses stand out with consistent, modern, and
						custom solutions.
					</p>

					{/* Social Media */}
					<div className="flex gap-4 mt-6">
						<a
							href="#"
							className="p-2 rounded-full bg-gray-800 hover:bg-orange-500 transition"
							aria-label="Facebook">
							<FaFacebookF size={18} />
						</a>
						<a
							href="#"
							className="p-2 rounded-full bg-gray-800 hover:bg-orange-500 transition"
							aria-label="Instagram">
							<FaInstagram size={18} />
						</a>
						<a
							href="#"
							className="p-2 rounded-full bg-gray-800 hover:bg-orange-500 transition"
							aria-label="LinkedIn">
							<FaLinkedinIn size={18} />
						</a>
					</div>
				</div>

				{/* Contact Info */}
				<div className="space-y-4">
					<h4 className="text-lg font-semibold text-orange-500 mb-2">
						Contact Us
					</h4>
					<div className="flex items-start gap-3">
						<FiMapPin size={18} className="mt-1 text-orange-400" />
						<p className="text-sm">
							RR Heights, 1st Floor, 102,
							<br />
							Above AOB India, Opp. Hanuman Temple,
							<br />
							East Srinivas Nagar Colony,
							<br />
							SR Nagar, Hyderabad, Telangana 500038
						</p>
					</div>
					<div className="flex items-center gap-3">
						<FiPhone size={18} className="text-orange-400" />
						<a href="tel:9704186069" className="hover:underline text-sm">
							9704186069
						</a>
					</div>
					<div className="flex items-center gap-3">
						<FiMail size={18} className="text-orange-400" />
						<a
							href="mailto:info@sreecreative.com"
							className="hover:underline text-sm">
							info@sreecreative.com
						</a>
					</div>
					<div className="flex items-center gap-3">
						<FiGlobe size={18} className="text-orange-400" />
						<a
							href="https://www.sreecreative.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline text-sm">
							www.sreecreative.com
						</a>
					</div>
				</div>

				{/* Quick Links */}
				<div>
					<h4 className="text-lg font-semibold text-orange-500 mb-3">
						Quick Links
					</h4>
					<ul className="space-y-2 text-sm">
						<li>
							<a href="#" className="hover:text-orange-400">
								Home
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-orange-400">
								About
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-orange-400">
								Services
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-orange-400">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>

			{/* Bottom Note */}
			<div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
				&copy; {new Date().getFullYear()} Sree Creatives. All rights reserved.
			</div>
		</footer>
	);
}
