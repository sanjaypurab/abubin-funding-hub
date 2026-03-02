import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Apply Now", path: "/apply" },
  { label: "FAQ", path: "/faq" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md border-b border-navy-light">
      <div className="container-narrow flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full gold-gradient flex items-center justify-center">
            <span className="font-heading font-bold text-accent-foreground text-sm">AL</span>
          </div>
          <span className="font-heading text-primary-foreground font-semibold text-lg hidden sm:block">
            Abubin Luqmon
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-body font-medium rounded-md transition-colors duration-200 ${
                location.pathname === link.path
                  ? "text-gold bg-navy-light"
                  : "text-primary-foreground/80 hover:text-gold hover:bg-navy-light/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/apply">
            <Button variant="gold" size="sm">Get Started</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-primary border-t border-navy-light animate-fade-in">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm font-body font-medium rounded-md transition-colors ${
                  location.pathname === link.path
                    ? "text-gold bg-navy-light"
                    : "text-primary-foreground/80 hover:text-gold hover:bg-navy-light/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/apply" onClick={() => setMobileOpen(false)}>
              <Button variant="gold" size="sm" className="w-full mt-2">Get Started</Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
