import { site } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-[#F5F0EB]/8 bg-[#0A0A0A] py-8">
      <p className="text-center text-xs tracking-wide text-[#F5F0EB]/50">
        {site.footer}
      </p>
    </footer>
  );
}