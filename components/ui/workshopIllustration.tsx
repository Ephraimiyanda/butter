"use client";
import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TourSection from "./tourSection";

export default function WorkshopIllustration() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const avatarsRef = useRef<(SVGGElement | null)[]>([]);
  const stickyNotesRef = useRef<(SVGGElement | null)[]>([]);
  const playButtonRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate play button
      gsap.from(playButtonRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // Animate Avatars
      avatarsRef.current.forEach((avatar, index) => {
        if (!avatar) return;

        gsap.fromTo(
          avatar,
          { opacity: 0, scale: 0, x: -100, y: -100 },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            duration: 1.2,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
            },
            onComplete: () => {
              gsap.to(avatar, {
                y: "+=10",
                duration: 2 + Math.random() * 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
              });
            },
          }
        );
      });

      // Animate Sticky Notes
      stickyNotesRef.current.forEach((note, index) => {
        if (!note) return;

        gsap.fromTo(
          note,
          { opacity: 0, scale: 0, rotation: -60, x: -80, y: -80 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            x: 0,
            y: 0,
            duration: 1.3,
            delay: 0.3 + index * 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
            },
            onComplete: () => {
              gsap.to(note, {
                rotation: Math.random() * 6 - 3,
                duration: 3 + Math.random() * 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
              });
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full mx-auto h-full z-10">
      <div className="overflow-hidden relative z-1 h-full">
        <svg
          className="w-full h-auto min-h-screen max-h-screen max-w-[1280px] mx-auto sm:px-6"
          viewBox="0 0 800 500"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g ref={(el) => (avatarsRef.current[0] = el)}>
            <circle cx="120" cy="100" r="40" fill="#9B87F5" opacity="0.9" />
            <circle cx="120" cy="87" r="13" fill="#1A1F2C" />
            <path
              d="M120 105 Q107 113, 107 125 L133 125 Q133 113, 120 105"
              fill="#1A1F2C"
            />
          </g>

          <g ref={(el) => (avatarsRef.current[1] = el)}>
            <circle cx="680" cy="110" r="40" fill="#F97316" opacity="0.9" />
            <circle cx="680" cy="97" r="13" fill="#1A1F2C" />
            <path
              d="M680 115 Q667 123, 667 135 L693 135 Q693 123, 680 115"
              fill="#1A1F2C"
            />
          </g>

          <g ref={(el) => (avatarsRef.current[2] = el)}>
            <circle cx="140" cy="400" r="38" fill="#22C55E" opacity="0.9" />
            <circle cx="140" cy="388" r="12" fill="#1A1F2C" />
            <path
              d="M140 403 Q128 410, 128 420 L152 420 Q152 410, 140 403"
              fill="#1A1F2C"
            />
          </g>

          <g ref={(el) => (avatarsRef.current[3] = el)}>
            <circle cx="660" cy="410" r="38" fill="#3B82F6" opacity="0.9" />
            <circle cx="660" cy="398" r="12" fill="#1A1F2C" />
            <path
              d="M660 413 Q648 420, 648 430 L672 430 Q672 420, 660 413"
              fill="#1A1F2C"
            />
          </g>

          <g ref={(el) => (stickyNotesRef.current[0] = el)}>
            <rect
              x="50"
              y="230"
              width="70"
              height="70"
              rx="8"
              fill="#FDE047"
              opacity="0.95"
            />
            <line
              x1="62"
              y1="247"
              x2="108"
              y2="247"
              stroke="#0A0B1E"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="62"
              y1="265"
              x2="95"
              y2="265"
              stroke="#0A0B1E"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="62"
              y1="283"
              x2="105"
              y2="283"
              stroke="#0A0B1E"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>

          <g ref={(el) => (stickyNotesRef.current[1] = el)}>
            <rect
              x="680"
              y="240"
              width="70"
              height="70"
              rx="8"
              fill="#FCA5A5"
              opacity="0.95"
            />
            <circle cx="697" cy="262" r="4" fill="#0A0B1E" />
            <circle cx="715" cy="262" r="4" fill="#0A0B1E" />
            <circle cx="733" cy="262" r="4" fill="#0A0B1E" />
            <path
              d="M700 278 Q715 286, 730 278"
              stroke="#0A0B1E"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          <g ref={(el) => (stickyNotesRef.current[2] = el)}>
            <rect
              x="365"
              y="40"
              width="70"
              height="70"
              rx="8"
              fill="#A7F3D0"
              opacity="0.95"
            />
            <path d="M382 63 L390 80 L374 80 Z" fill="#0A0B1E" />
            <rect x="395" y="63" width="22" height="25" fill="#0A0B1E" />
            <circle cx="406" cy="67" r="2.5" fill="#A7F3D0" />
          </g>

          <g ref={(el) => (stickyNotesRef.current[3] = el)}>
            <path
              d="M170 190 L185 155 L235 163 L220 198 Z"
              fill="#C4B5FD"
              opacity="0.9"
            />
            <circle cx="195" cy="172" r="7" fill="#0A0B1E" />
            <circle cx="212" cy="176" r="7" fill="#0A0B1E" />
          </g>

          <g ref={(el) => (avatarsRef.current[5] = el)}>
            <circle cx="600" cy="70" r="32" fill="#FCD34D" opacity="0.9" />
            <path d="M588 66 L600 54 L612 66 L600 78 Z" fill="#0A0B1E" />
          </g>
        </svg>

        <div
          ref={playButtonRef}
          className="absolute top-[0] bg-transparent cursor-pointer group w-full h-full"
        >
          <div className="flex items-center justify-center gap-3 sm:gap-5 rounded-full w-full h-full transition-all duration-300 bg-transparent">
            <TourSection wrapperRef={containerRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
