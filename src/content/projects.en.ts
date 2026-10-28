// English copy of the projects, keyed by slug. Merged over the Spanish data in projects.ts.
// `alts` follows the order of the Spanish `screenshots` (desktop first, then mobile).

import type { ProjectCopy } from "@/content/project-types";

export const PROJECTS_EN_COPY: Record<string, ProjectCopy> = {
  kshop: {
    sector: "Retail",
    summary:
      "A platform to open your online store in an afternoon: your own address, orders over WhatsApp, prices in CUP, USD or EUR, themes made your own and an Android app with your logo.",
    tags: ["E-commerce", "Multi-store", "WhatsApp", "Customizable"],
    platforms: ["Web", "Android"],
    status: "In production · kshop.fullkod.com",
    challenge:
      "Kshop grew out of klauShop, a store we built to measure: other businesses wanted the same without paying for custom development. In Cuba most of them get paid in cash or by bank transfer and close the sale over WhatsApp, so foreign platforms, which require a card and online payment, don't work for them.",
    solution: [
      "Each business creates its store in minutes, with its own address (yourstore.kshop.fullkod.com) or its own domain, and its data isolated from the others.",
      "Fully customizable: six starting styles, your choice of colors, font and corners, and a home page built from sections with banners, countdown offers, collections and reviews. The store, the app and the banners change together.",
      "Customers fill their cart and the order arrives ready to confirm over WhatsApp; they pay on delivery, in cash or by transfer, with home delivery or in-store pickup.",
      "Prices in CUP, USD or EUR at the day's rate, products with sizes and colors, and the whole catalog imported from Excel.",
      "Offers, coupons and automatic WhatsApp notices whenever an order changes.",
      "Business dashboard with the day's and month's sales, orders, customers, several warehouses, finances and a team with permissions.",
      "An Android app with each store's logo for its customers, and Kshop Admin to run the business from the phone.",
      "Base and Pro plans with a 30-day trial, paid in cash with no card.",
    ],
    result: null,
    alts: [
      "Kshop page to open a store",
      "A store's home page with the Kshop theme",
      "The same store with the Dark theme",
      "The same store with the Warm theme",
      "Product page with sizes, colors, an offer and the price in another currency",
      "Appearance: style, colors and live preview",
      "Business dashboard with the month's sales",
      "Catalog with variants, prices and stock",
      "Store on mobile",
      "Product added to the cart, with a WhatsApp order",
      "Cart with a coupon and free shipping",
    ],
  },
  lensspace: {
    sector: "Optical shops",
    summary:
      "Complete management for optical shops: customers, prescriptions, sales, payments, production and deliveries, in a single dashboard.",
    tags: ["Multi-tenant", "Payments", "Production"],
    platforms: ["Web"],
    status: null,
    challenge:
      "An optical shop splits its work between the customer record, the prescription, the sale, the lab and the delivery. Keeping it on paper or on loose sheets means lost orders and nobody knowing where each job stands.",
    solution: [
      "A single record per customer with their prescription history.",
      "Sales and payments linked to each order.",
      "Production tracking through to delivery, with customer notifications.",
      "Several shops on the same platform, each with its data isolated.",
    ],
    result: null,
    alts: [
      "Main dashboard with the day's summary",
      "Orders and payments",
      "Customer records",
      "Prescription history",
      "New sale in four steps",
      "Production with suppliers",
      "Cash register and closings",
      "Catalog and prices",
      "Dashboard on mobile",
      "Orders on mobile",
      "Production on mobile",
    ],
  },
  "turno-flash": {
    sector: "Small businesses",
    summary:
      "Appointments and ticket sales for hair salons, barbershops, clinics and transport operators: web dashboard, Android app and a public booking page.",
    tags: ["Appointments", "Android", "WhatsApp"],
    platforms: ["Web", "Android"],
    status: "In production · web and Google Play",
    challenge:
      "Small businesses managed appointments and seats through scattered messages. Appointments were forgotten, customers didn't confirm and transport operators didn't know how many seats they had left.",
    solution: [
      "A schedule per day and per professional, with the status of each appointment.",
      "A public page so customers can book on their own.",
      "Automatic reminders and confirmations over WhatsApp.",
      "Ticket module: departures, seats, pickup points and passenger list.",
      "Plans per business with a free trial.",
    ],
    result: null,
    alts: [
      "Day summary",
      "Weekly schedule",
      "Services and prices",
      "Departure with ticket bookings",
      "Business reports",
      "Public booking page",
      "Dashboard on mobile",
      "Schedule on mobile",
      "Public booking on mobile",
    ],
  },
  turnia: {
    sector: "Healthcare",
    summary:
      "Shifts and schedules for healthcare settings: interactive calendar, roles and export, on web and iOS and Android apps.",
    tags: ["Calendar", "Roles", "iOS and Android"],
    platforms: ["Web", "iOS", "Android"],
    status: null,
    challenge:
      "Organizing a healthcare team's shifts is a puzzle that changes every week. Shared spreadsheets create conflicts and staff don't always see an up-to-date schedule.",
    solution: [
      "An interactive shift calendar for the whole team.",
      "Distinct roles: administration, managers, staff and read-only.",
      "Notifications when a shift changes.",
      "Schedule export and native apps to check it from the phone.",
    ],
    result: null,
    alts: [
      "Shift calendar",
      "Administration dashboard",
      "Day schedule",
      "Statistics",
      "Shifts on mobile",
      "Dashboard on mobile",
    ],
  },
  "follow-it": {
    sector: "Logistics",
    summary:
      "Delivery management with three roles — business, courier and customer — on web and Android/iOS apps.",
    tags: ["Deliveries", "Multi-tenant", "Mobile"],
    platforms: ["Web", "Android", "iOS"],
    status: "In development",
    challenge:
      "A business with its own delivery needs to know which courier carries each order and what state it is in, without calls or crossed messages.",
    solution: [
      "Separate accounts per business, with their data isolated.",
      "Couriers join through invitations with a code.",
      "Role-based access for business and courier.",
      "In development: orders with statuses, assignment, live map tracking and proof of delivery.",
    ],
    result: null,
    alts: [
      "The business's orders",
      "Business dashboard",
      "Order detail",
      "Orders on mobile",
    ],
  },
  invoxa: {
    sector: "Internal management",
    summary:
      "Monthly invoicing for contractors: the administrator requests the invoices and each person generates theirs, with a sequential number and a PDF.",
    tags: ["Invoicing", "Roles", "PDF"],
    platforms: ["Web", "Mobile"],
    status: "In production",
    challenge:
      "Closing the month meant chasing each contractor by email to send their invoice, with scattered tax details, manual numbering and mistakes in the amounts depending on the payment model.",
    solution: [
      "Contractors, projects and payment model (hourly or fixed monthly) in one place.",
      "The administrator requests invoices individually or in bulk, and the contractor gets a notification.",
      "Each contractor logs their tasks, reviews the preview grouped by project and generates their invoice as a PDF.",
      "Automatic sequential number, with a request-and-approval flow when it has to change.",
    ],
    result: null,
    alts: [
      "Administrator dashboard",
      "Contractor management",
      "Invoices of the month",
      "Contractor home",
      "Invoice detail",
      "Generate the month's invoice",
      "Dashboard on mobile",
      "Invoices on mobile",
      "Contractor home on mobile",
      "Generate invoice on mobile",
    ],
  },
  "self-inspection": {
    sector: "Construction safety",
    summary:
      "Construction-site safety inspections with checklists, photos and GPS from the phone, PDF reports and a ranking per inspector.",
    tags: ["Inspections", "Mobile", "PDF"],
    platforms: ["Web", "Android", "iOS"],
    status: "In production",
    challenge:
      "Site safety inspections were done on paper or loose sheets: no organized photos, no location, and reports that took days to reach whoever had to act.",
    solution: [
      "Digital checklists per type of facility and activity, with photos, GPS and notes.",
      "Distinct roles: administration, site managers, work leads and inspectors, each with their permissions.",
      "PDF reports generated instantly.",
      "Performance ranking per inspector and real-time notifications.",
    ],
    result: null,
    alts: [
      "Home with an inspection summary",
      "Inspection list with filters",
      "Evaluations and inspector ranking",
      "Team management by role",
      "Home on mobile",
      "Inspections on mobile",
      "Evaluations on mobile",
    ],
  },
};
