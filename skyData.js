// DEMO DATA ONLY.
// These example records are not SPHEREx measurements or official mission products.
// Replace/extend this file when you connect an official SPHEREx data source.

const objects = [
  {
    id: "andromeda",
    name: "Andromeda Galaxy",
    type: "Galaxy",
    constellation: "Andromeda",
    description: "A nearby spiral galaxy visible in dark skies.",
    distanceLightYears: 2537000,
    demoTags: ["galaxy", "spiral", "deep-sky"]
  },
  {
    id: "orion-nebula",
    name: "Orion Nebula",
    type: "Nebula",
    constellation: "Orion",
    description: "A star-forming region in the constellation Orion.",
    distanceLightYears: 1344,
    demoTags: ["nebula", "star-formation"]
  },
  {
    id: "pleiades",
    name: "Pleiades",
    type: "Star Cluster",
    constellation: "Taurus",
    description: "An open star cluster also known as the Seven Sisters.",
    distanceLightYears: 444,
    demoTags: ["star-cluster", "stars"]
  },
  {
    id: "crab-nebula",
    name: "Crab Nebula",
    type: "Supernova Remnant",
    constellation: "Taurus",
    description: "The remnant of a supernova observed on Earth in 1054 CE.",
    distanceLightYears: 6500,
    demoTags: ["nebula", "supernova"]
  }
];

const timeline = [
  {
    year: 1054,
    title: "A bright supernova was recorded",
    description: "Historical records describe a bright new star in the sky. The Crab Nebula is the remnant associated with that event.",
    objectIds: ["crab-nebula"],
    isIllustrative: true
  },
  {
    year: 1609,
    title: "Early telescopic astronomy",
    description: "Telescopic observations began transforming the study of the night sky.",
    objectIds: ["andromeda", "pleiades"],
    isIllustrative: true
  },
  {
    year: 2025,
    title: "SPHEREx mission era",
    description: "NASA's SPHEREx mission is designed to survey the entire sky in near-infrared light.",
    objectIds: ["andromeda", "orion-nebula", "pleiades"],
    isIllustrative: true
  }
];

module.exports = { objects, timeline };
