import React from 'react';
import ItemRow from './ItemRow';
import AddItemInput from './AddItemInput';
import '../../styles/components/CategorySection.css';

const CategorySection = ({ categoryName, items, onToggle, onRemove, onAddItem }) => {
  const totalItems = items.length;
  const packedItems = items.filter(item => item.packed).length;
  const allPacked = totalItems > 0 && packedItems === totalItems;

  return (
    <div className="category-section-card">
      <div className="category-header">
        <h3 className="category-title">{categoryName}</h3>
        <span className={`category-badge ${allPacked ? 'success' : 'amber'}`}>
          {packedItems} / {totalItems}
        </span>
      </div>

      <div className="category-items">
        {items.map(item => (
          <ItemRow
            key={item.id}
            item={item}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>

      <div className="category-footer">
        <AddItemInput categoryName={categoryName} onAddItem={onAddItem} />
      </div>
    </div>
  );
};

export default CategorySection;
