// Collapsible category with items inside
export default function CategorySection({ category, items, onItemCheck }) {
  return (
    <div className="category-section">
      <h3 className="category-title">{category}</h3>
      <div className="category-items">
        {items.map(item => (
          <div key={item.id} className="category-item">
            <input
              type="checkbox"
              checked={item.packed}
              onChange={() => onItemCheck(item.id)}
            />
            <label>{item.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
