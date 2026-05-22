import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ValueProps } from "@/components/ValueProps";
import { WhyUs } from "@/components/WhyUs";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Long Term Rentals Mérida — Renta de propiedades con asesoría exclusiva" },
      {
        name: "description",
        content:
          "Servicio exclusivo para encontrar tu renta perfecta en Mérida. Asesoría personalizada, respaldo legal y acompañamiento total hasta entregarte las llaves.",
      },
      { property: "og:title", content: "Long Term Rentals Mérida" },
      {
        property: "og:description",
        content:
          "Te acompañamos desde el primer contacto hasta las llaves en tu mano. Sin intermediarios. Respuesta inmediata por WhatsApp.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-[#0A0A0A] text-[#F5F0EB]">
      <Navbar />
      <Hero />
      <ValueProps />
      <WhyUs />
      <ContactCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
