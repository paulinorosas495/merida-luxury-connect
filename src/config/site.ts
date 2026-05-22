export const site = {
  brand: "Long Term Rentals Mérida",
  whatsappNumber: "5610829875",
  whatsappMessage: "Encontrar la propiedad que se ajuste a mis necesidades",
  whatsappCtaLabel: "Contáctame por WhatsApp",
  nav: {
    contactCta: "Contact Us",
  },
  hero: {
    headline:
      "Un servicio exclusivo que resuelve tus problemas al encontrar propiedades en renta",
    subtitle:
      "Te ayudamos a encontrar la renta perfecta en Mérida, sin complicaciones — desde entender lo que necesitas hasta el proceso de papeles y entregarte tus llaves.",
    cta: "Talk to an advisor on WhatsApp",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80",
  },
  values: [
    { title: "Asesoría personalizada", icon: "user" },
    { title: "Proceso 100% acompañado", icon: "handshake" },
    { title: "Respaldado por un equipo legal especializado", icon: "scale" },
    { title: "Servicio de calidad", icon: "sparkles" },
  ],
  whyUs: {
    title: "Why Us?",
    body: "El mercado inmobiliario de hoy está lleno de intermediarios que priorizan su comisión sobre tus intereses. En Long Term Rentals Mérida hacemos lo opuesto: te acompañamos desde el primer contacto hasta que tienes las llaves en la mano, con transparencia total, asesoría legal y un servicio que realmente resuelve — porque sabemos que un mal proceso hoy puede costarte el doble mañana.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
  },
  contact: {
    headline: "Da el primer paso. Nosotros hacemos el resto.",
    subtitle: "Sin formularios. Sin esperas. Respuesta inmediata.",
  },
  footer: "© 2025 Long Term Rentals Mérida",
};

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;