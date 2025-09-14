import Image from "next/image";
import Badge from "@/app/components/badge";
import clsx from "clsx";
import { HeartBreakIcon, HeartIcon } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

interface CardProps {
	size?: "small" | "medium" | "large";
	image?: string;
	title?: string;
	description?: string;
	date?: string;
	tags?: string[];
}

export default function Card({
	size = "large",
	image = "/paint.jpg",
	title = "Title",
	description = "A very very long ass and proper description that is only suitable for placeholders",
	date = new Date().toISOString().split("T")[0],
	tags = ["Lorem", "Tag", "Second"],
}: CardProps) {
	const [checked, setChecked] = useState(false);

	function formatCardDate(cardDate: string | Date) {
		const now = new Date();
		const date = new Date(cardDate);

		const diffMs = now.getTime() - date.getTime();
		const diffMin = Math.floor(diffMs / (1000 * 60));
		const diffHours = Math.floor(diffMin / 60);
		const diffDays = Math.floor(diffHours / 24);
		const diffWeeks = Math.floor(diffDays / 7);

		if (diffMs < 0) return "Future";

		if (diffMin < 1) return "Now";
		if (diffMin < 60) return `${diffMin}m`;
		if (diffHours < 24) return `${diffHours}h`;
		if (diffDays === 1) return "Yesterday";
		if (diffDays === 0) return "Today";
		if (diffDays < 7) return "This week";
		if (diffWeeks < 50) return `${diffWeeks}w`;

		const day = String(date.getDate()).padStart(2, "0");
		const month = String(date.getMonth() + 1).padStart(2, "0");
		const year = date.getFullYear();

		return `${day}.${month}.${year}`;
	}

	return (
		<div
			className={clsx(
				"aspect-[9/13] bg-neutral-900 relative overflow-hidden *:duration-150 select-none",
				size == "small" &&
					"w-40 rounded-xl border-2 border-neutral-100/10 hover:scale-105 transition",
				size == "medium" &&
					"w-60 rounded-3xl border border-neutral-100/10",
				size == "large" &&
					"w-80 rounded-3xl border border-neutral-500/20"
			)}
		>
			<div className={clsx("w-full h-full", size == "small" && "hidden")}>
				<Image
					alt="image"
					fill={true}
					src={image}
					quality={1}
					loading="lazy"
					style={{
						objectFit: "cover",
						zIndex: "0",
						filter: "saturate(310%) contrast(200%) blur(100px) brightness(30%)",
						scale: clsx(
							size == "small" && "1.5",
							size == "medium" && "2",
							size == "large" && "2"
						),
					}}
				/>
			</div>
			<div className="group/card w-full h-full absolute top-0 left-0 p-2 flex flex-col gap-2">
				{/* Content Wrapper */}
				<div
					className={clsx(
						size == "small" &&
							"absolute w-full h-full top-0 left-0 brightness-90 duration-200",
						size == "medium" && "relative w-full h-2/3",
						size == "large" && "relative w-full h-2/3"
					)}
				>
					<Image
						alt="image"
						fill={true}
						src={image}
						quality={1}
						loading="lazy"
						style={{
							objectFit: "cover",
							zIndex: "0",
							borderRadius: size !== "small" ? "16px" : "",
						}}
					/>
					{/* Buttons */}
					<div
						className={clsx(
							"absolute top-0 right-0 flex gap-1 w-full justify-end p-2 overflow-hidden",
							size == "small" && "hidden"
						)}
					>
						{/* Favorite md lg */}
						<label className="group/button flex items-center justify-center h-10 rounded-full aspect-square border-2 border-neutral-200/50 hover:border-0 bg-neutral-900/10 hover:bg-neutral-300/60 has-[input:checked]:bg-neutral-300/60 has-[input:checked]:translate-y-0 backdrop-blur-xs -translate-y-16 group-hover/card:translate-y-0 duration-250 ease-in-out cursor-pointer has-[input:checked]:mix-blend-exclusion has-[input:checked]:hover:scale-95">
							<input
								type="checkbox"
								className="peer appearance-none absolute inset-0 w-full h-full opacity-0"
								checked={checked}
								onChange={() => setChecked(!checked)}
							/>
							<HeartIcon
								size={24}
								weight="bold"
								className="absolute text-neutral-200/60 group-hover/button:opacity-0 duration-200 peer-checked:opacity-0"
							/>
							<HeartIcon
								size={24}
								weight="fill"
								className="absolute text-neutral-100 opacity-0 group-hover/button:opacity-100 group-hover/button:scale-110 peer-checked:group-hover/button:scale-125 rounded-full peer-checked:group-hover/button:opacity-0 duration-200 peer-checked:opacity-100"
							/>
							<HeartBreakIcon
								size={24}
								weight="fill"
								className="absolute text-neutral-100 opacity-0 group-hover/button:scale-110 peer-checked:group-hover/button:scale-125 rounded-full peer-checked:group-hover/button:opacity-100 duration-200"
							/>
						</label>
					</div>
				</div>

				{/* Text Background */}
				<div
					className={clsx(
						"bg-gradient-to-t from-neutral-900 mix-blend-luminosity from-30% to-neutral-100/0 absolute h-full w-full top-0 left-0",
						size == "small" &&
							"translate-y-1/2 opacity-0 group-hover/card:opacity-100 group-hover/card:translate-y-0 duration-150",
						size !== "small" && "hidden"
					)}
				></div>
				{/* Content */}
				<div
					className={clsx(
						"flex flex-col relative",
						size == "small" && "justify-end h-full gap-2 ",
						size == "medium" && "justify-between h-36",
						size == "large" && "justify-between h-36"
					)}
				>
					{/* Buttons */}
					<div
						className={clsx(
							"absolute top-0 right-0 flex gap-1 w-full justify-end mix-blend-exclusion",
							size !== "small" && "hidden"
						)}
					>
						{/* Favorite sm */}
						<label className="group/button hover:scale-110 absolute flex items-center justify-center h-8 rounded-full aspect-square border-2 border-neutral-200/50 hover:border-neutral-200/50 bg-neutral-500/10  hover:bg-neutral-400/60 backdrop-blur-xs -translate-y-10 group-hover/card:translate-y-0 has-[input:checked]:translate-y-0 has-[input:checked]:group-hover/card:bg-neutral-400/60 duration-250 ease-in-out has-[input:checked]:bg-neutral-500/0 has-[input:checked]:border-neutral-200/0 cursor-pointer mix-blend-exclusion will-change-transform">
							<input
								type="checkbox"
								className="peer appearance-none absolute inset-0 w-full h-full opacity-0 cursor-pointer"
								checked={checked}
								onChange={() => setChecked(!checked)}
							/>
							<HeartIcon
								size={16}
								weight="bold"
								className="absolute peer-checked:drop-shadow-sm text-neutral-200/60 group-hover/button:opacity-0 duration-200 peer-checked:opacity-0"
							/>
							<HeartIcon
								size={16}
								weight="fill"
								className="absolute peer-checked:drop-shadow-sm text-neutral-100 opacity-0 group-hover/button:opacity-100 duration-200 peer-checked:opacity-100 group-hover/button:peer-checked:opacity-0 peer-checked:scale-125"
							/>
							<HeartBreakIcon
								size={16}
								weight="fill"
								className="absolute peer-checked:drop-shadow-sm text-neutral-100 opacity-0 group-hover/button:scale-110 peer-checked:group-hover/button:scale-125 rounded-full peer-checked:group-hover/button:opacity-100 duration-200"
							/>
						</label>
					</div>
					{/* Information */}
					<div
						className={clsx(
							"opacity-80 mix-blend-exclusion",
							size == "small" &&
								"translate-y-1/2 group-hover/card:translate-y-0 duration-300 ease-in-out",
							size == "medium" && "",
							size == "large" && ""
						)}
					>
						{/* Text */}
						<div
							className={clsx(
								"flex justify-between items-start gap-1",
								size == "small" &&
									"translate-y-12 group-hover/card:translate-y-0 duration-150 ease-out"
							)}
						>
							{/* Title */}
							<h1
								className={clsx(
									"font-semibold tracking-tight poppins text-neutral-100 line-clamp-1",
									size == "small" && "text-lg/tight",
									size == "medium" && "text-xl/tight",
									size == "large" && "text-2xl/tight"
								)}
							>
								{title}
							</h1>
							{/* Date */}
							<time
								className={clsx(
									"font-extralight text-neutral-500/80 poppins",
									size == "small" &&
										"text-xs origin-bottom scale-y-0 group-hover/card:scale-y-100 opacity-0 group-hover/card:opacity-100 duration-200",
									size == "medium" && "text-sm",
									size == "large" && "text-sm"
								)}
								dateTime="2025-08-25 12:00"
							>
								{formatCardDate(date)}
							</time>
						</div>
						{/* Description */}
						<p
							className={clsx(
								"text-neutral-400 text-base/tight",
								size == "small" &&
									"text-sm group-hover/card:delay-150 line-clamp-2 opacity-0 group-hover/card:opacity-100 duration-200",
								size == "medium" &&
									"text-base/tight line-clamp-2",
								size == "large" &&
									"text-base/tight line-clamp-3"
							)}
						>
							{description}
						</p>
					</div>
					{/* Badges */}
					<div
						className={clsx(
							"relative poppins font-extralight text-sm flex gap-2 w-full text-center rounded-full overflow-hidden overflow-x-auto",
							size == "small" &&
								"group-hover/card:delay-200 duration-200 ease-in-out origin-bottom scale-y-50 group-hover/card:scale-y-100 opacity-0 group-hover/card:opacity-100 translate-y-full group-hover/card:translate-y-0",
							size == "medium" && "",
							size == "large" && ""
						)}
					>
						{tags.map((tag, i) => (
							<Badge key={i}>{tag}</Badge>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
