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
            <div className="section-label mb-5">Services</div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tighter leading-tight text-white">
              What I can build for you.
            </h2>
          </div>
          <p className="text-sm font-light max-w-xs md:text-right text-muted">
            From custom web apps and POS systems to backend APIs, mobile
            integration, and workflow automation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Server;
            return (
              <Card
                key={service.title}
                className="rounded-2xl p-6 card-hover surface-chip"
              >
                <CardContent className="p-0">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 bg-white/[0.04] mb-6">
                    <Icon className="w-4 h-4 text-[var(--sage)]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[13px] font-light leading-relaxed text-muted">
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
