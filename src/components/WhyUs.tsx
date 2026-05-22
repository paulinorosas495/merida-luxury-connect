import { site } from "@/config/site";
import { useReveal } from "@/hooks/useReveal";

export function WhyUs() {
  const text = useReveal<HTMLDivElement>();
  const img = useReveal<HTMLDivElement>();
  return (
    <section className="bg-[#0A0A0A] py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div
          ref={text.ref}
          className={`transition-all duration-700 ${
            text.visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
            {site.whyUs.title}
          </p>
          <h2 className="font-serif text-3xl text-[#F5F0EB] sm:text-4xl md:text-5xl">
            Acompañamiento real, no intermediarios.
          </h2>
          <div className="mt-6 h-px w-16 bg-[#C9A84C]" />
          <p className="mt-8 text-base leading-relaxed text-[#F5F0EB]/75 sm:text-lg">
            {site.whyUs.body}
          </p>
        </div>
        <div
          ref={img.ref}
          className={`relative aspect-[4/5] overflow-hidden transition-all duration-1000 ${
            img.visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <img
            src={site.whyUs.image}
            alt="Propiedad de lujo en renta"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#C9A84C]/20" />
        </div>
      </div>
    </section>
  );
}