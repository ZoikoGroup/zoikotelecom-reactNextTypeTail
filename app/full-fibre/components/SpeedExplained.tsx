import React from "react";
import { Video, Gamepad2, Tv, Wifi } from "lucide-react";

const SPEED_TRANSPARENCY_ITEMS = [
  {
    id: "working-from-home",
    title: "Working from home",
    description:
      "Upload speed matters when you send files or appear on video. Full fibre plans often have much higher upload speeds.",
    icon: Video,
  },
  {
    id: "gaming",
    title: "Gaming",
    description:
      "Latency (delay) matters more than raw speed. A wired connection to your router helps.",
    icon: Gamepad2,
  },
  {
    id: "streaming-media",
    title: "Streaming & media",
    description:
      "Download speed matters for 4K streams and big downloads, especially with several people online.",
    icon: Tv,
  },
] as const;

export default function SpeedExplained() {
  return (
    <section className="w-full bg-gradient-to-br from-[#060C36] via-[#081040] to-[#2A1A6E] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#CBD0E8]">
            SPEED TRANSPARENCY
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Upload, download and latency
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#D1D5EB] sm:text-base">
            What these mean for everyday use — no numbers we can&apos;t back up.
          </p>
        </div>

        {/* Three-Column Cards Grid */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {SPEED_TRANSPARENCY_ITEMS.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm sm:p-8"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#F4297B] to-[#8A3FFC] text-white shadow-sm">
                    <Icon className="h-5 w-5" strokeWidth={2.25} />
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#B8C0E0]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Info Callout Banner */}
        <div className="mx-auto mt-6 max-w-6xl rounded-2xl bg-[#EEF2FF] px-5 py-4 shadow-lg backdrop-blur-md sm:px-6 sm:py-5">
          <div className="flex items-start gap-4 sm:items-center">
            <div className="flex h-10 w-10 shrink-0 justify-center rounded-xl text-[#4B5563]">
              <Wifi className="h-5 w-5" strokeWidth={2.25} />
            </div>
            <p className="text-sm leading-relaxed text-[#4B5563]">
              You&apos;ll see an advertised average speed, an estimate for your
              address and, where offered, a minimum guaranteed speed. Wi-Fi in
              your home can be slower than your line speed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
