// Inputs → categorized item array
export function generatePackingList(tripType, weather, duration) {
  // Generate packing list based on trip parameters
  const list = [];
  
  // Add logic to generate list based on tripType, weather, duration
  
  return list;
}

export function categorizeItems(items) {
  // Group items into categories
  const categorized = {};
  
  items.forEach(item => {
    const category = item.category || 'Other';
    if (!categorized[category]) {
      categorized[category] = [];
    }
    categorized[category].push(item);
  });
  
  return categorized;
}
