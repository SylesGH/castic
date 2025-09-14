"use client";

import { JSX, useState } from "react";
import Card from "@/app/components/card";
import {
	BuildingApartmentIcon,
	BuildingIcon,
	BuildingOfficeIcon,
	BuildingsIcon,
	CactusIcon,
	IslandIcon,
	SmileySadIcon,
	SmileyXEyesIcon,
} from "@phosphor-icons/react";

export interface CardData {
	name: string;
	title: string;
	description: string;
	tags: string[];
	image: string;
	date: string;
}

interface GalleryGridProps {
	cards: CardData[];
	size: "small" | "medium" | "large";
	searchQuery: string;
}

export default function GalleryGrid({
	cards,
	size,
	searchQuery,
}: GalleryGridProps) {
	const [chosenIcon, setChosenIcon] = useState<JSX.Element | null>(null);

	const filteredCards = cards.filter((card) => {
		const query = searchQuery.trim().toLowerCase();
		if (!query) return true;

		return (
			card.title.toLowerCase().includes(query) ||
			card.description.toLowerCase().includes(query) ||
			card.tags.some((tag) => tag.toLowerCase().includes(query))
		);
	});

	const icons = [
		<SmileySadIcon key="sad" size={80} weight="fill" />,
		<SmileyXEyesIcon key="xeyes" size={80} weight="fill" />,
		<BuildingIcon key="building" size={80} weight="fill" />,
		<BuildingApartmentIcon key="apartment" size={80} weight="fill" />,
		<BuildingOfficeIcon key="office" size={80} weight="fill" />,
		<BuildingsIcon key="buildings" size={80} weight="fill" />,
		<IslandIcon key="island" size={80} weight="fill" />,
		<CactusIcon key="cactus" size={80} weight="fill" />,
	];

	if (filteredCards.length === 0 && searchQuery.trim()) {
		if (!chosenIcon) {
			setChosenIcon(icons[Math.floor(Math.random() * icons.length)]);
		}

		return (
			<div className="flex flex-col items-center justify-center py-16 text-center">
				<div className="mb-4 opacity-80">{chosenIcon}</div>
				<h3 className="text-xl font-semibold text-foreground mb-2 poppins">
					No results found
				</h3>
				<p className="text-neutral-400 max-w-md">
					Try adjusting your search terms or browse all images by
					clearing the search.
				</p>
			</div>
		);
	}

	if (chosenIcon) setChosenIcon(null);

	return (
		<div className="flex flex-wrap w-full justify-center gap-4">
			{filteredCards.map((card, index) => (
				<Card
					key={`${card.name}-${index}`}
					size={size}
					image={`/${card.image}.jpg`}
					title={card.title}
					description={card.description}
					date={card.date}
					tags={card.tags}
				/>
			))}
		</div>
	);
}
