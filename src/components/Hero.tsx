import { site } from "@/config/site";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${site.hero.image}')` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/55 to-[#0A0A0A]" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center text-[#F5F0EB] sm:px-8">
        <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
          Mérida · Yucatán
        </p>
        <h1 className="font-serif text-4xl leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl">
          {site.hero.headline}
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-[#F5F0EB]/75 sm:text-lg">
          {site.hero.subtitle}
        </p>
        <div className="mt-10 flex justify-center">
          <WhatsAppButton label={site.hero.cta} size="lg" />
        </div>
      </div>
    </section>
  );
}