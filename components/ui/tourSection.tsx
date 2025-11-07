"use client";
import { RefObject, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContentSection } from "./contentSection";

export default function TourSection({
  wrapperRef,
}: {
  wrapperRef: RefObject<HTMLDivElement | null>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollTriggerId = useRef("tour-section-trigger");

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (!wrapperRef?.current || !containerRef.current || !contentRef.current)
      return;

    const setupAnimation = () => {
      // Kill old instances cleanly (including pin spacer)
      const existingTrigger = ScrollTrigger.getById(scrollTriggerId.current);
      if (existingTrigger) existingTrigger.kill(true);
      gsap.killTweensOf([containerRef.current, contentRef.current]);

      const container = containerRef.current!;
      const originalWidth = container.style.width;
      const originalHeight = container.style.height;

      // Temporarily expand to get actual height
      container.style.width = "100vw";
      container.style.height = "100vh";
      const contentHeight = contentRef.current!.scrollHeight;

      // Restore original
      container.style.width = originalWidth;
      container.style.height = originalHeight;

      const viewport = window.innerHeight;
      const extraScroll = Math.max(contentHeight - viewport, 0);
      const totalScroll = viewport + extraScroll;
      const scrollMultiplier = 1.5;

      const tl = gsap.timeline({
        scrollTrigger: {
          id: scrollTriggerId.current,
          trigger: wrapperRef.current,
          start: "top top",
          end: `+=${totalScroll * scrollMultiplier}`,
          scrub: true,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      // 1️⃣ Expand yellow button
      tl.fromTo(
        containerRef.current,
        {
          width: "220px",
          height: "60px",
          borderRadius: "30px",
          position: "absolute",
          top: "50%",
          left: "50%",
          xPercent: -50,
          yPercent: -50,
          backgroundColor: "#fffd63",
        },
        {
          width: "100vw",
          height: "100vh",
          borderRadius: "0px",
          backgroundColor: "#fffd63",
          ease: "power2.inOut",
          duration: viewport * 0.5,
        }
      );

      // 2️⃣ Transition to white
      tl.to(
        containerRef.current,
        {
          backgroundColor: "#ffffff",
          ease: "power2.inOut",
          duration: viewport * 0.4,
        },
        viewport * 0.4
      );

      // 3️⃣ Fade in content
      tl.to(
        contentRef.current,
        {
          opacity: 1,
          ease: "power2.out",
          duration: viewport * 0.4,
        },
        viewport * 0.5
      );

      // 4️⃣ Scroll through content
      if (extraScroll > 0) {
        tl.to(
          contentRef.current,
          {
            y: -extraScroll,
            ease: "none",
            duration: extraScroll,
          },
          viewport
        );
      }

      return tl;
    };

    let tl = setupAnimation();

    const handleResize = () => {
      // Safely kill the old animation + trigger
      tl.scrollTrigger?.kill(true);
      tl.kill();
      // Recreate
      tl = setupAnimation();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup — fully remove spacers and triggers
    return () => {
      window.removeEventListener("resize", handleResize);
      tl.scrollTrigger?.kill(true);
      tl.kill();
    };
  }, [wrapperRef]);

  return (
    <section ref={wrapperRef} className="absolute inset-0 overflow-hidden">
      {/* Centered expanding button */}
      <div
        ref={containerRef}
        className="flex items-center justify-center text-black font-bold text-lg sm:text-2xl z-[50]"
        style={{
          width: "220px",
          height: "60px",
          borderRadius: "30px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#fffd63",
          overflow: "hidden",
          position: "absolute",
        }}
      >
        Take a tour
        <div
          ref={contentRef}
          className="absolute inset-0 flex flex-col items-center justify-start opacity-0  pb-8 sm:pb-16"
          style={{
            backgroundColor: "#ffffff",
          }}
        >
          <div className="flex flex-col w-full bg-white  pb-8 sm:pb-16 sm:gap-10 gap-5 ">
            <ContentSection />
          </div>
        </div>
      </div>
    </section>
  );
}
