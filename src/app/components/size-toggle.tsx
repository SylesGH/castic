import {
	BeachBallIcon,
	BowlingBallIcon,
	MeteorIcon,
	TennisBallIcon,
} from "@phosphor-icons/react";

interface SizeToggleProps {
	currentSize: "small" | "medium" | "large";
	onSizeChange: () => void;
}

export default function SizeToggle({
	currentSize,
	onSizeChange,
}: SizeToggleProps) {
	return (
		<button
			className="fixed bottom-6 right-6 z-10 bg-background/20 backdrop-blur-sm border border-neutral-300/30 text-foreground px-4 py-2 rounded-full shadow-lg hover:bg-background/60 transition flex items-center gap-2"
			onClick={onSizeChange}
		>
			<span className="text-lg">
				{currentSize === "small" && <TennisBallIcon size={20} />}
				{currentSize === "medium" && <BowlingBallIcon size={20} />}
				{currentSize === "large" && <BeachBallIcon size={20} />}
				{!["small", "medium", "large"].includes(currentSize) && (
					<MeteorIcon size={20} />
				)}
			</span>
			<span className="text-sm font-medium capitalize">
				{currentSize}
			</span>
		</button>
	);
}
