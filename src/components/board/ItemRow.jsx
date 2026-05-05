import React from 'react';
import '../../styles/components/ItemRow.css';

const ItemRow = ({ item, onToggle, onRemove }) => {
  const handleRemove = (e) => {
    e.stopPropagation();
    if (onRemove) {
      onRemove(item.id);
    }
  };

  return (
    <div className="item-row" onClick={() => onToggle(item.id)}>
      <div className={`custom-checkbox ${item.packed ? 'checked' : ''}`}>
        {item.packed && '✓'}
      </div>
      
      <div className="item-content">
        {item.forgottenBefore && (
          <span className="forgotten-pill">forgot last time</span>
        )}
        <span className={`item-name ${item.packed ? 'packed' : ''}`}>
          {item.name}
        </span>
      </div>
      
      <button className="remove-btn" onClick={handleRemove}>
        x
      </button>
    </div>
  );
};

export default ItemRow;
