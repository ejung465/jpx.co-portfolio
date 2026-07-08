export type Project = {
  slug: string;
  name: string;
  tagline: string;
  tagKind: "case-study" | "coming-soon" | "in-progress";
  frame: "browser" | "phone";
  browserUrl: string;
  statPrimary: { value: string; label: string };
  statSecondary: { value: string; label: string };
  href: string;
  external?: string;
  /** true once a full case-study page exists at /work/[slug] */
  hasCaseStudy: boolean;
};

export const projects: Project[] = [
  {
    slug: "in-the-beginning",
    name: "In The Beginning",
    tagline: "Portrait standardization studio",
    tagKind: "case-study",
    frame: "browser",
    browserUrl: "inthebegin.org/admin · portraits",
    statPrimary: { value: "$0", label: "per-image cost · in-browser WASM" },
    statSecondary: { value: "800×1000", label: "every portrait, auto-standardized" },
    href: "/work/in-the-beginning",
    external: "https://inthebegin.org",
    hasCaseStudy: true,
  },
  {
    slug: "miw-architects",
    name: "MIW Architects",
    tagline: "Studio site & project gallery",
    tagKind: "case-study",
    frame: "browser",
    browserUrl: "miwarchitects.com",
    statPrimary: { value: "—", label: "" },
    statSecondary: { value: "—", label: "" },
    href: "/work/miw-architects",
    external: "https://miwarchitects.com",
    hasCaseStudy: true,
  },
  {
    slug: "alloy-mentors",
    name: "Alloy Mentors",
    tagline: "Mentorship, in your pocket",
    tagKind: "coming-soon",
    frame: "phone",
    browserUrl: "alloymentors.app",
    statPrimary: { value: "—", label: "" },
    statSecondary: { value: "—", label: "" },
    href: "/work/alloy-mentors",
    hasCaseStudy: true,
  },
  {
    slug: "nh-small-claims",
    name: "NH Small Claims",
    tagline: "Self-help guide for small claims court",
    tagKind: "in-progress",
    frame: "browser",
    browserUrl: "nhsmallclaims.org",
    statPrimary: { value: "—", label: "" },
    statSecondary: { value: "—", label: "" },
    href: "/work/nh-small-claims",
    hasCaseStudy: true,
  },
];
