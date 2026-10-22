// Textos compartidos de la página de inicio: servicios, proceso, equipo y preguntas frecuentes.
// Las respuestas del FAQ son un borrador: revisarlas antes de publicar (sobre todo precios,
// propiedad del código y soporte, que son compromisos con el cliente).

export const SERVICIOS = [
  {
    n: "01",
    titulo: "Aplicaciones web y móviles",
    texto:
      "Paneles, portales y apps Android/iOS diseñados alrededor de cómo trabaja tu equipo.",
  },
  {
    n: "02",
    titulo: "Plataformas SaaS y e-commerce",
    texto:
      "Multiempresa, pagos, pedidos y reportes propios, sin depender de plantillas cerradas.",
  },
  {
    n: "03",
    titulo: "Automatización e IA",
    texto:
      "Procesos repetitivos convertidos en flujos que funcionan solos, con asistentes que usan tus datos.",
  },
  {
    n: "04",
    titulo: "Integraciones y mantenimiento",
    texto:
      "Conectamos tu software con lo que ya usas, y lo mantenemos vivo y mejorando.",
  },
];

export const PASOS = [
  {
    titulo: "Escuchamos",
    texto:
      "Entendemos el negocio y qué significa «listo» para ti antes de escribir una línea de código.",
  },
  {
    titulo: "Construimos",
    texto:
      "Entregas cortas y revisables. Ves avances reales cada semana, no al final.",
  },
  {
    titulo: "Acompañamos",
    texto:
      "Despliegue, formación y soporte. El software sigue creciendo con tu negocio.",
  },
];

export const AMBITOS = [
  "Ópticas",
  "Clínicas",
  "Peluquerías",
  "Repartos",
  "E-commerce",
  "Turnos",
  "Automatización",
  "IA",
];

// `rol` y `foto` en null hasta que los confirméis; la tarjeta muestra iniciales mientras tanto.
export const EQUIPO = [
  {
    nombre: "Roberto Cabrera",
    iniciales: "RC",
    rol: null as string | null,
    foto: null as string | null,
  },
  {
    nombre: "Claudia Rodríguez",
    iniciales: "CR",
    rol: null as string | null,
    foto: null as string | null,
  },
];

export const TECNOLOGIAS = [
  "Next.js",
  "React",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "Capacitor",
  "Tailwind CSS",
  "Vercel",
];

export const PREGUNTAS = [
  {
    pregunta: "¿Cuánto cuesta un proyecto?",
    respuesta:
      "Depende del alcance. Tras una primera conversación te enviamos una propuesta por escrito con lo que incluye, los plazos y el presupuesto, para que decidas con toda la información.",
  },
  {
    pregunta: "¿Cuánto se tarda en tener algo funcionando?",
    respuesta:
      "Trabajamos en entregas cortas: la primera versión usable llega pronto y a partir de ahí crece con lo que vas probando. El plazo total depende del alcance y lo fijamos en la propuesta.",
  },
  {
    pregunta: "¿De quién es el código?",
    respuesta:
      "Tuyo. Al terminar te entregamos el código y el acceso a la infraestructura, para que no dependas de nosotros si algún día quieres cambiar de equipo.",
  },
  {
    pregunta: "¿Qué pasa después del lanzamiento?",
    respuesta:
      "Seguimos contigo: corregimos errores, vigilamos que todo funcione y añadimos mejoras. Podemos acordar un plan de mantenimiento o trabajar por encargo.",
  },
  {
    pregunta: "¿Trabajáis fuera de España?",
    respuesta:
      "Sí. Trabajamos en remoto con negocios de España y Latinoamérica, en español.",
  },
  {
    pregunta: "¿Con qué tecnologías trabajáis?",
    respuesta:
      "Principalmente Next.js, React y TypeScript para la web, Supabase y PostgreSQL para los datos y Capacitor para las apps Android e iOS. Elegimos lo que mejor encaje con tu caso.",
  },
];
