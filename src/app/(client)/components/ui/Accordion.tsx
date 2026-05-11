"use client";
import { useState } from "react";

export default function Accordion() {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="accordion grid container px-4 py-6 bg-zinc-200 overflow-hidden border-b-2 border-zinc-300">
      <button
        className="flex justify-between items-center gap-4 cursor-pointer bg-gray-100"
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <p className="text-left text-2xl">
          Do I need an appointment to visit the shop?
        </p>
        <svg
          width="29px"
          height="29px"
          strokeWidth="1.3"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#000000"
          className={`transition-all duration-300 ease-in-out ${accordionOpen ? "rotate-180" : "rotate-0"}`}
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="#000000"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
      <div
        className={`grid transition-all ease-in-out duration-300 overflow-hidden ${accordionOpen ? "grid-rows-[1fr] opacity-100 pt-5" : "grid-rows-[0fr] opacity-0"}`}
      >
        <p className="overflow-hidden">
          While walk-ins are welcome, we recommend scheduling an appointment to
          ensure we can provide dedicated attention and service to your vehicle.
          You can book an appointment through our website or by calling (911)
          222-3333.
        </p>
      </div>
    </div>
  );
}
