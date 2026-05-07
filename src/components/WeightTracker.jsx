import { useState, useEffect } from "react";
import { CATEGORIES } from "../data/tripsData";
import "./WeightTracker.css";

export default function WeightTracker({ items = [] }) {
  const [totalWeightKg, setTotalWeightKg] = useState(0);
  const [categoryBreakdown, setCategoryBreakdown] = useState([]);

  useEffect(() => {
    let totalGrams = 0;
    const breakdown = {};

    items.forEach(item => {
      // Calculate weight based on quantity * weight per item
      const itemWeight = (item.weight || 0) * (item.quantity || 1);
      totalGrams += itemWeight;
      
      const catId = item.categoryId || "cat_misc";
      breakdown[catId] = (breakdown[catId] || 0) + itemWeight;
    });

    const kg = totalGrams / 1000;
    setTotalWeightKg(kg.toFixed(2));

    const breakdownArray = CATEGORIES.map(cat => ({
      name: cat.name,
      weightKg: ((breakdown[cat.id] || 0) / 1000).toFixed(2)
    })).filter(cat => parseFloat(cat.weightKg) > 0);

    setCategoryBreakdown(breakdownArray);
  }, [items]);

  let weightColor = "var(--accent-green)"; // Under 15kg
  if (totalWeightKg > 15 && totalWeightKg <= 23) {
    weightColor = "var(--accent-yellow)"; // 15kg - 23kg
  } else if (totalWeightKg > 23) {
    weightColor = "var(--accent-orange)"; // Over 23kg
  }

  return (
    <div className="weight-tracker">
      <div className="weight-tracker-header">
        <h3>Estimated Bag Weight</h3>
        <div 
          className="weight-indicator" 
          style={{ backgroundColor: weightColor }}
        >
          {totalWeightKg} kg
        </div>
      </div>
      
      {categoryBreakdown.length > 0 && (
        <div className="weight-breakdown">
          <h4>Breakdown</h4>
          <ul>
            {categoryBreakdown.map((cat, idx) => (
              <li key={idx}>
                <span className="cat-name">{cat.name}</span>
                <span className="cat-weight">{cat.weightKg} kg</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
