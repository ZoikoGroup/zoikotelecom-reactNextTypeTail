"use client";

import { Phone, CirclePlay, CalendarDays } from "lucide-react";

interface StepOneProps {
  selectedProduct: string;
  setSelectedProduct: (value: string) => void;
  onNext: () => void;
}

const products = [
  {
    id: "digital",
    title: "Digital Landline (Geo Number)",
    desc: "Full VoIP replacement for your existing landline",
    price: "From £9.99/mo",
    icon: Phone,
  },
  {
    id: "nongeo",
    title: "Non Geo Number",
    desc: "0800, 0845 or national presence numbers",
    price: "From £4.99/mo",
    icon: CalendarDays,
  },
  {
    id: "international",
    title: "International",
    desc: "Global connectivity with local presence numbers",
    price: "From £6.99/mo",
    icon: CirclePlay,
  },
];

export default function StepOne({
  selectedProduct,
  setSelectedProduct,
  onNext,
}: StepOneProps) {
  return (
    <div>
      <section className="mb-4">
        <div className="bg-white dark:bg-gray-900 rounded-[28px] p-4 sm:p-6 md:p-8 border border-[#ECEAF3] dark:border-gray-700">
          <div className="inline-flex border border-[#FFB6D9] rounded-full px-4 py-1 text-[#FF1493] text-xs font-bold mb-3">
            STEP 1 OF 6
          </div>

          <h3 className="mt-0 text-[20px] sm:text-[24px] md:text-[28px] font-extrabold text-[#1A1A2E] dark:text-white">
            Select Your Product
          </h3>

          <p className="text-[#7A7A92] dark:text-gray-300 mb-1 text-sm sm:text-base">
            Choose the type of digital landline service that best suits your needs.
          </p>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {products.map((item) => {
            const Icon = item.icon;

            const active = selectedProduct === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedProduct(item.id)}
                className={`relative cursor-pointer w-full min-h-[179px] rounded-[24px] p-4 transition-all ${
                  active
                    ? "bg-gradient-to-br from-[#7B1FA2]/5 to-[#FF1493]/5 border-2 border-[#FF1493] shadow-[0px_2px_20px_0px_rgba(123,31,162,0.09)]"
                    : "bg-white dark:bg-gray-900 border-2 border-[#ECEAF3]"
                }`}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#7B1FA2] via-[#C2185B] to-[#FF1493] text-white mb-4">
                  <Icon size={18} />
                </div>

                <h4 className="text-[#1A1A2E] dark:text-white text-[15px] font-bold leading-5 mb-3">
                  {item.title}
                </h4>

                <p className="text-[#64748B] text-sm leading-6 mb-2">
                  {item.desc}
                </p>

                <p className="text-[#FF1493] text-[15px] font-extrabold">
                  {item.price}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 gap-4">
          <p className="text-sm text-[#A0A0B5]">
            Select a product to continue
          </p>

          <button
            onClick={onNext}
            className="w-full sm:w-auto bg-[#E91E8C] text-white px-7 py-3 rounded-full text-sm font-semibold"
          >
            Next Step →
          </button>
        </div>
      </section>
    </div>
  );
}