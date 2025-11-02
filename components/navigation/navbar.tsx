"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isOverColoredBg, setIsOverColoredBg] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileLinksRef = useRef<HTMLDivElement>(null);

  // Handle background color logic on scroll
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsOverColoredBg(heroBottom > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Animate mobile nav opening and closing
  useEffect(() => {
    if (!mobileLinksRef.current) return;

    const links = mobileLinksRef.current.querySelectorAll(".mobile-nav-link");
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";

      tl.to(".mobile-menu-overlay", {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.3,
      });

      tl.to(
        ".mobile-menu",
        {
          x: 0,
          duration: 0.4,
        },
        "<"
      );

      tl.fromTo(
        links,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.3,
        },
        "-=0.1"
      );
    } else {
      document.body.style.overflow = "auto";

      tl.to(links, { x: 40, opacity: 0, duration: 0.2, stagger: -0.05 });
      tl.to(".mobile-menu", { x: "100%", duration: 0.4 }, "<");
      tl.to(".mobile-menu-overlay", {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3,
      });
    }
  }, [isMenuOpen]);

  const textColor = isOverColoredBg ? "text-[#0A0B1E]" : "text-black";
  const hoverBg = isOverColoredBg ? "hover:bg-black/5" : "hover:bg-gray-50";

  return (
    <>
      {/* === Desktop Navbar === */}
      <header className="fixed z-[100] top-0 left-0 right-0 w-full px-6 py-4 lg:px-14 lg:py-7 transition-colors duration-300">
        <nav className="flex items-center justify-between max-w-[1440px] mx-auto h-16 px-3 lg:px-6 gap-6 rounded-[20px]">
          <a href="/" className="flex items-center relative z-10">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d8cf4a40279eddec9319c54bf8bda42077be0495?width=148"
              alt="Butter Logo"
              className="h-[14px] w-auto"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center justify-between flex-1">
            <div className="flex items-center gap-1">
              {[
                "Features",
                "Use cases",
                "Templates",
                "Pricing",
                "Resources",
                "Download",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => toggleDropdown(item.toLowerCase())}
                  className={`flex items-center gap-1 px-3 py-3 rounded-2xl ${hoverBg} transition-all duration-200`}
                >
                  <span
                    className={`text-xs font-normal ${textColor} leading-5 transition-colors duration-300`}
                  >
                    {item}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1">
              <a
                href="#book-demo"
                className={`px-3 py-3 rounded-2xl ${hoverBg} transition-all duration-200`}
              >
                <span
                  className={`text-[13px] ${textColor} leading-5 transition-colors duration-300`}
                >
                  Book Demo
                </span>
              </a>

              <a
                href="#signin"
                className={`px-3 py-3 rounded-2xl ${hoverBg} transition-all duration-200`}
              >
                <span
                  className={`text-xs font-normal ${textColor} leading-5 transition-colors duration-300`}
                >
                  Sign in
                </span>
              </a>

              <a
                href="#signup"
                className={`px-[15px] py-3 rounded-xl transition-all duration-300 bg-[rgba(10,11,30,0.1)] hover:bg-[rgba(10,11,30,0.15)]`}
              >
                <span
                  className={`text-xs font-normal ${textColor} leading-5 transition-colors duration-300`}
                >
                  Sign up for free
                </span>
              </a>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 relative z-[110]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={textColor}
            >
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </nav>
      </header>

      {/* === Mobile Overlay === */}
      <div
        className={`mobile-menu-overlay fixed inset-0 bg-black/50 backdrop-blur-sm z-[99] opacity-0 pointer-events-none transition-opacity duration-300`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* === Mobile Slide Menu === */}
      <div
        ref={mobileLinksRef}
        className="mobile-menu fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-white shadow-2xl z-[100] transform translate-x-full transition-transform duration-300 p-8 flex flex-col gap-6"
      >
        {[
          "Features",
          "Use cases",
          "Templates",
          "Pricing",
          "Resources",
          "Download",
        ].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="mobile-nav-link text-lg font-medium text-gray-800 opacity-0"
          >
            {item}
          </a>
        ))}

        <div className="h-px bg-gray-200 my-2" />

        <a
          href="#signin"
          className="mobile-nav-link text-lg font-medium text-gray-800 opacity-0"
        >
          Sign in
        </a>
        <a
          href="#signup"
          className="mobile-nav-link text-lg font-medium text-gray-800 opacity-0"
        >
          Sign up for free
        </a>
      </div>
    </>
  );
}
