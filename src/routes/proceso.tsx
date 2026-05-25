import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { site } from "@/config/site";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/proceso")({
  component: ProcesoPage,
  head: () => ({
    meta: [
      { title: `Nuestro Proceso — ${site.brand}` },
      {
        name: "description",
        content:
          "Conoce nuestro proceso de 7 pasos para encontrar tu propiedad ideal en Mérida. Asesoría personalizada, respaldo legal y acompañamiento total.",
      },
      { property: "og:title", content: `Nuestro Proceso — ${site.brand}` },
      {
        property: "og:description",
        content:
          "Un proceso de lujo en 7 pasos: desde el formulario inicial hasta la entrega de llaves.",
      },
    ],
  }),
});

function ProcesoPage() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F0EB]">
      <Navbar />

      {/* Page hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-[#0A0A0A] pt-24">
        <div className="absolute inset-1/3 -translate-x-1/2 -translate-y-1/2 bg-[#C9A84C]/5 blur-[120px] rounded-full" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center sm:px-8">
          <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
            {site.process.subtitle}
          </p>
          <h1 className="font-serif text-4xl leading-[1.1] text-[#F5F0EB] sm:text-5xl md:text-6xl">
            {site.process.title}
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-[#F5F0EB]/60 sm:text-lg">
            Un proceso de lujo diseñado para que encuentres tu propiedad ideal
            en Mérida con total tranquilidad y respaldo de especialistas.
          </p>
        </div>
      </section>

      <ProcessTimeline />

      {/* Final CTA */}
      <section className="bg-[#0A0A0A] py-28 sm:py-36">
        <div
          ref={ref}
          className={`mx-auto max-w-3xl px-6 text-center transition-all duration-700 sm:px-8 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h2 className="font-serif text-3xl leading-[1.1] text-[#F5F0EB] sm:text-4xl md:text-5xl">
            {site.process.ctaHeadline}
          </h2>
          <p className="mt-6 text-base text-[#F5F0EB]/60 sm:text-lg">
            {site.process.ctaSubtitle}
          </p>
          <div className="mt-12 flex justify-center">
            <WhatsAppButton size="lg" />
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
