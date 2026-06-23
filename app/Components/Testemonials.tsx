'use client';
import React, { useEffect, useState } from "react";
const testimonials = [
    {
      name: "Aladdin Sullivan",
      role: "CEO Nigiang",
      text: "Helped me to elaborate employee data, not only save and store, but also elaborate, process it so that it can be used as employee evaluation material. Such as looking at employee discipline from the recap of absences, leave, permits and more.",
    },
    {
      name: "Mahmood Ali",
      role: "CEO Nigiang",
      text: "Helped me to elaborate employee data, not only save and store, but also elaborate, process it so that it can be used as employee evaluation material. Such as looking at employee discipline from the recap of absences, leave, permits and more.",
    },
    {
      name: "Bang Cristiano",
      role: "CEO Emyu",
      text: "Helped me to elaborate employee data, not only save and store, but also elaborate, process it so that it can be used as employee evaluation material. Such as looking at employee discipline from the recap of absences, leave, permits and more.",
    },
  ];

export default function Testemonials() {
  const [active, setActive] = useState(1);
  
 useEffect(() => {
  const interval = setInterval(() => {
    setActive((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  }, 3000);

  return () => clearInterval(interval);
}, [testimonials.length]);


  return (
    <div>
      <section className="w-full border-t-2 border-amber-200 bg-[#F8FAFF] py-20 px-4 dark:bg-gray-950  dark:text-white
">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold 
dark:text-[#63a7db] text-black">
            What they say about us
          </h2>
          <p className="text-sm dark:text-white

 text-gray-500 mt-2">Choose your package</p>

          {/* SLIDER */}
          <div className="mt-12 relative overflow-hidden">
            {/* Desktop view - Show all 3 cards */}
            <div className="hidden md:flex justify-center gap-6">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className={`w-full max-w-sm transition-transform duration-300
                  ${
                    index === active
                      ? "bg-[#0F3D5E] dark:bg-gray-800 text-white scale-100"
                      : "bg-white dark:bg-gray-900 text-gray-600 opacity-60"
                  } rounded-2xl p-6`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full  bg-gray-300"></div>
                    <div className="text-left">
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-xs opacity-70">{item.role}</p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-left">
                    "{item.text}"
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile view - Show only active card */}
            <div className="md:hidden flex justify-center">
              <div className="w-full max-w-sm bg-[#0F3D5E] text-white rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                  <div className="text-left">
                    <h4 className="font-semibold">
                      {testimonials[active].name}
                    </h4>
                    <p className="text-xs opacity-70">
                      {testimonials[active].role}
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-left">
                  "{testimonials[active].text}"
                </p>
              </div>
            </div>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all
                ${i === active ? "w-6 bg-[#10446C]" : "w-2 bg-gray-300"}
              `}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
