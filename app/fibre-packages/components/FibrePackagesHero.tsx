"use client";

interface FormattedAddress {
  id: string;
  display: string;
  streetNr: string;
  streetName: string;
  city: string;
  postcode: string;
  districtCode: string;
  uprn: string;
  exchangeGroupCode: string;
  qualifier: string;
}

interface SearchResponse {
  success: boolean;
  addresses?: FormattedAddress[];
  count?: number;
  cached?: boolean;
  message?: string;
}

export default function FibrePackagesHero() {
  return (
    <section
      aria-labelledby="fibre-broadband-heading"
      className="w-full bg-[#10446C] dark:bg-gray-950 dark:text-white py-16 px-4 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="max-w-6xl mx-auto text-white text-center">

        {/* Heading */}
        <h1
          id="fibre-broadband-heading"
          className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight"
        >
          Explore Our Fibre Broadband Packages
        </h1>

        <p className="mt-4 text-base md:text-xl lg:text-2xl font-semibold text-white/90 max-w-4xl mx-auto">
          From everyday browsing to gigabit power — there's a Zoiko plan for everyone.
        </p>

        {/* Description */}
        <p className="mt-4 text-base md:text-lg text-white/90 leading-relaxed max-w-5xl mx-auto">
          At Zoiko Broadband, we offer a range of full fibre and SOGEA broadband packages designed to suit every lifestyle, household size, and digital needs.
          Whether you're after basic connectivity or ultra-high-speed performance, all our plans come with clear pricing, UK-based support, and future-ready fibre.
        </p>

        {/* Postcode Form */}
        {/* <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md px-6 py-6 mt-10 dark:bg-gray-900 dark:text-white">
         
            <label htmlFor="postcode" className="sr-only">
              Enter your postcode
            </label>

          <p className="mt-4 text-base md:text-xl lg:text-2xl font-semibold text-white/90 max-w-4xl mx-auto">
            From everyday browsing to gigabit power — there's a Zoiko plan for everyone.
          </p>

          <p className="mt-4 text-base md:text-lg text-gray-800 dark:text-white/90 leading-relaxed max-w-5xl mx-auto">
            At Zoiko Broadband, we offer a range of full fibre and SOGEA broadband packages
            designed to suit every lifestyle, household size, and digital needs. Whether you're
            after basic connectivity or ultra-high-speed performance, all our plans come with
            clear pricing, UK-based support, and future-ready fibre.
          </p>

          <div className="w-full bg-white rounded-xl shadow-md px-6 py-6">
            
              <label htmlFor="postcode" className="sr-only">
                Enter your postcode
              </label>
          </div>
        </div> */}

      </div>
    </section>
  );
}