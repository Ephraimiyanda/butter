"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

gsap.registerPlugin(ScrollTrigger);

const faqItems = [
  {
    id: "item-1",
    question: "Why should I use Butter?",
    answer:
      "Butter helps you run more engaging sessions and get better outcomes with built-in tools for planning, collaboration, and recaps.",
  },
  {
    id: "item-2",
    question: "What types of sessions is Butter best for?",
    answer:
      "Butter is perfect for workshops, trainings, team meetings, remote collaboration sessions, and any interactive group gathering.",
  },
  {
    id: "item-3",
    question: "Is Butter free?",
    answer:
      "Yes! Butter offers a free plan with essential features. Premium plans are available for teams needing advanced capabilities.",
  },
  {
    id: "item-4",
    question: "How many participants can join a Butter session?",
    answer:
      "The number of participants varies by plan. Free plans support smaller groups, while premium plans can accommodate larger teams.",
  },
  {
    id: "item-5",
    question: "Do you need an account to join a Butter session?",
    answer:
      "No account is required to join a session as a participant. Only the host needs an account to create and manage sessions.",
  },
  {
    id: "item-6",
    question: "Do you have a desktop or mobile app?",
    answer:
      "Butter works directly in your web browser on both desktop and mobile devices. No app download required!",
  },
  {
    id: "item-7",
    question: "Do you host your own video?",
    answer:
      "Yes, Butter has its own built-in video conferencing solution optimized for interactive sessions and workshops.",
  },
  {
    id: "item-8",
    question: "Is Butter GDPR compliant?",
    answer:
      "Yes, Butter is fully GDPR compliant and takes data privacy and security seriously.",
  },
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const accordionItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate heading
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Animate accordion items with stagger
      accordionItemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(
            item,
            {
              opacity: 0,
              y: 30,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: index * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 90%",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-20 lg:py-32 px-4 sm:px-6 lg:px-20"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="mb-12 lg:mb-20">
          <div className="flex items-start mb-4 lg:mb-0">
            <h2 className="text-[clamp(100px,13.6vw,196px)] font-black leading-[0.92] text-[#0A0B1E]">
              What
            </h2>
            <span className="text-[clamp(100px,13.9vw,200px)] font-black leading-[0.9] text-[#0A0B1E]">
              .
            </span>
          </div>
          <div className="flex items-start mb-4 lg:mb-0">
            <h2 className="text-[clamp(85px,11.7vw,169px)] font-black leading-[1.06] text-[#0A0B1E]">
              The
            </h2>
            <span className="text-[clamp(100px,13.9vw,200px)] font-black leading-[0.9] text-[#0A0B1E]">
              .
            </span>
          </div>
          <div className="flex items-start relative">
            <h2 className="text-[clamp(96px,13.3vw,192px)] font-black leading-[0.94] text-[#0A0B1E]">
              FAQ
            </h2>
            <div className="relative">
              <span className="text-[clamp(98px,13.5vw,195px)] font-black leading-[0.92] text-[#0A0B1E]">
                ?
              </span>
              <div className="absolute bottom-0 left-[10%] w-[80%] h-[40%] bg-white" />
              <span className="absolute top-0 left-[20%] text-[clamp(100px,13.9vw,200px)] font-black leading-[0.9] text-[#0A0B1E]">
                .
              </span>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              //@ts-ignore
              ref={(el) => (accordionItemsRef.current[index] = el)}
            >
              <AccordionItem
                value={item.id}
                className="border-none bg-white rounded-[30px] shadow px-8 data-[state=open]:pb-6"
              >
                <AccordionTrigger
                  icon="plus"
                  className="text-[clamp(20px,2vw,29px)] font-bold text-[#0A0B1E] text-left hover:no-underline py-[34px] leading-[1.17] [&>svg]:w-6 [&>svg]:h-6"
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base sm:text-lg text-[#0A0B1E]/80 leading-relaxed pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
