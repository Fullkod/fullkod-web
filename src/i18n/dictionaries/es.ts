// Spanish copy (default language). `en.ts` must have exactly the same shape.
// The FAQ answers are a draft: review them before publishing (especially pricing,
// code ownership and support, which are commitments to the client).

export const es = {
  meta: {
    title: "Fullkod — Software a medida para tu negocio",
    titleTemplate: "%s · Fullkod",
    description:
      "Aplicaciones web y móviles a medida, SaaS, e-commerce y automatización para tu negocio. De la primera idea a la operación diaria, con un solo equipo.",
    keywords: [
      "software a medida",
      "desarrollo de aplicaciones",
      "aplicaciones web",
      "apps móviles",
      "SaaS",
      "e-commerce",
      "automatización",
    ],
    openGraphLocale: "es_ES",
    skipLink: "Saltar al contenido",
    caseStudy: "caso de estudio",
    ogEyebrow: "Software a medida",
    ogLine: "fullkod.com · Para negocios de todo el mundo",
  },

  header: {
    homeLabel: "Fullkod, inicio",
    mainNav: "Principal",
    mobileNav: "Móvil",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    cta: "Hablemos",
    languageLabel: "Idioma",
    links: {
      projects: "Proyectos",
      services: "Servicios",
      process: "Cómo trabajamos",
      team: "Equipo",
      faq: "Preguntas",
    },
  },

  footer: {
    blurb:
      "Para negocios de todo el mundo. Construimos aplicaciones completas para tu negocio: desde la primera idea hasta la operación diaria, con un solo equipo responsable de todo.",
    projects: "Proyectos",
    company: "Fullkod",
    contact: "Contacto",
    services: "Servicios",
    team: "Equipo",
    faq: "Preguntas frecuentes",
    contactLink: "Contacto",
    writeUs: "Escríbenos",
    rights: "© 2026 Fullkod. Todos los derechos reservados.",
    legalNotice: "Aviso legal",
    privacy: "Privacidad",
    cookies: "Cookies",
  },

  home: {
    hero: {
      eyebrow: "Software a medida · Para todo el mundo",
      line1: "Full solutions.",
      line2: "Fully coded.",
      text: "Construimos aplicaciones completas para tu negocio: desde la primera idea hasta la operación diaria, con un solo equipo responsable de todo.",
      ctaPrimary: "Cuéntanos tu proyecto",
      ctaSecondary: "Ver proyectos →",
    },
    sectors: [
      "Ópticas",
      "Clínicas",
      "Peluquerías",
      "Repartos",
      "E-commerce",
      "Turnos",
      "Automatización",
      "IA",
    ],
    projects: {
      eyebrow: "Proyectos",
      title: "Software real, en uso todos los días",
      viewCase: "Ver caso →",
      screenOf: "Pantalla de {name}",
    },
    services: {
      eyebrow: "Servicios",
      title: "Un solo equipo para toda la solución",
      items: [
        {
          title: "Aplicaciones web y móviles",
          text: "Paneles, portales y apps Android/iOS diseñados alrededor de cómo trabaja tu equipo.",
        },
        {
          title: "Plataformas SaaS y e-commerce",
          text: "Multiempresa, pagos, pedidos y reportes propios, sin depender de plantillas cerradas.",
        },
        {
          title: "Automatización e IA",
          text: "Procesos repetitivos convertidos en flujos que funcionan solos, con asistentes que usan tus datos.",
        },
        {
          title: "Integraciones y mantenimiento",
          text: "Conectamos tu software con lo que ya usas, y lo mantenemos vivo y mejorando.",
        },
      ],
      stackTitle: "Con qué trabajamos",
    },
    process: {
      eyebrow: "Cómo trabajamos",
      title: "Claro desde el primer día",
      steps: [
        {
          title: "Escuchamos",
          text: "Entendemos el negocio y qué significa «listo» para ti antes de escribir una línea de código.",
        },
        {
          title: "Construimos",
          text: "Entregas cortas y revisables. Ves avances reales cada semana, no al final.",
        },
        {
          title: "Acompañamos",
          text: "Despliegue, formación y soporte. El software sigue creciendo con tu negocio.",
        },
      ],
    },
    team: {
      eyebrow: "Quiénes somos",
      title: "Un equipo pequeño que responde por todo",
      text: "En Fullkod hacemos software completo para cualquier negocio, esté donde esté. Hablas siempre con quien construye tu proyecto: sin intermediarios y sin pasar la pelota.",
    },
    clients: {
      eyebrow: "Clientes",
      title: "Lo que dicen quienes ya usan nuestras apps",
      // Same order as TESTIMONIALS in src/lib/testimonials.ts.
      testimonials: [
        {
          quote:
            "Para mí ha sido súper útil. Antes llevaba los turnos de Espiral Studio en un calendario de Google, apuntando y moviendo todo a mano. Ahora lo tengo ordenado en un solo lugar y es muchísimo más cómodo.",
          role: "Dueña de Espiral Studio",
        },
        {
          quote:
            "Lo veo súper completo. Antes llevaba todo el negocio en una libreta física, y ahora tengo en un solo sistema lo que necesito para trabajar en la óptica.",
          role: "Dueño de una óptica que usa LensSpace",
        },
      ],
      translatedNote: null as string | null,
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Lo que suelen preguntarnos",
      noAnswer: "¿No está tu duda?",
      writeUs: "Escríbenos",
      items: [
        {
          question: "¿Cuánto cuesta un proyecto?",
          answer:
            "Depende del alcance. Tras una primera conversación te enviamos una propuesta por escrito con lo que incluye, los plazos y el presupuesto, para que decidas con toda la información.",
        },
        {
          question: "¿Cuánto se tarda en tener algo funcionando?",
          answer:
            "Trabajamos en entregas cortas: la primera versión usable llega pronto y a partir de ahí crece con lo que vas probando. El plazo total depende del alcance y lo fijamos en la propuesta.",
        },
        {
          question: "¿De quién es el código?",
          answer:
            "Tuyo. Al terminar te entregamos el código y el acceso a la infraestructura, para que no dependas de nosotros si algún día quieres cambiar de equipo.",
        },
        {
          question: "¿Qué pasa después del lanzamiento?",
          answer:
            "Seguimos contigo: corregimos errores, vigilamos que todo funcione y añadimos mejoras. Podemos acordar un plan de mantenimiento o trabajar por encargo.",
        },
        {
          question: "¿Trabajáis con negocios de otros países?",
          answer: "Sí. Trabajamos en remoto con negocios de cualquier país.",
        },
        {
          question: "¿Con qué tecnologías trabajáis?",
          answer:
            "Principalmente Next.js, React y TypeScript para la web, Supabase y PostgreSQL para los datos y Capacitor para las apps Android e iOS. Elegimos lo que mejor encaje con tu caso.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Tienes un negocio que necesita software a medida?",
      text: "Cuéntanos qué quieres resolver. Te respondemos con preguntas concretas y, si encaja, con una propuesta por escrito.",
    },
  },

  form: {
    name: "Nombre",
    namePlaceholder: "Tu nombre",
    email: "Correo",
    emailPlaceholder: "tu@correo.com",
    company: "Empresa o negocio (opcional)",
    companyPlaceholder: "Nombre del negocio",
    message: "¿Qué necesitas?",
    messagePlaceholder: "Cuéntanos tu negocio y qué te gustaría resolver.",
    honeypot: "Sitio web",
    privacyPrefix: "He leído y acepto la",
    privacyLink: "política de privacidad",
    submit: "Enviar mensaje",
    sending: "Enviando…",
    whatsapp: "o escríbenos por WhatsApp →",
    whatsappText: "Hola, quiero hablar de un proyecto con Fullkod.",
    sentTitle: "¡Mensaje recibido!",
    sentText: "Gracias por escribirnos. Te respondemos en cuanto lo leamos.",
    errorDefault: "No pudimos enviar el mensaje.",
    errorNetwork: "No hay conexión. Inténtalo de nuevo en un momento.",
    errorEmailHint: "También puedes escribirnos a",
  },

  // Messages returned by the contact API.
  api: {
    badFormat: "Formato no válido.",
    missingFields: "Completa tu nombre y cuéntanos un poco más.",
    invalidEmail: "Revisa el correo: no parece válido.",
    privacyRequired: "Necesitamos que aceptes la política de privacidad.",
    inactive: "El formulario aún no está activo. Vuelve a intentarlo pronto.",
    sendFailed: "No pudimos enviar el mensaje. Inténtalo de nuevo en un momento.",
    subject: "Nuevo contacto desde la web: {name}",
    labelName: "Nombre",
    labelEmail: "Correo",
    labelCompany: "Empresa",
  },

  gallery: {
    mobileHeading: "En el móvil",
    enlarge: "Ampliar: {alt}",
    close: "Cerrar",
    previous: "Anterior",
    next: "Siguiente",
  },

  project: {
    back: "← Proyectos",
    caseStudy: "Caso de estudio",
    platforms: "Plataformas",
    status: "Estado",
    challenge: "El reto",
    solution: "La solución",
    result: "El resultado",
    screens: "Así se ve",
    stack: "Con qué lo construimos",
    nextProject: "Siguiente proyecto",
    cta: "Quiero algo así",
  },

  notFound: {
    title: "Esta página no existe",
    text: "Puede que el enlace esté mal o que la hayamos movido.",
    back: "Volver al inicio",
  },

  legal: {
    eyebrow: "Legal",
    lastUpdated: "Última actualización: {date}",
    updatedAt: "22 de octubre de 2026",
    draftNote:
      "Borrador: este texto está pendiente de completar y revisar. Los datos marcados como «[pendiente]» se añadirán antes de publicar la web.",
    pending: "[pendiente]",
    noticeTitle: "Aviso legal",
    privacyTitle: "Política de privacidad",
    cookiesTitle: "Política de cookies",
  },
};

export type Dictionary = typeof es;
