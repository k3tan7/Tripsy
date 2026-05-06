const sampleTrips = [
  {
    id: "1",
    name: "Summer in Kyoto",
    destination: "Kyoto, Japan",
    startDate: "2026-06-10",
    endDate: "2026-06-20",
    description: "Temple hopping and matcha tasting. Need to pack light clothes and good walking shoes.",
    coverColor: "#F1642E", // Orange
    items: [
      { id: "i1", name: "T-Shirts", packed: true },
      { id: "i2", name: "Walking Shoes", packed: true },
      { id: "i3", name: "Camera", packed: false },
      { id: "i4", name: "Passport", packed: false },
    ]
  },
  {
    id: "2",
    name: "Weekend Hiking",
    destination: "Blue Mountains",
    startDate: "2026-08-05",
    endDate: "2026-08-07",
    description: "Short weekend trip. Packing list focuses on hiking gear and warm layers.",
    coverColor: "#A3B565", // Green
    items: [
      { id: "i5", name: "Hiking Boots", packed: true },
      { id: "i6", name: "Water Bottle", packed: false },
    ]
  },
  {
    id: "3",
    name: "Business Conference",
    destination: "London, UK",
    startDate: "2026-09-12",
    endDate: "2026-09-16",
    description: "Tech conference in London. Formal wear and laptop gear required.",
    coverColor: "#504E76", // Dark Purple
    items: []
  }
];

export default sampleTrips;
