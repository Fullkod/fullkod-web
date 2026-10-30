// English copy of the projects, keyed by slug. Merged over the Spanish data in projects.ts.
// `alts` follows the order of the Spanish `screenshots` (desktop first, then mobile).

import type { ProjectCopy } from "@/content/project-types";

export const PROJECTS_EN_COPY: Record<string, ProjectCopy> = {
  kshop: {
    sector: "Retail",
    summary:
      "Your online store and your business in one place: sell around the clock with orders over WhatsApp, keep track of stock and warehouses, organize deliveries and know every day how much you earn.",
    tags: ["E-commerce", "Inventory", "Deliveries", "WhatsApp"],
    platforms: ["Web", "Android"],
    status: "In production · kshop.fullkod.com",
    challenge:
      "Kshop grew out of klauShop, a store we built to measure: other businesses wanted the same without paying for custom development. In Cuba most of them get paid in cash or by bank transfer and close the sale over WhatsApp, so foreign platforms, which require a card and online payment, don't work for them.",
    solution: [
      "Each business opens its store in minutes, with its own address (yourstore.kshop.fullkod.com) or its own domain, and its data kept apart from the others.",
      "Customers pick products, sizes and colors, fill their cart and the order arrives complete, ready to confirm over WhatsApp; they pay on delivery, in cash or by transfer.",
      "Behind it, a dashboard for the business (and Kshop Admin on the phone) with orders, stock, warehouses, deliveries, customers, finances and the team.",
      "Base and Pro plans with a 30-day trial, paid in cash with no card. Pro features can also be added one by one.",
    ],
    benefits: [
      {
        title: "Sell around the clock without living on your phone",
        text: "Your catalog is always open, with photos, prices and sizes. Customers buy whenever they want and the order reaches you complete (products, address, delivery and payment method): no more repeating prices and sending photos one by one.",
      },
      {
        title: "Up-to-date stock, never selling what you don't have",
        text: "Every order sets its units aside, so you never sell the same one twice. You see what's left of each product and size, what's reserved and what's available, what's running low and what your stock is worth at cost and at retail price. The whole catalog uploads from Excel.",
      },
      {
        title: "Several warehouses or points of sale",
        text: "Keep each shop's or warehouse's stock separately, choose which one serves each delivery zone, set pickup points and transfer goods between them with a history of every movement.",
        plan: "Pro plan",
      },
      {
        title: "Deliveries organized from start to finish",
        text: "Set your zones with their price and delivery time, free shipping above an amount, in-store pickup or delivery to be agreed. Each order moves through its stages (to confirm, paid, preparing, shipped, delivered) and nobody loses track.",
      },
      {
        title: "Customers kept informed without typing a word",
        text: "Automatic WhatsApp notices whenever their order changes, with messages you write yourself. Fewer \"where's my order?\" and more trust to buy again.",
        plan: "Pro plan",
      },
      {
        title: "Get paid the way you already do, in any currency",
        text: "Cash, transfer or whatever methods you use, with prices in CUP, USD or EUR at the day's rate. You know what's been collected and what's still pending on every order.",
        plan: "Several currencies: Pro plan",
      },
      {
        title: "Know what you really earn",
        text: "The day's and month's sales by currency, cost of goods sold, margin, expenses and net profit. Breakdown by payment method, delivery zone and channel, and an end-of-day close to balance the till.",
        plan: "Finances: Pro plan",
      },
      {
        title: "All your sales in one place",
        text: "Orders from the web, the app and the ones you take in the shop or over the phone land in the same dashboard, with their customer and history. Your team signs in with its own access and permissions, from the phone too.",
      },
      {
        title: "More sales, under your brand",
        text: "Scheduled offers with a countdown, coupons with usage limits, free shipping and an Android app with your logo on your customers' phones. The store wears your colors, your font and your home page.",
      },
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
