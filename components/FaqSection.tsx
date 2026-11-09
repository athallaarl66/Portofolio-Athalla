"use client";

import { faqItems } from "@/lib/faq";

export const FaqSection = () => {
  return (
    <section id="faq" className="relative py-24 md:py-28">
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <h2 className="text-[clamp(2.4rem,5vw,4.5rem)] font-normal tracking-[0.02em] leading-[1.12] text-white [text-wrap:balance]">
              A few things you might want to know.
            </h2>
          </div>
          <p className="text-[15px] leading-[1.7] max-w-sm md:text-right text-muted [text-wrap:pretty]">
            On availability, day-to-day work, and how to get in touch.
          </p>
        </div>

        {/* Items */}
        <div className="flex flex-col gap-3">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl px-6 py-5 surface-chip"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-base font-semibold leading-[1.6] text-white">
                {item.question}
                <span
                  aria-hidden="true"
                  className="text-[var(--film-amber)] transition-transform group-open:rotate-45 text-xl leading-none"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-[70ch] text-[15px] leading-[1.75] text-muted [text-wrap:pretty]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
