// Pre-estimated weights in grams for common travel items (realistic values)
export const ITEM_WEIGHTS = {
  // Clothing
  "T-Shirts": 150, "Underwear": 40, "Socks": 35, "Pants": 400, "Sleepwear": 200,
  "Jacket": 550, "Shorts": 200, "Dress Shirts": 220, "Suit/Blazer": 900,
  "Dress Shoes": 800, "Swimsuit": 120, "Sweaters": 350, "Thermal Underwear": 180,
  "Heavy Coat": 1500, "Light Jacket": 400, "Comfortable Walking Shoes": 700,
  "Flip Flops": 180, "Hiking Boots": 1000, "Winter Boots": 1300, "Rain Jacket": 350,
  "Formal Dress": 500, "Belt": 120, "Warm Jacket": 700, "Beanie": 60,
  "Gloves": 70, "Scarf": 120, "Hat": 90, "Sandals": 300, "Activewear": 180,
  "Saree/Kurta": 400, "Thick Socks": 60, "Beach Towel": 500,
  // Toiletries (travel-size containers)
  "Toothbrush": 15, "Toothpaste": 75, "Deodorant": 70, "Shampoo": 110,
  "Body Wash": 120, "Moisturizer": 80, "Sunscreen": 60, "Lip Balm": 8,
  "Razor": 45, "Face Wash": 90, "Hand Sanitizer": 55, "Wet Wipes": 70,
  "Hair Brush": 60, "Hair Ties": 5, "Contact Lens Solution": 90, "Perfume": 100,
  "Cotton Swabs": 15, "Tissue Pack": 25, "Insect Repellent": 85,
  "After-Sun Lotion": 130, "Toiletries": 250,
  // Electronics
  "Smartphone": 190, "Phone Charger": 60, "Laptop": 1500, "Laptop Charger": 350,
  "Power Bank": 200, "Headphones": 230, "Camera": 500, "Camera Charger": 70,
  "Universal Adapter": 120, "USB Cable": 25, "Earbuds": 55, "Kindle/E-reader": 200,
  "Portable Speaker": 400, "SD Card": 2, "Torch/Flashlight": 130,
  "Extension Cord": 180, "Headlamp": 90,
  // Documents
  "Passport": 40, "ID/Driver's License": 5, "Travel Insurance": 5,
  "Boarding Passes": 5, "Cash/Credit Cards": 15, "Hotel Reservation": 5,
  "Visa Documents": 5, "Emergency Contact List": 5, "Photocopies of ID": 10,
  "Itinerary Printout": 10, "Business Cards": 15, "Vaccination Certificate": 5,
  "Foreign Currency": 25,
  // Medicine
  "Pain Relievers": 25, "Band-Aids": 15, "Prescription Meds": 40, "Vitamins": 35,
  "Allergy Meds": 20, "Motion Sickness Pills": 12, "Antacids": 25,
  "Antiseptic Cream": 35, "Cough Drops": 30, "Electrolyte Sachets": 20,
  "First Aid Kit": 250, "Thermometer": 25, "Eye Drops": 10,
  // Accessories
  "Sunglasses": 30, "Watch": 55, "Travel Pillow": 280, "Eye Mask": 20,
  "Earplugs": 3, "Crossbody Bag": 350, "Daypack": 450, "Luggage Lock": 40,
  "Packing Cubes": 80, "Laundry Bag": 25, "Umbrella": 300, "Notebook": 120,
  "Pen": 8, "Travel Wallet": 50, "Neck Pouch": 35,
  "Reusable Shopping Bag": 25, "Ziplock Bags": 15,
  // Food & Drinks
  "Water Bottle": 200, "Snacks": 100, "Protein Bars": 60, "Instant Coffee": 40,
  "Tea Bags": 15, "Reusable Cutlery": 70, "Dry Fruits": 80, "Chewing Gum": 25,
  "Instant Noodles": 85,
  // Miscellaneous
  "Book/E-reader": 250, "House Keys": 25, "Trash Bags": 40, "Sewing Kit": 20,
  "Duct Tape": 90, "Rubber Bands": 8, "Safety Pins": 8, "Travel Games": 130,
  "Journal": 180, "Stickers": 10, "Souvenirs Bag": 40,
  "Tent": 2200, "Sleeping Bag": 1500, "Pocket Knife": 85
};

export const CATEGORIES = [
  {
    id: "cat_clothing",
    name: "Clothing",
    defaultItems: [
      "T-Shirts", "Underwear", "Socks", "Pants", "Sleepwear", "Jacket",
      "Shorts", "Dress Shirts", "Suit/Blazer", "Dress Shoes", "Swimsuit",
      "Sweaters", "Thermal Underwear", "Heavy Coat", "Light Jacket",
      "Comfortable Walking Shoes", "Flip Flops", "Hiking Boots", "Winter Boots",
      "Rain Jacket", "Formal Dress", "Belt", "Warm Jacket", "Beanie",
      "Gloves", "Scarf", "Hat", "Sandals", "Activewear", "Saree/Kurta"
    ]
  },
  {
    id: "cat_toiletries",
    name: "Toiletries",
    defaultItems: [
      "Toothbrush", "Toothpaste", "Deodorant", "Shampoo", "Body Wash",
      "Moisturizer", "Sunscreen", "Lip Balm", "Razor", "Face Wash",
      "Hand Sanitizer", "Wet Wipes", "Hair Brush", "Hair Ties",
      "Contact Lens Solution", "Perfume", "Cotton Swabs", "Tissue Pack",
      "Insect Repellent", "After-Sun Lotion"
    ]
  },
  {
    id: "cat_electronics",
    name: "Electronics",
    defaultItems: [
      "Smartphone", "Phone Charger", "Laptop", "Laptop Charger", "Power Bank",
      "Headphones", "Camera", "Camera Charger", "Universal Adapter",
      "USB Cable", "Earbuds", "Kindle/E-reader", "Portable Speaker",
      "SD Card", "Torch/Flashlight", "Extension Cord", "Headlamp"
    ]
  },
  {
    id: "cat_documents",
    name: "Documents",
    defaultItems: [
      "Passport", "ID/Driver's License", "Travel Insurance", "Boarding Passes",
      "Cash/Credit Cards", "Hotel Reservation", "Visa Documents",
      "Emergency Contact List", "Photocopies of ID", "Itinerary Printout",
      "Business Cards", "Vaccination Certificate", "Foreign Currency"
    ]
  },
  {
    id: "cat_medicine",
    name: "Medicine",
    defaultItems: [
      "Pain Relievers", "Band-Aids", "Prescription Meds", "Vitamins",
      "Allergy Meds", "Motion Sickness Pills", "Antacids",
      "Antiseptic Cream", "Cough Drops", "Electrolyte Sachets",
      "First Aid Kit", "Thermometer", "Eye Drops"
    ]
  },
  {
    id: "cat_accessories",
    name: "Accessories",
    defaultItems: [
      "Sunglasses", "Watch", "Travel Pillow", "Eye Mask", "Earplugs",
      "Crossbody Bag", "Daypack", "Luggage Lock", "Packing Cubes",
      "Laundry Bag", "Umbrella", "Notebook", "Pen", "Travel Wallet",
      "Neck Pouch", "Reusable Shopping Bag", "Ziplock Bags"
    ]
  },
  {
    id: "cat_food",
    name: "Food and Drinks",
    defaultItems: [
      "Water Bottle", "Snacks", "Protein Bars", "Instant Coffee",
      "Tea Bags", "Reusable Cutlery", "Dry Fruits", "Chewing Gum",
      "Instant Noodles"
    ]
  },
  {
    id: "cat_misc",
    name: "Miscellaneous",
    defaultItems: [
      "Book/E-reader", "House Keys", "Trash Bags", "Sewing Kit",
      "Duct Tape", "Rubber Bands", "Safety Pins", "Travel Games",
      "Journal", "Stickers", "Souvenirs Bag"
    ]
  }
];

export const TEMPLATES = {
  Beach: [
    "Swimsuit", "Sunscreen", "After-Sun Lotion", "Beach Towel", "Flip Flops",
    "Sunglasses", "Hat", "T-Shirts", "Shorts", "Underwear", "Socks",
    "Sandals", "Light Jacket", "Sleepwear",
    "Toothbrush", "Toothpaste", "Deodorant", "Shampoo", "Body Wash",
    "Moisturizer", "Lip Balm", "Hair Ties", "Insect Repellent",
    "Smartphone", "Phone Charger", "Power Bank", "Camera", "Headphones",
    "Passport", "ID/Driver's License", "Cash/Credit Cards", "Hotel Reservation",
    "Travel Insurance",
    "Pain Relievers", "Band-Aids", "Motion Sickness Pills", "Allergy Meds",
    "Water Bottle", "Snacks",
    "Crossbody Bag", "Travel Pillow", "Luggage Lock", "Packing Cubes",
    "Book/E-reader", "House Keys"
  ],
  Business: [
    "Suit/Blazer", "Dress Shirts", "Dress Shoes", "Pants", "Belt",
    "Underwear", "Socks", "Sleepwear", "Comfortable Walking Shoes",
    "Toothbrush", "Toothpaste", "Deodorant", "Shampoo", "Razor",
    "Face Wash", "Perfume", "Moisturizer",
    "Laptop", "Laptop Charger", "Smartphone", "Phone Charger", "Power Bank",
    "Headphones", "USB Cable", "Universal Adapter",
    "Passport", "ID/Driver's License", "Cash/Credit Cards", "Hotel Reservation",
    "Business Cards", "Itinerary Printout", "Travel Insurance",
    "Pain Relievers", "Allergy Meds", "Vitamins",
    "Notebook", "Pen", "Travel Wallet", "Luggage Lock",
    "Water Bottle", "Snacks"
  ],
  Camping: [
    "Tent", "Sleeping Bag", "Hiking Boots", "Warm Jacket", "Rain Jacket",
    "Thermal Underwear", "Activewear", "T-Shirts", "Socks", "Underwear",
    "Hat", "Gloves", "Beanie",
    "Toothbrush", "Toothpaste", "Deodorant", "Sunscreen", "Insect Repellent",
    "Wet Wipes", "Hand Sanitizer", "Tissue Pack",
    "Torch/Flashlight", "Headlamp", "Phone Charger", "Power Bank", "Smartphone",
    "Camera",
    "ID/Driver's License", "Cash/Credit Cards", "Emergency Contact List",
    "First Aid Kit", "Pain Relievers", "Band-Aids", "Antiseptic Cream",
    "Prescription Meds", "Electrolyte Sachets",
    "Water Bottle", "Snacks", "Protein Bars", "Instant Coffee",
    "Reusable Cutlery", "Dry Fruits",
    "Pocket Knife", "Trash Bags", "Duct Tape", "Rubber Bands",
    "Daypack", "Luggage Lock", "Ziplock Bags",
    "Book/E-reader", "House Keys"
  ],
  City: [
    "Comfortable Walking Shoes", "Light Jacket", "T-Shirts", "Pants",
    "Shorts", "Underwear", "Socks", "Sleepwear", "Sandals",
    "Toothbrush", "Toothpaste", "Deodorant", "Shampoo", "Body Wash",
    "Moisturizer", "Sunscreen", "Face Wash", "Hand Sanitizer",
    "Smartphone", "Phone Charger", "Power Bank", "Camera", "Headphones",
    "Universal Adapter", "Earbuds",
    "Passport", "ID/Driver's License", "Cash/Credit Cards", "Hotel Reservation",
    "Travel Insurance", "Foreign Currency", "Itinerary Printout",
    "Pain Relievers", "Band-Aids", "Allergy Meds",
    "Sunglasses", "Umbrella", "Crossbody Bag", "Daypack",
    "Packing Cubes", "Luggage Lock",
    "Water Bottle", "Snacks",
    "Book/E-reader", "House Keys"
  ],
  Winter: [
    "Heavy Coat", "Thermal Underwear", "Sweaters", "Gloves", "Scarf",
    "Winter Boots", "Beanie", "Thick Socks", "Pants", "Underwear",
    "Sleepwear", "Warm Jacket", "Rain Jacket",
    "Toothbrush", "Toothpaste", "Deodorant", "Lip Balm", "Moisturizer",
    "Shampoo", "Body Wash", "Face Wash", "Hand Sanitizer",
    "Smartphone", "Phone Charger", "Power Bank", "Headphones",
    "Camera", "Universal Adapter",
    "Passport", "ID/Driver's License", "Cash/Credit Cards", "Hotel Reservation",
    "Travel Insurance",
    "Pain Relievers", "Cough Drops", "Vitamins", "Allergy Meds",
    "Electrolyte Sachets",
    "Eye Mask", "Travel Pillow", "Earplugs", "Luggage Lock", "Packing Cubes",
    "Water Bottle", "Snacks", "Tea Bags",
    "Book/E-reader", "House Keys"
  ]
};
