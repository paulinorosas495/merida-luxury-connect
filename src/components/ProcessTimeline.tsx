import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ClipboardList,
  Search,
  CreditCard,
  TrendingUp,
  Scale,
  Calculator,
  Key,
  type LucideIcon,
} from "lucide-react";
import { site } from "@/config/site";

const iconMap: Record<string, LucideIcon> = {
  "clipboard-list": ClipboardList,
  search: Search,
  "credit-card": CreditCard,
  "trending-up": TrendingUp,
  scale: Scale,
  calculator: Calculator,
  key: Key,
};

function TimelineStep({
  step,
  index,
}: {
  step: (typeof site.process.steps)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = iconMap[step.icon] ?? Search;
  const isEven = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`relative flex items-start md:items-center ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Number circle on the line */}
      <div className="absolute left-[19px] top-0 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#C9A84C] bg-[#0A0A0A] font-serif text-sm text-[#C9A84C] md:left-1/2 md:top-1/2 md:-translate-y-1/2">
        {step.number}
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={isInView ? { opacity: 1, y: 1 } : { opacity: 1 }}
        className={`ml-14 w-full md:ml-0 md:w-1/2 ${
          isEven ? "md:pl-16 md:pr-0" : "md:pr-16 md:pl-0"
        }`}
      >
        <div className="group relative border border-[#C9A84C]/20 bg-[#0A0A0A]/60 p-6 backdrop-blur-sm transition-all duration-500 hover:border-[#C9A84C]/70 sm:p-8">
          {/* Specialist badge */}
          <span className="mb-4 inline-block rounded-full border border-[#C9A84C]/25 bg-[#C9A84C]/8 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#C9A84C]">
            {step.specialist}
          </span>

          {/* Icon */}
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A84C]/30 text-[#C9A84C] transition-colors group-hover:bg-[#C9A84C] group-hover:text-[#0A0A0A]">
            <Icon className="h-5 w-5" strokeWidth={1.5} />
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl leading-snug text-[#F5F0EB] sm:text-2xl">
            {step.title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm leading-relaxed text-[#F5F0EB]/60 sm:text-base">
            {step.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function ProcessTimeline() {
  return (
    <section className="relative bg-[#0A0A0A] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
            {site.process.subtitle}
          </p>
          <h2 className="font-serif text-3xl leading-[1.15] text-[#F5F0EB] sm:text-4xl md:text-5xl">
            {site.process.title}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - mobile (left aligned) */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-[#C9A84C]/25 md:hidden" />

          {/* Vertical line - desktop (centered) */}
          <div className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-[#C9A84C]/25 md:block" />

          <div className="flex flex-col gap-10 md:gap-16">
            {site.process.steps.map((step, i) => (
              <TimelineStep key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
