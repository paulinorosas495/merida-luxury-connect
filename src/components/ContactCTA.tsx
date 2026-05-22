import { site } from "@/config/site";
import { WhatsAppButton } from "./WhatsAppButton";
import { useReveal } from "@/hooks/useReveal";

export function ContactCTA() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="bg-[#0A0A0A] py-28 sm:py-36">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl px-6 text-center transition-all duration-700 sm:px-8 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <p className="mb-5 text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
          Contacto
        </p>
        <h2 className="font-serif text-4xl leading-[1.1] text-[#F5F0EB] sm:text-5xl md:text-6xl">
          {site.contact.headline}
        </h2>
        <p className="mt-6 text-base text-[#F5F0EB]/60 sm:text-lg">
          {site.contact.subtitle}
        </p>
        <div className="mt-12 flex justify-center">
          <WhatsAppButton size="lg" />
        </div>
      </div>
    </section>
  );
}