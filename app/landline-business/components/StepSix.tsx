"use client";

import Image from "next/image";

interface Props {
  selectedHardware: number | null;
  setSelectedHardware: (
    id: number | null
  ) => void;
  prevStep: () => void;
  onCheckout: (hardwareId: number | null) => void;
}

const hardware = [
  {
    id: 1,
    image: "/image/image 12.png",
    title: "Yealink T31P Desk Phone",
    description:
      "HD voice, 2-line SIP, large display. Ideal for office use.",
    price: "£49.99",
    oldPrice: "£69.99",
  },
  {
    id: 2,
    image: "/image/image 13.png",
    title: "Gigaset A690 DECT Handset",
    description:
      "Cordless, up to 12h talk time, ECO DECT technology.",
    price: "£34.99",
    oldPrice: "£49.99",
  },
  {
    id: 3,
    image: "/image/image 14.png",
    title: "ATA VoIP Adapter",
    description:
      "Connect any standard analogue phone to Zoiko's VoIP service.",
    price: "£19.99",
    oldPrice: "£29.99",
  },
];

export default function StepSix({
  selectedHardware,
  setSelectedHardware,
  prevStep,
  onCheckout,
}: Props) {
  return (
    <div className="space-y-5">
      <div className="bg-white dark:bg-gray-900 rounded-[20px] shadow-[0px_2px_20px_0px_rgba(123,31,162,0.09)] px-4 sm:px-5 py-5">
        <div className="inline-flex border border-[#F91E8C] rounded-full px-4 py-1 text-[#F91E8C] text-xs font-bold mb-2">
          STEP 6 OF 6
        </div>

        <h2 className="text-[#1A1A2E] dark:text-white text-[24px] sm:text-[28px] md:text-[32px] font-extrabold leading-8 mb-2">
          Add Hardware
        </h2>

        <p className="text-[#6B6B8A] text-sm font-normal leading-6 max-w-[560px]">
          Get your setup with a compatible phone or adapter.
          All devices are pre-configured and plug-and-play.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {hardware.map((item) => {
          const active =
            selectedHardware === item.id;

          return (
            <button
              key={item.id}
              onClick={() =>
                setSelectedHardware(item.id)
              }
              className={`relative overflow-hidden rounded-[20px] border transition-all duration-300 text-left bg-white dark:bg-gray-900 shadow-[0px_2px_20px_0px_rgba(123,31,162,0.09)] ${
                active
                  ? "border-[#E91E8C]"
                  : "border-black/0"
              }`}
            >
              <div className="px-4 sm:px-5 pt-5 pb-4">
                <div className="relative w-full h-[120px] mb-4 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={134}
                    height={120}
                    className="object-contain"
                  />
                </div>

                <h3 className="text-[#1A1A2E] dark:text-white text-base font-bold mb-2 leading-5">
                  {item.title}
                </h3>

                <p className="text-[#6B6B8A] text-xs font-normal leading-4 mb-4">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[#E91E8C] text-lg font-black">
                    {item.price}
                  </span>

                  <span className="text-[#9CA3AF] text-xs line-through font-normal">
                    {item.oldPrice}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="w-full rounded-2xl border border-[#DADADA] bg-white/40 dark:bg-gray-900 px-4 py-3 flex items-start">
        <p className="text-[#6B6B8A] text-sm font-normal leading-6">
          💡 No hardware needed? No problem — Zoiko works
          via our softphone app on any device.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
        <button
          type="button"
          onClick={() => onCheckout(null)}
          className="text-[#E91E8C] text-sm font-bold tracking-wide"
        >
          Skip
        </button>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          <button
            onClick={prevStep}
            className="w-full sm:w-auto h-[42px] px-6 rounded-full border border-[#E91E8C] text-[#E91E8C] text-sm font-bold"
          >
            &lt; Back
          </button>

          <button
            type="button"
            onClick={() => onCheckout(selectedHardware)}
            className="w-full sm:w-auto h-[42px] px-8 rounded-full bg-[#E91E8C] text-white text-sm font-bold flex items-center justify-center whitespace-nowrap"
          >
            Proceed to Checkout &gt;
          </button>
        </div>
      </div>
    </div>
  );
}