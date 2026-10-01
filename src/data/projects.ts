export type ColophonEntry = { title: string; body: string };

export type Project = {
  slug: string;
  name: string;
  /** client engagement, or software JPX builds and runs itself */
  kind: "client" | "product";
  /** short category line for the index */
  category: string;
  /** one-line outcome, set large on tiles and case-study headers */
  headline: string;
  /** two or three sentences for the homepage feature row */
  summary: string;
  year: string;
  /** where it runs — "Web", "iPhone & Android", … */
  platforms: string;
  status: "In service" | "In development" | "Offline";
  /** shown on the case study when a site is no longer reachable */
  statusNote?: string;
  /** shown in the browser chrome bar */
  displayUrl: string;
  /** live site — previews link here */
  external?: string;
  /** 16:10 capture of the first screen */
  image: string;
  /** full-page capture; scrolls inside the frame on hover */
  page?: string;
  imageAlt: string;
  /** product icon + brand tint, for product tiles */
  icon?: string;
  brand?: string;

  href: string;
  metaDescription: string;

  engagement: {
    brief: string;
    scope: string;
    practice: string;
    delivered: string;
  };
  /** verified against the live site and the build itself */
  stack: string[];
  colophon: ColophonEntry[];
};

export const projects: Project[] = [
  {
    slug: "nh-small-claims",
    name: "NH Small Claims",
    kind: "client",
    category: "Legal self-help resource",
    headline: "Small claims court, explained in plain language.",
    summary:
      "A public resource for people representing themselves in New Hampshire's small claims court — organized around the questions they actually arrive with, and maintained by a rotating team of Dartmouth students without an engineer in the loop.",
    year: "2026",
    platforms: "Web",
    status: "In service",
    displayUrl: "nhsmallclaims.org",
    external: "https://nhsmallclaims.org",
    image: "/images/shots/nh-small-claims.jpg",
    page: "/images/shots/nh-small-claims-page.jpg",
    imageAlt: "The NH Small Claims homepage",
    href: "/work/nh-small-claims",
    metaDescription:
      "A plain-language self-help resource for New Hampshire small claims court, built for a Dartmouth College student volunteer project.",
    engagement: {
      brief:
        "A volunteer project run by Dartmouth College students, making New Hampshire's small claims process navigable for people representing themselves. The brief was a plain-language public resource — procedural guidance, a court lookup, and aid referrals — that a rotating student team could keep current without an engineer in the loop.",
      scope: "End to end",
      practice: "Design & engineering",
      delivered: "2026",
    },
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    colophon: [
      {
        title: "Interface",
        body: "Next.js App Router with React server components, composed in Tailwind. The type is set for sustained reading — this is a site people use while stressed, not one they browse.",
      },
      {
        title: "Wayfinding",
        body: "The content is organized around the questions people actually arrive with — who can file, what happens after service, how judgments are collected — rather than around how the court system is structured internally.",
      },
      {
        title: "Operations",
        body: "Continuously deployed to Vercel's edge network, so a student team can publish a correction the same day a rule changes.",
      },
    ],
  },
  {
    slug: "miw-architects",
    name: "MIW Architects",
    kind: "client",
    category: "Studio site & gallery",
    headline: "A studio site that lets the buildings do the talking.",
    summary:
      "A gallery-first site for a Chicago practice working across commercial, residential, and mixed-use development. The interface is deliberately restrained — an architecture firm is judged on its buildings, not its website.",
    year: "2026",
    platforms: "Web",
    status: "In service",
    displayUrl: "miwarchitects.com",
    external: "https://miwarchitects.com",
    image: "/images/shots/miw-architects.jpg",
    imageAlt: "The MIW Architects homepage",
    href: "/work/miw-architects",
    metaDescription:
      "Studio website and project gallery for MIW Architects, a Chicago practice working across commercial, residential, and mixed-use development.",
    engagement: {
      brief:
        "A Chicago architectural practice working across commercial, residential, and mixed-use development, with projects reaching New York and Seoul. The brief was a gallery-first studio site that carries the photography without competing with it, structured so new work can be added as projects wrap.",
      scope: "End to end",
      practice: "Design & engineering",
      delivered: "2026",
    },
    stack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    colophon: [
      {
        title: "Interface",
        body: "Next.js and Tailwind, deliberately restrained. An architecture practice is judged on its buildings, so the interface is built to get out of the way of the imagery.",
      },
      {
        title: "Media",
        body: "The projects page opens on a video reel of built work, then resolves into stills organized by the categories the studio actually sells against — commercial, residential, development, and custom fabrication.",
      },
      {
        title: "Operations",
        body: "Deployed on Vercel. Adding a completed project is a content change, not a layout change.",
      },
    ],
  },
  {
    slug: "in-the-beginning",
    name: "In The Beginning",
    kind: "client",
    category: "Nonprofit platform & tooling",
    headline: "A public site, and the tooling volunteers run it with.",
    summary:
      "Public site and volunteer operations platform for a student-led nonprofit supporting refugee and displaced youth — intake, a review queue, a roster, and an editorial pipeline, all run by volunteers with no developer in the loop.",
    year: "2026",
    platforms: "Web",
    status: "Offline",
    statusNote:
      "The site was taken offline at the organization's request following internal changes on their side. The build and its administrative tooling are unaffected; the capture below is the site as delivered.",
    displayUrl: "inthebegin.org",
    image: "/images/shots/in-the-beginning.jpg",
    imageAlt: "The In The Beginning homepage, as delivered",
    href: "/work/in-the-beginning",
    metaDescription:
      "Public site and volunteer operations platform for In The Beginning, a student-led nonprofit supporting refugee and displaced youth.",
    engagement: {
      brief:
        "A student-led nonprofit supporting refugee and displaced youth. The brief was a public site that carries the organization's work with dignity, paired with administrative tooling its volunteers could run themselves — roster management, an editorial pipeline, and intake, all without a developer in the loop.",
      scope: "End to end",
      practice: "Design & engineering",
      delivered: "2026",
    },
    stack: ["Next.js 16", "TypeScript", "MongoDB", "Cloudflare R2", "Tailwind CSS", "Vercel"],
    colophon: [
      {
        title: "Interface",
        body: "Next.js App Router and React server components, typed end to end with TypeScript. Layouts composed in Tailwind, tuned by hand for legibility at every breakpoint.",
      },
      {
        title: "Data layer",
        body: "A MongoDB cluster backs the roster, editorial, and settings collections. Mutations run as server actions, so privileged logic never reaches the browser.",
      },
      {
        title: "Media",
        body: "Portraits and cover art are normalized in the client — scaled to a consistent crop before upload, at no per-image cost — then written to Cloudflare R2 object storage and served from its edge. No third-party image host in the path.",
      },
      {
        title: "Access control",
        body: "The control panel is gated by an HMAC-signed session cookie, verified server-side on every privileged action rather than trusted from the client. No third-party auth vendor in the dependency graph.",
      },
      {
        title: "Correspondence",
        body: "Application, approval, and editorial notifications are delivered through a transactional mail service on a branded template.",
      },
      {
        title: "Operations",
        body: "Continuously deployed to a global edge network, with a publishing freeze that lets the team stage roster changes without touching the live site.",
      },
    ],
  },
  {
    slug: "alloy-mentors",
    name: "Alloy Mentors",
    kind: "product",
    category: "Program management app",
    headline: "Run your program, not your paperwork.",
    summary:
      "One app for mentoring and tutoring programs — check-in, pairing, verified hours, student progress, and safe messaging. Any program can stand up its own organization in minutes.",
    year: "2026",
    platforms: "iPhone & Android",
    status: "In development",
    displayUrl: "alloymentors.com",
    external: "https://www.alloymentors.com",
    image: "/images/shots/alloy-mentors.jpg",
    page: "/images/shots/alloy-mentors-page.jpg",
    imageAlt: "The Alloy Mentors website",
    icon: "/images/alloy-mentors-icon.png",
    brand: "#165b74",
    href: "/work/alloy-mentors",
    metaDescription:
      "Alloy Mentors — a mobile app for mentoring and tutoring programs: check-in, pairing, verified hours, student progress, and safe messaging. Designed and built by JPX.",
    engagement: {
      brief:
        "Most mentoring programs run on five tools that don't talk to each other — a spreadsheet for the roster, a group chat, paper sign-in sheets, emailed hour logs, and a slide deck at the end of the year. Alloy Mentors replaces them with one app that coordinators, mentors, and students each see differently, built for programs where many of the participants are minors.",
      scope: "Product, design & engineering",
      practice: "JPX product",
      delivered: "Coming to the App Store",
    },
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "Resend", "Next.js", "Vercel"],
    colophon: [
      {
        title: "Organizations",
        body: "Any program can create its own organization in the app and invite people with join codes. Feature modules — hours, QR check-in, progress, guardian updates — switch on per program, and each one sets its own vocabulary: Tutor and Student, Coach and Athlete, Mentor and Mentee.",
      },
      {
        title: "Isolation",
        body: "Every table is scoped to its organization with Postgres row-level security, and the policies have been through an adversarial review. A student account can read its own progress and nothing else.",
      },
      {
        title: "Check-in",
        body: "Attendance runs on a branded QR code generated on the device and re-signed every thirty seconds. A kiosk verifies the signature, so a screenshot can't be reused and no user ID ever passes through a third-party QR service.",
      },
      {
        title: "Progress",
        body: "Goals, a skills mastery grid, and a growth timeline for every student — exportable as an editorial PDF report for funders, or a plain-language note for a guardian.",
      },
      {
        title: "Reliability",
        body: "Coordinators see live RSVP coverage for every session. A scheduled edge function nudges anyone who hasn't responded shortly before it starts. Recognition is tied to attendance streaks, not hours logged.",
      },
      {
        title: "Messaging",
        body: "Realtime chat with reactions, edit and unsend windows, reporting, and blocking — designed around the fact that many participants are minors.",
      },
    ],
  },
  {
    slug: "ambry-calendar",
    name: "Ambry Calendar",
    kind: "product",
    category: "Calendar for Mac, iPhone & web",
    headline: "Capture the moment. Keep the whole month in view.",
    summary:
      "A calendar built around the five seconds you actually have — type 1100-1500: Doctors appt into a cell and it's a real event. Three synced views over one model: a dense grid, a calendar, and a drag-to-replan timeline.",
    year: "2026",
    platforms: "Mac, iPhone & web",
    status: "In development",
    displayUrl: "ambrycalendar.com",
    external: "https://www.ambrycalendar.com",
    image: "/images/shots/ambry-calendar.jpg",
    page: "/images/shots/ambry-calendar-page.jpg",
    imageAlt: "The Ambry Calendar website",
    icon: "/images/ambry-calendar-icon.png",
    brand: "#c9861a",
    href: "/work/ambry-calendar",
    metaDescription:
      "Ambry Calendar — a native Mac and iPhone calendar with a full web app: plaintext quick entry, three synced views, and two-way Google Calendar sync. Designed and built by JPX.",
    engagement: {
      brief:
        "Adding an event while it's actually happening — a receptionist reading out a follow-up date, a friend texting a time — takes too many taps in every mainstream calendar, so it often doesn't get added at all. And once events exist, month views compress them into unreadable slivers. Ambry makes the fast-glance grid and the fast-entry mechanism the same interface, backed by real calendar sync.",
      scope: "Product, design & engineering",
      practice: "JPX product",
      delivered: "Early access",
    },
    stack: ["Swift", "SwiftUI", "React", "TypeScript", "Fastify", "Prisma", "PostgreSQL", "Ably", "Cloudflare R2"],
    colophon: [
      {
        title: "Three views",
        body: "A spreadsheet-style grid, a week calendar, and a Gantt-style timeline are equal windows onto one event model. None of them is primary — an edit in any one updates the other two live, over a realtime channel.",
      },
      {
        title: "Quick entry",
        body: "Typing 1100-1500: Doctors appt into a grid cell is parsed deterministically into a timed event on that row's date. No modal, no date picker. Anything that isn't strict syntax is never silently guessed at.",
      },
      {
        title: "Native",
        body: "One SwiftUI codebase for Mac and iPhone, sharing models, networking, the design system, and every screen. The grid sits on a real scroll view for true two-axis pinch zoom; the Mac gets a floating glass view switcher, ⌘1–3, and trackpad panning.",
      },
      {
        title: "Sync",
        body: "Two-way Google Calendar sync, and Apple Calendar through EventKit. Categories travel as a plain-text tag, so they survive edits made in Google's own interface. Conflicts resolve last-write-wins — and the losing edit is shown to you, never silently discarded.",
      },
      {
        title: "Scheduling",
        body: "A least-busy slot finder that is deliberately not AI: it scores each day's density against per-category rules — allowed hours, buffers, excluded days — and explains why it picked the slot it did.",
      },
      {
        title: "Operations",
        body: "A Fastify and Prisma API on Postgres that rides out a sleeping database instead of surfacing errors, attachments in Cloudflare R2, and a server address the apps can be pointed at without reinstalling.",
      },
    ],
  },
];

export const clientWork = projects.filter((p) => p.kind === "client");
export const products = projects.filter((p) => p.kind === "product");

/** the case study after this one, wrapping — keeps people reading */
export function nextProject(slug: string): Project {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}

export const statusClass: Record<Project["status"], string> = {
  "In service": "status status--live",
  "In development": "status status--dev",
  Offline: "status status--offline",
};
