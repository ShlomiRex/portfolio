import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Home, ChevronLeft, ChevronRight } from "lucide-react";

const Navbar = () => {
  const links = ["About", "Resume", "Research", "Projects", "Blog", "Contact"];
  const scrollRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const location = useLocation();

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;

    // Check if the scrollable area is overflowing
    const overflow = el.scrollWidth > el.clientWidth;
    setIsOverflowing(overflow);

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollButtons();
    el.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);
    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  // const scroll = (dir: "left" | "right") => {
  //   const el = scrollRef.current;
  //   if (!el) return;
  //   const distance = el.clientWidth * 0.6; // how far to scroll
  //   el.scrollBy({ left: dir === "left" ? -distance : distance, behavior: "smooth" });
  // };

  // Check for overflow in the navbar
  const [isOverflowing, setIsOverflowing] = useState(false);

  return (
    <nav
      className="w-full border-b bg-background/80 backdrop-blur-md sticky"
      style={{ top: 0, zIndex: 1000 }}
    >
      <div className="relative">
        {/* Scrollable area */}
        {/* When on mobile and not overflowing navbar, remove justify-center to view left items, instead of middle items. On browser, set justify center */}
        <div
          ref={scrollRef}
          className={`flex overflow-x-auto no-scrollbar whitespace-nowrap px-4 py-2 gap-4 items-center ${!isOverflowing ? "justify-center" : ""}`}
          style={{ WebkitOverflowScrolling: "touch" }}
        >

          {/* Home button */}
          <Link to="/" className={`transition-colors shrink-0 ${location.pathname === `/` ? "text-primary" : "hover:text-primary text-muted-foreground"}`}>
            <Home className="h-5 w-5" />
          </Link>

          {/* Navigation links */}
          {links.map((link) => (
            <Link
              to={`/${link.toLowerCase()}`}
              className={`transition-colors whitespace-nowrap text-l hover:text-primary text-muted-foreground ${location.pathname === `/${link.toLowerCase()}` ? "text-primary font-medium" : "hover:text-primary text-muted-foreground"}`}
            >
              {link}
            </Link>
          ))}

          {/* Theme toggle button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="transition-colors shrink-0"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Left Arrow */}
        {canScrollLeft && (
          <button
            // onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur p-1 rounded-full shadow-md"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {/* Right Arrow */}
        {canScrollRight && (
          <button
            // onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur p-1 rounded-full shadow-md"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
