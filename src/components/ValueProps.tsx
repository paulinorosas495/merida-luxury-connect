import { UserRound, Handshake, Scale, Sparkles, type LucideIcon } from "lucide-react";
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
    <section className="bg-[#1C1C1C] py-24 sm:py-32">
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
            return <ValueCard key={v.title} title={v.title} Icon={Icon} delay={i * 100} />;
          })}
        </div>
      </div>
    </section>
  );
}

function ValueCard({ title, Icon, delay }: { title: string; Icon: LucideIcon; delay: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group flex flex-col items-start gap-5 border border-[#F5F0EB]/8 bg-[#0A0A0A]/40 p-8 transition-all duration-700 hover:border-[#C9A84C]/40 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A84C]/40 text-[#C9A84C] transition-colors group-hover:bg-[#C9A84C] group-hover:text-[#0A0A0A]">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </span>
      <h3 className="font-serif text-lg leading-snug text-[#F5F0EB]">{title}</h3>
    </div>
  );
}