import { whatsappUrl, site } from "@/config/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface Props {
  label?: string;
  className?: string;
  size?: "md" | "lg";
}

export function WhatsAppButton({ label = site.whatsappCtaLabel, className = "", size = "md" }: Props) {
  const sizing = size === "lg" ? "px-8 py-5 text-base" : "px-6 py-3.5 text-sm";
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 rounded-full font-medium tracking-wide text-white shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl ${sizing} ${className}`}
      style={{ backgroundColor: "#25D366" }}
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span>{label}</span>
    </a>
  );
}