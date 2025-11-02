export default function Footer() {
  return (
    <footer className="bg-[#0A0B1E] px-6 sm:px-12 lg:px-[93px] py-16">
      <div className="flex flex-col gap-12 text-white mb-[120px]">
        <div className="flex flex-col gap-8">
          <p className="font-bold text-6xl">
            Ready to run buttery-smooth virtual sessions?
          </p>
          <p className="text-6xl font-light">
            It’s time to experience Butter for yourself!
          </p>
        </div>
        <button className="bg-white font-bold text-4xl text-center rounded-[3rem] h-28 text-black hover:shadow hover:bg-gray-100">
          Get started for free
        </button>
      </div>
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Logo and Copyright */}
          <div className="flex flex-col gap-4">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c113c06d0abc2810f3d95407f4928b24d7c11fb1?width=248"
              alt="Butter Logo"
              className="w-[124px] h-auto"
            />
            <p className="text-[#E6E7E8] text-xs font-light leading-5 tracking-wide opacity-60">
              © Copyright Butter 2023
            </p>
          </div>

          {/* Links Grid */}
          <div className="flex flex-row flex-wrap gap-8 sm:gap-10 lg:gap-10 flex-1">
            {/* Site Column */}
            <div className="flex-1 min-w-[200px]">
              <h3 className="text-white text-[11px] leading-6 tracking-[-0.14px] mb-6">
                Site
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-white text-xs leading-6 tracking-[-0.14px] opacity-70 hover:opacity-100 transition-opacity"
                  >
                    Frontpage
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-xs leading-6 tracking-[-0.14px] opacity-70 hover:opacity-100 transition-opacity"
                  >
                    Desktop app
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-xs leading-6 tracking-[-0.14px] opacity-70 hover:opacity-100 transition-opacity"
                  >
                    Mobile app
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-xs leading-6 tracking-[-0.14px] opacity-70 hover:opacity-100 transition-opacity"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-xs leading-6 tracking-[-0.14px] opacity-70 hover:opacity-100 transition-opacity"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-xs leading-6 tracking-[-0.14px] opacity-70 hover:opacity-100 transition-opacity"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-xs leading-6 tracking-[-0.14px] opacity-70 hover:opacity-100 transition-opacity"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-xs leading-6 tracking-[-0.14px] opacity-70 hover:opacity-100 transition-opacity"
                  >
                    Butter vs. Zoom
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div className="flex-1 min-w-[200px]">
              <h3 className="text-white text-xs leading-6 tracking-[-0.14px] mb-6">
                Support
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-white text-xs leading-6 tracking-[-0.14px] opacity-70 hover:opacity-100 transition-opacity"
                  >
                    Help Pages
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-xs leading-6 tracking-[-0.14px] opacity-70 hover:opacity-100 transition-opacity"
                  >
                    Butter Graphics
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-xs leading-6 tracking-[-0.14px] opacity-70 hover:opacity-100 transition-opacity"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-xs leading-6 tracking-[-0.14px] opacity-70 hover:opacity-100 transition-opacity"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-xs leading-6 tracking-[-0.14px] opacity-70 hover:opacity-100 transition-opacity"
                  >
                    GDPR
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-xs leading-6 tracking-[-0.14px] opacity-70 hover:opacity-100 transition-opacity"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Column */}
            <div className="flex-1 min-w-[200px]">
              <h3 className="text-white text-xs leading-6 tracking-[-0.14px] mb-6">
                Social
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-white text-xs leading-6 tracking-[-0.14px] opacity-70 hover:opacity-100 transition-opacity"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-xs leading-6 tracking-[-0.14px] opacity-70 hover:opacity-100 transition-opacity"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-xs leading-6 tracking-[-0.14px] opacity-70 hover:opacity-100 transition-opacity"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-xs leading-6 tracking-[-0.14px] opacity-70 hover:opacity-100 transition-opacity"
                  >
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
