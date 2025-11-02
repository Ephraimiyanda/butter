"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FacilitateHeader() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Select only text nodes (not existing <span> tags)
    const textNodes: ChildNode[] = [];
    const walker = document.createTreeWalker(
      textRef.current,
      NodeFilter.SHOW_TEXT
    );
    let node: Node | null;
    //@ts-ignore
    while ((node = walker.nextNode())) textNodes.push(node);

    // Wrap each letter of text nodes in a span for animation
    textNodes.forEach((textNode) => {
      const text = textNode.textContent || "";
      const fragment = document.createDocumentFragment();

      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.display = "inline-block";
        if (char === " ") span.style.width = "0.3em";
        fragment.appendChild(span);
      });

      textNode.parentNode?.replaceChild(fragment, textNode);
    });

    // Animate all letter spans within textRef
    const letters = textRef.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.02,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="max-w-[1280px] w-full relative px-4 mx-auto">
      <div
        ref={textRef}
        className="text-[1.5rem] sm:text-[2rem] leading-[1.3] text-[#0A0B1E]"
      >
        <span className="font-bold">
          All your team's facilitation tools in one place.{" "}
        </span>
        <span>
          Stop hosting snoozefests. Start collaborating effectively. Butter
          brings structure,{" "}
        </span>
        <span className="bg-[#FFFD63]">energy, and joy</span>
        <span> to your meetings, workshops, and training sessions.</span>
      </div>
    </div>
  );
}
