import { whatsappUrl, site } from "@/config/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={site.whatsappCtaLabel}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl shadow-black/40 transition-transform duration-300 hover:scale-110 sm:h-16 sm:w-16"
      style={{ backgroundColor: "#25D366" }}
    >
      <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  );
}