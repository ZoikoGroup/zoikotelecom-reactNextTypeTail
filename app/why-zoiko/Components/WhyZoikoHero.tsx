import Image from "next/image";
import React from "react";

export default function WhyZoikoHero() {
  return (
    <>
      <section
        className="w-full bg-white dark:bg-gray-950"
        aria-labelledby="why-choose-heading"
      >
        {/* SECTION HEADER */}
        <header className="bg-[#10446C] py-10 sm:py-12 text-center">
          <h2
            id="why-choose-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-6xl mx-auto px-4"
          >
            Why Choose Zoiko Broadband?
          </h2>
        </header>

        {/* CONTENT CONTAINER */}
        <div className="max-w-7xl mx-auto text-center py-10 lg:py-14 px-4 sm:px-6 lg:px-8">
          
          {/* IMAGE */}
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <Image
              src="/Images/Whyzoiko/whyzoikohero.png"
              alt="Happy customers enjoying fast and reliable broadband internet at home"
              width={1200}
              height={700}
              priority
              className="
                w-full
                object-cover
                transition-transform
                duration-500
                hover:scale-[1.01]
              "
            />
          </div>

          {/* SUB HEADING */}
          <h3 className="mt-10 text-lg md:text-xl lg:text-2xl font-semibold leading-tight text-gray-900 dark:text-white">
            A Smarter, Faster, More Transparent Way to Connect
          </h3>

          {/* DESCRIPTION */}
          <p className="mt-4 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed md:leading-8 max-w-4xl mx-auto">
            At Zoiko Broadband, we provide more than just internet — we deliver
            confidence. As the broadband division of Zoiko Telecom Ltd, we’re
            committed to giving homes and businesses the best fibre technology,
            transparent pricing, and exceptional local support. Whether you’re
            working from home or streaming your favourite shows, every plan is
            built with performance, simplicity, and reliability in mind.
          </p>

        </div>
      </section>
    </>
  );
}