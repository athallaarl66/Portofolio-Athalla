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
import { Card, CardContent } from "@/components/ui/card";
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
    <section id="services" className="relative py-24 md:py-28">
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <h2 className="text-[clamp(2.4rem,5vw,4.5rem)] font-normal tracking-[0.02em] leading-[1.12] text-white [text-wrap:balance]">
              How I can help.
            </h2>
          </div>
          <p className="text-[15px] leading-[1.7] max-w-sm md:text-right text-muted [text-wrap:pretty]">
            Web applications, the APIs behind them, and tools that cut down repetitive work.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Server;
            return (
              <Card
                key={service.title}
                className="rounded-2xl p-6 surface-chip"
              >
                <CardContent className="p-0">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 bg-white/[0.04] mb-6">
                    <Icon className="w-4 h-4 text-[var(--film-amber)]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-body)] text-lg font-semibold leading-[1.4] tracking-normal text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[15px] leading-[1.7] text-muted [text-wrap:pretty]">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
