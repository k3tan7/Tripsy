import { useState } from "react";
import { Check, Plus, ChevronDown, ChevronUp } from "lucide-react";
import { CATEGORIES } from "../data/tripsData";
import "./PackingList.css";

export default function PackingList({ trip, updateTrip }) {
  const [expandedCategory, setExpandedCategory] = useState(CATEGORIES[0].id);
  const [newItemName, setNewItemName] = useState("");

  const items = trip.items || [];
  const totalPackedCount = items.filter(i => i.packed).length;

  const handleToggleItem = (itemId) => {
    if (!updateTrip) return;
    const updatedItems = items.map(item => 
      item.id === itemId ? { ...item, packed: !item.packed } : item
    );
    updateTrip({ ...trip, items: updatedItems });
  };

  const handleAddItem = (e, categoryId) => {
    e.preventDefault();
    if (!newItemName.trim() || !updateTrip) return;
    const newItem = { 
      id: `item_${Date.now()}`, 
      name: newItemName, 
      packed: false,
      categoryId 
    };
    updateTrip({ ...trip, items: [...items, newItem] });
    setNewItemName("");
  };

  const handleToggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    setNewItemName(""); // Clear input when switching categories
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
        <span className="packing-progress-text">{totalPackedCount} of {items.length} packed</span>
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
                  <form className="add-item-form" onSubmit={(e) => handleAddItem(e, category.id)}>
                    <input 
                      type="text" 
                      value={newItemName} 
                      onChange={(e) => setNewItemName(e.target.value)}
                      placeholder={`Add to ${category.name}...`}
                    />
                    <button type="submit" aria-label="Add item"><Plus size={18} strokeWidth={3} /></button>
                  </form>

                  {category.items.length === 0 ? (
                    <p className="empty-list-text">No items in this category.</p>
                  ) : (
                    <ul className="packing-items">
                      {category.items.map(item => (
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
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
