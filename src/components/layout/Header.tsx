import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Dog, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Dog Gallery", path: "/dogs" },
  { name: "Products", path: "/products" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-12 h-12 rounded-2xl bg-gradient-warm flex items-center justify-center shadow-playful group-hover:scale-110 transition-transform duration-300">
              <Dog className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-highlight rounded-full animate-pulse-soft" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-display font-bold text-foreground">
              D-Code Studio
            </span>
            <span className="text-xs text-muted-foreground font-medium">
              Premium Dog Market
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "relative font-medium text-sm transition-colors hover:text-primary",
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>+91 98765 43210</span>
          </a>
          <Button className="bg-gradient-warm hover:opacity-90 text-primary-foreground font-semibold shadow-playful">
            Adopt Now 🐾
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in">
          <nav className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "py-3 px-4 rounded-lg font-medium transition-colors",
                  location.pathname === link.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button className="mt-4 bg-gradient-warm hover:opacity-90 text-primary-foreground font-semibold">
              Adopt Now 🐾
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
