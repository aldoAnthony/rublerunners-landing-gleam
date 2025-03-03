
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const headerClass = cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
    scrolled ? "bg-white/90 backdrop-blur-lg shadow-sm" : "bg-transparent"
  );

  const links = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={headerClass}>
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-semibold tracking-tight">
            Ruble<span className="text-primary">Runners</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="link-underline text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button className="ml-2 rounded-full">Get a Quote</Button>
          </nav>
          
          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pt-12">
              <nav className="flex flex-col gap-4">
                {links.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="py-2 text-lg font-medium transition-colors hover:text-primary"
                  >
                    {link.name}
                  </a>
                ))}
                <Button className="mt-4 w-full rounded-full">Get a Quote</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
