import { useEffect, useState } from "react";
import { site } from "@/config/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/85 backdrop-blur-md border-b border-[#C9A84C]/15"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <a href="#top" className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C9A84C]/50 font-serif text-[#C9A84C]"
          >
            L
          </span>
          <span className="font-serif text-base tracking-wide text-[#C9A84C] sm:text-lg">
            {site.brand}
          </span>
        </a>
        <a
          href="#contact"
          onClick={handleContact}
          className="rounded-full border border-[#C9A84C] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#C9A84C] transition-colors duration-300 hover:bg-[#C9A84C] hover:text-[#0A0A0A] sm:px-5 sm:text-sm"
        >
          {site.nav.contactCta}
        </a>
      </div>
    </header>
  );
}