// Pulls forgot items from past similar trips
export function getForgottenSuggestions(pastTrips, currentTripType) {
  // Analyze what was forgotten in similar past trips
  const suggestions = [];
  
  pastTrips.forEach(trip => {
    if (trip.type === currentTripType && trip.forgottenItems) {
      suggestions.push(...trip.forgottenItems);
    }
  });
  
  // Deduplicate and rank by frequency
  const ranked = rankByFrequency(suggestions);
  
  return ranked;
}

function rankByFrequency(items) {
  const frequency = {};
  
  items.forEach(item => {
    frequency[item] = (frequency[item] || 0) + 1;
  });
  
  return Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .map(([item]) => item);
}
