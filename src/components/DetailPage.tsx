import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { site } from "@/config/site";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

type Props = {
  title: string;
  body: string;
  image: string;
};

export function DetailPage({ title, body, image }: Props) {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F0EB]">
      <header className="sticky top-0 z-40 border-b border-[#C9A84C]/15 bg-[#0A0A0A]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
          <Link
            to="/"
            hash="values"
            className="group inline-flex items-center gap-2 text-[#C9A84C] transition-colors hover:text-[#F5F0EB]"
          >
            <ArrowLeft
              className="h-5 w-5 transition-transform group-hover:-translate-x-1"
              strokeWidth={1.5}
            />
            <span className="text-xs font-medium uppercase tracking-[0.18em]">Volver</span>
          </Link>
          <span className="font-serif text-base tracking-wide text-[#C9A84C] sm:text-lg">
            {site.brand}
          </span>
          <span className="hidden h-5 w-5 sm:block" aria-hidden />
        </div>
      </header>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative h-[55vh] min-h-[380px] w-full overflow-hidden sm:h-[65vh]">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-4xl px-6 pb-10 sm:px-8 sm:pb-16">
              <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
                Nuestra propuesta de valor
              </p>
              <h1 className="font-serif text-3xl leading-tight text-[#F5F0EB] sm:text-5xl md:text-6xl">
                {title}
              </h1>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
          <p className="font-sans text-base leading-relaxed text-[#F5F0EB]/85 sm:text-lg sm:leading-[1.85]">
            {body}
          </p>
          <div className="mt-12 h-px w-16 bg-[#C9A84C]/60" />
        </div>
      </motion.article>

      <ContactCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}