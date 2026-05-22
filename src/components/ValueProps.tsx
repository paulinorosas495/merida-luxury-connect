import { UserRound, Handshake, Scale, Sparkles, type LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";
import { useReveal } from "@/hooks/useReveal";

const iconMap: Record<string, LucideIcon> = {
  user: UserRound,
  handshake: Handshake,
  scale: Scale,
  sparkles: Sparkles,
};

export function ValueProps() {
  return (
    <section id="values" className="bg-[#1C1C1C] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
            Nuestra propuesta de valor
          </p>
          <h2 className="font-serif text-3xl text-[#F5F0EB] sm:text-4xl md:text-5xl">
            Un acompañamiento que marca la diferencia
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.values.map((v, i) => {
            const Icon = iconMap[v.icon] ?? Sparkles;
            return (
              <ValueCard
                key={v.slug}
                slug={v.slug}
                title={v.title}
                Icon={Icon}
                delay={i * 100}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  slug,
  title,
  Icon,
  delay,
}: {
  slug: string;
  title: string;
  Icon: LucideIcon;
  delay: number;
}) {
  const { ref, visible } = useReveal<HTMLAnchorElement>();
  return (
    <Link
      to="/valor/$slug"
      params={{ slug }}
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative flex flex-col items-start gap-5 border border-[#F5F0EB]/8 bg-[#0A0A0A]/40 p-8 transition-all duration-700 hover:border-[#C9A84C]/40 hover:-translate-y-1 focus-visible:outline-none focus-visible:border-[#C9A84C] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A84C]/40 text-[#C9A84C] transition-colors group-hover:bg-[#C9A84C] group-hover:text-[#0A0A0A]">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </span>
      <h3 className="font-serif text-lg leading-snug text-[#F5F0EB]">{title}</h3>
      <ArrowUpRight
        className="absolute right-6 top-6 h-4 w-4 text-[#C9A84C] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={1.5}
      />
    </Link>
  );
}