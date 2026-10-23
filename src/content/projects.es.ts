// Spanish copy of the projects (the source of truth for everything that is not text).
// The copy comes from each repo's README. `result` stays null until there is real data
// (clients, usage, figures): the case page only shows that section when it has content.
// `screenshots` are real screens (public/sites, with names and sensitive data blurred); `cover` replaces
// the sketch (`Mockup`) on the card and in the case header. Without screenshots the sketch is used.
// English text lives in projects.en.ts and is merged over this data in projects.ts.

import { buildScreenshots, type Project } from "@/content/project-types";

export const PROJECTS_ES: Project[] = [
  {
    slug: "lensspace",
    name: "LensSpace",
    sector: "Ópticas",
    summary:
      "Gestión completa para ópticas: clientes, recetas, ventas, pagos, producción y entregas, en un solo panel.",
    tags: ["Multiempresa", "Pagos", "Producción"],
    platforms: ["Web"],
    status: null,
    challenge:
      "Una óptica reparte su trabajo entre la ficha del cliente, la receta, la venta, el laboratorio y la entrega. Llevarlo en papel o en hojas sueltas hace que se pierdan pedidos y que nadie sepa en qué punto está cada encargo.",
    solution: [
      "Ficha única por cliente con su historial de recetas.",
      "Ventas y pagos enlazados a cada encargo.",
      "Seguimiento de producción hasta la entrega, con avisos al cliente.",
      "Varias ópticas en la misma plataforma, cada una con sus datos aislados.",
    ],
    result: null,
    technologies: ["Next.js", "Supabase", "Vercel"],
    cover: "/sites/lensspace-dashboard.png",
    screenshots: buildScreenshots(
      "lensspace",
      [
        ["dashboard", "Panel principal con el resumen del día"],
        ["orders", "Pedidos y cobros"],
        ["customers", "Fichas de clientes"],
        ["prescriptions", "Historial de recetas"],
        ["sale", "Nueva venta en cuatro pasos"],
        ["production", "Producción con proveedores"],
        ["cash-register", "Caja y cierres"],
        ["catalog", "Catálogo y precios"],
      ],
      [
        ["dashboard", "Panel en el móvil"],
        ["orders", "Pedidos en el móvil"],
        ["production", "Producción en el móvil"],
      ],
    ),
    mockup: { kind: "dashboard", accent: "#F2B705", background: "#FDF6DD", text: "#17132A" },
  },
  {
    slug: "turno-flash",
    name: "Turno Flash",
    sector: "Pequeños negocios",
    summary:
      "Turnos y venta de pasajes para peluquerías, barberías, clínicas y transportistas: panel web, app Android y página pública de reservas.",
    tags: ["Turnos", "Android", "WhatsApp"],
    platforms: ["Web", "Android"],
    status: "En producción · web y Google Play",
    challenge:
      "Los pequeños negocios gestionaban citas y plazas por mensajes sueltos. Se olvidaban turnos, los clientes no confirmaban y los transportistas no sabían cuántas plazas les quedaban.",
    solution: [
      "Agenda por día y por profesional, con los estados de cada turno.",
      "Página pública para que los clientes reserven solos.",
      "Recordatorios y confirmaciones automáticas por WhatsApp.",
      "Módulo de pasajes: salidas, plazas, puntos de recogida y lista de pasajeros.",
      "Planes por negocio con prueba gratuita.",
    ],
    result: null,
    technologies: ["Next.js", "Supabase", "Capacitor", "WhatsApp"],
    cover: "/sites/turnoflash-dashboard.png",
    screenshots: buildScreenshots(
      "turnoflash",
      [
        ["dashboard", "Resumen del día"],
        ["schedule-week", "Agenda semanal"],
        ["services", "Servicios y precios"],
        ["trip-detail", "Salida con reservas de pasajes"],
        ["reports", "Reportes del negocio"],
        ["public-booking", "Página pública de reservas"],
      ],
      [
        ["dashboard", "Panel en el móvil"],
        ["schedule", "Agenda en el móvil"],
        ["public-booking", "Reserva pública en el móvil"],
      ],
    ),
    mockup: { kind: "mobile", accent: "#F2B705", background: "#17132A", text: "#FFFFFF" },
  },
  {
    slug: "turnia",
    name: "Turnia",
    sector: "Salud",
    summary:
      "Turnos y horarios para entornos de salud: calendario interactivo, roles y exportación, en web y apps iOS y Android.",
    tags: ["Calendario", "Roles", "iOS y Android"],
    platforms: ["Web", "iOS", "Android"],
    status: null,
    challenge:
      "Organizar los turnos de un equipo sanitario es un rompecabezas que cambia cada semana. Las planillas compartidas generan conflictos y el personal no siempre ve su horario actualizado.",
    solution: [
      "Calendario de turnos interactivo para todo el equipo.",
      "Roles diferenciados: administración, responsables, personal y consulta.",
      "Notificaciones cuando cambia un turno.",
      "Exportación de horarios y apps nativas para consultarlos desde el móvil.",
    ],
    result: null,
    technologies: ["Next.js", "Supabase", "Capacitor", "FullCalendar"],
    cover: "/sites/turnia-calendar.png",
    screenshots: buildScreenshots(
      "turnia",
      [
        ["calendar", "Calendario de turnos"],
        ["dashboard", "Panel de administración"],
        ["schedule", "Agenda del día"],
        ["statistics", "Estadísticas"],
      ],
      [
        ["calendar", "Turnos en el móvil"],
        ["dashboard", "Panel en el móvil"],
      ],
    ),
    mockup: { kind: "dashboard", accent: "#5B21B6", background: "#EFEAFB", text: "#17132A" },
  },
  {
    slug: "follow-it",
    name: "Follow It",
    sector: "Logística",
    summary:
      "Gestión de repartos con tres roles —negocio, mensajero y cliente— en web y apps Android/iOS.",
    tags: ["Repartos", "Multiempresa", "Móvil"],
    platforms: ["Web", "Android", "iOS"],
    status: "En desarrollo",
    challenge:
      "Un negocio con reparto propio necesita saber qué mensajero lleva cada pedido y en qué estado está, sin llamadas ni mensajes cruzados.",
    solution: [
      "Cuentas separadas por negocio, con sus datos aislados.",
      "Alta de mensajeros mediante invitaciones con código.",
      "Acceso por rol para negocio y mensajero.",
      "En desarrollo: pedidos con estados, asignación, seguimiento en el mapa y comprobante de entrega.",
    ],
    result: null,
    technologies: ["Next.js", "Supabase", "Capacitor"],
    cover: "/sites/followit-orders.png",
    screenshots: buildScreenshots(
      "followit",
      [
        ["orders", "Pedidos del negocio"],
        ["dashboard", "Panel del negocio"],
        ["order-detail", "Detalle de un pedido"],
      ],
      [
        ["orders", "Pedidos en el móvil"],
      ],
    ),
    mockup: { kind: "mobile", accent: "#F2B705", background: "#5B21B6", text: "#FFFFFF" },
  },
  {
    slug: "klaushop",
    name: "klauShop",
    sector: "Comercio",
    summary:
      "Tienda en línea con pedidos confirmados por WhatsApp y panel para gestionar productos, colecciones y pedidos.",
    tags: ["E-commerce", "WhatsApp", "Panel de gestión"],
    platforms: ["Web"],
    status: null,
    challenge:
      "Vender en línea donde los pagos con tarjeta no siempre son posibles: la tienda tenía que reservar el pedido y cerrarlo por el canal que ya usan los clientes.",
    solution: [
      "Catálogo con búsqueda y colecciones.",
      "Carrito que se conserva al iniciar sesión.",
      "Pedido reservado en la tienda y confirmado por WhatsApp.",
      "Panel para gestionar productos, colecciones, usuarios y pedidos.",
    ],
    result: null,
    technologies: ["Next.js", "Supabase", "GraphQL"],
    cover: "/sites/klaushop-home.png",
    screenshots: buildScreenshots(
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
    mockup: { kind: "dashboard", accent: "#5B21B6", background: "#FDF6DD", text: "#17132A" },
  },
  {
    slug: "invoxa",
    name: "Invoxa",
    sector: "Gestión interna",
    summary:
      "Facturación mensual de colaboradores: el administrador pide las facturas y cada persona genera la suya, con número consecutivo y PDF.",
    tags: ["Facturación", "Roles", "PDF"],
    platforms: ["Web", "Móvil"],
    status: "En producción",
    challenge:
      "Cerrar el mes obligaba a perseguir a cada colaborador por correo para que enviara su factura, con datos fiscales dispersos, numeración manual y errores en los importes según la modalidad de pago.",
    solution: [
      "Colaboradores, proyectos y modalidad de pago (por hora o fijo mensual) en un solo lugar.",
      "El administrador solicita las facturas de forma individual o en lote, y el colaborador recibe el aviso.",
      "Cada colaborador registra sus tareas, revisa la vista previa agrupada por proyecto y genera su factura en PDF.",
      "Número consecutivo automático, con solicitud y aprobación cuando hay que cambiarlo.",
    ],
    result: null,
    technologies: ["React", "Vite", "Supabase", "Capacitor"],
    cover: "/sites/invoxa-dashboard.png",
    screenshots: buildScreenshots(
      "invoxa",
      [
        ["dashboard", "Panel del administrador"],
        ["users", "Gestión de colaboradores"],
        ["invoices", "Facturas del mes"],
        ["user-home", "Inicio del colaborador"],
        ["user-invoice", "Detalle de una factura"],
        ["user-new", "Generar la factura del mes"],
      ],
      [
        ["dashboard", "Panel en el móvil"],
        ["invoices", "Facturas en el móvil"],
        ["user-home", "Inicio del colaborador en el móvil"],
        ["user-new", "Generar factura en el móvil"],
      ],
    ),
    mockup: { kind: "dashboard", accent: "#F2B705", background: "#17132A", text: "#FFFFFF" },
  },
  {
    slug: "self-inspection",
    name: "Self Inspection",
    sector: "Seguridad en obra",
    summary:
      "Inspecciones de seguridad en obra con checklists, fotos y GPS desde el móvil, informes en PDF y ranking por inspector.",
    tags: ["Inspecciones", "Móvil", "PDF"],
    platforms: ["Web", "Android", "iOS"],
    status: "En producción",
    challenge:
      "Las inspecciones de seguridad en obra se hacían en papel o en hojas sueltas: sin fotos ordenadas, sin ubicación y con informes que tardaban días en llegar a quien tenía que actuar.",
    solution: [
      "Checklists digitales por tipo de instalación y de actividad, con fotos, GPS y observaciones.",
      "Roles diferenciados: administración, jefes de obra, jefes de trabajo e inspectores, cada uno con sus permisos.",
      "Informes en PDF generados al momento.",
      "Ranking de desempeño por inspector y notificaciones en tiempo real.",
    ],
    result: null,
    technologies: ["Next.js", "Supabase", "Capacitor"],
    cover: "/sites/selfinspection-home.png",
    screenshots: buildScreenshots(
      "selfinspection",
      [
        ["home", "Inicio con el resumen de una inspección"],
        ["inspections", "Listado de inspecciones con filtros"],
        ["evaluations", "Evaluaciones y ranking de inspectores"],
        ["users", "Gestión del equipo por rol"],
      ],
      [
        ["home", "Inicio en el móvil"],
        ["inspections", "Inspecciones en el móvil"],
        ["evaluations", "Evaluaciones en el móvil"],
      ],
    ),
    mockup: { kind: "mobile", accent: "#F2B705", background: "#EFEAFB", text: "#17132A" },
  },
];
