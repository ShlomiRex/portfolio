import { ChevronLeft, ChevronRight } from "lucide-react";

interface ScrollArrowProps {
  direction: "left" | "right";
  onClick?: () => void;
  className?: string;
}

const ScrollArrow = ({ direction, onClick, className = "" }: ScrollArrowProps) => {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur p-1 rounded-full shadow-md ${
        direction === "left" ? "left-0" : "right-0"
      } ${className}`}
      aria-label={`Scroll ${direction}`}
    >
      <Icon size={20} />
    </button>
  );
};

export default ScrollArrow; 