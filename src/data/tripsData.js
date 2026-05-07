// Pre-estimated weights in grams for common travel items
export const ITEM_WEIGHTS = {
  "T-Shirts": 200, "Underwear": 30, "Socks": 30, "Pants": 350, "Sleepwear": 250,
  "Jacket": 500, "Shorts": 180, "Dress Shirts": 250, "Suit/Blazer": 1000,
  "Dress Shoes": 700, "Swimsuit": 150, "Sweaters": 400, "Thermal Underwear": 200,
  "Heavy Coat": 1200, "Light Jacket": 350, "Comfortable Walking Shoes": 800,
  "Flip Flops": 200, "Hiking Boots": 900, "Winter Boots": 1100, "Rain Jacket": 300,
  "Formal Dress": 400, "Belt": 100, "Warm Jacket": 600, "Beanie": 50,
  "Gloves": 80, "Scarf": 100, "Hat": 80, "Sandals": 250, "Activewear": 200,
  "Saree/Kurta": 350, "Thick Socks": 50, "Beach Towel": 400,
  "Toothbrush": 20, "Toothpaste": 100, "Deodorant": 80, "Shampoo": 200,
  "Body Wash": 250, "Moisturizer": 120, "Sunscreen": 150, "Lip Balm": 10,
  "Razor": 30, "Face Wash": 100, "Hand Sanitizer": 60, "Wet Wipes": 80,
  "Hair Brush": 50, "Hair Ties": 5, "Contact Lens Solution": 100, "Perfume": 80,
  "Cotton Swabs": 20, "Tissue Pack": 30, "Insect Repellent": 100,
  "After-Sun Lotion": 150, "Toiletries": 300,
  "Smartphone": 200, "Phone Charger": 80, "Laptop": 1400, "Laptop Charger": 300,
  "Power Bank": 250, "Headphones": 250, "Camera": 450, "Camera Charger": 80,
  "Universal Adapter": 100, "USB Cable": 30, "Earbuds": 50, "Kindle/E-reader": 180,
  "Portable Speaker": 350, "SD Card": 5, "Torch/Flashlight": 150,
  "Extension Cord": 200, "Headlamp": 100,
  "Passport": 50, "ID/Driver's License": 10, "Travel Insurance": 10,
  "Boarding Passes": 10, "Cash/Credit Cards": 20, "Hotel Reservation": 10,
  "Visa Documents": 10, "Emergency Contact List": 5, "Photocopies of ID": 10,
  "Itinerary Printout": 10, "Business Cards": 20, "Vaccination Certificate": 10,
  "Foreign Currency": 30,
  "Pain Relievers": 30, "Band-Aids": 20, "Prescription Meds": 50, "Vitamins": 40,
  "Allergy Meds": 20, "Motion Sickness Pills": 15, "Antacids": 30,
  "Antiseptic Cream": 40, "Cough Drops": 30, "Electrolyte Sachets": 25,
  "First Aid Kit": 300, "Thermometer": 30, "Eye Drops": 15,
  "Sunglasses": 30, "Watch": 60, "Travel Pillow": 300, "Eye Mask": 20,
  "Earplugs": 5, "Crossbody Bag": 300, "Daypack": 500, "Luggage Lock": 50,
  "Packing Cubes": 100, "Laundry Bag": 30, "Umbrella": 350, "Notebook": 100,
  "Pen": 10, "Travel Wallet": 60, "Neck Pouch": 40,
  "Reusable Shopping Bag": 30, "Ziplock Bags": 20,
  "Water Bottle": 250, "Snacks": 150, "Protein Bars": 100, "Instant Coffee": 50,
  "Tea Bags": 20, "Reusable Cutlery": 80, "Dry Fruits": 100, "Chewing Gum": 30,
  "Instant Noodles": 100,
  "Book/E-reader": 200, "House Keys": 30, "Trash Bags": 50, "Sewing Kit": 30,
  "Duct Tape": 100, "Rubber Bands": 10, "Safety Pins": 10, "Travel Games": 150,
  "Journal": 150, "Stickers": 10, "Souvenirs Bag": 50,
  "Tent": 2500, "Sleeping Bag": 1200, "Pocket Knife": 80,
  "Notebook": 100, "Pen": 10
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
