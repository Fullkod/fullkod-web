// Proyectos que muestra la web y sus casos de estudio.
// Los textos salen de los README de cada repo. `resultado` queda en null hasta tener datos reales
// (clientes, uso, cifras): la página del caso solo muestra esa sección cuando hay contenido.
// `capturas` son pantallas reales (public/sites, con nombres y datos sensibles difuminados); `portada` es la que
// sustituye al boceto (`Mockup`) en la tarjeta y en la cabecera del caso. Sin capturas se usa el boceto.

export type Captura = {
  src: string;
  alt: string;
  tipo: "escritorio" | "movil";
};

type Pantalla = [archivo: string, descripcion: string];

// Construye la lista de capturas a partir de los nombres de archivo (`<prefijo>-<pantalla>.png`;
// la versión móvil lleva el sufijo `-movil`).
function capturas(prefijo: string, escritorio: Pantalla[], movil: Pantalla[] = []): Captura[] {
  return [
    ...escritorio.map(([f, alt]) => ({ src: `/sites/${prefijo}-${f}.png`, alt, tipo: "escritorio" as const })),
    ...movil.map(([f, alt]) => ({ src: `/sites/${prefijo}-${f}-movil.png`, alt, tipo: "movil" as const })),
  ];
}

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
  portada: string | null;
  capturas: Captura[];
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
    portada: "/sites/lensspace-panel.png",
    capturas: capturas(
      "lensspace",
      [
        ["panel", "Panel principal con el resumen del día"],
        ["pedidos", "Pedidos y cobros"],
        ["clientes", "Fichas de clientes"],
        ["recetas", "Historial de recetas"],
        ["venta", "Nueva venta en cuatro pasos"],
        ["produccion", "Producción con proveedores"],
        ["caja", "Caja y cierres"],
        ["catalogo", "Catálogo y precios"],
      ],
      [
        ["panel", "Panel en el móvil"],
        ["pedidos", "Pedidos en el móvil"],
        ["produccion", "Producción en el móvil"],
      ],
    ),
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
    portada: "/sites/turnoflash-panel.png",
    capturas: capturas(
      "turnoflash",
      [
        ["panel", "Resumen del día"],
        ["agenda-semana", "Agenda semanal"],
        ["servicios", "Servicios y precios"],
        ["viaje-detalle", "Salida con reservas de pasajes"],
        ["reportes", "Reportes del negocio"],
        ["reserva-publica", "Página pública de reservas"],
      ],
      [
        ["panel", "Panel en el móvil"],
        ["agenda", "Agenda en el móvil"],
        ["reserva-publica", "Reserva pública en el móvil"],
      ],
    ),
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
    portada: "/sites/turnia-calendario.png",
    capturas: capturas(
      "turnia",
      [
        ["calendario", "Calendario de turnos"],
        ["panel", "Panel de administración"],
        ["agenda", "Agenda del día"],
        ["estadisticas", "Estadísticas"],
      ],
      [
        ["calendario", "Turnos en el móvil"],
        ["panel", "Panel en el móvil"],
      ],
    ),
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
    portada: "/sites/followit-pedidos.png",
    capturas: capturas(
      "followit",
      [
        ["pedidos", "Pedidos del negocio"],
        ["panel", "Panel del negocio"],
        ["detalle-pedido", "Detalle de un pedido"],
      ],
      [
        ["pedidos", "Pedidos en el móvil"],
      ],
    ),
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
    portada: "/sites/klaushop-home.png",
    capturas: capturas(
      "klaushop",
      [
        ["home", "Portada de la tienda"],
        ["shop", "Catálogo"],
        ["product", "Ficha de producto"],
        ["cart", "Carrito con pedido por WhatsApp"],
        ["admin-dashboard", "Panel de administración"],
        ["admin-orders", "Gestión de pedidos"],
        ["admin-products", "Gestión de productos"],
      ],
      [
        ["home", "Tienda en el móvil"],
        ["product", "Producto en el móvil"],
        ["admin-orders", "Pedidos en el móvil"],
      ],
    ),
    mockup: { tipo: "panel", acento: "#5B21B6", fondo: "#FDF6DD", texto: "#17132A" },
  },
  {
    slug: "invoxa",
    nombre: "Invoxa",
    sector: "Gestión interna",
    resumen:
      "Facturación mensual de colaboradores: el administrador pide las facturas y cada persona genera la suya, con número consecutivo y PDF.",
    etiquetas: ["Facturación", "Roles", "PDF"],
    plataformas: ["Web", "Móvil"],
    estado: "En producción",
    reto:
      "Cerrar el mes obligaba a perseguir a cada colaborador por correo para que enviara su factura, con datos fiscales dispersos, numeración manual y errores en los importes según la modalidad de pago.",
    solucion: [
      "Colaboradores, proyectos y modalidad de pago (por hora o fijo mensual) en un solo lugar.",
      "El administrador solicita las facturas de forma individual o en lote, y el colaborador recibe el aviso.",
      "Cada colaborador registra sus tareas, revisa la vista previa agrupada por proyecto y genera su factura en PDF.",
      "Número consecutivo automático, con solicitud y aprobación cuando hay que cambiarlo.",
    ],
    resultado: null,
    tecnologias: ["React", "Vite", "Supabase", "Capacitor"],
    portada: "/sites/invoxa-panel.png",
    capturas: capturas(
      "invoxa",
      [
        ["panel", "Panel del administrador"],
        ["usuarios", "Gestión de colaboradores"],
        ["facturas", "Facturas del mes"],
        ["usuario-inicio", "Inicio del colaborador"],
        ["usuario-factura", "Detalle de una factura"],
        ["usuario-nueva", "Generar la factura del mes"],
      ],
      [
        ["panel", "Panel en el móvil"],
        ["facturas", "Facturas en el móvil"],
        ["usuario-inicio", "Inicio del colaborador en el móvil"],
        ["usuario-nueva", "Generar factura en el móvil"],
      ],
    ),
    mockup: { tipo: "panel", acento: "#F2B705", fondo: "#17132A", texto: "#FFFFFF" },
  },
  {
    slug: "self-inspection",
    nombre: "Self Inspection",
    sector: "Seguridad en obra",
    resumen:
      "Inspecciones de seguridad en obra con checklists, fotos y GPS desde el móvil, informes en PDF y ranking por inspector.",
    etiquetas: ["Inspecciones", "Móvil", "PDF"],
    plataformas: ["Web", "Android", "iOS"],
    estado: "En producción",
    reto:
      "Las inspecciones de seguridad en obra se hacían en papel o en hojas sueltas: sin fotos ordenadas, sin ubicación y con informes que tardaban días en llegar a quien tenía que actuar.",
    solucion: [
      "Checklists digitales por tipo de instalación y de actividad, con fotos, GPS y observaciones.",
      "Roles diferenciados: administración, jefes de obra, jefes de trabajo e inspectores, cada uno con sus permisos.",
      "Informes en PDF generados al momento.",
      "Ranking de desempeño por inspector y notificaciones en tiempo real.",
    ],
    resultado: null,
    tecnologias: ["Next.js", "Supabase", "Capacitor"],
    portada: "/sites/selfinspection-inicio.png",
    capturas: capturas(
      "selfinspection",
      [
        ["inicio", "Inicio con el resumen de una inspección"],
        ["inspecciones", "Listado de inspecciones con filtros"],
        ["evaluaciones", "Evaluaciones y ranking de inspectores"],
        ["usuarios", "Gestión del equipo por rol"],
      ],
      [
        ["inicio", "Inicio en el móvil"],
        ["inspecciones", "Inspecciones en el móvil"],
        ["evaluaciones", "Evaluaciones en el móvil"],
      ],
    ),
    mockup: { tipo: "movil", acento: "#F2B705", fondo: "#EFEAFB", texto: "#17132A" },
  },
];

export function buscarProyecto(slug: string) {
  return PROYECTOS.find((p) => p.slug === slug);
}
