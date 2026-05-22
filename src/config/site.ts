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
    {
      slug: "asesoria-personalizada",
      title: "Asesoría Personalizada",
      icon: "user",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
      body:
        "Contamos con personas que llevan años en el mercado inmobiliario de Mérida. Gracias a nuestra investigación de mercado y análisis constante de las opciones disponibles, podemos alinear con precisión lo que realmente buscas — no lo que el mercado quiere venderte. Entendemos tus prioridades, tu presupuesto y tu estilo de vida para presentarte únicamente las opciones que tienen sentido para ti.",
    },
    {
      slug: "proceso-acompanado",
      title: "Proceso 100% Acompañado",
      icon: "handshake",
      image:
        "https://images.unsplash.com/photo-1613553497126-a44624272024?auto=format&fit=crop&w=2000&q=80",
      body:
        "Sabemos que rentar una propiedad puede generar incertidumbre. Por eso contamos con un equipo disponible para ti las 24 horas, los 7 días de la semana. Desde el primer contacto hasta el día que recibes tus llaves, nunca estarás solo. Siempre habrá alguien de nuestro equipo listo para resolver tus dudas, guiarte en cada paso y darte la tranquilidad que mereces.",
    },
    {
      slug: "equipo-legal",
      title: "Respaldado por un Equipo Legal Especializado",
      icon: "scale",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=80",
      body:
        "Trabajamos con abogados y notarios especializados en bienes raíces que redactan y revisan cada contrato buscando el beneficio mutuo de todas las partes. Nuestras estrategias legales están diseñadas para protegerte, darte certeza jurídica y garantizar que cada acuerdo sea claro, justo y sin sorpresas.",
    },
    {
      slug: "servicio-de-calidad",
      title: "Servicio de Calidad",
      icon: "sparkles",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80",
      body:
        "Nuestros clientes son personas exclusivas y así los tratamos desde el primer día. Pensamos en tus intereses antes que en cualquier otra cosa. Por eso únicamente trabajamos con profesionales altamente capacitados — desde abogados que revisan cada documento hasta asesores que conocen el mercado a fondo. Tu bienestar no es una promesa, es nuestra forma de trabajar.",
    },
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