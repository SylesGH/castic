"use client";

import type React from "react";
import {
	MagnifyingGlassIcon,
	SlidersHorizontalIcon,
	XIcon,
} from "@phosphor-icons/react";

import Form from "next/form";

interface SearchBarProps {
	query: string;
	onQueryChange: (query: string) => void;
	onFilterClick?: () => void;
}

export default function SearchBar({
	query,
	onQueryChange,
	onFilterClick,
}: SearchBarProps) {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
	};

	const handleClear = () => {
		onQueryChange("");
	};

	return (
		<div className="flex items-center w-full justify-center mb-8 relative z-10">
			<Form
				action="/"
				onSubmit={handleSubmit}
				className="relative px-3 group hover:scale-105 focus-within:scale-105 w-full max-w-md h-12 flex items-center justify-center transition bg-neutral-500/20 border-2 border-neutral-300/40 rounded-full hover:bg-neutral-400/20 focus-within:bg-neutral-400/20 hover:border-neutral-200/60 focus-within:border-neutral-200/60 text-neutral-100/40 hover:text-neutral-100 focus-within:text-neutral-100 gap-2 cursor-text"
			>
				<button
					type="submit"
					className="h-full flex items-center justify-center rounded-l-full outline-0 cursor-pointer"
					aria-label="Search"
				>
					<MagnifyingGlassIcon
						size={20}
						weight="regular"
						className="transition"
					/>
				</button>

				<input
					name="s"
					type="search"
					className="peer appearance-none outline-0 border-y-0 w-full h-full font-light bg-transparent placeholder:text-neutral-400"
					placeholder="Search images, tags, or descriptions..."
					value={query}
					onChange={(e) => onQueryChange(e.target.value)}
				/>

				{query && (
					<button
						type="button"
						className="flex items-center justify-center outline-0 h-full cursor-pointer transition hover:scale-110"
						onClick={handleClear}
						aria-label="Clear search"
					>
						<XIcon size={20} weight="regular" />
					</button>
				)}

				<button
					type="button"
					className="flex items-center justify-center outline-0 h-full cursor-pointer transition hover:scale-110"
					onClick={onFilterClick}
					aria-label="Filter options"
				>
					<SlidersHorizontalIcon size={20} />
				</button>
				<div className="absolute top-full right-0 mt-2 w-48 bg-neutral-900/90 border border-neutral-700 rounded-xl shadow-lg opacity-0 scale-95 pointer-events-none group-focus-within:opacity-100 group-focus-within:scale-100 group-focus-within:pointer-events-auto transition">
					<ul className="flex flex-col py-2 text-sm text-neutral-200">
						<li className="px-4 py-2 hover:bg-neutral-700/40 cursor-pointer">
							Newest
						</li>
						<li className="px-4 py-2 hover:bg-neutral-700/40 cursor-pointer">
							Most Popular
						</li>
						<li className="px-4 py-2 hover:bg-neutral-700/40 cursor-pointer">
							By Tag
						</li>
					</ul>
				</div>
			</Form>
		</div>
	);
}
