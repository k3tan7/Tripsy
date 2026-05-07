import { CATEGORIES } from "../data/tripsData";
import "./WeightTracker.css";

export default function WeightTracker({ items = [] }) {
  let packedGrams = 0;
  let totalGrams = 0;
  const breakdown = {};

  items.forEach(item => {
    const w = (item.weight || 0) * (item.quantity || 1);
    totalGrams += w;
    if (item.packed) {
      packedGrams += w;
      const catId = item.categoryId || "cat_misc";
      breakdown[catId] = (breakdown[catId] || 0) + w;
    }
  });

  const packedKg = packedGrams / 1000;
  const totalKg = totalGrams / 1000;

  const categoryBreakdown = CATEGORIES
    .map(cat => ({ name: cat.name, kg: (breakdown[cat.id] || 0) / 1000 }))
    .filter(cat => cat.kg > 0);

  let weightColor = "var(--accent-green)";
  if (packedKg > 15 && packedKg <= 23) weightColor = "#e6a817";
  else if (packedKg > 23) weightColor = "var(--accent-orange)";

  return (
    <div className="weight-tracker">
      <div className="weight-tracker-header">
        <h3>Packed Weight</h3>
        <div className="weight-indicator" style={{ backgroundColor: weightColor }}>
          {packedKg.toFixed(2)} kg
        </div>
      </div>

      <p className="weight-total-hint">Total if all packed: {totalKg.toFixed(2)} kg</p>

      {categoryBreakdown.length > 0 && (
        <div className="weight-breakdown">
          <h4>Breakdown</h4>
          <ul>
            {categoryBreakdown.map((cat, idx) => (
              <li key={idx}>
                <span className="cat-name">{cat.name}</span>
                <span className="cat-weight">{cat.kg.toFixed(2)} kg</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
