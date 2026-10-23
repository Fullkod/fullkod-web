// Shared copy for the home page: services, process, team and FAQ.
// The FAQ answers are a draft: review them before publishing (especially pricing,
// code ownership and support, which are commitments to the client).

export const SERVICES = [
  {
    number: "01",
    title: "Aplicaciones web y móviles",
    text:
      "Paneles, portales y apps Android/iOS diseñados alrededor de cómo trabaja tu equipo.",
  },
  {
    number: "02",
    title: "Plataformas SaaS y e-commerce",
    text:
      "Multiempresa, pagos, pedidos y reportes propios, sin depender de plantillas cerradas.",
  },
  {
    number: "03",
    title: "Automatización e IA",
    text:
      "Procesos repetitivos convertidos en flujos que funcionan solos, con asistentes que usan tus datos.",
  },
  {
    number: "04",
    title: "Integraciones y mantenimiento",
    text:
      "Conectamos tu software con lo que ya usas, y lo mantenemos vivo y mejorando.",
  },
];

export const STEPS = [
  {
    title: "Escuchamos",
    text:
      "Entendemos el negocio y qué significa «listo» para ti antes de escribir una línea de código.",
  },
  {
    title: "Construimos",
    text:
      "Entregas cortas y revisables. Ves avances reales cada semana, no al final.",
  },
  {
    title: "Acompañamos",
    text:
      "Despliegue, formación y soporte. El software sigue creciendo con tu negocio.",
  },
];

// Sectors scrolling in the marquee.
export const SECTORS = [
  "Ópticas",
  "Clínicas",
  "Peluquerías",
  "Repartos",
  "E-commerce",
  "Turnos",
  "Automatización",
  "IA",
];

// `role` and `photo` stay null until confirmed; the card shows initials meanwhile.
export const TEAM = [
  {
    name: "Roberto Cabrera",
    initials: "RC",
    role: null as string | null,
    photo: null as string | null,
  },
  {
    name: "Claudia Rodríguez",
    initials: "CR",
    role: null as string | null,
    photo: null as string | null,
  },
];

export const TECHNOLOGIES = [
  "Next.js",
  "React",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "Capacitor",
  "Tailwind CSS",
  "Vercel",
];

export const FAQ = [
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
    answer:
      "Sí. Trabajamos en remoto con negocios de cualquier país.",
  },
  {
    question: "¿Con qué tecnologías trabajáis?",
    answer:
      "Principalmente Next.js, React y TypeScript para la web, Supabase y PostgreSQL para los datos y Capacitor para las apps Android e iOS. Elegimos lo que mejor encaje con tu caso.",
  },
];
