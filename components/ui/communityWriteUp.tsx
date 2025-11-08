"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CommunityWriteUp() {
  const textRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!textRef.current) return;

    // Select only text nodes (ignore existing spans)
    const textNodes: ChildNode[] = [];
    const walker = document.createTreeWalker(
      textRef.current,
      NodeFilter.SHOW_TEXT
    );
    let node: Node | null;
    //@ts-ignore
    while ((node = walker.nextNode())) textNodes.push(node);

    // Wrap each WORD of text nodes in a span for animation
    textNodes.forEach((textNode) => {
      const text = textNode.textContent || "";
      const fragment = document.createDocumentFragment();

      text.split(" ").forEach((word) => {
        const span = document.createElement("span");
        span.textContent = word + " ";
        span.style.display = "inline-block";
        span.style.whiteSpace = "pre"; // preserves spaces naturally
        fragment.appendChild(span);
      });

      textNode.parentNode?.replaceChild(fragment, textNode);
    });

    // Animate all word spans within textRef
    const words = textRef.current.querySelectorAll("span");

    gsap.fromTo(
      words,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="max-w-[1280px] w-full relative px-4 mx-auto flex flex-col gap-20">
      <div
        ref={textRef}
        className="text-[1.5rem] sm:text-[2rem] leading-[1.3] text-[#0A0B1E]"
      >
        <span className="font-bold">
          Built for facilitators, by facilitators.
        </span>
        <span>
          We’ve built Butter with love from our community from day one. Level up
          your workshopping, facilitation, and collaboration skills by learning
          from our network of experts.
        </span>
      </div>
      <button className="inline-flex items-center justify-center px-7 sm:px-8 py-4 sm:py-[18px] border-2 border-[#0A0B1E] rounded-2xl bg-white text-[#0A0B1E] text-sm leading-tight hover:bg-gray-100 transition-colors mx-auto">
        Join Community
      </button>
    </div>
  );
}
