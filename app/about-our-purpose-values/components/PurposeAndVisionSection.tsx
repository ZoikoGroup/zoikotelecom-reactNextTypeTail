export default function PurposeAndVisionSection() {
  return (
    <section
      id="purpose-and-vision"
      className="w-full bg-[#FDFCFF] px-4 py-14 text-[#110C3A] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Section Eyebrow & Heading */}
        <div>
          <p className="flex items-center gap-2 text-[10.5px] font-extrabold uppercase tracking-[0.14em]">
            <span className="font-semibold italic text-[#E5A9C3]">01</span>
            <span className="text-[#A3367A]">Purpose &amp; Vision</span>
          </p>

          <h2 className="mt-2.5 text-[34px] font-black leading-[1.12] tracking-[-0.025em] text-[#0B092E] sm:text-[42px]">
            Why we do{" "}
            <span className="font-extrabold italic text-[#9E2A76]">
              what we do
            </span>
          </h2>
        </div>

        {/* Split Purpose & Vision Card */}
        <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-[22px] border border-[#F2ECE6] shadow-[0_10px_30px_rgba(17,12,58,0.04)] md:grid-cols-2">
          {/* Left Panel: Our Purpose */}
          <div className="relative flex min-h-[260px] flex-col justify-between overflow-hidden bg-[#0E0424] px-7 py-8 text-white sm:min-h-[290px] sm:px-10 sm:py-10">
            {/* Subtle Ghost Watermark Letter "P" */}
            <span
              aria-hidden="true"
              className="pointer-events-none select-none font-sans text-[135px] font-black leading-none tracking-tight text-white/[0.06] sm:text-[156px]"
              style={{
                position: "absolute",
                top: "12px",
                right: "18px",
              }}
            >
              P
            </span>

            <div className="relative z-10">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#D868A8]">
                Our purpose
              </p>

              <p className="mt-5 max-w-[460px] text-[22px] font-semibold leading-[1.35] tracking-[-0.015em] text-white sm:text-[26px]">
                Our aim is to make connectivity easier to understand and more
                useful in everyday life and work.
              </p>
            </div>
          </div>

          {/* Right Panel: Our Vision */}
          <div className="relative flex min-h-[260px] flex-col justify-between overflow-hidden bg-[#FBF7F2] px-7 py-8 text-[#0E0826] sm:min-h-[290px] sm:px-10 sm:py-10">
            {/* Subtle Ghost Watermark Letter "V" */}
            <span
              aria-hidden="true"
              className="pointer-events-none select-none font-sans text-[135px] font-black leading-none tracking-tight text-[#0E0826]/[0.05] sm:text-[156px]"
              style={{
                position: "absolute",
                top: "12px",
                right: "22px",
              }}
            >
              V
            </span>

            <div className="relative z-10 flex flex-1 flex-col justify-between">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#9E2A76]">
                  Our vision
                </p>

                <p className="mt-5 max-w-[460px] text-[22px] font-semibold leading-[1.35] tracking-[-0.015em] text-[#0E0826] sm:text-[26px]">
                  A future in which people and organisations can connect more
                  easily, wherever their needs take them.
                </p>
              </div>

              <p className="mt-6 text-[11px] font-medium text-[#7A768E]">
                An aspiration — not a coverage or service guarantee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
