"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Debug theme state
  useEffect(() => {
    console.log("Current theme:", theme);
  }, [theme]);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              {theme === "dark" ? (
                <Image
                  src="/images/han1-logo-dark.png"
                  alt="Hani El Khalfi Logo Dark"
                  width={192}
                  height={64}
                  className="h-16 w-auto"
                />
              ) : theme === "light" ? (
                <Image
                  src="/images/han1-logo-light.png"
                  alt="Hani El Khalfi Logo Light"
                  width={192}
                  height={64}
                  className="h-16 w-auto"
                />
              ) : (
                <Image
                  src="/images/han1-logo-light.png"
                  alt="Hani El Khalfi Logo Light"
                  width={192}
                  height={64}
                  className="h-16 w-auto"
                />
              )}
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Social links */}
            <div className="flex items-center space-x-2 ml-4 border-l border-border pl-4">
              <a
                href="https://github.com/heniEl10"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/elkhalfihani"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:elkhalfihani10@gmail.com"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
            
            {/* Dark mode button - positioned at the end */}
            <div className="ml-4 border-l border-border pl-4">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? (
                  <Sun size={18} className="transition-all" />
                ) : (
                  <Moon size={18} className="transition-all" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile social links */}
            <div className="flex items-center justify-center space-x-4 pt-4 border-t border-border mt-4">
              <a
                href="https://github.com/heniEl10"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/elkhalfihani"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:elkhalfihani10@gmail.com"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            
            {/* Mobile dark mode button - positioned at the end */}
            <div className="flex items-center justify-center pt-4 border-t border-border mt-4">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? (
                  <Sun size={20} className="transition-all" />
                ) : (
                  <Moon size={20} className="transition-all" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
