"use client";

import {
  LayoutDashboard,
  ShoppingCart,
  FileText,
  Server,
  Smartphone,
  Palette,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/services";

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  ShoppingCart,
  FileText,
  Server,
  Smartphone,
  Palette,
  Workflow,
};

export const ServicesSection = () => {
  return (
    <section id="services" className="relative py-16 md:py-20">
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* Header */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-[clamp(2.4rem,5vw,4.5rem)] font-normal tracking-[0.02em] leading-[1.12] text-white [text-wrap:balance]">
              How I can help.
            </h2>
          </div>
          <p className="text-[15px] leading-[1.7] max-w-sm text-muted [text-wrap:pretty]">
            Web applications, the APIs behind them, and tools that cut down repetitive work.
          </p>
        </div>

        <ul>
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Server;
            return (
              <li key={service.title} className="flex gap-4 border-t border-[var(--border)] py-5">
                <Icon className="mt-1 h-4 w-4 shrink-0 text-[var(--film-amber)]" aria-hidden="true" />
                <div>
                  <h3 className="font-[family-name:var(--font-body)] text-base font-semibold leading-[1.4] tracking-normal text-white">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm leading-[1.7] text-muted [text-wrap:pretty]">
                    {service.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
