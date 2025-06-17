import {
	FiMapPin,
	FiPhone,
	FiMail,
	FiShare2,
	FiMessageCircle,
} from "react-icons/fi";
import Link from "next/link";

const icons = [
	{ icon: <FiMapPin />, label: "Location", href: "https://goo.gl/maps/xyz" },
	{ icon: <FiPhone />, label: "Call", href: "tel:+1234567890" },
	{ icon: <FiMail />, label: "Email", href: "mailto:info@example.com" },
	{ icon: <FiMessageCircle />, label: "Reviews", href: "/reviews" },
	{ icon: <FiShare2 />, label: "Share", href: "/share" },
];

export default function IconBar() {
	return (
		<div className="flex flex-wrap justify-center gap-6 py-8 bg-black">
			{icons.map((item, i) => (
				<Link
					href={item.href}
					key={i}
					className="group flex flex-col items-center cursor-pointer"
					target={
						item.href.startsWith("http") ||
						item.href.startsWith("mailto") ||
						item.href.startsWith("tel")
							? "_blank"
							: "_self"
					}
					rel="noopener noreferrer">
					<div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 shadow-md text-white group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300 ease-in-out">
						<div className="text-2xl">{item.icon}</div>
					</div>
					<span className="mt-2 text-sm text-white group-hover:text-orange-400 transition-colors duration-300">
						{item.label}
					</span>
				</Link>
			))}
		</div>
	);
}
