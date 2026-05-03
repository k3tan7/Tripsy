// Multi-select from packed list
export default function ForgotSelector({ items, onSelect }) {
  return (
    <div className="forgot-selector">
      <h3>What did you forget?</h3>
      <div className="selector-items">
        {items.map(item => (
          <label key={item.id} className="selector-item">
            <input
              type="checkbox"
              onChange={() => onSelect(item.id)}
            />
            <span>{item.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
