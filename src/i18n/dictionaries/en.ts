// English copy. Same shape as `es.ts` (enforced by the Dictionary type).
import type { Dictionary } from "@/i18n/dictionaries/es";

export const en: Dictionary = {
  meta: {
    title: "Fullkod — Full solutions. Fully coded.",
    titleTemplate: "%s · Fullkod",
    description:
      "Complete software solutions for any business, anywhere in the world. Custom code, from the idea to day-to-day operation.",
    keywords: [
      "custom software",
      "application development",
      "web applications",
      "mobile apps",
      "SaaS",
      "e-commerce",
      "automation",
    ],
    openGraphLocale: "en_US",
    skipLink: "Skip to content",
    caseStudy: "case study",
    ogEyebrow: "Custom software",
    ogLine: "fullkod.com · For businesses worldwide",
  },

  header: {
    homeLabel: "Fullkod, home",
    mainNav: "Main",
    mobileNav: "Mobile",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    cta: "Let's talk",
    languageLabel: "Language",
    links: {
      projects: "Projects",
      services: "Services",
      process: "How we work",
      team: "Team",
      faq: "FAQ",
    },
  },

  footer: {
    blurb:
      "For businesses worldwide. We build complete applications for your business: from the first idea to day-to-day operation, with a single team accountable for everything.",
    projects: "Projects",
    company: "Fullkod",
    contact: "Contact",
    services: "Services",
    team: "Team",
    faq: "Frequently asked questions",
    contactLink: "Contact",
    writeUs: "Write to us",
    rights: "© 2026 Fullkod. All rights reserved.",
    legalNotice: "Legal notice",
    privacy: "Privacy",
    cookies: "Cookies",
  },

  home: {
    hero: {
      eyebrow: "Custom software · For the whole world",
      line1: "Full solutions.",
      line2: "Fully coded.",
      text: "We build complete applications for your business: from the first idea to day-to-day operation, with a single team accountable for everything.",
      ctaPrimary: "Tell us about your project",
      ctaSecondary: "See projects →",
    },
    sectors: [
      "Optical shops",
      "Clinics",
      "Hair salons",
      "Deliveries",
      "E-commerce",
      "Appointments",
      "Automation",
      "AI",
    ],
    projects: {
      eyebrow: "Projects",
      title: "Real software, used every day",
      viewCase: "View case →",
      screenOf: "{name} screen",
    },
    services: {
      eyebrow: "Services",
      title: "One team for the whole solution",
      items: [
        {
          title: "Web and mobile applications",
          text: "Dashboards, portals and Android/iOS apps designed around how your team works.",
        },
        {
          title: "SaaS platforms and e-commerce",
          text: "Multi-tenant, payments, orders and your own reports, without relying on closed templates.",
        },
        {
          title: "Automation and AI",
          text: "Repetitive processes turned into workflows that run on their own, with assistants that use your data.",
        },
        {
          title: "Integrations and maintenance",
          text: "We connect your software with what you already use, and keep it alive and improving.",
        },
      ],
      stackTitle: "What we work with",
    },
    process: {
      eyebrow: "How we work",
      title: "Clear from day one",
      steps: [
        {
          title: "We listen",
          text: "We understand the business and what “done” means to you before writing a line of code.",
        },
        {
          title: "We build",
          text: "Short, reviewable deliveries. You see real progress every week, not at the end.",
        },
        {
          title: "We stay with you",
          text: "Deployment, training and support. The software keeps growing with your business.",
        },
      ],
    },
    team: {
      eyebrow: "Who we are",
      title: "A small team that answers for everything",
      text: "At Fullkod we build complete software for any business, wherever it is. You always talk to the people building your project: no middlemen and no passing the buck.",
    },
    clients: {
      eyebrow: "Clients",
      title: "What people who already use our apps say",
      testimonials: [
        {
          quote:
            "It has been super useful for me. I used to keep Espiral Studio's appointments in a Google calendar, writing down and moving everything by hand. Now it's all organized in one place and it's so much more convenient.",
          role: "Owner of Espiral Studio",
        },
        {
          quote:
            "I find it super complete. I used to keep the whole business in a paper notebook, and now I have everything I need to run the optical shop in a single system.",
          role: "Owner of an optical shop that uses LensSpace",
        },
      ],
      translatedNote: "Translated from Spanish",
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "What people usually ask us",
      noAnswer: "Can't find your question?",
      writeUs: "Write to us",
      items: [
        {
          question: "How much does a project cost?",
          answer:
            "It depends on the scope. After a first conversation we send you a written proposal with what it includes, the timeline and the budget, so you can decide with all the information.",
        },
        {
          question: "How long until something is up and running?",
          answer:
            "We work in short deliveries: the first usable version arrives early and grows from there with what you try out. The total timeline depends on the scope and we set it in the proposal.",
        },
        {
          question: "Who owns the code?",
          answer:
            "You do. When we finish, we hand over the code and access to the infrastructure, so you don't depend on us if you ever want to change teams.",
        },
        {
          question: "What happens after launch?",
          answer:
            "We stay with you: we fix bugs, make sure everything keeps working and add improvements. We can agree on a maintenance plan or work on request.",
        },
        {
          question: "Do you work with businesses in other countries?",
          answer: "Yes. We work remotely with businesses in any country.",
        },
        {
          question: "What technologies do you use?",
          answer:
            "Mainly Next.js, React and TypeScript for the web, Supabase and PostgreSQL for data and Capacitor for Android and iOS apps. We choose whatever fits your case best.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Do you have a business that needs custom software?",
      text: "Tell us what you want to solve. We reply with concrete questions and, if it's a fit, with a written proposal.",
    },
  },

  form: {
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@email.com",
    company: "Company or business (optional)",
    companyPlaceholder: "Business name",
    message: "What do you need?",
    messagePlaceholder: "Tell us about your business and what you'd like to solve.",
    honeypot: "Website",
    privacyPrefix: "I have read and accept the",
    privacyLink: "privacy policy",
    submit: "Send message",
    sending: "Sending…",
    whatsapp: "or message us on WhatsApp →",
    whatsappText: "Hi, I'd like to talk about a project with Fullkod.",
    sentTitle: "Message received!",
    sentText: "Thanks for writing to us. We'll reply as soon as we read it.",
    errorDefault: "We couldn't send the message.",
    errorNetwork: "No connection. Please try again in a moment.",
    errorEmailHint: "You can also write to us at",
  },

  api: {
    badFormat: "Invalid format.",
    missingFields: "Please enter your name and tell us a bit more.",
    invalidEmail: "Please check the email: it doesn't look valid.",
    privacyRequired: "You need to accept the privacy policy.",
    inactive: "The form is not active yet. Please try again soon.",
    sendFailed: "We couldn't send the message. Please try again in a moment.",
    subject: "New contact from the website: {name}",
    labelName: "Name",
    labelEmail: "Email",
    labelCompany: "Company",
  },

  gallery: {
    mobileHeading: "On mobile",
    enlarge: "Enlarge: {alt}",
    close: "Close",
    previous: "Previous",
    next: "Next",
  },

  project: {
    back: "← Projects",
    caseStudy: "Case study",
    platforms: "Platforms",
    status: "Status",
    challenge: "The challenge",
    solution: "The solution",
    result: "The result",
    screens: "What it looks like",
    stack: "What we built it with",
    nextProject: "Next project",
    cta: "I want something like this",
  },

  notFound: {
    title: "This page doesn't exist",
    text: "The link may be wrong, or we may have moved the page.",
    back: "Back to home",
  },

  legal: {
    eyebrow: "Legal",
    lastUpdated: "Last updated: {date}",
    updatedAt: "October 22, 2026",
    draftNote:
      "Draft: this text is pending completion and review. Items marked “[pending]” will be added before the website is published.",
    pending: "[pending]",
    noticeTitle: "Legal notice",
    privacyTitle: "Privacy policy",
    cookiesTitle: "Cookie policy",
  },
};
