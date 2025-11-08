"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkText, setIsDarkText] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Detect scroll position to change text color
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero-section");
      if (!hero) return;
      setIsDarkText(hero.getBoundingClientRect().bottom > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate mobile menu open/close
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    const menu = menuRef.current;
    const overlay = overlayRef.current;

    if (!menu || !overlay) {
      return () => {}; // ✅ consistent return type
    }

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";

      tl.to(overlay, { opacity: 1, pointerEvents: "auto", duration: 0.3 })
        .to(menu, { x: 0, duration: 0.4 }, "<")
        .fromTo(
          menu.querySelectorAll("a"),
          { x: 40, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.07, duration: 0.3 },
          "-=0.1"
        );
    } else {
      document.body.style.overflow = "auto";

      tl.to(menu.querySelectorAll("a"), { x: 40, opacity: 0, duration: 0.2 })
        .to(menu, { x: "100%", duration: 0.4 }, "<")
        .to(overlay, { opacity: 0, pointerEvents: "none", duration: 0.3 });
    }

    return () => tl.kill(); // ✅ proper cleanup
  }, [isMenuOpen]);

  const textColor = isDarkText ? "text-[#0A0B1E]" : "text-black";

  return (
    <>
      {/* === Desktop Navbar === */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 lg:px-14 lg:py-6 bg-transparent">
        <nav className="flex items-center justify-between max-w-[1280px] mx-auto">
          <a href="/">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d8cf4a40279eddec9319c54bf8bda42077be0495?width=148"
              alt="Butter Logo"
              className="h-[14px]"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-5">
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
                className={`text-sm font-normal ${textColor} hover:opacity-70 transition`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Hamburger Button */}
          <div className="flex justify-center items-center gap-4">
            <a
              href="#signup"
              className={`px-4 py-2 rounded-xl bg-[rgba(10,11,30,0.1)] hover:bg-[rgba(10,11,30,0.15)] ${textColor} transition`}
            >
              Sign up for free
            </a>
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="lg:hidden relative z-[60]"
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
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* === Overlay === */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm opacity-0 pointer-events-none z-[40]"
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* === Mobile Menu === */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-white shadow-2xl z-[50] translate-x-full p-8 flex flex-col gap-6"
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
            className="text-lg font-medium text-gray-800"
          >
            {item}
          </a>
        ))}

        <div className="h-px bg-gray-200" />
        <a href="#signin" className="text-lg font-medium text-gray-800">
          Sign in
        </a>
        <a href="#signup" className="text-lg font-medium text-gray-800">
          Sign up for free
        </a>
      </div>
    </>
  );
}
