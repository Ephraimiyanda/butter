export function ContentSection() {
  return (
    <div className="flex flex-col">
      <section className="py-8  px-4 sm:px-6 lg:px-20 w-full">
        <div className="max-w-[1440px] mx-auto relative">
          <div className="relative h-auto min-h-[984px]">
            {/* Plan heading - rotated */}
            <div className="absolute left-4 sm:left-10 lg:left-[60px] top-24 z-20">
              <h2 className="text-[100px] sm:text-[140px] lg:text-[179px] font-black text-[#0A0B1E] leading-none transform -rotate-12">
                Plan
                <span className="text-[120px] sm:text-[160px] lg:text-[200px]">
                  .
                </span>
              </h2>
            </div>

            {/* Main content wrapper with curves */}
            <div className="relative pt-40 sm:pt-48 lg:pt-60 max-w-[1280px] mx-auto">
              {/* Top curve */}
              <div className="absolute -top-20 sm:-top-28 lg:-top-[134px] left-0 right-0 w-full overflow-hidden"></div>

              {/* Blue rounded background with content */}
              <div className="rounded-[40px] lg:rounded-[80px] bg-[#C7D0FF] overflow-hidden">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 p-8 sm:p-12 lg:p-20 lg:px-20 lg:py-[150px]">
                  {/* Animated cards section */}
                  <div className="flex-1 relative w-full max-w-[520px] min-h-[400px] sm:min-h-[480px] flex items-center justify-center">
                    {/* Dotted pattern background */}
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/46de6e8f48b1d2b6d1a223b312fb8f6e35ab7550?width=968"
                      alt=""
                      className="absolute w-[85%] sm:w-full max-w-[484px] h-auto top-1/2 -translate-y-1/2 object-contain"
                    />

                    {/* Reflection card */}
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/915773563787a0509d78febb046173ebeb0f1840?width=578"
                      alt="Reflection card"
                      className="absolute w-[240px] sm:w-[289px] h-auto -top-8 sm:-top-12 left-1/2 -translate-x-1/2"
                    />

                    {/* Checkout card */}
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/0f72b49d2985c3617319afb2a80afd35a607595e?width=600"
                      alt="Checkout card"
                      className="absolute w-[250px] sm:w-[300px] h-auto top-20 sm:top-28 left-4 sm:left-8"
                    />

                    {/* Welcome card */}
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/f7b12ca1c517d17952f652db4b186e952c01d6cb?width=571"
                      alt="Welcome card"
                      className="absolute w-[240px] sm:w-[286px] h-auto bottom-4 sm:bottom-8 right-4 sm:right-8"
                    />
                  </div>

                  {/* Text content */}
                  <div className="flex-1 max-w-[520px] space-y-6">
                    <h3 className="text-3xl sm:text-[39px] font-bold text-[#0A0B1E] leading-tight sm:leading-[48.4px]">
                      Prepare sessions that practically run themselves
                    </h3>

                    <p className="text-base sm:text-[19px] font-light text-[#0A0B1E] leading-relaxed sm:leading-[30.8px]">
                      Structured sessions lead to better outcomes. Set up the
                      perfect flow with a time-boxed agenda, pre-loaded tools,
                      and a reusable team library.
                    </p>

                    <button className="inline-flex items-center justify-center px-7 sm:px-8 py-4 sm:py-[18px] border-2 border-[#0A0B1E] rounded-2xl bg-[#C7D0FF] text-[#0A0B1E] text-sm leading-tight hover:bg-[#b5c0ff] transition-colors">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8  px-4 sm:px-6 lg:px-20 w-full">
        <div className="max-w-[1440px] mx-auto relative">
          <div className="relative h-auto min-h-[984px]">
            {/* Plan heading - rotated */}
            <div className="absolute right-4 sm:right-10 lg:right-[60px] top-24 z-20">
              <h2 className="text-[100px] sm:text-[140px] lg:text-[179px] font-black text-[#0A0B1E] leading-none transform rotate-12">
                Run
                <span className="text-[120px] sm:text-[160px] lg:text-[200px]">
                  .
                </span>
              </h2>
            </div>

            {/* Main content wrapper with curves */}
            <div className="relative pt-40 sm:pt-48 lg:pt-60 max-w-[1280px] mx-auto">
              {/* Top curve */}
              <div className="absolute -top-20 sm:-top-28 lg:-top-[134px] left-0 right-0 w-full overflow-hidden"></div>

              {/* Blue rounded background with content */}
              <div className="rounded-[40px] flex flex-col gap-8 lg:rounded-[80px] bg-[#BFF9EA] overflow-hidden">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 p-8 sm:p-12 lg:px-20 lg:py-[150px] pb-4 sm:pb-8 lg:pb-[80px] ">
                  {/* Animated cards section */}
                  <div className="flex-1 relative w-full max-w-[520px] h-[400px] sm:h-[480px] flex items-center justify-center">
                    {/* Dotted pattern background */}
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/46de6e8f48b1d2b6d1a223b312fb8f6e35ab7550?width=968"
                      alt=""
                      className="w-[85%] sm:w-full max-w-[484px] h-auto  object-contain"
                    />

                    {/* Reflection card */}
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/915773563787a0509d78febb046173ebeb0f1840?width=578"
                      alt="Reflection card"
                      className="absolute w-[240px] sm:w-[289px] h-auto -top-8 sm:-top-12 left-1/2 -translate-x-1/2"
                    />

                    {/* Checkout card */}
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/0f72b49d2985c3617319afb2a80afd35a607595e?width=600"
                      alt="Checkout card"
                      className="absolute w-[250px] sm:w-[300px] h-auto top-20 sm:top-28 left-4 sm:left-8"
                    />

                    {/* Welcome card */}
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/f7b12ca1c517d17952f652db4b186e952c01d6cb?width=571"
                      alt="Welcome card"
                      className="absolute w-[240px] sm:w-[286px] h-auto bottom-4 sm:bottom-8 right-4 sm:right-8"
                    />
                  </div>

                  {/* Text content */}
                  <div className="flex-1 max-w-[520px] space-y-6">
                    <h3 className="text-3xl sm:text-[39px] font-bold text-[#0A0B1E] leading-tight sm:leading-[48.4px]">
                      Prepare sessions that practically run themselves
                    </h3>

                    <p className="text-base sm:text-[19px] font-light text-[#0A0B1E] leading-relaxed sm:leading-[30.8px]">
                      Structured sessions lead to better outcomes. Set up the
                      perfect flow with a time-boxed agenda, pre-loaded tools,
                      and a reusable team library.
                    </p>

                    <button className="inline-flex items-center justify-center px-7 sm:px-8 py-4 sm:py-[18px] border-2 border-[#0A0B1E] rounded-2xl bg-[#BFF9EA] text-[#0A0B1E] text-sm leading-tight hover:bg-[#91f6db] transition-colors">
                      Learn more
                    </button>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-20 p-8 sm:p-12 lg:px-20 lg:py-[150px] pb-4 sm:pb-8 lg:pb-[150px]">
                  {/* Animated cards section */}
                  <div className="flex-1 relative w-full max-w-[520px] h-[400px] sm:h-[480px] flex items-center justify-center">
                    {/* Dotted pattern background */}
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/46de6e8f48b1d2b6d1a223b312fb8f6e35ab7550?width=968"
                      alt=""
                      className=" sm:w-full max-w-[484px] h-auto object-contain"
                    />

                    {/* Reflection card */}
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/915773563787a0509d78febb046173ebeb0f1840?width=578"
                      alt="Reflection card"
                      className="absolute w-[240px] sm:w-[289px] h-auto -top-8 sm:-top-12 left-1/2 -translate-x-1/2"
                    />

                    {/* Checkout card */}
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/0f72b49d2985c3617319afb2a80afd35a607595e?width=600"
                      alt="Checkout card"
                      className="absolute w-[250px] sm:w-[300px] h-auto top-20 sm:top-28 left-4 sm:left-8"
                    />

                    {/* Welcome card */}
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/f7b12ca1c517d17952f652db4b186e952c01d6cb?width=571"
                      alt="Welcome card"
                      className="absolute w-[240px] sm:w-[286px] h-auto bottom-4 sm:bottom-8 right-4 sm:right-8"
                    />
                  </div>

                  {/* Text content */}
                  <div className="flex-1 max-w-[520px] space-y-6">
                    <h3 className="text-3xl sm:text-[39px] font-bold text-[#0A0B1E] leading-tight sm:leading-[48.4px]">
                      Prepare sessions that practically run themselves
                    </h3>

                    <p className="text-base sm:text-[19px] font-light text-[#0A0B1E] leading-relaxed sm:leading-[30.8px]">
                      Structured sessions lead to better outcomes. Set up the
                      perfect flow with a time-boxed agenda, pre-loaded tools,
                      and a reusable team library.
                    </p>

                    <button className="inline-flex items-center justify-center px-7 sm:px-8 py-4 sm:py-[18px] border-2 border-[#0A0B1E] rounded-2xl bg-[#BFF9EA] text-[#0A0B1E] text-sm leading-tight hover:bg-[#91f6db] transition-colors">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8  px-4 sm:px-6 lg:px-20 w-full">
        <div className="max-w-[1440px] mx-auto relative">
          <div className="relative h-auto min-h-[984px]">
            {/* Plan heading - rotated */}
            <div className="absolute left-4 sm:left-10 lg:left-[60px] top-24 z-20">
              <h2 className="text-[100px] sm:text-[140px] lg:text-[179px] font-black text-[#0A0B1E] leading-none transform -rotate-12">
                Recap
                <span className="text-[120px] sm:text-[160px] lg:text-[200px]">
                  .
                </span>
              </h2>
            </div>

            {/* Main content wrapper with curves */}
            <div className="relative pt-40 sm:pt-48 lg:pt-60 max-w-[1280px] mx-auto">
              {/* Top curve */}
              <div className="absolute -top-20 sm:-top-28 lg:-top-[134px] left-0 right-0 w-full overflow-hidden"></div>

              {/* Blue rounded background with content */}
              <div className="rounded-[40px] lg:rounded-[80px] bg-[#FFD8AA] overflow-hidden">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 p-8 sm:p-12 lg:p-20 lg:px-20 lg:py-[150px]">
                  {/* Animated cards section */}
                  <div className="flex-1 relative w-full max-w-[520px] h-[400px] sm:h-[480px] flex items-center justify-center">
                    {/* Dotted pattern background */}
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/46de6e8f48b1d2b6d1a223b312fb8f6e35ab7550?width=968"
                      alt=""
                      className=" w-[85%] sm:w-full max-w-[484px] h-auto object-contain"
                    />

                    {/* Reflection card */}
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/915773563787a0509d78febb046173ebeb0f1840?width=578"
                      alt="Reflection card"
                      className="absolute w-[240px] sm:w-[289px] h-auto -top-8 sm:-top-12 left-1/2 -translate-x-1/2"
                    />

                    {/* Checkout card */}
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/0f72b49d2985c3617319afb2a80afd35a607595e?width=600"
                      alt="Checkout card"
                      className="absolute w-[250px] sm:w-[300px] h-auto top-20 sm:top-28 left-4 sm:left-8"
                    />

                    {/* Welcome card */}
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/f7b12ca1c517d17952f652db4b186e952c01d6cb?width=571"
                      alt="Welcome card"
                      className="absolute w-[240px] sm:w-[286px] h-auto bottom-4 sm:bottom-8 right-4 sm:right-8"
                    />
                  </div>

                  {/* Text content */}
                  <div className="flex-1 max-w-[520px] space-y-6">
                    <h3 className="text-3xl sm:text-[39px] font-bold text-[#0A0B1E] leading-tight sm:leading-[48.4px]">
                      Prepare sessions that practically run themselves
                    </h3>

                    <p className="text-base sm:text-[19px] font-light text-[#0A0B1E] leading-relaxed sm:leading-[30.8px]">
                      Structured sessions lead to better outcomes. Set up the
                      perfect flow with a time-boxed agenda, pre-loaded tools,
                      and a reusable team library.
                    </p>

                    <button className="inline-flex items-center justify-center px-7 sm:px-8 py-4 sm:py-[18px] border-2 border-[#0A0B1E] rounded-2xl bg-[#FFD8AA] text-[#0A0B1E] text-sm leading-tight hover:bg-[#fac88e] transition-colors">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8  px-4 sm:px-6 lg:px-20 w-full">
        <div className="max-w-[1440px] mx-auto relative">
          <div className="relative h-auto min-h-[984px]">
            {/* Plan heading - rotated */}
            <div className="absolute right-4 sm:right-1e lg:right-[60px] top-24 z-20">
              <h2 className="text-[100px] sm:text-[140px] lg:text-[179px] font-black text-[#0A0B1E] leading-none transform rotate-12">
                Collaborate
                <span className="text-[120px] sm:text-[160px] lg:text-[200px]">
                  .
                </span>
              </h2>
            </div>

            {/* Main content wrapper with curves */}
            <div className="relative pt-40 sm:pt-48 lg:pt-60 max-w-[1280px] mx-auto">
              {/* Top curve */}
              <div className="absolute -top-20 sm:-top-28 lg:-top-[134px] left-0 right-0 w-full overflow-hidden"></div>

              {/* Blue rounded background with content */}
              <div className="rounded-[40px] lg:rounded-[80px] bg-[#FFD5D5] overflow-hidden">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 p-8 sm:p-12 lg:p-20 lg:px-20 lg:py-[150px]">
                  {/* Animated cards section */}
                  <div className="flex-1 relative w-full max-w-[520px] h-[400px] sm:h-[480px] flex items-center justify-center">
                    {/* Dotted pattern background */}
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/46de6e8f48b1d2b6d1a223b312fb8f6e35ab7550?width=968"
                      alt=""
                      className="w-[85%] sm:w-full max-w-[484px] h-auto object-contain"
                    />

                    {/* Reflection card */}
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/915773563787a0509d78febb046173ebeb0f1840?width=578"
                      alt="Reflection card"
                      className="absolute w-[240px] sm:w-[289px] h-auto -top-8 sm:-top-12 left-1/2 -translate-x-1/2"
                    />

                    {/* Checkout card */}
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/0f72b49d2985c3617319afb2a80afd35a607595e?width=600"
                      alt="Checkout card"
                      className="absolute w-[250px] sm:w-[300px] h-auto top-20 sm:top-28 left-4 sm:left-8"
                    />

                    {/* Welcome card */}
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/f7b12ca1c517d17952f652db4b186e952c01d6cb?width=571"
                      alt="Welcome card"
                      className="absolute w-[240px] sm:w-[286px] h-auto bottom-4 sm:bottom-8 right-4 sm:right-8"
                    />
                  </div>

                  {/* Text content */}
                  <div className="flex-1 max-w-[520px] space-y-6">
                    <h3 className="text-3xl sm:text-[39px] font-bold text-[#0A0B1E] leading-tight sm:leading-[48.4px]">
                      Prepare sessions that practically run themselves
                    </h3>

                    <p className="text-base sm:text-[19px] font-light text-[#0A0B1E] leading-relaxed sm:leading-[30.8px]">
                      Structured sessions lead to better outcomes. Set up the
                      perfect flow with a time-boxed agenda, pre-loaded tools,
                      and a reusable team library.
                    </p>

                    <button className="inline-flex items-center justify-center px-7 sm:px-8 py-4 sm:py-[18px] border-2 border-[#0A0B1E] rounded-2xl bg-[#FFD5D5] text-[#0A0B1E] text-sm leading-tight hover:bg-[#feb0b0] transition-colors">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
