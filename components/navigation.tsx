"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Workshops", href: "#workshops" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
  { name: "Gallery", href: "/gallery" },
];

export function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Only track section-based active state on the main page
      if (pathname === "/") {
        const sectionItems = navItems.filter((item) =>
          item.href.startsWith("#"),
        );

        const sections = sectionItems.map((item) => ({
          id: item.href.substring(1),
          element: document.querySelector(item.href),
        }));

        const scrollPosition = window.scrollY + 100;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section.element) {
            const sectionTop = (section.element as HTMLElement).offsetTop;
            if (scrollPosition >= sectionTop) {
              setActiveSection(section.id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      if (pathname !== "/") {
        // Navigate to home page with hash so browser scrolls there
        router.push("/" + href);
      } else {
        scrollToSection(href);
      }
    } else {
      router.push(href);
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold"
          >
            Akshay Sable
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="relative"
              >
                <button
                  onClick={() => {
                    handleNavClick(item.href);
                  }}
                  className={`text-sm font-medium transition-colors relative py-2 ${
                    item.href.startsWith("#")
                      ? activeSection === item.href.substring(1)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                      : pathname === item.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                  {/* Underline Animation */}
                  {item.href.startsWith("#") &&
                    activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  {!item.href.startsWith("#") && pathname === item.href && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              </motion.div>
            ))}
            <ModeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    handleNavClick(item.href);
                  }}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors relative ${
                    item.href.startsWith("#")
                      ? activeSection === item.href.substring(1)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-primary hover:bg-muted"
                      : pathname === item.href
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-primary hover:bg-muted"
                  }`}
                >
                  {item.name}
                  {/* Mobile Active Indicator */}
                  {item.href.startsWith("#") &&
                    activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="mobile-navbar-indicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  {!item.href.startsWith("#") && pathname === item.href && (
                    <motion.div
                      layoutId="mobile-navbar-indicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
