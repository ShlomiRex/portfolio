import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl">
            Portfolio
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link to="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/resume" className="hover:text-primary transition-colors">
              Resume
            </Link>
            <Link to="/research" className="hover:text-primary transition-colors">
              Research
            </Link>
            <Link to="/projects" className="hover:text-primary transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
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