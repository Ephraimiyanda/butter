import Navbar from "@/components/navigation/navbar";
import Image from "next/image";
import WorkshopIllustration from "@/components/ui/workshopIllustration";
import FacilitateHeader from "@/components/ui/facilitateHeader";
import Footer from "@/components/commons/footer";
import FAQSection from "@/components/ui/FAQSection";
import TestimonialsSection from "@/components/ui/testimionialsSection";
import CommunitySection from "@/components/ui/communitySection";
import CommunityWriteUp from "@/components/ui/communityWriteUp";
export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center sm:min-h-screen gap-16">
      <Navbar />
      <main className="pb-20">
        <section
          id="hero-section"
          className=" min-h-screen flex items-center justify-center py-16 overflow-hidden"
        >
          <div className="liquid inset-0 z-10"></div>

          <div className="relative z-10 flex flex-col items-center justify-center gap-6 w-full max-w-[1280px]">
            <h1 className="text-[clamp(2.0rem,6vw,4.4375rem)] font-black leading-[1.13] text-[#0A0B1E] text-center max-w-[1045px] sm:px-4">
              Run more engaging sessions.
              <br />
              Get better outcomes.
            </h1>

            <p className="text-[1.50rem] sm:text-[2.0rem] leading-[1.56] font-light text-[#0A0B1E] text-center max-w-[1045px] px-6 mt-2">
              Effortlessly plan, run and recap super-engaging workshops,
              trainings, and meetings with Butter's built-in agenda planner,
              integrated collaboration tools and auto-generated recaps—all in
              one place.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full px-4">
              <button className="flex items-center justify-center gap-2 w-full  px-7 py-5 bg-[#0A0B1E] text-white rounded-2xl  hover:bg-[#1a1b2e] transition-colors sm:w-[250px] h-16">
                <Image
                  width={28}
                  height={28}
                  src={"/images/google.svg"}
                  alt={"google logo"}
                />
                <span className="text-base leading-5">Sign up with Google</span>
              </button>

              <button className="flex items-center justify-center w-full px-7 py-5 bg-white text-black rounded-2xl  border-[0.5px]  border-gray-200 hover:bg-gray-50 transition-colors sm:w-[250px] h-16">
                <span className="text-base leading-5">Sign up for free</span>
              </button>
            </div>
          </div>
        </section>

        <section className=" py-8 sm:py-16 relative">
          <FacilitateHeader />
          <div className="w-full">
            <WorkshopIllustration />
          </div>
        </section>

        <section>
          <TestimonialsSection />
        </section>
        <section>
          <CommunitySection />
          <CommunityWriteUp />
        </section>
        <section>
          <FAQSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
