const sampleTrips = [
  {
    id: "1",
    name: "Summer in Kyoto",
    destination: "Kyoto, Japan",
    startDate: "2026-06-10",
    endDate: "2026-06-20",
    type: "City",
    description: "Temple hopping and matcha tasting in historic Kyoto.",
    coverColor: "#F1642E",
    items: [
      { id: "i1", name: "T-Shirts", packed: true, quantity: 4, weight: 150, categoryId: "cat_clothing" },
      { id: "i2", name: "Comfortable Walking Shoes", packed: true, quantity: 1, weight: 700, categoryId: "cat_clothing" },
      { id: "i3", name: "Camera", packed: false, quantity: 1, weight: 500, categoryId: "cat_electronics" },
      { id: "i4", name: "Passport", packed: false, quantity: 1, weight: 40, categoryId: "cat_documents" },
      { id: "i5", name: "Pants", packed: true, quantity: 2, weight: 400, categoryId: "cat_clothing" },
      { id: "i6", name: "Underwear", packed: true, quantity: 5, weight: 40, categoryId: "cat_clothing" },
      { id: "i7", name: "Socks", packed: false, quantity: 5, weight: 35, categoryId: "cat_clothing" },
      { id: "i8", name: "Phone Charger", packed: true, quantity: 1, weight: 60, categoryId: "cat_electronics" },
      { id: "i9", name: "Power Bank", packed: false, quantity: 1, weight: 200, categoryId: "cat_electronics" },
      { id: "i10", name: "Sunscreen", packed: false, quantity: 1, weight: 60, categoryId: "cat_toiletries" },
      { id: "i11", name: "Cash/Credit Cards", packed: true, quantity: 1, weight: 15, categoryId: "cat_documents" },
      { id: "i12", name: "Pain Relievers", packed: false, quantity: 1, weight: 25, categoryId: "cat_medicine" },
    ]
  },
  {
    id: "2",
    name: "Weekend Hiking",
    destination: "Blue Mountains",
    startDate: "2026-08-05",
    endDate: "2026-08-07",
    type: "Camping",
    description: "Short weekend trip with hiking gear and warm layers.",
    coverColor: "#A3B565",
    items: [
      { id: "i13", name: "Hiking Boots", packed: true, quantity: 1, weight: 1000, categoryId: "cat_clothing" },
      { id: "i14", name: "Water Bottle", packed: false, quantity: 1, weight: 200, categoryId: "cat_food" },
      { id: "i15", name: "Sleeping Bag", packed: false, quantity: 1, weight: 1500, categoryId: "cat_misc" },
      { id: "i16", name: "Warm Jacket", packed: true, quantity: 1, weight: 700, categoryId: "cat_clothing" },
      { id: "i17", name: "Headlamp", packed: false, quantity: 1, weight: 90, categoryId: "cat_electronics" },
      { id: "i18", name: "First Aid Kit", packed: false, quantity: 1, weight: 250, categoryId: "cat_medicine" },
      { id: "i19", name: "Snacks", packed: true, quantity: 3, weight: 100, categoryId: "cat_food" },
    ]
  },
  {
    id: "3",
    name: "Business Conference",
    destination: "London, UK",
    startDate: "2026-09-12",
    endDate: "2026-09-16",
    type: "Business",
    description: "Tech conference in London. Formal wear and laptop gear required.",
    coverColor: "#504E76",
    items: [
      { id: "i20", name: "Suit/Blazer", packed: false, quantity: 1, weight: 900, categoryId: "cat_clothing" },
      { id: "i21", name: "Dress Shirts", packed: false, quantity: 3, weight: 220, categoryId: "cat_clothing" },
      { id: "i22", name: "Laptop", packed: false, quantity: 1, weight: 1500, categoryId: "cat_electronics" },
      { id: "i23", name: "Laptop Charger", packed: false, quantity: 1, weight: 350, categoryId: "cat_electronics" },
      { id: "i24", name: "Passport", packed: false, quantity: 1, weight: 40, categoryId: "cat_documents" },
      { id: "i25", name: "Business Cards", packed: false, quantity: 1, weight: 15, categoryId: "cat_documents" },
      { id: "i26", name: "Notebook", packed: false, quantity: 1, weight: 120, categoryId: "cat_accessories" },
    ]
  }
];

export default sampleTrips;
