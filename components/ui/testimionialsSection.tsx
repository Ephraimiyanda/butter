"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Testimonial {
  id: string;
  name: string;
  title: string;
  avatar: string;
  platform: string;
  platformIcon: string;
  text: string;
  date: string;
  highlight?: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rob H.",
    title: "Founder",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/134ac9b87ba9b723376f7b9c48e168b897537539?width=84",
    platform: "G2",
    platformIcon:
      "https://api.builder.io/api/v1/image/assets/TEMP/0a316fd4784ca3f47dcfdab3b96f9444c41465ba?width=28",
    text: "Butter will forever change how you approach online or remote workshop collaboration - from the facilitator or the participant.",
    date: "Feb 16, 2022",
  },
  {
    id: "2",
    name: "Jessica Campbell",
    title: "Program Manager in UX EdTech",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/9104d4490b52bcf973e6769e1c0b4a119d55c18c?width=84",
    platform: "Product Hunt",
    platformIcon:
      "https://api.builder.io/api/v1/image/assets/TEMP/5eeec9ce729dfb2e0a73fc547bd6f920eacf79cb?width=28",
    text: "Butter is such an amazing tool! The entire experience is so thoughtfully designed and perfect for creating more meaningful remote meetings.",
    date: "Feb 8, 2023",
  },
  {
    id: "3",
    name: "Natalie Pearce",
    title: "Cofounder of The Future Kind Collective",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/b22133d384397eaf65d6dd28bd688d11f7947547?width=84",
    platform: "Product Hunt",
    platformIcon:
      "https://api.builder.io/api/v1/image/assets/TEMP/5eeec9ce729dfb2e0a73fc547bd6f920eacf79cb?width=28",
    text: "I absolutely LOVE Butter! This beautiful platform has changed my business by enabling us to deliver workshops in ways we'd only dreamed of.",
    date: "Feb 7, 2023",
  },
  {
    id: "4",
    name: "Sabba Quidwai, EdD 🙌",
    title: "Designing Schools",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/21e2c6540be2fd981b1f6ca67cfbbcc70e1b1496?width=84",
    platform: "Twitter",
    platformIcon:
      "https://api.builder.io/api/v1/image/assets/TEMP/8ca24ee347830215bac2a237f7b0cf19b9766389?width=24",
    text: "Obsessed @butter_hq > zoom or anything else",
    date: "Jan 29, 2022",
    highlight: "@butter_hq",
  },
  {
    id: "5",
    name: "Axel Sooriah",
    title: "Co-founder @ Panash · Podcast Host",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/e29cd06b8ff3da43ba825ac123a5eb506515ec9e?width=84",
    platform: "Product Hunt",
    platformIcon:
      "https://api.builder.io/api/v1/image/assets/TEMP/5eeec9ce729dfb2e0a73fc547bd6f920eacf79cb?width=28",
    text: "We've been early users of Butter and have loved it since. It's been a core part of our learning experience for product managers.",
    date: "Feb 7, 2023",
    highlight: "Butter",
  },
  {
    id: "6",
    name: "Jay Melone",
    title: "Product Strategist @ New Haircut",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/a3e1659eaf6e7a171a47fba41003ce13ae6692f7?width=84",
    platform: "Product Hunt",
    platformIcon:
      "https://api.builder.io/api/v1/image/assets/TEMP/5eeec9ce729dfb2e0a73fc547bd6f920eacf79cb?width=28",
    text: "Butter has gotten so good that it's completely integrated into how we operate at @newhaircutco. We rely on Butter for all our client work.",
    date: "Feb 7, 2023",
    highlight: "@newhaircutco",
  },
  {
    id: "7",
    name: "Rich Webster",
    title: "Creator, 🏖How To Work Less",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/4c6e09b9465158d336bb919a6f85c09ddc6d32bc?width=84",
    platform: "Product Hunt",
    platformIcon:
      "https://api.builder.io/api/v1/image/assets/TEMP/5eeec9ce729dfb2e0a73fc547bd6f920eacf79cb?width=28",
    text: "I've been using Butter 2.0 for the last 3 cohorts of my course. It blows Zoom out of the water for live sessions!",
    date: "Feb 7, 2023",
    highlight: "Butter 2.0",
  },
  {
    id: "8",
    name: "Mike",
    title: "Workshop Facilitator",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/277ce795adfd5b6cfb51ca670bed66ac5f421718?width=84",
    platform: "Review",
    platformIcon: "",
    text: "This is the first time I've looked forward to setting up and running my next meeting! Butter have left all participants grinning.",
    date: "Mar 21, 2023",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const renderText = () => {
    if (!testimonial.highlight) {
      return <span>{testimonial.text}</span>;
    }

    const parts = testimonial.text.split(testimonial.highlight);
    return (
      <>
        {parts[0]}
        <span className="text-[#6701E6]">{testimonial.highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="flex-shrink-0 w-[306px] bg-white rounded-2xl border border-[#E6E6E6] shadow-[0_1px_2px_0_rgba(0,0,0,0.07)] p-4">
      <div className="flex items-center gap-4 mb-3">
        <div className="relative">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-[42px] h-[42px] rounded-full"
          />
          {testimonial.platformIcon && (
            <div className="absolute -bottom-1 -right-1 w-[18px] h-[18px] bg-white rounded-full p-0.5 flex items-center justify-center">
              <img
                src={testimonial.platformIcon}
                alt={testimonial.platform}
                className="w-full h-full"
              />
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-medium text-[#0A0B1E] text-[15px] leading-6 truncate">
            {testimonial.name}
          </div>
          <div className="text-[#171945] text-sm leading-5 truncate opacity-70">
            {testimonial.title}
          </div>
        </div>
      </div>

      <p className="text-[#0A0B1E] text-base leading-6 mb-3 min-h-[72px]">
        {renderText()}
      </p>

      <div className="text-[#171945] text-sm leading-5 opacity-70">
        {testimonial.date}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!row1Ref.current || !row2Ref.current) return;

    const row1 = row1Ref.current;
    const row2 = row2Ref.current;

    const row1Items = Array.from(row1.children) as HTMLElement[];
    const row2Items = Array.from(row2.children) as HTMLElement[];

    const totalWidth1 = row1Items.reduce(
      (acc, item) => acc + item.offsetWidth + 16,
      0
    );
    const totalWidth2 = row2Items.reduce(
      (acc, item) => acc + item.offsetWidth + 16,
      0
    );

    gsap.set(row1, { x: 0 });
    gsap.set(row2, { x: -totalWidth2 / 2 });

    const tl1 = gsap.to(row1, {
      x: -totalWidth1 / 2,
      duration: 40,
      ease: "none",
      repeat: -1,
    });

    const tl2 = gsap.to(row2, {
      x: 0,
      duration: 40,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tl1.kill();
      tl2.kill();
    };
  }, []);

  const firstRowTestimonials = testimonials.slice(0, 4);
  const secondRowTestimonials = testimonials.slice(4);

  const duplicatedRow1 = [...firstRowTestimonials, ...firstRowTestimonials];
  const duplicatedRow2 = [...secondRowTestimonials, ...secondRowTestimonials];

  return (
    <section className="bg-white py-8 sm:py-16 pb-0 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-20 mb-16">
        <h2 className="text-[clamp(32px,4vw,57px)] font-bold text-[#0A0B1E] leading-tight">
          Loved by facilitators everywhere
        </h2>
      </div>

      <div className="space-y-8">
        <div className="overflow-hidden">
          <div ref={row1Ref} className="flex gap-4">
            {duplicatedRow1.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.id}-${index}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>

        <div className="overflow-hidden">
          <div ref={row2Ref} className="flex gap-4">
            {duplicatedRow2.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.id}-${index}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-20 mt-16">
        <div className="flex justify-center">
          <button className="px-8 py-[18px] border-2 border-[#0A0B1E] rounded-2xl text-[#0A0B1E] text-sm leading-tight hover:hover:bg-gray-100 z-50 transition-colors">
            Read more Butter love
          </button>
        </div>
      </div>
    </section>
  );
}
