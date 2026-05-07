import { Check } from "lucide-react";
import "./LastMinuteMode.css";

const CRITICAL_CATEGORIES = ["cat_documents", "cat_medicine", "cat_electronics"];

export default function LastMinuteMode({ trip, updateTrip }) {
  const items = trip.items || [];
  
  const criticalUnpackedItems = items.filter(item => 
    !item.packed && CRITICAL_CATEGORIES.includes(item.categoryId)
  );

  const handleToggleItem = (itemId) => {
    if (!updateTrip) return;
    const updatedItems = items.map(item => 
      item.id === itemId ? { ...item, packed: !item.packed } : item
    );
    updateTrip({ ...trip, items: updatedItems });
  };

  return (
    <div className="last-minute-mode">
      <div className="lmm-header">
        <h2>Last-Minute Essentials</h2>
        <p>Don't leave the house without these critical items!</p>
      </div>

      {criticalUnpackedItems.length === 0 ? (
        <div className="lmm-empty">
          <p>All critical essentials are packed! You're good to go.</p>
        </div>
      ) : (
        <ul className="lmm-items">
          {criticalUnpackedItems.map(item => (
            <li key={item.id} className="lmm-item" onClick={() => handleToggleItem(item.id)}>
              <div className="lmm-item-left">
                <button className="lmm-checkbox" tabIndex={-1}>
                  {item.packed && <Check size={14} strokeWidth={4} />}
                </button>
                <span className="lmm-item-name">{item.name}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
