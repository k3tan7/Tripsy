import React, { useState, useEffect, useRef } from 'react';
import '../../styles/components/CategorySection.css';

const AddItemInput = ({ categoryName, onAddItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleAdd = () => {
    if (value.trim()) {
      onAddItem(categoryName, value.trim());
      setValue('');
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  const handleCancel = () => {
    setValue('');
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button className="add-item-btn-closed" onClick={() => setIsOpen(true)}>
        + Add item
      </button>
    );
  }

  return (
    <div className="add-item-open">
      <input
        ref={inputRef}
        type="text"
        className="add-item-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Item name..."
      />
      <div className="add-item-actions">
        <button className="add-item-btn add" onClick={handleAdd}>Add</button>
        <button className="add-item-btn cancel" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default AddItemInput;
