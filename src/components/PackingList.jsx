import { useState } from "react";
import { Check, Plus } from "lucide-react";
import "./PackingList.css";

export default function PackingList({ trip, updateTrip }) {
  const [newItemName, setNewItemName] = useState("");
  
  const items = trip.items || [];
  const packedCount = items.filter(i => i.packed).length;

  const handleToggleItem = (itemId) => {
    if (!updateTrip) return;
    const updatedItems = items.map(item => 
      item.id === itemId ? { ...item, packed: !item.packed } : item
    );
    updateTrip({ ...trip, items: updatedItems });
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItemName.trim() || !updateTrip) return;
    const newItem = { id: `item_${Date.now()}`, name: newItemName, packed: false };
    updateTrip({ ...trip, items: [...items, newItem] });
    setNewItemName("");
  };

  return (
    <div className="packing-list-section">
      <div className="packing-list-header">
        <h2>Packing List</h2>
        <span className="packing-progress-text">{packedCount} of {items.length} packed</span>
      </div>

      <form className="add-item-form" onSubmit={handleAddItem}>
        <input 
          type="text" 
          value={newItemName} 
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="Add a new item..."
        />
        <button type="submit" aria-label="Add item"><Plus size={18} strokeWidth={3} /></button>
      </form>

      {items.length === 0 ? (
        <p className="empty-list-text">Your packing list is empty. Add items above!</p>
      ) : (
        <ul className="packing-items">
          {items.map(item => (
            <li key={item.id} className={`packing-item ${item.packed ? 'packed' : ''}`} onClick={() => handleToggleItem(item.id)}>
              <button className="checkbox" tabIndex={-1}>
                {item.packed && <Check size={14} strokeWidth={4} />}
              </button>
              <span className="item-name">{item.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
