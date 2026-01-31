import { useEffect, useState } from "react";

export default function ZoomableImage({
    src,
    keepAspect = false,
    wide = false,
}: {
    src: string;
    keepAspect?: boolean;
    wide?: boolean;
}) {
    const [isOpen, setIsOpen] = useState(false);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    return (
        <>
            {/* Thumbnail */}
            <img
                src={src}
                className={
                    (keepAspect
                        ? `rounded-lg mt-4 ${wide ? "w-[300px]" : "w-[200px]"} h-auto cursor-zoom-in`
                        : `rounded-lg mt-4 ${wide ? "w-[300px]" : "w-[200px]"} h-[200px] object-cover cursor-zoom-in`)
                }
                onClick={() => setIsOpen(true)}
            />

            {/* Fullscreen overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center cursor-zoom-out"
                    onClick={() => setIsOpen(false)}
                >
                    <img
                        src={src}
                        alt="Zoomed"
                        className="max-w-full max-h-full rounded-lg shadow-lg transition-transform scale-100"
                    />
                </div>
            )}
        </>
    );
}
