// Proyectos que muestra la web y sus casos de estudio.
// Los textos salen de los README de cada repo. `resultado` queda en null hasta tener datos reales
// (clientes, uso, cifras): la página del caso solo muestra esa sección cuando hay contenido.
// Las capturas reales sustituirán a los bocetos (`Mockup`) cuando estén.

export type Proyecto = {
  slug: string;
  nombre: string;
  sector: string;
  resumen: string;
  etiquetas: string[];
  plataformas: string[];
  estado: string | null;
  reto: string;
  solucion: string[];
  resultado: string | null;
  tecnologias: string[];
  mockup: {
    tipo: "panel" | "movil";
    acento: string;
    fondo: string;
    texto: string;
  };
};

export const PROYECTOS: Proyecto[] = [
  {
    slug: "lensspace",
    nombre: "LensSpace",
    sector: "Ópticas",
    resumen:
      "Gestión completa para ópticas: clientes, recetas, ventas, pagos, producción y entregas, en un solo panel.",
    etiquetas: ["Multiempresa", "Pagos", "Producción"],
    plataformas: ["Web"],
    estado: null,
    reto:
      "Una óptica reparte su trabajo entre la ficha del cliente, la receta, la venta, el laboratorio y la entrega. Llevarlo en papel o en hojas sueltas hace que se pierdan pedidos y que nadie sepa en qué punto está cada encargo.",
    solucion: [
      "Ficha única por cliente con su historial de recetas.",
      "Ventas y pagos enlazados a cada encargo.",
      "Seguimiento de producción hasta la entrega, con avisos al cliente.",
      "Varias ópticas en la misma plataforma, cada una con sus datos aislados.",
    ],
    resultado: null,
    tecnologias: ["Next.js", "Supabase", "Vercel"],
    mockup: { tipo: "panel", acento: "#F2B705", fondo: "#FDF6DD", texto: "#17132A" },
  },
  {
    slug: "turno-flash",
    nombre: "Turno Flash",
    sector: "Pequeños negocios",
    resumen:
      "Turnos y venta de pasajes para peluquerías, barberías, clínicas y transportistas: panel web, app Android y página pública de reservas.",
    etiquetas: ["Turnos", "Android", "WhatsApp"],
    plataformas: ["Web", "Android"],
    estado: "En producción · web y Google Play",
    reto:
      "Los pequeños negocios gestionaban citas y plazas por mensajes sueltos. Se olvidaban turnos, los clientes no confirmaban y los transportistas no sabían cuántas plazas les quedaban.",
    solucion: [
      "Agenda por día y por profesional, con los estados de cada turno.",
      "Página pública para que los clientes reserven solos.",
      "Recordatorios y confirmaciones automáticas por WhatsApp.",
      "Módulo de pasajes: salidas, plazas, puntos de recogida y lista de pasajeros.",
      "Planes por negocio con prueba gratuita.",
    ],
    resultado: null,
    tecnologias: ["Next.js", "Supabase", "Capacitor", "WhatsApp"],
    mockup: { tipo: "movil", acento: "#F2B705", fondo: "#17132A", texto: "#FFFFFF" },
  },
  {
    slug: "turnia",
    nombre: "Turnia",
    sector: "Salud",
    resumen:
      "Turnos y horarios para entornos de salud: calendario interactivo, roles y exportación, en web y apps iOS y Android.",
    etiquetas: ["Calendario", "Roles", "iOS y Android"],
    plataformas: ["Web", "iOS", "Android"],
    estado: null,
    reto:
      "Organizar los turnos de un equipo sanitario es un rompecabezas que cambia cada semana. Las planillas compartidas generan conflictos y el personal no siempre ve su horario actualizado.",
    solucion: [
      "Calendario de turnos interactivo para todo el equipo.",
      "Roles diferenciados: administración, responsables, personal y consulta.",
      "Notificaciones cuando cambia un turno.",
      "Exportación de horarios y apps nativas para consultarlos desde el móvil.",
    ],
    resultado: null,
    tecnologias: ["Next.js", "Supabase", "Capacitor", "FullCalendar"],
    mockup: { tipo: "panel", acento: "#5B21B6", fondo: "#EFEAFB", texto: "#17132A" },
  },
  {
    slug: "follow-it",
    nombre: "Follow It",
    sector: "Logística",
    resumen:
      "Gestión de repartos con tres roles —negocio, mensajero y cliente— en web y apps Android/iOS.",
    etiquetas: ["Repartos", "Multiempresa", "Móvil"],
    plataformas: ["Web", "Android", "iOS"],
    estado: "En desarrollo",
    reto:
      "Un negocio con reparto propio necesita saber qué mensajero lleva cada pedido y en qué estado está, sin llamadas ni mensajes cruzados.",
    solucion: [
      "Cuentas separadas por negocio, con sus datos aislados.",
      "Alta de mensajeros mediante invitaciones con código.",
      "Acceso por rol para negocio y mensajero.",
      "En desarrollo: pedidos con estados, asignación, seguimiento en el mapa y comprobante de entrega.",
    ],
    resultado: null,
    tecnologias: ["Next.js", "Supabase", "Capacitor"],
    mockup: { tipo: "movil", acento: "#F2B705", fondo: "#5B21B6", texto: "#FFFFFF" },
  },
  {
    slug: "klaushop",
    nombre: "klauShop",
    sector: "Comercio",
    resumen:
      "Tienda en línea con pedidos confirmados por WhatsApp y panel para gestionar productos, colecciones y pedidos.",
    etiquetas: ["E-commerce", "WhatsApp", "Panel de gestión"],
    plataformas: ["Web"],
    estado: null,
    reto:
      "Vender en línea donde los pagos con tarjeta no siempre son posibles: la tienda tenía que reservar el pedido y cerrarlo por el canal que ya usan los clientes.",
    solucion: [
      "Catálogo con búsqueda y colecciones.",
      "Carrito que se conserva al iniciar sesión.",
      "Pedido reservado en la tienda y confirmado por WhatsApp.",
      "Panel para gestionar productos, colecciones, usuarios y pedidos.",
    ],
    resultado: null,
    tecnologias: ["Next.js", "Supabase", "GraphQL"],
    mockup: { tipo: "panel", acento: "#5B21B6", fondo: "#FDF6DD", texto: "#17132A" },
  },
];

export function buscarProyecto(slug: string) {
  return PROYECTOS.find((p) => p.slug === slug);
}
