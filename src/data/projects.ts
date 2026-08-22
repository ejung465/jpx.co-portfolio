export type ColophonEntry = { title: string; body: string };

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  status: "In service" | "In development";
  /** how the preview is framed on the card */
  frame: "browser" | "phone";
  /** full-width row in the work grid */
  wide?: boolean;
  /** shown in the browser chrome bar */
  displayUrl: string;
  /** live site — the preview links here */
  external?: string;
  image: string;
  imageAlt: string;

  href: string;
  metaDescription: string;

  engagement: {
    brief: string;
    scope: string;
    practice: string;
    delivered: string;
  };
  /** verified from the live site + build records */
  stack: string[];
  colophon: ColophonEntry[];
};

export const projects: Project[] = [
  {
    slug: "nh-small-claims",
    name: "NH Small Claims",
    tagline: "Legal self-help resource",
    status: "In service",
    frame: "browser",
    displayUrl: "nhsmallclaims.org",
    external: "https://nhsmallclaims.org",
    image: "/images/shots/nh-small-claims.jpg",
    imageAlt: "NH Small Claims homepage",
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
    tagline: "Studio site & project gallery",
    status: "In service",
    frame: "browser",
    displayUrl: "miwarchitects.com",
    external: "https://miwarchitects.com",
    image: "/images/shots/miw-architects.jpg",
    imageAlt: "MIW Architects homepage",
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
    tagline: "Nonprofit platform & operations tooling",
    status: "In service",
    frame: "browser",
    displayUrl: "inthebegin.org",
    external: "https://inthebegin.org",
    image: "/images/shots/in-the-beginning.jpg",
    imageAlt: "In The Beginning homepage",
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
        title: "Data Layer",
        body: "A MongoDB cluster backs the roster, editorial, and settings collections. Mutations run as server actions, so privileged logic never reaches the browser.",
      },
      {
        title: "Media",
        body: "Portraits and cover art are normalized in the client — scaled to a consistent crop before upload, at no per-image cost — then written to Cloudflare R2 object storage and served from its edge. No third-party image host in the path.",
      },
      {
        title: "Access Control",
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
    tagline: "Mentorship application — in development",
    status: "In development",
    frame: "phone",
    wide: true,
    displayUrl: "alloymentors.app",
    image: "/images/alloy-mentors-icon.png",
    imageAlt: "Alloy Mentors app icon",
    href: "/work/alloy-mentors",
    metaDescription: "Alloy Mentors — a mentorship application in development, heading for the App Store.",
    engagement: {
      brief:
        "A mentorship application currently in development and heading for the App Store. Design and engineering are in progress; the full record of this engagement will be published at launch.",
      scope: "Product & engineering",
      practice: "Design & engineering",
      delivered: "In progress",
    },
    stack: [],
    colophon: [],
  },
];
