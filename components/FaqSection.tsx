"use client";

import { faqItems } from "@/lib/faq";

export const FaqSection = () => {
  return (
    <section id="faq" className="relative py-24 md:py-28">
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="section-label mb-5">FAQ</div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tighter leading-tight text-white">
              Frequently asked questions.
            </h2>
          </div>
          <p className="text-sm font-light max-w-xs md:text-right text-muted">
            Quick answers about availability, tech focus, and how to work with
            me.
          </p>
        </div>

        {/* Items */}
        <div className="flex flex-col gap-3">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl px-6 py-5 surface-chip"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-[15px] font-semibold text-white">
                {item.question}
                <span
                  aria-hidden="true"
                  className="text-[var(--sage)] transition-transform group-open:rotate-45 text-xl leading-none"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-[13px] font-light leading-relaxed text-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
