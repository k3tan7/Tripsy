// Inline add item field per category
export default function AddItemInput({ categoryId, onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements.itemName;
    if (input.value.trim()) {
      onAdd(categoryId, input.value);
      input.value = '';
    }
  };

  return (
    <form className="add-item-input" onSubmit={handleSubmit}>
      <input
        type="text"
        name="itemName"
        placeholder="Add item..."
        className="item-input"
      />
      <button type="submit" className="add-btn">
        +
      </button>
    </form>
  );
}
