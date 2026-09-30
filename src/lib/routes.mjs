// Every internal link the Voice Pack pages use, in one place.
// The Workshops URL is confirmed from the published Workshop Catalogue.
// The others follow the same /our-work/... convention and are listed by
// `npm run check` so they can be confirmed against the live menu before
// publishing. Change a slug here and rebuild; nothing else needs editing.

export const SITE = "https://thealetheiaproject.org";

export const R = {
  home: "/",
  ourWork: "/our-work/",
  fivePillars: "/five-pillars/",
  getInvolved: "/get-involved/",
  disclaimer: "/disclaimer-privacy/",

  voicePacks: "/our-work/voice-packs/",
  current: "/our-work/voice-packs/heard-understood-me/",
  archive: "/our-work/voice-packs/archive/",
  ed01: "/our-work/voice-packs/archive/know-your-body/",
  ed02: "/our-work/voice-packs/archive/find-the-words/",
  ed03: "/our-work/voice-packs/archive/use-your-voice/",
  ed04: "/our-work/voice-packs/archive/from-voice-to-change/",

  digitalHealth: "/our-work/digital-health-education/",
  multilingual: "/our-work/multilingual-resources/",
  selfAdvocacy: "/our-work/self-advocacy-journal-health-navigator/",
  empower: "/our-work/empower-packs/",
  decisionMaking: "/our-work/youth-decision-making/",
  workshops: "/our-work/youth-decision-making/youth-workshops/",
  roundtables: "/our-work/youth-decision-making/youth-roundtables/",
  consultation: "/our-work/youth-decision-making/youth-consultation/",
  research: "/our-work/youth-research/",
  journal: "/our-work/youth-research/youth-research-journal/",
  council: "/our-work/youth-executive-council/",
  voices: "/our-work/aletheia-voices/",

  // WordPress files uploads by month. Set this to the folder the PDFs land in
  // when they are uploaded (Media > Add New), then rebuild.
  pdf: (file) => `/wp-content/uploads/2026/10/${file}`,

  volunteerForm: "https://forms.gle/mURc7WA3g4uDn6Uu6",
  email: "mailto:contact@thealetheiaproject.org",
  instagram: "https://www.instagram.com/aletheia.au/",
};
