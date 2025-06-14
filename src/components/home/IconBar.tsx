import {
	FiMapPin,
	FiPhone,
	FiMail,
	FiShare2,
	FiBookmark,
	FiMessageCircle,
	FiGlobe,
} from "react-icons/fi";

const icons = [
	{ icon: <FiMapPin />, label: "Location" },
	{ icon: <FiPhone />, label: "Call" },
	{ icon: <FiMail />, label: "Email" },
	{ icon: <FiGlobe />, label: "Website" },
	{ icon: <FiMessageCircle />, label: "Reviews" },
	{ icon: <FiShare2 />, label: "Share" },
	{ icon: <FiBookmark />, label: "Save" },
];

export default function IconBar() {
	return (
		<div className="flex flex-wrap justify-center gap-6 py-8 bg-black">
			{icons.map((item, i) => (
				<div
					key={i}
					className="group flex flex-col items-center cursor-pointer">
					<div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 shadow-md text-white group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300 ease-in-out">
						<div className="text-2xl">{item.icon}</div>
					</div>
					<span className="mt-2 text-sm text-white group-hover:text-orange-400 transition-colors duration-300">
						{item.label}
					</span>
				</div>
			))}
		</div>
	);
}
