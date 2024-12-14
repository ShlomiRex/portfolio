import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Home, ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const isMobile = useIsMobile();
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftScroll(scrollLeft > 0);
      setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl shrink-0">
            <Home className="h-5 w-5" />
          </Link>
          
          <div className="relative flex-1 mx-4">
            {showLeftScroll && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-background/80 to-transparent px-2 py-4">
                <ChevronLeft className="h-4 w-4 text-muted-foreground" />
              </div>
            )}
            
            <div 
              ref={scrollContainerRef}
              className="flex items-center gap-4 overflow-x-auto scrollbar-hide px-4 -mx-4"
              onScroll={checkScroll}
            >
              <div className="flex items-center gap-4 min-w-max">
                <Link 
                  to="/about" 
                  className={`transition-colors whitespace-nowrap ${location.pathname === '/about' ? 'text-primary font-medium' : 'hover:text-primary text-muted-foreground'}`}
                >
                  About
                </Link>
                <Link 
                  to="/resume" 
                  className={`transition-colors whitespace-nowrap ${location.pathname === '/resume' ? 'text-primary font-medium' : 'hover:text-primary text-muted-foreground'}`}
                >
                  Resume
                </Link>
                <Link 
                  to="/research" 
                  className={`transition-colors whitespace-nowrap ${location.pathname === '/research' ? 'text-primary font-medium' : 'hover:text-primary text-muted-foreground'}`}
                >
                  Research
                </Link>
                <Link 
                  to="/projects" 
                  className={`transition-colors whitespace-nowrap ${location.pathname === '/projects' ? 'text-primary font-medium' : 'hover:text-primary text-muted-foreground'}`}
                >
                  Projects
                </Link>
                <Link 
                  to="/blog" 
                  className={`transition-colors whitespace-nowrap ${location.pathname === '/blog' ? 'text-primary font-medium' : 'hover:text-primary text-muted-foreground'}`}
                >
                  Blog
                </Link>
                <Link 
                  to="/contact" 
                  className={`transition-colors whitespace-nowrap ${location.pathname === '/contact' ? 'text-primary font-medium' : 'hover:text-primary text-muted-foreground'}`}
                >
                  Contact
                </Link>
              </div>
            </div>

            {showRightScroll && (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-l from-background/80 to-transparent px-2 py-4">
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
            )}
          </div>

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
      </div>
    </nav>
  );
};

export default Navbar;