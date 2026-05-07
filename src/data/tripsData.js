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
