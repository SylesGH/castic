"use client";

import { useState } from "react";
import { useSearchParams as useNextSearchParams } from "next/navigation";
import { useDebounce } from "use-debounce";
import SearchBar from "@/app/components/search-bar";
import SizeToggle from "@/app/components/size-toggle";
import GalleryGrid from "@/app/components/gallery-grid";
import { useSearchParams } from "@/app/hooks/use-search-params";
import { galleryData } from "@/app/lib/gallery-data";

const sizes: Array<"small" | "medium" | "large"> = ["small", "medium", "large"];

export default function Home() {
	const searchParams = useNextSearchParams();
	const initialQuery = searchParams.get("s") || "";

	const [query, setQuery] = useState(initialQuery);
	const [debouncedQuery] = useDebounce(query, 300);
	const [sizeIndex, setSizeIndex] = useState(1); // Start with medium size

	// Custom hook to handle URL parameter syncing
	useSearchParams(debouncedQuery);

	const currentSize = sizes[sizeIndex];

	const cycleSize = () => {
		setSizeIndex((prev) => (prev + 1) % sizes.length);
	};

	const handleFilterClick = () => {
		// Placeholder for future filter functionality
		console.log("Filter clicked - implement filter modal/dropdown");
	};

	return (
		<div className="min-h-screen bg-background">
			<div className="container mx-auto px-4 py-8">
				<header className="mb-8">
					<h1 className="text-4xl font-bold text-center text-foreground mb-2 poppins">
						My Cards
					</h1>
					<p className="text-center text-muted-foreground">
						Create, view, and manage your collection of cards with
						images, titles, and more.
					</p>
				</header>

				<SearchBar
					query={query}
					onQueryChange={setQuery}
					onFilterClick={handleFilterClick}
				/>

				<main>
					<GalleryGrid
						cards={galleryData}
						size={currentSize}
						searchQuery={debouncedQuery}
					/>
				</main>

				<SizeToggle
					currentSize={currentSize}
					onSizeChange={cycleSize}
				/>
			</div>
		</div>
	);
}
