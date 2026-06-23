import React from 'react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <>
      <section className="px-4 py-14 sm:py-16 bg-gray-50 dark:bg-black">
        <div className="mx-auto max-w-7xl">

          {/* CTA CARD */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">

            {/* Base Gradient Background */}
            <div className="absolute inset-0 bg-linear-to-r from-[#2F5BFF] via-[#1E5EA8] to-[#0D3E63] dark:opacity-90" />

            {/* Particle / Wave Image Layer */}
            <div
              className="absolute inset-0 opacity-70 dark:opacity-40 mix-blend-screen bg-cover bg-center"
              style={{
                backgroundImage: "url('/Images/Whyzoiko/wave.png')",
              }}
            />

            {/* Radial Glow Light */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.35),transparent_35%)] dark:bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.15),transparent_40%)]" />

            {/* Content */}
            <div className="relative flex flex-col items-center justify-center gap-8 px-6 sm:px-10 lg:px-14 py-12 lg:py-16">

              {/* TEXT */}
              <div className="text-center max-w-2xl mx-auto text-white">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
                  Ready to Experience the Difference?
                </h2>

                <p className="text-base sm:text-lg text-white/90 dark:text-gray-300 leading-relaxed">
                  Join thousands of satisfied customers across the UK
                </p>
              </div>

              {/* BUTTON */}
              <div className="w-full lg:w-auto flex justify-center">
                <Link
                  href={"/fibre-packages"}
                  aria-label="Apply Now"
                  className="
                    bg-white dark:bg-gray-200
                    text-[#10446C] dark:text-black
                    font-semibold
                    px-10 py-4
                    rounded-3xl
                    shadow-lg
                    hover:bg-gray-100 dark:hover:bg-gray-300
                    hover:scale-105
                    active:scale-95
                    transition-all
                    duration-300
                  "
                >
                  Get Started Today
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}