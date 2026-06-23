"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Testemonials = dynamic(() => import("./Testemonials"), {
  ssr: false,
});

export default function TestimonialLoader() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {visible ? (
        <Testemonials />
      ) : (
        <div className="w-full py-20 text-center dark:bg-gray-950  dark:text-white
 text-gray-400 dark:text-gray-500">
          Preparing reviews...
        </div>
      )}
    </div>
  );
}