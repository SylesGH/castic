"use client";
import { HorseIcon, HeartIcon, CubeIcon } from "@phosphor-icons/react/dist/ssr";
import Card from "./components/card";
import { useState } from "react";
import Form from "next/form";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";

export default function Home() {
	const cardInformation = [
		{
			name: "car",
			title: "Car",
			description:
				"A sleek vehicle built for speed and comfort, perfect for city and highway drives.",
			tags: ["Vehicle", "Speed", "Transport"],
			image: "car",
			date: "2025-08-01 10:15",
		},
		{
			name: "car2",
			title: "Sports Car",
			description:
				"High-performance sports car with aerodynamic design and luxurious interior.",
			tags: ["Luxury", "Fast", "Design"],
			image: "car2",
			date: "2025-08-10 14:30",
		},
		{
			name: "city",
			title: "Cityscape",
			description:
				"A bustling urban environment full of lights, buildings, and energy.",
			tags: ["Urban", "Architecture", "Lights"],
			image: "city",
			date: "2025-08-18 23:12",
		},
		{
			name: "mole",
			title: "Mole",
			description:
				"A small, underground-dwelling mammal, known for burrowing tunnels.",
			tags: ["Animal", "Nature", "Underground"],
			image: "mole",
			date: "2025-02-01 08:45",
		},
		{
			name: "mountain",
			title: "Mountain",
			description:
				"A majestic natural formation that rises high above the surrounding land.",
			tags: ["Nature", "Adventure", "Hiking"],
			image: "hill",
			date: "2025-09-03 16:20",
		},
		{
			name: "nature",
			title: "Nature",
			description:
				"A scenic view of forests, rivers, and wildlife, perfect for relaxation.",
			tags: ["Scenery", "Outdoors", "Peace"],
			image: "nature",
			date: "2025-09-04 23:37",
		},
		{
			name: "paint",
			title: "Painting",
			description:
				"A beautiful piece of art filled with colors and imagination.",
			tags: ["Art", "Creative", "Colors"],
			image: "paint",
			date: "2024-09-05 11:10",
		},
		{
			name: "path",
			title: "Pathway",
			description:
				"A serene path leading through a forest, ideal for walking and reflection.",
			tags: ["Nature", "Walk", "Calm"],
			image: "path",
			date: "2025-01-07 09:50",
		},
		{
			name: "planes",
			title: "Planes",
			description:
				"Various airplanes soaring through the sky, showing human engineering marvels.",
			tags: ["Aviation", "Travel", "Engineering"],
			image: "planes",
			date: "2025-03-10 13:40",
		},
		{
			name: "sand",
			title: "Sandy Beach",
			description:
				"Soft sand along the shoreline, perfect for sunbathing and relaxation.",
			tags: ["Beach", "Summer", "Relax"],
			image: "sand",
			date: "2025-06-12 15:00",
		},
		{
			name: "sea",
			title: "Sea",
			description:
				"Expansive ocean waters, calming waves, and endless horizons.",
			tags: ["Ocean", "Water", "Adventure"],
			image: "sea",
			date: "2025-05-15 12:25",
		},
		{
			name: "beach",
			title: "Sunny Beach",
			description:
				"Golden sands, crystal-clear water, and the perfect spot to relax under the sun.",
			tags: ["Beach", "Summer", "Relax"],
			image: "beach",
			date: "2025-08-18 17:35",
		},
		{
			name: "apartment",
			title: "Modern Apartment",
			description:
				"A stylish urban apartment with contemporary design and cozy interiors.",
			tags: ["Urban", "Architecture", "Interior"],
			image: "apartment",
			date: "2025-07-20 18:45",
		},
		{
			name: "flower",
			title: "Blooming Flower",
			description:
				"A vibrant flower in full bloom, showcasing the beauty of nature.",
			tags: ["Nature", "Flora", "Beauty"],
			image: "flower",
			date: "2025-08-05 10:30",
		},
		{
			name: "graffitti",
			title: "Street Graffiti",
			description:
				"Colorful and expressive graffiti art found on urban walls.",
			tags: ["Art", "Street", "Urban"],
			image: "graffitti",
			date: "2025-06-22 14:15",
		},
		{
			name: "jellyfish",
			title: "Jellyfish",
			description:
				"A mesmerizing jellyfish drifting gracefully through the ocean.",
			tags: ["Ocean", "Marine", "Nature"],
			image: "jellyfish",
			date: "2025-09-01 09:20",
		},
		{
			name: "joe",
			title: "Joe the Traveler",
			description:
				"A portrait of Joe enjoying his adventures across scenic landscapes.",
			tags: ["People", "Travel", "Lifestyle"],
			image: "joe",
			date: "2025-07-30 16:05",
		},
		{
			name: "polar",
			title: "Polar Bear",
			description:
				"A majestic polar bear navigating the icy Arctic terrain.",
			tags: ["Animal", "Nature", "Arctic"],
			image: "polar",
			date: "2025-08-12 12:50",
		},
		{
			name: "singer",
			title: "Live Singer",
			description:
				"A passionate singer performing live on stage with energy and style.",
			tags: ["Music", "Performance", "Stage"],
			image: "singer",
			date: "2025-09-02 20:10",
		},
		{
			name: "stars",
			title: "Starry Night",
			description:
				"A breathtaking view of the night sky filled with twinkling stars.",
			tags: ["Night", "Sky", "Astronomy"],
			image: "stars",
			date: "2025-08-25 23:45",
		},
		{
			name: "surf",
			title: "Surfing",
			description:
				"An exciting surfing session with waves crashing around the rider.",
			tags: ["Sports", "Beach", "Adventure"],
			image: "surf",
			date: "2025-08-28 15:30",
		},
		{
			name: "undersea",
			title: "Undersea World",
			description:
				"A colorful underwater scene full of coral reefs and fish.",
			tags: ["Ocean", "Marine", "Adventure"],
			image: "undersea",
			date: "2025-09-03 11:15",
		},
		{
			name: "wine",
			title: "Fine Wine",
			description:
				"A glass of exquisite wine served in an elegant setting.",
			tags: ["Food", "Drink", "Luxury"],
			image: "wine",
			date: "2025-07-15 19:40",
		},
		{
			name: "winter",
			title: "Winter Wonderland",
			description:
				"Snow-covered trees and landscapes creating a serene winter scene.",
			tags: ["Nature", "Season", "Snow"],
			image: "winter",
			date: "2025-01-10 08:30",
		},
	];

	cardInformation.sort((a, b) => a.name.localeCompare(b.name));

	const [index, setIndex] = useState(0);
	const sizes: Array<"small" | "medium" | "large"> = [
		"small",
		"medium",
		"large",
	];

	function cycleSize() {
		setIndex((prev) => (prev + 1) % sizes.length); // cycles 0 → 1 → 2 → 0
	}

	const cardSize = sizes[index];

	return (
		<div className="poppins crimson ">
			{/* <HorseIcon size={36} weight="bold" color="teal">
				<animate
					attributeName="opacity"
					values="0;1;0"
					dur="4s"
					repeatCount="indefinite"
				></animate>
				<animateTransform
					attributeName="transform"
					attributeType="XML"
					type="rotate"
					dur="5s"
					from="0 0 0"
					to="360 0 0"
					repeatCount="indefinite"
				></animateTransform>
			</HorseIcon> */}
			<button
				className="z-10 bottom-0 right-0 fixed bg-neutral-200 text-neutral-800 px-2"
				onClick={cycleSize}
			>
				Louis Buton
			</button>
				<div className="flex flex-wrap w-full h-full justify-center gap-3">
					{cardInformation.map((card, index) => (
						<Card
							key={index}
							size={cardSize}
							image={`/${card.image}.jpg`}
							title={card.title}
							description={card.description}
							date={card.date}
							tags={card.tags}
						/>
					))}
				</div>
			</div>
	);
}
