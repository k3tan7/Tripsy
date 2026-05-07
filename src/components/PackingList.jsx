import { useState } from "react";
import { Check, Plus, ChevronDown, ChevronUp, Trash2, X } from "lucide-react";
import { CATEGORIES } from "../data/tripsData";
import "./PackingList.css";

export default function PackingList({ trip, updateTrip }) {
  const [expandedCategory, setExpandedCategory] = useState(CATEGORIES[0].id);
  const [newItems, setNewItems] = useState({}); // Manage input value per category

  const items = trip.items || [];
  const totalItems = items.length;
  const totalPackedCount = items.filter(i => i.packed).length;
  const remainingItems = totalItems - totalPackedCount;

  const handleToggleItem = (itemId) => {
    if (!updateTrip) return;
    const updatedItems = items.map(item => 
      item.id === itemId ? { ...item, packed: !item.packed } : item
    );
    updateTrip({ ...trip, items: updatedItems });
  };

  const handleQuantityChange = (itemId, qtyStr) => {
    if (!updateTrip) return;
    const quantity = parseInt(qtyStr, 10) || 1;
    const updatedItems = items.map(item => 
      item.id === itemId ? { ...item, quantity } : item
    );
    updateTrip({ ...trip, items: updatedItems });
  };

  const handleDeleteItem = (itemId) => {
    if (!updateTrip) return;
    const updatedItems = items.filter(item => item.id !== itemId);
    updateTrip({ ...trip, items: updatedItems });
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
      categoryId 
    };
    updateTrip({ ...trip, items: [...items, newItem] });
    setNewItems({ ...newItems, [categoryId]: "" }); // Clear input after adding
  };

  const handleToggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  // Group items by category dynamically
  const groupedCategories = CATEGORIES.map(category => {
    const categoryItems = items.filter(item => {
      // 1. If it explicitly has a categoryId
      if (item.categoryId) return item.categoryId === category.id;
      
      // 2. Try to guess by name using defaultItems
      const foundCategory = CATEGORIES.find(c => c.defaultItems.includes(item.name));
      if (foundCategory) return foundCategory.id === category.id;
      
      // 3. Fallback to Miscellaneous
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
        <div className="packing-progress-wrapper">
          <span className="packing-progress-text">{totalPackedCount} of {items.length} packed</span>
          {items.length > 0 && (
            <div className="progress-bar-container-main">
              <div 
                className="progress-bar-fill-main" 
                style={{ width: `${(totalPackedCount / items.length) * 100}%` }}
              />
            </div>
          )}
        </div>
      </div>

      <div className="packing-list-summary">
        <div className="summary-stat">
          <span className="summary-label">Total</span>
          <strong className="summary-value">{totalItems}</strong>
        </div>
        <div className="summary-stat">
          <span className="summary-label">Packed</span>
          <strong className="summary-value">{totalPackedCount}</strong>
        </div>
        <div className="summary-stat">
          <span className="summary-label">Remaining</span>
          <strong className="summary-value">{remainingItems}</strong>
        </div>
      </div>

      <div className="categories-container">
        {groupedCategories.map(category => {
          const isExpanded = expandedCategory === category.id;
          
          return (
            <div key={category.id} className="category-section">
              <div 
                className="category-header" 
                onClick={() => handleToggleCategory(category.id)}
              >
                <div className="category-header-title">
                  {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  <h3>{category.name}</h3>
                </div>
                <span className="category-count">
                  {category.packedCount} / {category.totalCount}
                </span>
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
                                type="number" 
                                min="1"
                                value={item.quantity || 1}
                                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                placeholder="1"
                              />
                            </div>
                            <button className="btn-delete-item" onClick={(e) => { e.stopPropagation(); handleDeleteItem(item.id); }} aria-label="Delete item">
                              <X size={16} strokeWidth={3} />
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}

                  <form className="add-item-form" style={{ marginTop: '1rem', marginBottom: 0 }} onSubmit={(e) => handleAddItem(e, category.id)}>
                    <input 
                      type="text" 
                      value={newItems[category.id] || ""} 
                      onChange={(e) => setNewItems({...newItems, [category.id]: e.target.value})}
                      placeholder={`Add to ${category.name}...`}
                    />
                    <button type="submit" aria-label="Add item"><Plus size={18} strokeWidth={3} /></button>
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
