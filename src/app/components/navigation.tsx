import {
	DivideIcon,
	ReadCvLogoIcon,
	UserCircleIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Navigation() {
	var links = [
		"browse",
		"collections",
		"pinboard",
		"history",
		"create",
		"about",
		"help",
	];

	return (
		<nav className="backdrop-blur-xl flex items-center justify-between px-5 py-2 z-50 fixed top-0 left-0 w-full h-16 bg-neutral-900/30 border-b border-neutral-400/20 shadow-md poppins">
			<Link
				href="/"
				className="flex items-center gap-1 group cursor-pointer"
			>
				<ReadCvLogoIcon size={32} />
				<h1 className="relative text-2xl font-semibold">
					Castic
					<span className="absolute left-0 -bottom-0 h-[3px] w-full bg-current scale-x-0 transition-transform duration-300 origin-right group-hover:origin-left group-hover:scale-x-100"></span>
				</h1>
			</Link>

			<div className="flex items-center gap-2">
				{links.map((link, id) => (
					<div key={id} className="transition group hover:bg-neutral-400/20 p-1 px-4 rounded-full border-[1px] border-transparent hover:border-neutral-400/50">
						<Link
							href={`/${link}`}
							className="relative cursor-pointer capitalize"
						>
							{link}
							<span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-current scale-x-0 transition-transform duration-300 origin-right group-hover:origin-left group-hover:scale-x-100"></span>
						</Link>
					</div>
				))}
			</div>
			<UserCircleIcon size={32} />
		</nav>
	);
}
