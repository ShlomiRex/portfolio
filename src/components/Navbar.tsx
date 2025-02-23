
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const isMobile = useIsMobile();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-4 min-w-max">
              <Link
                to="/"
                className={`transition-colors whitespace-nowrap ${location.pathname === '/about' ? 'text-primary font-medium' : 'hover:text-primary text-muted-foreground'}`}
              >
                Home
              </Link>
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

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="transition-colors"
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
