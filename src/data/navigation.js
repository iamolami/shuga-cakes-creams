const navLinksLeft = [
  { text: "HOME", link: "/" },
  {
    text: "ABOUT US",
    link: `/services`,
    dropdown: [
      { name: "Text Content", link: `/services/text-content` },
      { name: "Graphics", link: `/services/graphics`},
      { name: "Translations", link: `/services/translations` },
      { name: "Video", link: `/services/video` },
      { name: "Audio", link: `/services/audio` },
      { name: "Transcriptions", link: `/services/transcriptions` },
      { name: "Training & Consultations", link: `/services/traning-consultations`},
    ],
  },
  {
    text: "PRODUCTS",
    link: `/products`,
    dropdown: [
      { name: "Digital Content Platform", link: "#digital-platform" },
      { name: "Managed Account", link: "#managed-account" },
      { name: "SEO Intelligence", link: "#seo-intelligence" },
      { name: "AI Copywriter", link: "#ai-copywriter" },
      { name: "Publishing", link: "#publishing" },
      { name: "Analytics", link: "#analytics" },
      { name: "Courses", link: "#courses" },
    ],
  },
];

const navLinksRight = [
  { text: "PORTFOLIO", link: "/" },
  {
    text: "BLOGS",
    link: `/services`,
    dropdown: [
      { name: "Text Content", link: `/services/text-content` },
      { name: "Graphics", link: `/services/graphics`},
      { name: "Translations", link: `/services/translations` },
      { name: "Video", link: `/services/video` },
      { name: "Audio", link: `/services/audio` },
      { name: "Transcriptions", link: `/services/transcriptions` },
      { name: "Training & Consultations", link: `/services/traning-consultations`},
    ],
  },
  {
    text: "CONTACT US",
    link: `/products`,
    dropdown: [
      { name: "Digital Content Platform", link: "#digital-platform" },
      { name: "Managed Account", link: "#managed-account" },
      { name: "SEO Intelligence", link: "#seo-intelligence" },
      { name: "AI Copywriter", link: "#ai-copywriter" },
      { name: "Publishing", link: "#publishing" },
      { name: "Analytics", link: "#analytics" },
      { name: "Courses", link: "#courses" },
    ],
  },
];


export { navLinksLeft, navLinksRight};
