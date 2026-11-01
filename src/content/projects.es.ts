// Spanish copy of the projects (the source of truth for everything that is not text).
// The copy is checked against each product's code and docs, not just its README: only say what the product
// really does today, and mark what is not done yet as "coming soon". `result` stays null until there is real
// data (clients, usage, figures): the case page only shows that section when it has content.
// `screenshots` are real screens (public/sites, with names and sensitive data blurred); `cover` replaces
// the sketch (`Mockup`) on the card and in the case header. Without screenshots the sketch is used.
// `plan` on a benefit names the plan or module that includes it; leave it out when every plan has it.
// English text lives in projects.en.ts and is merged over this data in projects.ts.

import { buildScreenshots, type Project } from "@/content/project-types";

export const PROJECTS_ES: Project[] = [
  {
    slug: "kshop",
    name: "Kshop",
    sector: "Comercio",
    summary:
      "Tu tienda online y tu caja en un solo sitio: tus clientes piden por la web o la app y el pedido te llega completo por WhatsApp; en el local cobras desde el móvil, incluso sin internet. Controlas inventario, entregas y, con el plan Pro, cuánto ganas cada día.",
    tags: ["Tienda online", "Caja", "Inventario", "WhatsApp"],
    platforms: ["Web", "Android"],
    status: "En producción · kshop.fullkod.com",
    challenge:
      "Un negocio pequeño reparte lo que vende entre fotos por WhatsApp, un cuaderno de precios y una libreta de inventario, y a fin de mes no sabe qué le dejó cada cosa. En Cuba además se cobra en efectivo o por transferencia, en CUP o en dólares, y la venta se cierra por WhatsApp: las plataformas de fuera, que piden tarjeta y pago en línea, no encajan. Kshop nació de klauShop, una tienda que hicimos a medida, cuando otros negocios nos pidieron lo mismo sin pagar un desarrollo propio.",
    solution: [
      "Cada negocio tiene su tienda con su dirección (tutienda.kshop.fullkod.com) y, en Pro, su propio dominio; sus datos, clientes y precios están separados de los de cualquier otra tienda.",
      "El cliente elige productos, talla y color, arma el carrito y el pedido llega completo (productos, dirección, entrega y forma de pago) para confirmarlo por WhatsApp, pagando como tú decidas: efectivo, transferencia u otro método.",
      "Un panel de gestión, también en el teléfono con Kshop Admin: pedidos, clientes, catálogo, inventario, entregas, ofertas y equipo con sus permisos.",
      "La Caja para vender en el mostrador: buscas, cobras en la moneda que entrega el cliente y el stock baja al instante. En Kshop Admin sigue vendiendo aunque se vaya la conexión.",
      "Tres planes con 30 días de prueba, pago en efectivo y sin tarjeta: Caja (solo mostrador), Base (tienda online) y Pro (finanzas, varios almacenes, varias monedas, avisos por WhatsApp y más). Lo del Pro también se contrata suelto.",
    ],
    benefits: [
      {
        title: "Tu catálogo abierto las 24 horas",
        text: "Fotos, precios, tallas y colores siempre disponibles. El cliente compra cuando quiere y el pedido te llega completo: se acabó repetir precios y mandar fotos una a una.",
        plan: "Planes Base y Pro",
      },
      {
        title: "Vende en el local sin papel",
        text: "Busca por nombre o código, toca para sumar al ticket y cobra. Funciona en la web y en Kshop Admin, y en esta última también sin conexión: las ventas se guardan en el teléfono y se suben solas al volver internet.",
        plan: "Caja, Base y Pro",
      },
      {
        title: "Cobra en la moneda que traiga el cliente",
        text: "Precios en CUP, USD o EUR con la tasa que tú pones, pago en una moneda o repartido en dos, con el vuelto calculado.",
        plan: "Plan Pro",
      },
      {
        title: "Ofertas y cupones que mueven la venta",
        text: "Rebajas programadas con precio tachado y cuenta atrás, cupones con límite de usos y descuento manual al crear un pedido.",
        plan: "Ofertas: Base y Pro · Cupones: Pro",
      },
      {
        title: "No vendes dos veces lo mismo",
        text: "Cada pedido aparta sus unidades. Ves lo disponible, lo reservado y lo que se está agotando, por producto, talla y color.",
        plan: "Caja, Base y Pro",
      },
      {
        title: "Tu catálogo entero desde Excel",
        text: "Descargas una plantilla por tipo de producto, la rellenas, revisas la vista previa y la subes. También exportas y actualizas lo que ya tienes. Se acabó cargar producto por producto.",
        plan: "Caja, Base y Pro",
      },
      {
        title: "Pon el precio con cuentas claras",
        text: "La calculadora del editor de producto divide lo que te costó el paquete entre sus unidades y te propone el precio con el margen que quieras, para una variante o para todas. El cliente nunca ve tu costo.",
      },
      {
        title: "Varios almacenes o locales",
        text: "Stock separado por almacén, cuál sirve cada zona de entrega, puntos de recogida y traspasos con el historial de cada movimiento.",
        plan: "Plan Pro",
      },
      {
        title: "Sabes cuánto ganas de verdad",
        text: "Vendido, cobrado, pendiente de cobro, margen, gastos y ganancia neta; cierre de cada día, margen por producto y valor de tu inventario, y exportas a Excel. En los demás planes tienes «Ventas de hoy».",
        plan: "Finanzas: Plan Pro",
      },
      {
        title: "Entregas y clientes al día",
        text: "Zonas con precio y plazo, envío gratis desde un importe, recogida en tienda. Cada pedido pasa por estados y, con los avisos activados, tu cliente recibe un WhatsApp cuando cambia, con el texto que tú redactas.",
        plan: "Entregas: Base y Pro · Avisos: Pro",
      },
      {
        title: "Tu equipo, tu marca y una guía a mano",
        text: "Invitas a tus empleados con permisos propios, dejamos tu tienda con tu portada, banners y menús, y puedes tener una app Android con tu logo. Cada pantalla trae su «?» con guías paso a paso.",
        plan: "Equipo y ayuda: todos · Marca: Pro",
      },
    ],
    result: null,
    technologies: ["Next.js", "Supabase", "Capacitor", "WhatsApp", "Vercel"],
    cover: "/sites/kshop-landing.png",
    screenshots: buildScreenshots(
      "kshop",
      [
        ["landing", "Página de Kshop para abrir una tienda"],
        ["pricing", "Planes Caja, Base y Pro, con pago en efectivo y sin tarjeta"],
        ["home", "Portada de una tienda con el tema Kshop"],
        ["product", "Ficha con tallas, colores, oferta y precio en otra moneda"],
        ["theme-dark", "La misma tienda con el tema Oscuro"],
        ["theme-warm", "La misma tienda con el tema Cálido"],
        ["admin-home", "Inicio del panel: ventas de hoy, por cobrar, pedidos por confirmar y poco stock"],
        ["finance", "Finanzas: vendido, cobrado, margen, gastos, ganancia neta y cierre del día"],
        ["product-editor", "Variantes con precio, costo, margen y calculadora de precio"],
        ["order-detail", "Un pedido con oferta aplicada, envío, pago y aviso por WhatsApp al cliente"],
        ["excel-import", "Importar y exportar el catálogo desde Excel"],
        ["whatsapp", "Avisos por WhatsApp para cada estado del pedido, con texto editable"],
        ["admin-appearance", "Apariencia: estilo, colores y vista previa en vivo"],
      ],
      [
        ["pos-sell", "Caja en el teléfono: ticket con varios productos y botón «Cobrar»"],
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
      "Gestión de ópticas de punta a punta: la receta, la cotización, los cobros en CUP y USD, el taller y la entrega, en un solo panel que el dueño ve por sucursal y por vendedor. Para que nada se pierda entre el mostrador, el laboratorio y el montador.",
    tags: ["Multisucursal", "Caja CUP/USD", "Producción"],
    platforms: ["Web", "App instalable"],
    status: "Piloto en una óptica real · web e instalable en el móvil",
    challenge:
      "En una óptica el trabajo pasa por muchas manos: quien atiende, quien cobra, el cristalero y el montador. Con papel y mensajes sueltos se pierde una receta, se entrega un pedido sin cobrar el saldo, no se sabe en qué taller está cada trabajo ni cuánto hay en caja al cerrar el día. Y cuando los precios están en dos monedas, cada venta es una cuenta a mano.",
    solution: [
      "Cliente, receta y venta en un solo flujo de cuatro pasos: la cotización pasa a pedido sin volver a escribir nada.",
      "Precios en CUP y USD con la tasa de cada venta congelada, para que un cambio posterior no altere lo ya vendido.",
      "Cobros parciales y mixtos, saldo siempre visible y entrega bloqueada hasta que el pedido esté pagado.",
      "Producción con tu cristalero y tu montador: cada uno ve solo sus trabajos (sin precios ni cobros), y las incidencias quedan enlazadas al trabajo original.",
      "Caja por vendedor y por moneda con cierre diario, más un panel del dueño por sucursal, vendedor y período.",
    ],
    benefits: [
      {
        title: "Una sola entrada para toda la venta",
        text: "Eliges o creas el cliente, registras la receta, armas la configuración y confirmas «Cliente acepta» en la misma pantalla. El pedido se crea sin repetir datos.",
      },
      {
        title: "Precios en dos monedas sin cuentas a mano",
        text: "Cada artículo conserva su moneda (CUP o USD) y cada venta guarda la tasa que fijaste. Lo vendido no cambia aunque la tasa sí.",
      },
      {
        title: "Tu catálogo y tus precios",
        text: "Partes de un catálogo base de tipos de cristal y tratamientos y lo ajustas con tus precios, tu costo interno y tus propios artículos. Un simulador calcula antes de cotizar.",
      },
      {
        title: "Recetas que no se pierden ni se reescriben",
        text: "Esfera, cilindro, eje, adición, DP, altura y prisma por ojo, con el original adjunto (imagen o PDF). Cada corrección guarda quién la hizo y cuándo; el original queda intacto.",
      },
      {
        title: "Saldo bajo control y entrega protegida",
        text: "Varios pagos por pedido, en CUP, USD o mezclados. No se puede entregar mientras quede saldo por cobrar y ves el porcentaje cobrado de cada pedido.",
      },
      {
        title: "Cierre de caja sin sorpresas",
        text: "Cada vendedor tiene su caja diaria por moneda. El cierre queda fijo y los cobros posteriores se cierran aparte sin tocar el anterior. El dueño ve las diferencias.",
        plan: "Módulo Caja",
      },
      {
        title: "Cada trabajo del taller a la vista",
        text: "Ves qué pedidos están en cristales o en montaje, a quién están asignados y cuáles tienen incidencia. Tus proveedores entran con su propia cuenta y solo ven lo suyo.",
        plan: "Módulo Producción",
      },
      {
        title: "Los errores se corrigen sin perder el rastro",
        text: "Un cristal defectuoso o un error de receta abre una incidencia y una repetición enlazada al trabajo original, con quién asume el costo.",
        plan: "Módulo Producción",
      },
      {
        title: "Historial de quién hizo qué",
        text: "Cada pedido guarda su cronología: aceptación, cambios, pagos y asignaciones. Cada vendedor ve solo sus pedidos, sus cobros y su caja.",
      },
      {
        title: "Avisos por WhatsApp al cliente",
        text: "Pedido confirmado, pago recibido, trabajo terminado y entrega, solo a clientes que dieron su consentimiento. El aviso de «pedido listo» lo envías tú cuando quieras.",
      },
      {
        title: "Varias sucursales, una sola mirada",
        text: "Cada sucursal con sus vendedores y clientes, y el dueño con una vista consolidada y filtros por sucursal, vendedor y período.",
        plan: "Módulo Multisucursal",
      },
      {
        title: "Ventas, cobros y saldos de un vistazo",
        text: "Panel del dueño con ventas, cobros, saldo pendiente, carga de cada proveedor y productos más vendidos. Se instala en el móvil sin pasar por ninguna tienda de apps.",
        plan: "Módulo Analítica",
      },
    ],
    result: null,
    technologies: ["Next.js", "Supabase", "Vercel"],
    cover: "/sites/lensspace-dashboard.png",
    screenshots: buildScreenshots(
      "lensspace",
      [
        ["dashboard", "Panel principal con el resumen del día"],
        ["sale", "Nueva venta con el total en CUP y USD"],
        ["orders", "Pedidos y cobros"],
        ["order-detail", "Detalle de un pedido: saldo, producción y la cronología de cada acción"],
        ["prescriptions", "Historial de recetas"],
        ["production", "Producción con proveedores"],
        ["cash-register", "Caja y cierres"],
        ["catalog", "Catálogo y precios"],
        ["customers", "Fichas de clientes"],
      ],
      [
        ["dashboard", "Panel en el móvil"],
        ["orders", "Pedidos en el móvil"],
        ["order-detail", "Detalle de un pedido en el móvil"],
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
      "Agenda, reservas online, avisos por WhatsApp y cobro de anticipos para peluquerías, barberías, clínicas y negocios de transporte de pasajeros. Tu cliente reserva solo, tú ves el día completo desde el móvil y WhatsApp hace el seguimiento.",
    tags: ["Turnos", "Pasajes", "WhatsApp", "Anticipos"],
    platforms: ["Web", "Android"],
    status: "En producción en la web · app Android en prueba cerrada",
    challenge:
      "Muchos negocios llevan las citas y los asientos por mensajes sueltos: se olvidan turnos, hay clientes que no confirman o no aparecen, el anticipo se pierde entre capturas de pantalla y el chofer no sabe cuántas plazas quedan ni quién ya pagó. Cada llamada para reservar es tiempo que el dueño no está atendiendo.",
    solution: [
      "Agenda por día, semana y profesional, con 9 estados de turno (Confirmó, Llegó, Terminado, No vino…) y sin dobles reservas: la base de datos no permite solapes ni más asientos de los que hay.",
      "Página pública de reservas con tu enlace: el cliente elige servicio, profesional y hora, y los servicios que lo piden pasan por tu aprobación.",
      "WhatsApp automático: confirma, recuerda, pide valoración al terminar, avisa de cambios y entiende «OK» y «CANCELAR».",
      "Anticipos y pagos: cobra un anticipo para guardar el turno o el asiento, verifica el comprobante y registra pagos parciales y devoluciones con motivo e historial.",
      "Módulo de pasajes: salidas con asientos, ida y vuelta, puntos de recogida, página pública y lista del chofer para compartir, imprimir o exportar.",
    ],
    benefits: [
      {
        title: "Menos olvidos y ausencias",
        text: "Recordatorios por WhatsApp antes del turno. El cliente responde OK o CANCELAR y la agenda se actualiza sola.",
      },
      {
        title: "Reservas sin llamadas",
        text: "Tu negocio tiene su propio enlace de reservas: el cliente elige servicio, profesional y hora aunque tú estés ocupado atendiendo.",
      },
      {
        title: "Cero dobles reservas",
        text: "La base de datos rechaza los turnos solapados y la venta de asientos de más. No dependes de que alguien se acuerde de mirar.",
      },
      {
        title: "Apruebas lo que importa",
        text: "Los servicios delicados quedan pendientes hasta que tú los apruebas y el cliente recibe el aviso.",
      },
      {
        title: "Anticipo cobrado, no prometido",
        text: "Anticipo fijo o en porcentaje, comprobante del cliente por WhatsApp, verificación tuya y recordatorio del plazo para pagar.",
      },
      {
        title: "Cancelaciones y devoluciones con rastro",
        text: "Cada cancelación guarda su motivo y las devoluciones, totales o parciales, quedan con su estado y su historial.",
      },
      {
        title: "Tu equipo, cada uno con lo suyo",
        text: "Dueño y empleados con permisos distintos; cada profesional con su horario y sus servicios.",
        plan: "Planes Salón y Salón grande",
      },
      {
        title: "Recupera a los clientes dormidos",
        text: "Detecta quién dejó de venir y envíale una invitación por WhatsApp en un clic, con un límite para no molestar.",
      },
      {
        title: "Salidas y asientos",
        text: "Publica la salida con su precio, foto del vehículo, ida y vuelta y puntos de recogida; los pasajeros reservan desde un enlace.",
        plan: "Plan Pasajes",
      },
      {
        title: "La lista del chofer",
        text: "Pasajeros, paradas, teléfonos y lo que falta por cobrar, para compartir por WhatsApp, imprimir o exportar a CSV.",
        plan: "Plan Pasajes",
      },
      {
        title: "El día de un vistazo",
        text: "Inicio con los turnos de hoy, quién llegó y qué reservas esperan tu respuesta.",
      },
      {
        title: "Reportes claros",
        text: "Ingresos, servicios más pedidos y clientes nuevos, con la comparación contra el periodo anterior.",
      },
    ],
    result: null,
    technologies: ["Next.js", "Supabase", "Capacitor", "WhatsApp"],
    cover: "/sites/turnoflash-dashboard.png",
    screenshots: buildScreenshots(
      "turnoflash",
      [
        ["dashboard", "Resumen del día"],
        ["booking-categories", "Reserva pública: el cliente elige qué le interesa"],
        ["booking-services", "Servicios de una categoría, con el anticipo que pides"],
        ["schedule-week", "Agenda semanal"],
        ["deposits", "Turno con anticipo verificado y pagos parciales"],
        ["refunds", "Cancelación con devolución del anticipo, motivo y quién la registró"],
        ["reminders", "Recordatorios por WhatsApp"],
        ["win-back", "Recuperar clientes que hace tiempo no vienen, con un clic"],
        ["reports", "Reportes: ingresos, turnos, valoraciones y servicios más pedidos"],
        ["trip-detail", "Salida con reservas de pasajes"],
        ["public-trips", "Página pública de salidas"],
        ["services", "Servicios y precios"],
      ],
      [
        ["dashboard", "Panel en el móvil"],
        ["schedule", "Agenda en el móvil"],
        ["public-booking", "Reserva pública en el móvil"],
        ["booking-categories", "Categorías de reserva en el móvil"],
        ["win-back", "Recuperar clientes en el móvil"],
        ["reports", "Reportes en el móvil"],
      ],
    ),
    mockup: { kind: "mobile", accent: "#F2B705", background: "#17132A", text: "#FFFFFF" },
  },
  {
    slug: "turnia",
    name: "Turnia",
    sector: "Salud",
    summary:
      "Turnia organiza los turnos de un equipo de salud en un calendario donde cada persona ve el suyo, pide cambios y el responsable aprueba, sin planillas ni mensajes cruzados. Avisa de los conflictos antes de asignar y funciona en web y en el móvil.",
    tags: ["Calendario", "Cambios de turno", "Roles", "Web y móvil"],
    platforms: ["Web", "iOS", "Android"],
    status: "En desarrollo avanzado",
    challenge:
      "Cuadrar guardias, refuerzos y turnos largos cambia cada semana. En planillas compartidas es fácil asignar a alguien de vacaciones o sin el descanso necesario. Los cambios entre compañeros se pactan por mensajes y el responsable no sabe qué es oficial. Cada persona termina preguntando por su horario.",
    solution: [
      "Calendario por mes, semana, día o lista, con turnos de colores y letra por tipo (mañana, noche, 24 h…) definidos por cada organización.",
      "Alta rápida de turnos: copiar un período, generar desde un patrón y editar en lote.",
      "Control de conflictos al asignar: solapes, vacaciones o licencias registradas y descanso mínimo entre turnos.",
      "Cambios con aprobación: cada persona pide ceder, intercambiar o tomar un turno abierto, y el gestor aprueba o rechaza.",
      "Roles y varias organizaciones: administración, gestor, personal y solo lectura, con auditoría de cambios, invitaciones por correo y exportación a Excel o CSV.",
    ],
    benefits: [
      {
        title: "Todo el equipo, en un calendario",
        text: "Mes, semana, día o lista, con filtros y buscador de turnos y personas.",
      },
      {
        title: "Tipos de turno a tu medida",
        text: "Define el nombre, la letra, el color y el horario de cada turno, y los puestos del equipo.",
      },
      {
        title: "Turnos en minutos, no en horas",
        text: "Copia un período, genera turnos desde un patrón o edita varios a la vez.",
      },
      {
        title: "Menos errores al asignar",
        text: "Avisa si hay solapes, si la persona tiene vacaciones o licencia, o si no cumple el descanso mínimo que fijes.",
      },
      {
        title: "Cambios de turno sin caos",
        text: "Ceder, intercambiar (con aceptación del compañero) o pedir un turno libre: todo es una solicitud que el gestor aprueba o rechaza.",
      },
      {
        title: "Turnos abiertos",
        text: "Los turnos sin asignar se publican y el personal se postula. Tú decides si necesitan aprobación.",
      },
      {
        title: "Disponibilidad y permisos a la vista",
        text: "Vacaciones, licencias, capacitación y descansos quedan registrados, y se ve con quién se cuenta.",
      },
      {
        title: "Quién está de turno ahora",
        text: "Agenda del día en línea de tiempo y vista de la guardia activa.",
      },
      {
        title: "Avisos al momento",
        text: "Notificaciones dentro de la app con enlace directo al turno, y notificaciones push en Android.",
      },
      {
        title: "Cada rol ve lo suyo",
        text: "Administración, gestor, personal y solo lectura, con una matriz de permisos y los datos separados por organización.",
      },
      {
        title: "Varios centros, una cuenta",
        text: "Organizaciones con sub-organizaciones y un selector para pasar de una a otra.",
      },
      {
        title: "Trazabilidad y datos",
        text: "Registro de auditoría de los cambios, estadísticas de horas por persona y por tipo de turno, y exportación del horario a Excel o CSV.",
      },
    ],
    result: null,
    technologies: ["Next.js", "Supabase", "Capacitor", "FullCalendar"],
    cover: "/sites/turnia-calendar.png",
    screenshots: buildScreenshots(
      "turnia",
      [
        ["calendar", "Calendario del mes con todos los turnos, turnos sin asignar y cobertura"],
        ["requests", "Bandeja de solicitudes del gestor: ceder, intercambiar y tomar turnos abiertos"],
        ["open-shifts", "Turnos abiertos a los que el personal puede postularse"],
        ["availability", "Vacaciones, licencias y capacitación del equipo"],
        ["conflict", "Aviso de conflicto al asignar a alguien que está de vacaciones"],
        ["shift-types", "Tipos de turno con su letra, color y horario"],
        ["daily-schedule", "Agenda del día en línea de tiempo"],
        ["statistics", "Estadísticas de horas por persona y tipo de turno"],
      ],
      [
        ["calendar", "Turnos en el móvil"],
        ["requests", "Solicitudes de cambio de turno en el móvil"],
      ],
    ),
    mockup: { kind: "dashboard", accent: "#5B21B6", background: "#EFEAFB", text: "#17132A" },
  },
  {
    slug: "follow-it",
    name: "Follow It",
    sector: "Logística",
    summary:
      "Gestión de repartos para negocios con mensajeros propios: crea el pedido, asígnalo, mira dónde va en el mapa y recibe la foto de la entrega. Tu cliente sigue su pedido con un enlace, sin instalar nada.",
    tags: ["Repartos", "Seguimiento", "Móvil"],
    platforms: ["Web", "Android", "iOS"],
    status: "En pruebas",
    challenge:
      "Quien reparte con su propia gente vive entre llamadas y mensajes: ¿quién lleva este pedido?, ¿ya salió?, ¿lo entregó? Mientras tanto el cliente pregunta dónde está su pedido y no hay prueba de que se entregó. Follow It reúne todo en un solo lugar para el dueño, el mensajero y el cliente.",
    solution: [
      "El negocio registra cada pedido (cliente, dirección, productos, monto, notas) y le asigna un mensajero. Cada pedido pasa por estados claros: pendiente, asignado, en camino, entregado, fallido o cancelado.",
      "El mensajero recibe el aviso en su móvil, ve solo sus pedidos, cambia el estado y sube la foto de la entrega como comprobante.",
      "El panel muestra en un mapa dónde está cada mensajero y un resumen del día, con los pedidos que necesitan atención destacados.",
      "Cada pedido tiene un enlace de seguimiento: se manda al cliente por WhatsApp y ve el estado y el recorrido sin registrarse.",
      "Los mensajeros se dan de alta con un código de invitación y cada negocio trabaja con sus datos separados de los demás. Próximamente: reportes, historial exportable y optimización de rutas.",
    ],
    benefits: [
      {
        title: "Un pedido, un responsable",
        text: "Cada pedido tiene su mensajero y un estado visible para todos. Se acabó preguntar por WhatsApp quién lo lleva.",
      },
      {
        title: "El cliente deja de llamar",
        text: "Le envías un enlace y sigue su pedido con el estado y la línea de tiempo, sin descargar una app ni crear cuenta.",
      },
      {
        title: "Prueba de entrega",
        text: "El mensajero sube una foto al entregar y queda guardada junto al pedido, para resolver cualquier reclamo.",
      },
      {
        title: "Ve dónde están tus mensajeros",
        text: "Un mapa con la última ubicación de cada mensajero mientras tiene pedidos activos.",
      },
      {
        title: "Atención a lo que falla",
        text: "El panel destaca los pedidos que siguen sin asignar o sin avanzar, y un pedido fallido se puede reasignar.",
      },
      {
        title: "Historial de cada pedido",
        text: "Cada cambio de estado queda registrado con su hora, para saber qué pasó y cuándo.",
      },
      {
        title: "Tu equipo, sin fricción",
        text: "Invitas a cada mensajero con un código. Solo ve y mueve los pedidos que son suyos.",
      },
      {
        title: "Avisos al instante",
        text: "El mensajero recibe una notificación cuando le asignan un pedido y el negocio ve las novedades en su campana.",
      },
      {
        title: "Web y móvil con la misma cuenta",
        text: "Panel en el navegador para el negocio y app móvil para el mensajero.",
      },
      {
        title: "Los datos de cada negocio, separados",
        text: "Varios negocios en la misma plataforma sin mezclar información.",
      },
    ],
    result: null,
    technologies: ["Next.js", "Supabase", "Capacitor"],
    cover: "/sites/followit-dashboard.png",
    screenshots: buildScreenshots(
      "followit",
      [
        ["dashboard", "Resumen del día y pedidos que requieren atención"],
        ["map", "Mensajeros en tiempo real sobre el mapa"],
        ["orders", "Lista de pedidos en distintos estados"],
        ["order-detail", "Pedido entregado con enlace de seguimiento y foto de comprobante"],
        ["assign", "Asignar un pedido a un mensajero"],
      ],
      [
        ["tracking", "Seguimiento del cliente con estado y mensajero en el mapa, sin registrarse"],
        ["courier", "App del mensajero: marcar entregado, fallido o tomar la foto"],
        ["orders", "Pedidos en el móvil del negocio"],
      ],
    ),
    mockup: { kind: "mobile", accent: "#F2B705", background: "#5B21B6", text: "#FFFFFF" },
  },
  {
    slug: "invoxa",
    name: "Invoxa",
    sector: "Gestión interna",
    summary:
      "Invoxa cierra la facturación mensual de tu equipo de colaboradores sin perseguir a nadie por correo. Tú pides las facturas, cada persona genera la suya con su numeración y sus datos, y tú las revisas y descargas en PDF.",
    tags: ["Facturación", "Roles", "PDF"],
    platforms: ["Web", "Móvil"],
    status: "En uso real",
    challenge:
      "Cada fin de mes alguien tenía que pedir la factura a cada colaborador, reclamar los datos fiscales que faltaban, vigilar que no se repitiera un número y comprobar que el importe coincidía con las horas trabajadas o con la tarifa fija. Todo por correo y hojas de cálculo, con errores y con facturas que llegaban tarde.",
    solution: [
      "Colaboradores, proyectos y tarifa (por hora o fija mensual) en un solo lugar, con invitación por correo y perfil de facturación propio.",
      "El administrador solicita las facturas del mes a una persona o a todo el equipo a la vez, y cada colaborador lo ve en su campana de avisos.",
      "Cada colaborador registra sus tareas, revisa la vista previa agrupada por proyecto y genera su factura en PDF con el formato de la empresa.",
      "El número consecutivo se asigna solo, y cualquier cambio pasa por una solicitud que el administrador aprueba o rechaza, con historial.",
      "El administrador sigue cada factura por estados (de generada a pagada), filtra por persona, proyecto o fecha y descarga los PDF. Nació para el equipo de Informage Studios y lo adaptamos a la empresa, el formato de factura y los datos de tu equipo.",
    ],
    benefits: [
      {
        title: "Un solo lugar para el cierre del mes",
        text: "Panel con los colaboradores activos, las solicitudes pendientes y las facturas generadas y pagadas.",
      },
      {
        title: "Pedir facturas en un clic",
        text: "Solicitud individual o en lote a todos los colaboradores activos.",
      },
      {
        title: "Por hora o fijo, incluso en la misma factura",
        text: "Cada proyecto lleva su modalidad y su tarifa, y la factura agrupa las líneas por proyecto.",
      },
      {
        title: "Un registro de tareas que alimenta la factura",
        text: "El colaborador anota lo trabajado y el importe sale de ahí, sin cuentas aparte.",
      },
      {
        title: "Numeración sin choques",
        text: "Consecutivo automático y cambios solo con la aprobación del administrador, con su historial.",
      },
      {
        title: "PDF listo para enviar",
        text: "Factura con los datos del emisor, el periodo, el detalle por proyecto, el total, las observaciones y los datos de pago.",
      },
      {
        title: "Justificante de horas en PDF",
        text: "Informe mensual de tareas por proyecto, con subtotales, para entregar al responsable.",
      },
      {
        title: "Seguimiento por estados",
        text: "De generada a revisada, aprobada o pagada, con filtros por colaborador, proyecto y fechas.",
      },
      {
        title: "Avisos en la propia app",
        text: "Una campana en tiempo real para solicitudes, facturas y cambios de consecutivo.",
      },
      {
        title: "Cada persona ve solo lo suyo",
        text: "Roles de administrador y colaborador, con los datos protegidos por fila en la base de datos.",
      },
    ],
    result: null,
    technologies: ["React", "Vite", "Supabase", "Capacitor"],
    cover: "/sites/invoxa-user-home.png",
    screenshots: buildScreenshots(
      "invoxa",
      [
        ["user-home", "Inicio del colaborador"],
        ["user-new", "Generar la factura del mes"],
        ["user-invoice", "Detalle de una factura"],
        ["dashboard", "Panel del administrador"],
        ["invoices", "Facturas del mes"],
        ["users", "Gestión de colaboradores"],
      ],
      [
        ["user-home", "Inicio del colaborador en el móvil"],
        ["user-new", "Generar factura en el móvil"],
        ["invoices", "Facturas en el móvil"],
        ["dashboard", "Panel en el móvil"],
      ],
    ),
    mockup: { kind: "dashboard", accent: "#F2B705", background: "#17132A", text: "#FFFFFF" },
  },
  {
    slug: "self-inspection",
    name: "Self Inspection",
    sector: "Seguridad en obra",
    summary:
      "Self Inspection digitaliza las inspecciones de seguridad en obra: el técnico responde el checklist desde el móvil, con fotos, GPS y observaciones, y el sistema puntúa y genera el informe PDF. Administración ve el cumplimiento y el ranking de inspectores sin esperar a que llegue el papel.",
    tags: ["Inspecciones", "Móvil", "PDF", "Ranking"],
    platforms: ["Web", "Android", "iOS"],
    status: "En producción",
    challenge:
      "Las inspecciones de seguridad en obra se hacían en papel u hojas sueltas: fotos sin ordenar, sin ubicación fiable y con informes que tardaban días en llegar a quien tenía que actuar. Comparar el cumplimiento entre obras o inspectores exigía pasar todo a mano a una hoja de cálculo.",
    solution: [
      "Checklists digitales por tipo de instalación y de actividad, que el administrador configura y mantiene (encabezados, preguntas, orden).",
      "El inspector responde en el móvil con Bien, Regular, Mal o No aplica, añade observaciones y fotos con la cámara y deja registrada la ubicación GPS.",
      "Al completar la inspección, el sistema calcula la puntuación, el porcentaje y la calificación, y avisa a administradores y jefes de obra.",
      "El informe PDF (datos de la obra, respuestas por sección, evaluación y fotos) se genera al momento, listo para descargar o compartir.",
      "Un panel de evaluaciones compara el desempeño por inspector, cliente y equipo, con ranking, filtros y avisos de cambio de posición. En uso real en 360 Ingeco, empresa de ingeniería y construcción; lo adaptamos a tu operación, tus preguntas y tu marca.",
    ],
    benefits: [
      {
        title: "Checklists a medida",
        text: "Tipos de inspección, actividades, encabezados y preguntas editables por el administrador, con activar o desactivar y orden.",
      },
      {
        title: "Respuestas claras",
        text: "Bien, Regular, Mal o No aplica en cada pregunta, con observación opcional.",
      },
      {
        title: "Fotos de la obra con la cámara del móvil",
        text: "Cada foto queda asociada a su observación, ordenada y lista para el informe.",
      },
      {
        title: "Ubicación registrada",
        text: "El GPS de cada inspección se guarda y se ve en un mapa en el detalle.",
      },
      {
        title: "Puntuación y calificación automáticas",
        text: "Porcentaje y nivel (excelente, bueno, regular, deficiente) sin calcular nada a mano.",
      },
      {
        title: "Informe PDF al momento",
        text: "Con los datos de la obra, el inspector, las respuestas por sección, la evaluación y las fotos.",
      },
      {
        title: "Ranking de inspectores y panel de cumplimiento",
        text: "Comparación por equipo y por cliente, con gráficos y filtros.",
      },
      {
        title: "Avisos dentro de la app",
        text: "Inspección creada o completada, informe listo, cambio de posición en el ranking y recordatorio diario si algo queda pendiente más de 3 días.",
      },
      {
        title: "Equipos con permisos por rol",
        text: "Administrador, jefe de obra, jefe de trabajo y técnico, con el control de acceso en la base de datos.",
      },
      {
        title: "Seguimiento de las inspecciones",
        text: "Búsqueda por código, instalación, cliente o actividad, filtros avanzados y estado pendiente o completada; varias actividades y subcontratas por inspección.",
      },
    ],
    result: null,
    technologies: ["Next.js", "Supabase", "Capacitor"],
    cover: "/sites/selfinspection-evaluations.png",
    screenshots: buildScreenshots(
      "selfinspection",
      [
        ["evaluations", "Evaluaciones y ranking de inspectores"],
        ["ranking", "Ranking de inspectores con puntuación y calificación"],
        ["headers", "Editor de checklists a medida: encabezados y preguntas por tipo de inspección"],
        ["inspections", "Listado de inspecciones con filtros"],
        ["types", "Tipos de inspección configurables"],
        ["users", "Gestión del equipo por rol"],
      ],
      [
        ["inspections", "Inspecciones en el móvil"],
        ["evaluations", "Evaluaciones en el móvil"],
        ["ranking", "Ranking de inspectores en el móvil"],
        ["create", "Formulario de nueva inspección en el móvil"],
      ],
    ),
    mockup: { kind: "mobile", accent: "#F2B705", background: "#EFEAFB", text: "#17132A" },
  },
];
