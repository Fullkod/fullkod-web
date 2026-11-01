// English copy of the projects, keyed by slug. Merged over the Spanish data in projects.ts.
// `alts` follows the order of the Spanish `screenshots` (desktop first, then mobile).

import type { ProjectCopy } from "@/content/project-types";

export const PROJECTS_EN_COPY: Record<string, ProjectCopy> = {
  kshop: {
    sector: "Retail",
    summary:
      "Your online store and your cash register in one place: customers order from the web or the app and the complete order lands on your WhatsApp; in your shop you take payment from your phone, even without internet. You control stock, deliveries and, on the Pro plan, how much you earn each day.",
    tags: ["Online store", "Register", "Inventory", "WhatsApp"],
    platforms: ["Web", "Android"],
    status: "In production · kshop.fullkod.com",
    challenge:
      "A small business spreads what it sells across photos on WhatsApp, a notebook of prices and a stock ledger, and by month end it doesn't know what each product actually earned. In Cuba, on top of that, people pay in cash or by transfer, in CUP or dollars, and the sale is closed over WhatsApp: foreign platforms that require a card and online payment don't fit. Kshop grew out of klauShop, a store we built to measure, when other businesses asked for the same without paying for custom development.",
    solution: [
      "Every business gets its own store with its own address (yourstore.kshop.fullkod.com) and, on Pro, its own domain; its data, customers and prices are kept apart from every other store.",
      "Customers pick products, size and color, fill their cart, and the complete order (products, address, delivery and payment method) arrives ready to confirm over WhatsApp, paying however you decide: cash, transfer or another method.",
      "A management dashboard, also on the phone with Kshop Admin: orders, customers, catalog, stock, deliveries, offers and a team with its own permissions.",
      "The Register for counter sales: search, charge in whatever currency the customer hands over, and stock drops instantly. In Kshop Admin it keeps selling even when the connection drops.",
      "Three plans with a 30-day trial, paid in cash with no card: Caja (counter only), Base (online store) and Pro (finances, several warehouses, several currencies, WhatsApp notices and more). Pro features can also be added one by one.",
    ],
    benefits: [
      {
        title: "Your catalog open 24 hours",
        text: "Photos, prices, sizes and colors always available. Customers buy whenever they want and the order reaches you complete: no more repeating prices and sending photos one by one.",
        plan: "Base and Pro plans",
      },
      {
        title: "Sell in your shop without paper",
        text: "Search by name or code, tap to add to the ticket and charge. Works on the web and in Kshop Admin, and in the latter also offline: sales are stored on the phone and upload by themselves when the internet is back.",
        plan: "Caja, Base and Pro",
      },
      {
        title: "Get paid in whatever currency the customer brings",
        text: "Prices in CUP, USD or EUR at a rate you set, payment in one currency or split in two, with the change worked out.",
        plan: "Pro plan",
      },
      {
        title: "Offers and coupons that move sales",
        text: "Scheduled discounts with a struck-through price and countdown, coupons with usage limits and a manual discount when creating an order.",
        plan: "Offers: Base and Pro · Coupons: Pro",
      },
      {
        title: "Never sell the same thing twice",
        text: "Each order sets its units aside. You see what's available, what's reserved and what's running low, by product, size and color.",
        plan: "Caja, Base and Pro",
      },
      {
        title: "Your whole catalog from Excel",
        text: "Download a template per product type, fill it in, check the preview and upload it. You can also export and update what you already have. No more loading products one by one.",
        plan: "Caja, Base and Pro",
      },
      {
        title: "Price with clear numbers",
        text: "The calculator in the product editor splits what a pack cost you by its units and suggests a price with the margin you want, for one variant or all of them. Customers never see your cost.",
      },
      {
        title: "Several warehouses or shops",
        text: "Stock kept separately per warehouse, which one serves each delivery zone, pickup points and transfers with a history of every movement.",
        plan: "Pro plan",
      },
      {
        title: "Know what you really earn",
        text: "Sold, collected, pending, margin, expenses and net profit; a close for each day, margin per product and the value of your stock, with export to Excel. Other plans have \"Today's sales\".",
        plan: "Finances: Pro plan",
      },
      {
        title: "Deliveries and customers up to date",
        text: "Zones with price and delivery time, free shipping above an amount, in-store pickup. Every order moves through stages and, with notices on, your customer gets a WhatsApp when it changes, in a text you write.",
        plan: "Deliveries: Base and Pro · Notices: Pro",
      },
      {
        title: "Your team, your brand and a guide at hand",
        text: "Invite employees with their own permissions, we set your store up with your home page, banners and menus, and you can have an Android app with your logo. Every screen has its \"?\" with step-by-step guides.",
        plan: "Team and help: all · Branding: Pro",
      },
    ],
    result: null,
    alts: [
      "Kshop page to open a store",
      "A store's home page with the Kshop theme",
      "Product page with sizes, colors, an offer and the price in another currency",
      "The same store with the Dark theme",
      "The same store with the Warm theme",
      "Dashboard home: today's sales, pending payments, orders to confirm and low stock",
      "Variants with price, cost, margin and the price calculator",
      "An order with an offer applied, shipping, payment and a WhatsApp notice to the customer",
      "Importing and exporting the catalog from Excel",
      "WhatsApp notices for each order status, with editable text",
      "Appearance: style, colors and live preview",
      "Register on the phone: ticket with a product and the \"Charge\" button",
      "Store on mobile",
      "Product added to the cart, with a WhatsApp order",
      "Cart with a coupon and free shipping",
    ],
  },
  lensspace: {
    sector: "Optical shops",
    summary:
      "End-to-end management for optical shops: prescription, quote, cash payments in CUP and USD, lab work and delivery in a single dashboard the owner can view by branch and by seller. So nothing gets lost between the counter, the lab and the mounter.",
    tags: ["Multi-branch", "CUP/USD cash", "Production"],
    platforms: ["Web", "Installable app"],
    status: "Pilot in a real optical shop · web, installable on your phone",
    challenge:
      "In an optical shop the work passes through many hands: whoever serves the customer, whoever takes the payment, the lens lab and the mounter. On paper and loose messages, prescriptions get lost, orders are handed over with a balance still due, nobody knows which lab holds which job or how much cash is in the drawer at close. And when prices are in two currencies, every sale becomes a manual calculation.",
    solution: [
      "Customer, prescription and sale in a single four-step flow: the quote becomes an order without retyping anything.",
      "Prices in CUP and USD with each sale's exchange rate frozen, so later changes never alter what was already sold.",
      "Partial and mixed payments, the balance always visible, and delivery blocked until the order is paid.",
      "Production with your lens lab and mounter: each sees only their own jobs (no prices or payments), and incidents stay linked to the original job.",
      "Cashbox per seller and per currency with a daily close, plus an owner dashboard by branch, seller and period.",
    ],
    benefits: [
      {
        title: "One entry point for the whole sale",
        text: "Pick or create the customer, record the prescription, build the configuration and confirm \"Customer accepts\" on the same screen. The order is created without re-entering data.",
      },
      {
        title: "Two-currency pricing, no manual math",
        text: "Each item keeps its currency (CUP or USD) and each sale stores the rate you set. What was sold does not change when the rate does.",
      },
      {
        title: "Your catalog, your prices",
        text: "Start from a base catalog of lens types and treatments and adjust it with your own prices, internal cost and your own items. A simulator calculates before you quote.",
      },
      {
        title: "Prescriptions that are never lost or overwritten",
        text: "Sphere, cylinder, axis, addition, PD, height and prism per eye, with the original attached (image or PDF). Every correction records who made it and when; the original stays intact.",
      },
      {
        title: "Balances under control, delivery protected",
        text: "Several payments per order, in CUP, USD or mixed. An order cannot be delivered while a balance remains, and you see the percentage collected on each order.",
      },
      {
        title: "Cash close without surprises",
        text: "Each seller has a daily cashbox per currency. The close is fixed and later payments are closed separately without touching the earlier one. The owner sees differences.",
        plan: "Cashbox module",
      },
      {
        title: "Every lab job in view",
        text: "See which orders are at the lens lab or in mounting, who they are assigned to, and which have an incident. Your providers log in with their own account and see only their work.",
        plan: "Production module",
      },
      {
        title: "Fix mistakes without losing the trail",
        text: "A defective lens or a prescription error opens an incident and a rework linked to the original job, with who bears the cost.",
        plan: "Production module",
      },
      {
        title: "A record of who did what",
        text: "Each order keeps its timeline: acceptance, changes, payments and assignments. Each seller sees only their own orders, payments and cashbox.",
      },
      {
        title: "WhatsApp updates to the customer",
        text: "Order confirmed, payment received, work finished and delivery, only to customers who gave consent. You send \"order ready\" yourself whenever you decide.",
      },
      {
        title: "Several branches, one view",
        text: "Each branch with its own sellers and customers, and the owner with a consolidated view filtered by branch, seller and period.",
        plan: "Multi-branch module",
      },
      {
        title: "Sales, collections and balances at a glance",
        text: "Owner dashboard with sales, payments collected, outstanding balance, each provider's workload and best-selling products. It installs on your phone without going through any app store.",
        plan: "Analytics module",
      },
    ],
    result: null,
    alts: [
      "Main dashboard with the day's summary",
      "New sale with the total in CUP and USD",
      "Orders and payments",
      "Prescription history",
      "Production with suppliers",
      "Cash register and closings",
      "Catalog and prices",
      "Customer records",
      "Dashboard on mobile",
      "Orders on mobile",
      "Production on mobile",
    ],
  },
  "turno-flash": {
    sector: "Small businesses",
    summary:
      "Scheduling, online booking, WhatsApp reminders and deposits for hair salons, barbershops, clinics and passenger transport businesses. Your customer books on their own, you see the whole day from your phone and WhatsApp does the follow-up.",
    tags: ["Appointments", "Trips", "WhatsApp", "Deposits"],
    platforms: ["Web", "Android"],
    status: "In production on the web · Android app in closed testing",
    challenge:
      "Many businesses handle appointments and seats through loose messages: appointments get forgotten, customers don't confirm or don't show up, the deposit gets lost among screenshots, and the driver doesn't know how many seats are left or who has already paid. Every phone call to book is time the owner isn't serving customers.",
    solution: [
      "Schedule by day, week and professional, with 9 appointment statuses (Confirmed, Arrived, Done, No-show…) and no double bookings: the database does not allow overlaps or more seats than exist.",
      "A public booking page with your own link: customers choose service, professional and time, and services that require it go through your approval.",
      "Automatic WhatsApp: confirms, reminds, asks for a rating when done, announces changes and understands \"OK\" and \"CANCEL\".",
      "Deposits and payments: collect a deposit to hold the appointment or the seat, verify the receipt, and record partial payments and refunds with a reason and a history.",
      "Trips module: departures with seats, round trips, pickup points, a public page and the driver's list to share, print or export.",
    ],
    benefits: [
      {
        title: "Fewer forgotten and missed appointments",
        text: "WhatsApp reminders before the appointment. Customers reply OK or CANCEL and the schedule updates itself.",
      },
      {
        title: "Bookings without phone calls",
        text: "Your business has its own booking link: customers choose service, professional and time even while you're busy with someone else.",
      },
      {
        title: "Zero double bookings",
        text: "The database rejects overlapping appointments and selling more seats than exist. You don't depend on someone remembering to check.",
      },
      {
        title: "You approve what matters",
        text: "Delicate services stay pending until you approve them, and the customer gets the notice.",
      },
      {
        title: "Deposit collected, not promised",
        text: "Fixed or percentage deposit, the customer's receipt over WhatsApp, your verification and a reminder of the payment deadline.",
      },
      {
        title: "Cancellations and refunds with a trail",
        text: "Every cancellation keeps its reason, and refunds, full or partial, stay with their status and history.",
      },
      {
        title: "Your team, each with their own",
        text: "Owner and employees with different permissions; each professional with their own hours and services.",
        plan: "Salon and Large salon plans",
      },
      {
        title: "Win back dormant customers",
        text: "Spot who stopped coming and send them a WhatsApp invitation in one click, with a limit so you don't pester anyone.",
      },
      {
        title: "Departures and seats",
        text: "Publish the departure with its price, vehicle photo, round trip and pickup points; passengers book from a link.",
        plan: "Trips plan",
      },
      {
        title: "The driver's list",
        text: "Passengers, stops, phone numbers and what is still unpaid, to share over WhatsApp, print or export to CSV.",
        plan: "Trips plan",
      },
      {
        title: "The day at a glance",
        text: "A home screen with today's appointments, who has arrived and which bookings are waiting for your answer.",
      },
      {
        title: "Clear reports",
        text: "Income, most requested services and new customers, compared with the previous period.",
      },
    ],
    result: null,
    alts: [
      "Summary of the day",
      "Public booking page",
      "Weekly schedule",
      "WhatsApp reminders",
      "Departure with trip bookings",
      "Public departures page",
      "Services and prices",
      "Dashboard on mobile",
      "Schedule on mobile",
      "Public booking on mobile",
    ],
  },
  turnia: {
    sector: "Healthcare",
    summary:
      "Turnia organizes a healthcare team's shifts in a calendar where everyone sees their own, asks for changes and the manager approves, with no spreadsheets and no crossed messages. It warns you about conflicts before you assign and works on the web and on the phone.",
    tags: ["Calendar", "Shift swaps", "Roles", "Web and mobile"],
    platforms: ["Web", "iOS", "Android"],
    status: "Advanced development",
    challenge:
      "Balancing on-call duty, reinforcements and long shifts changes every week. On shared spreadsheets it is easy to assign someone who is on vacation or hasn't had the rest they need. Changes between colleagues are agreed over messages and the manager doesn't know what is official. Everyone ends up asking about their schedule.",
    solution: [
      "A calendar by month, week, day or list, with colored shifts and a letter per type (morning, night, 24 h…) defined by each organization.",
      "Fast shift entry: copy a period, generate from a pattern and edit in bulk.",
      "Conflict checks when assigning: overlaps, registered vacations or leave, and minimum rest between shifts.",
      "Changes with approval: anyone can ask to give up, swap or take an open shift, and the manager approves or rejects.",
      "Roles and several organizations: administration, manager, staff and read-only, with a change audit log, email invitations and export to Excel or CSV.",
    ],
    benefits: [
      {
        title: "The whole team in one calendar",
        text: "Month, week, day or list, with filters and a search for shifts and people.",
      },
      {
        title: "Shift types made to measure",
        text: "Set the name, letter, color and hours of each shift, and the team's positions.",
      },
      {
        title: "Shifts in minutes, not hours",
        text: "Copy a period, generate shifts from a pattern or edit several at once.",
      },
      {
        title: "Fewer mistakes when assigning",
        text: "It warns you about overlaps, about someone on vacation or leave, or about not meeting the minimum rest you set.",
      },
      {
        title: "Shift changes without chaos",
        text: "Give up, swap (with the colleague's acceptance) or ask for a free shift: everything is a request the manager approves or rejects.",
      },
      {
        title: "Open shifts",
        text: "Unassigned shifts are published and staff apply for them. You decide whether they need approval.",
      },
      {
        title: "Availability and leave in view",
        text: "Vacations, leave, training and days off are recorded, so you can see who you can count on.",
      },
      {
        title: "Who is on shift right now",
        text: "The day's schedule on a timeline and a view of the active on-call team.",
      },
      {
        title: "Instant notices",
        text: "In-app notifications with a direct link to the shift, and push notifications on Android.",
      },
      {
        title: "Every role sees its own",
        text: "Administration, manager, staff and read-only, with a permission matrix and data kept separate per organization.",
      },
      {
        title: "Several centers, one account",
        text: "Organizations with sub-organizations and a selector to switch between them.",
      },
      {
        title: "Traceability and data",
        text: "An audit log of changes, hours statistics per person and shift type, and schedule export to Excel or CSV.",
      },
    ],
    result: null,
    alts: [
      "Shift calendar",
      "Administration dashboard",
      "Statistics",
      "Shifts on mobile",
      "Dashboard on mobile",
    ],
  },
  "follow-it": {
    sector: "Logistics",
    summary:
      "Delivery management for businesses with their own couriers: create the order, assign it, see where it is on the map and get the delivery photo. Your customer follows their order with a link, with nothing to install.",
    tags: ["Deliveries", "Tracking", "Mobile"],
    platforms: ["Web", "Android", "iOS"],
    status: "In testing",
    challenge:
      "Anyone who delivers with their own people lives between calls and messages: who is taking this order? Has it left? Was it delivered? Meanwhile the customer asks where their order is and there is no proof it was delivered. Follow It brings everything together in one place for the owner, the courier and the customer.",
    solution: [
      "The business records each order (customer, address, products, amount, notes) and assigns a courier. Every order moves through clear statuses: pending, assigned, on its way, delivered, failed or cancelled.",
      "The courier gets the alert on their phone, sees only their own orders, changes the status and uploads the delivery photo as proof.",
      "The dashboard shows on a map where each courier is and a summary of the day, with the orders that need attention highlighted.",
      "Every order has a tracking link: you send it to the customer over WhatsApp and they see the status and the route without signing up.",
      "Couriers join with an invitation code and each business works with its data kept apart from the others. Coming soon: reports, exportable history and route optimization.",
    ],
    benefits: [
      {
        title: "One order, one person responsible",
        text: "Every order has its courier and a status everyone can see. No more asking over WhatsApp who is taking it.",
      },
      {
        title: "Customers stop calling",
        text: "You send a link and they follow their order with its status and timeline, with no app to download and no account to create.",
      },
      {
        title: "Proof of delivery",
        text: "The courier uploads a photo on delivery and it is saved with the order, to settle any claim.",
      },
      {
        title: "See where your couriers are",
        text: "A map with each courier's last location while they have active orders.",
      },
      {
        title: "Attention to what goes wrong",
        text: "The dashboard highlights orders that are still unassigned or not moving, and a failed order can be reassigned.",
      },
      {
        title: "A history of every order",
        text: "Every status change is recorded with its time, so you know what happened and when.",
      },
      {
        title: "Your team, no friction",
        text: "You invite each courier with a code. They only see and move the orders that are theirs.",
      },
      {
        title: "Instant alerts",
        text: "The courier gets a notification when an order is assigned and the business sees updates in its bell.",
      },
      {
        title: "Web and mobile, same account",
        text: "A browser dashboard for the business and a mobile app for the courier.",
      },
      {
        title: "Each business's data, kept apart",
        text: "Several businesses on the same platform without mixing information.",
      },
    ],
    result: null,
    alts: [
      "Orders on mobile",
    ],
  },
  invoxa: {
    sector: "Internal management",
    summary:
      "Invoxa closes your team's monthly invoicing without chasing anyone by email. You request the invoices, each person generates theirs with their own numbering and details, and you review and download them as PDF.",
    tags: ["Invoicing", "Roles", "PDF"],
    platforms: ["Web", "Mobile"],
    status: "In real use",
    challenge:
      "Every month end someone had to ask each collaborator for their invoice, chase the missing tax details, make sure no number was repeated and check that the amount matched the hours worked or the fixed rate. All by email and spreadsheets, with mistakes and late invoices.",
    solution: [
      "Collaborators, projects and rate (hourly or fixed monthly) in one place, with email invitations and each person's own billing profile.",
      "The administrator requests the month's invoices from one person or the whole team at once, and each collaborator sees it in their notification bell.",
      "Each collaborator logs their tasks, reviews the preview grouped by project and generates their invoice as a PDF in the company's format.",
      "The sequential number is assigned automatically, and any change goes through a request the administrator approves or rejects, with a history.",
      "The administrator follows each invoice by status (from generated to paid), filters by person, project or date and downloads the PDFs. It was born for the Informage Studios team and we adapt it to your company, invoice format and team data.",
    ],
    benefits: [
      {
        title: "One place for the month-end close",
        text: "A dashboard with active collaborators, pending requests and invoices generated and paid.",
      },
      {
        title: "Request invoices in one click",
        text: "An individual request or a batch to every active collaborator.",
      },
      {
        title: "Hourly or fixed, even on the same invoice",
        text: "Each project carries its own mode and rate, and the invoice groups lines by project.",
      },
      {
        title: "A task log that feeds the invoice",
        text: "The collaborator records what they worked on and the amount comes from there, with no separate calculations.",
      },
      {
        title: "Numbering without clashes",
        text: "Automatic sequential numbers and changes only with the administrator's approval, with its history.",
      },
      {
        title: "PDF ready to send",
        text: "An invoice with the issuer's details, the period, the breakdown by project, the total, notes and payment details.",
      },
      {
        title: "Hours statement as PDF",
        text: "A monthly report of tasks per project with subtotals, to hand to the person in charge.",
      },
      {
        title: "Tracking by status",
        text: "From generated to reviewed, approved or paid, with filters by collaborator, project and dates.",
      },
      {
        title: "Notices inside the app",
        text: "A real-time bell for requests, invoices and sequence-number changes.",
      },
      {
        title: "Everyone sees only their own",
        text: "Administrator and collaborator roles, with data protected row by row in the database.",
      },
    ],
    result: null,
    alts: [
      "Collaborator's home",
      "Generating the month's invoice",
      "Invoice detail",
      "Administrator dashboard",
      "Invoices of the month",
      "Collaborator management",
      "Collaborator's home on mobile",
      "Generating an invoice on mobile",
      "Invoices on mobile",
      "Dashboard on mobile",
    ],
  },
  "self-inspection": {
    sector: "Construction safety",
    summary:
      "Self Inspection digitizes safety inspections on site: the technician answers the checklist from their phone, with photos, GPS and notes, and the system scores it and builds the PDF report. Administration sees compliance and the inspector ranking without waiting for the paper to arrive.",
    tags: ["Inspections", "Mobile", "PDF", "Ranking"],
    platforms: ["Web", "Android", "iOS"],
    status: "In production",
    challenge:
      "Safety inspections on site were done on paper or loose sheets: unsorted photos, no reliable location and reports that took days to reach whoever had to act. Comparing compliance across sites or inspectors meant copying everything by hand into a spreadsheet.",
    solution: [
      "Digital checklists per installation type and activity, which the administrator configures and maintains (headings, questions, order).",
      "The inspector answers on the phone with Good, Fair, Poor or Not applicable, adds notes and photos with the camera and the GPS location is recorded.",
      "When the inspection is completed, the system calculates the score, the percentage and the rating, and notifies administrators and site managers.",
      "The PDF report (site details, answers by section, evaluation and photos) is generated on the spot, ready to download or share.",
      "An evaluations dashboard compares performance by inspector, client and team, with ranking, filters and alerts for position changes. In real use at 360 Ingeco, an engineering and construction company; we adapt it to your operation, your questions and your brand.",
    ],
    benefits: [
      {
        title: "Checklists made to measure",
        text: "Inspection types, activities, headings and questions editable by the administrator, with on/off switches and ordering.",
      },
      {
        title: "Clear answers",
        text: "Good, Fair, Poor or Not applicable on every question, with an optional note.",
      },
      {
        title: "Site photos with the phone camera",
        text: "Each photo is tied to its note, organized and ready for the report.",
      },
      {
        title: "Recorded location",
        text: "The GPS of each inspection is saved and shown on a map in the detail view.",
      },
      {
        title: "Automatic scoring and rating",
        text: "Percentage and level (excellent, good, fair, poor) with nothing to calculate by hand.",
      },
      {
        title: "PDF report on the spot",
        text: "With the site details, the inspector, answers by section, the evaluation and the photos.",
      },
      {
        title: "Inspector ranking and compliance dashboard",
        text: "Comparison by team and by client, with charts and filters.",
      },
      {
        title: "Notices inside the app",
        text: "Inspection created or completed, report ready, a change in ranking position and a daily reminder if something has been pending for more than 3 days.",
      },
      {
        title: "Teams with role-based permissions",
        text: "Administrator, site manager, work supervisor and technician, with access control in the database.",
      },
      {
        title: "Inspection follow-up",
        text: "Search by code, installation, client or activity, advanced filters and pending or completed status; several activities and subcontractors per inspection.",
      },
    ],
    result: null,
    alts: [
      "Evaluations and inspector ranking",
      "Inspection list with filters",
      "Home with an inspection summary",
      "Configurable inspection types",
      "Team management by role",
      "Inspections on mobile",
      "Evaluations on mobile",
      "Home on mobile",
    ],
  },
};
