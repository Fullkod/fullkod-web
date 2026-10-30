// Spanish copy of the projects (the source of truth for everything that is not text).
// The copy comes from each repo's README. `result` stays null until there is real data
// (clients, usage, figures): the case page only shows that section when it has content.
// `screenshots` are real screens (public/sites, with names and sensitive data blurred); `cover` replaces
// the sketch (`Mockup`) on the card and in the case header. Without screenshots the sketch is used.
// English text lives in projects.en.ts and is merged over this data in projects.ts.

import { buildScreenshots, type Project } from "@/content/project-types";

export const PROJECTS_ES: Project[] = [
  {
    slug: "kshop",
    name: "Kshop",
    sector: "Comercio",
    summary:
      "Tu tienda online y tu negocio en un solo sitio: vende las 24 horas con pedidos por WhatsApp, controla el inventario y los almacenes, organiza las entregas y sabe cada día cuánto ganas.",
    tags: ["E-commerce", "Inventario", "Entregas", "WhatsApp"],
    platforms: ["Web", "Android"],
    status: "En producción · kshop.fullkod.com",
    challenge:
      "Kshop nace de klauShop, una tienda que hicimos a medida: otros negocios querían lo mismo sin pagar un desarrollo propio. En Cuba la mayoría cobra en efectivo o por transferencia y cierra la venta por WhatsApp, así que las plataformas de fuera, que piden tarjeta y pago en línea, no les sirven.",
    solution: [
      "Cada negocio abre su tienda en minutos, con su dirección (tutienda.kshop.fullkod.com) o su propio dominio, y sus datos separados de los demás.",
      "El cliente elige productos, tallas y colores, arma su carrito y el pedido llega completo para confirmar por WhatsApp; paga al recibir, en efectivo o por transferencia.",
      "Detrás, un panel para el negocio (y Kshop Admin en el móvil) con pedidos, inventario, almacenes, entregas, clientes, finanzas y equipo.",
      "Planes Base y Pro con 30 días de prueba, pagados en efectivo y sin tarjeta. Lo del Pro también se puede contratar suelto.",
    ],
    benefits: [
      {
        title: "Vendes las 24 horas sin estar pegado al teléfono",
        text: "Tu catálogo está siempre abierto, con fotos, precios y tallas. El cliente compra cuando quiere y el pedido te llega completo (productos, dirección, entrega y forma de pago): se acabó repetir precios y mandar fotos una a una.",
      },
      {
        title: "Inventario al día, sin vender lo que no tienes",
        text: "Cada pedido aparta sus unidades, así no vendes dos veces la misma. Ves qué queda de cada producto y talla, lo reservado y lo disponible, lo que se está acabando y cuánto vale tu mercancía a costo y a precio de venta. El catálogo entero se sube desde Excel.",
      },
      {
        title: "Varios almacenes o puntos de venta",
        text: "Lleva el stock de cada local o almacén por separado, decide cuál sirve cada zona de entrega, marca puntos de recogida y traspasa mercancía entre ellos con el historial de cada movimiento.",
        plan: "Plan Pro",
      },
      {
        title: "Entregas organizadas de principio a fin",
        text: "Define tus zonas con su precio y plazo, envío gratis a partir de un importe, recogida en tienda o envío a acordar. Cada pedido avanza por estados (por confirmar, pagado, preparando, enviado, entregado) y nadie pierde el hilo.",
      },
      {
        title: "Clientes informados sin escribirles a mano",
        text: "Avisos automáticos por WhatsApp cada vez que su pedido cambia de estado, con mensajes que redactas tú. Menos «¿y mi pedido?» y más confianza para volver a comprar.",
        plan: "Plan Pro",
      },
      {
        title: "Cobras como ya cobras, en la moneda que sea",
        text: "Efectivo, transferencia o los métodos que uses, con precios en CUP, USD o EUR a la tasa del día. Sabes qué está cobrado y qué está pendiente en cada pedido.",
        plan: "Varias monedas: Plan Pro",
      },
      {
        title: "Sabes cuánto ganas de verdad",
        text: "Ventas del día y del mes por moneda, costo de lo vendido, margen, gastos y ganancia neta. Desglose por método de pago, zona de entrega y canal, y cierre del día para cuadrar la caja.",
        plan: "Finanzas: Plan Pro",
      },
      {
        title: "Todas tus ventas en un solo sitio",
        text: "Los pedidos de la web, de la app y los que tomas en el local o por teléfono quedan en el mismo panel, con su cliente y su historial. Tu equipo entra con su propio acceso y permisos, también desde el móvil.",
      },
      {
        title: "Más ventas, con tu marca",
        text: "Ofertas programadas con cuenta atrás, cupones con límite de usos, envío gratis y una app Android con tu logo en el móvil de tus clientes. La tienda se viste con tus colores, tu letra y tu portada.",
      },
    ],
    result: null,
    technologies: ["Next.js", "Supabase", "Capacitor", "WhatsApp", "Vercel"],
    cover: "/sites/kshop-landing.png",
    screenshots: buildScreenshots(
      "kshop",
      [
        ["landing", "Página de Kshop para abrir una tienda"],
        ["home", "Portada de una tienda con el tema Kshop"],
        ["theme-dark", "La misma tienda con el tema Oscuro"],
        ["theme-warm", "La misma tienda con el tema Cálido"],
        ["product", "Ficha con tallas, colores, oferta y precio en otra moneda"],
        ["admin-appearance", "Apariencia: estilo, colores y vista previa en vivo"],
        ["admin-dashboard", "Panel del negocio con las ventas del mes"],
        ["admin-products", "Catálogo con variantes, precios y stock"],
      ],
      [
        ["home", "Tienda en el móvil"],
        ["product", "Producto añadido al carrito, con pedido por WhatsApp"],
        ["cart", "Carrito con cupón y envío gratis"],
      ],
    ),
    mockup: { kind: "dashboard", accent: "#F2B705", background: "#5B21B6", text: "#FFFFFF" },
  },
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
