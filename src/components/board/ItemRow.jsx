// Single item: checkbox, name, forgot badge
export default function ItemRow({ item, onCheck, onRemove }) {
  return (
    <div className="item-row">
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onCheck(item.id)}
      />
      <span className="item-name">{item.name}</span>
      {item.wasForgotten && <span className="forgot-badge">Forgot</span>}
      <button onClick={() => onRemove(item.id)} className="remove-btn">
        ✕
      </button>
    </div>
  );
}
