interface BadgeProps {
    children?: React.ReactNode;
    className?: string;
}

export default function Badge({
    children,
    className = "",
}: Readonly<BadgeProps>) {

    return (
        <span className={`${className} text-neutral-100/60 px-3 py-1 min-w-min max-w-36 line-clamp-1 rounded-full bg-neutral-600/20 border-2 border-neutral-400/40 hover:bg-neutral-500/40 hover:border-neutral-500/0 hover:text-neutral-50/80 duration-200 backdrop-blur-md`}>
            {children}
        </span>
    );
}
