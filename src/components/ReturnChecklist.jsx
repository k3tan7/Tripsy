import { useState } from "react";
import { Check, RotateCcw } from "lucide-react";
import { CATEGORIES } from "../data/tripsData";
import "./ReturnChecklist.css";

export default function ReturnChecklist({ trip, updateTrip }) {
  const items = trip.items || [];
  const [checkedReturn, setCheckedReturn] = useState({});

  // Show all items that were packed (user should re-collect them)
  const packedItems = items.filter(item => item.packed);
  
  const returnedCount = Object.values(checkedReturn).filter(Boolean).length;

  const handleToggleReturn = (itemId) => {
    setCheckedReturn(prev => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const handleMarkAllReturned = () => {
    const allChecked = {};
    packedItems.forEach(item => { allChecked[item.id] = true; });
    setCheckedReturn(allChecked);
  };

  // Group packed items by category
  const groupedItems = CATEGORIES.map(cat => {
    const catItems = packedItems.filter(item => {
      if (item.categoryId) return item.categoryId === cat.id;
      const found = CATEGORIES.find(c => c.defaultItems.includes(item.name));
      if (found) return found.id === cat.id;
      return cat.id === "cat_misc";
    });
    return { ...cat, items: catItems };
  }).filter(cat => cat.items.length > 0);

  return (
    <div className="return-checklist">
      <div className="return-header">
        <div>
          <h2>Return Trip Checklist</h2>
          <p>Make sure you bring everything back home.</p>
        </div>
        <span className="return-counter">{returnedCount} / {packedItems.length} collected</span>
      </div>

      {packedItems.length === 0 ? (
        <div className="return-empty">
          <p>No packed items found. Pack some items first.</p>
        </div>
      ) : (
        <>
          <button className="btn-mark-all" onClick={handleMarkAllReturned}>
            <RotateCcw size={16} />
            Mark All Collected
          </button>

          {groupedItems.map(cat => (
            <div key={cat.id} className="return-category">
              <h4 className="return-cat-name">{cat.name}</h4>
              <ul className="return-items">
                {cat.items.map(item => (
                  <li 
                    key={item.id} 
                    className={`return-item ${checkedReturn[item.id] ? 'collected' : ''}`}
                    onClick={() => handleToggleReturn(item.id)}
                  >
                    <button className="return-checkbox" tabIndex={-1}>
                      {checkedReturn[item.id] && <Check size={14} strokeWidth={4} />}
                    </button>
                    <span>{item.name}</span>
                    {item.quantity > 1 && <span className="return-qty">x{item.quantity}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
