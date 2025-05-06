import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Home } from "lucide-react";
import ScrollArrow from "./navbar/ScrollArrow";

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

  // Check for overflow in the navbar
  const [isOverflowing, setIsOverflowing] = useState(false);

  return (
    <nav
      className="w-full border-b bg-background/80 backdrop-blur-md sticky"
      style={{ top: 0, zIndex: 1000 }}
    >
      <div className="relative">
        {/* Scrollable area - center items on non-mobile, align left on mobile */}
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
              key={link}
              className={`transition-colors whitespace-nowrap text-l px-2 py-1 text-muted-foreground hover:text-primary`}
            >
              <span
                className={`${location.pathname === `/${link.toLowerCase()}`
                  ? "border-b-2 border-primary text-primary font-medium"
                  : ""
                  }`}
              >
                {link}
              </span>
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
          <ScrollArrow direction="left" />
        )}

        {/* Right Arrow */}
        {canScrollRight && (
          <ScrollArrow direction="right" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
