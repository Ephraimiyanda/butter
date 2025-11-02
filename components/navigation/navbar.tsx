"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isOverColoredBg, setIsOverColoredBg] = useState(true);

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

  const textColor = isOverColoredBg ? "text-[#0A0B1E]" : "text-black";
  const hoverBg = isOverColoredBg ? "hover:bg-black/5" : "hover:bg-gray-50";

  return (
    <header className="fixed z-100 top-0 left-0 right-0 w-full px-6 py-4 lg:px-14 lg:py-7 transition-colors duration-300">
      <nav className="flex items-center justify-between max-w-[1440px] mx-auto h-16 px-3 lg:px-6 gap-6 rounded-[20px]">
        <a href="/" className="flex items-center relative z-10">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/d8cf4a40279eddec9319c54bf8bda42077be0495?width=148"
            alt="Butter Logo"
            className="h-[14px] w-auto"
          />
        </a>

        <div className="hidden lg:flex items-center justify-between flex-1">
          <div className="flex items-center gap-1">
            <button
              onClick={() => toggleDropdown("features")}
              className={`flex items-center gap-1 px-3 py-3 rounded-2xl ${hoverBg} transition-all duration-200`}
            >
              <span
                className={`text-xs font-normal ${textColor} leading-5 transition-colors duration-300`}
              >
                Features
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-all duration-300 ${
                  openDropdown === "features" ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M9.43567 4.10156L5.64856 7.88867L1.84778 4.10156L0.589966 5.35938L5.63489 10.6641L10.6935 5.35938L9.43567 4.10156Z"
                  fill="currentColor"
                  className={textColor}
                />
              </svg>
            </button>

            <button
              onClick={() => toggleDropdown("usecases")}
              className={`flex items-center gap-1 px-3 py-3 rounded-2xl ${hoverBg} transition-all duration-200`}
            >
              <span
                className={`text-xs font-normal ${textColor} leading-5 transition-colors duration-300`}
              >
                Use cases
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-all duration-300 ${
                  openDropdown === "usecases" ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M9.50568 4.10156L5.71857 7.88867L1.91779 4.10156L0.659973 5.35938L5.7049 10.6641L10.7635 5.35938L9.50568 4.10156Z"
                  fill="currentColor"
                  className={textColor}
                />
              </svg>
            </button>

            <a
              href="#templates"
              className={`px-3 py-3 rounded-2xl ${hoverBg} transition-all duration-200`}
            >
              <span
                className={`text-xs font-normal ${textColor} leading-5 transition-colors duration-300`}
              >
                Templates
              </span>
            </a>

            <a
              href="#pricing"
              className={`px-3 py-3 rounded-2xl ${hoverBg} transition-all duration-200`}
            >
              <span
                className={`text-xs font-normal ${textColor} leading-5 transition-colors duration-300`}
              >
                Pricing
              </span>
            </a>

            <button
              onClick={() => toggleDropdown("resources")}
              className={`flex items-center gap-1 px-3 py-3 rounded-2xl ${hoverBg} transition-all duration-200`}
            >
              <span
                className={`text-xs font-normal ${textColor} leading-5 transition-colors duration-300`}
              >
                Resources
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-all duration-300 ${
                  openDropdown === "resources" ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M9.39563 4.10156L5.60852 7.88867L1.80774 4.10156L0.549927 5.35938L5.59485 10.6641L10.6534 5.35938L9.39563 4.10156Z"
                  fill="currentColor"
                  className={textColor}
                />
              </svg>
            </button>

            <button
              onClick={() => toggleDropdown("download")}
              className={`flex items-center gap-1 px-3 py-3 rounded-2xl ${hoverBg} transition-all duration-200`}
            >
              <span
                className={`text-[13px] ${textColor} leading-5 transition-colors duration-300`}
              >
                Download
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-all duration-300 ${
                  openDropdown === "download" ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M9.07562 4.10156L5.28851 7.88867L1.48773 4.10156L0.229919 5.35938L5.27484 10.6641L10.3334 5.35938L9.07562 4.10156Z"
                  fill="currentColor"
                  className={textColor}
                />
              </svg>
            </button>
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
              className={`px-[15px] py-3 rounded-xl transition-all duration-300 ${
                isOverColoredBg
                  ? "bg-[rgba(10,11,30,0.1)] hover:bg-[rgba(10,11,30,0.15)]"
                  : "bg-[rgba(10,11,30,0.1)] hover:bg-[rgba(10,11,30,0.15)]"
              }`}
            >
              <span
                className={`text-xs font-normal ${textColor} leading-5 transition-colors duration-300`}
              >
                Sign up for free
              </span>
            </a>
          </div>
        </div>

        <button className="lg:hidden p-2">
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
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>
    </header>
  );
}
