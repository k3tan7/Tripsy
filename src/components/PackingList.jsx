import { useState } from "react";
import { Check, Plus, ChevronDown, ChevronUp, X } from "lucide-react";
import { CATEGORIES, ITEM_WEIGHTS } from "../data/tripsData";
import "./PackingList.css";

export default function PackingList({ trip, updateTrip }) {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [newItems, setNewItems] = useState({});

  const items = trip.items || [];
  const totalPacked = items.filter(i => i.packed).length;

  const handleToggleItem = (itemId) => {
    if (!updateTrip) return;
    const updated = items.map(item => 
      item.id === itemId ? { ...item, packed: !item.packed } : item
    );
    updateTrip({ ...trip, items: updated });
  };

  const handleQuantityChange = (itemId, val) => {
    if (!updateTrip) return;
    const quantity = parseInt(val, 10) || 1;
    const updated = items.map(item => 
      item.id === itemId ? { ...item, quantity } : item
    );
    updateTrip({ ...trip, items: updated });
  };

  const handleDeleteItem = (itemId) => {
    if (!updateTrip) return;
    updateTrip({ ...trip, items: items.filter(item => item.id !== itemId) });
  };

  const handleAddItem = (e, categoryId) => {
    e.preventDefault();
    const name = newItems[categoryId];
    if (!name || !name.trim() || !updateTrip) return;
    const newItem = { 
      id: `item_${Date.now()}`, 
      name: name.trim(), 
      packed: false,
      quantity: 1,
      weight: ITEM_WEIGHTS[name.trim()] || 0,
      categoryId 
    };
    updateTrip({ ...trip, items: [...items, newItem] });
    setNewItems({ ...newItems, [categoryId]: "" });
  };

  // Group items by category
  const groupedCategories = CATEGORIES.map(category => {
    const categoryItems = items.filter(item => {
      if (item.categoryId) return item.categoryId === category.id;
      const found = CATEGORIES.find(c => c.defaultItems.includes(item.name));
      if (found) return found.id === category.id;
      return category.id === "cat_misc";
    });
    return {
      ...category,
      items: categoryItems,
      packedCount: categoryItems.filter(i => i.packed).length,
      totalCount: categoryItems.length
    };
  });

  return (
    <div className="packing-list-section">
      <div className="packing-list-header">
        <h2>Packing List</h2>
        <span className="packing-progress-text">{totalPacked} / {items.length} packed</span>
      </div>

      {items.length > 0 && (
        <div className="progress-bar-container-main">
          <div className="progress-bar-fill-main" style={{ width: `${(totalPacked / items.length) * 100}%` }} />
        </div>
      )}

      <div className="categories-scroll">
        {groupedCategories.map(category => {
          const isExpanded = expandedCategory === category.id;
          return (
            <div key={category.id} className="category-section">
              <div className="category-header" onClick={() => setExpandedCategory(isExpanded ? null : category.id)}>
                <div className="category-header-title">
                  {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  <h3>{category.name}</h3>
                </div>
                <span className="category-count">{category.packedCount} / {category.totalCount}</span>
              </div>
              
              {isExpanded && (
                <div className="category-content">
                  {category.items.length === 0 ? (
                    <p className="empty-list-text">No items in this category.</p>
                  ) : (
                    <ul className="packing-items">
                      {category.items.map(item => (
                        <li key={item.id} className={`packing-item ${item.packed ? 'packed' : ''}`}>
                          <div className="packing-item-left" onClick={() => handleToggleItem(item.id)}>
                            <button className="checkbox" tabIndex={-1}>
                              {item.packed && <Check size={14} strokeWidth={4} />}
                            </button>
                            <span className="item-name">{item.name}</span>
                          </div>
                          <div className="packing-item-actions">
                            <div className="packing-item-quantity">
                              <span className="qty-label">Qty</span>
                              <input 
                                type="number" min="1"
                                value={item.quantity || 1}
                                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                              />
                            </div>
                            <span className="item-weight-display">{((item.weight || 0) * (item.quantity || 1)) / 1000} kg</span>
                            <button className="btn-delete-item" onClick={(e) => { e.stopPropagation(); handleDeleteItem(item.id); }}>
                              <X size={14} strokeWidth={3} />
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                  <form className="add-item-form" onSubmit={(e) => handleAddItem(e, category.id)}>
                    <input 
                      type="text" 
                      value={newItems[category.id] || ""} 
                      onChange={(e) => setNewItems({...newItems, [category.id]: e.target.value})}
                      placeholder={`Add to ${category.name}...`}
                    />
                    <button type="submit"><Plus size={18} strokeWidth={3} /></button>
                  </form>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
