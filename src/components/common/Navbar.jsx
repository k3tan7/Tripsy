// Top nav / back button
export default function Navbar({ title, onBack }) {
  return (
    <nav className="navbar">
      {onBack && (
        <button className="back-btn" onClick={onBack}>
          ← Back
        </button>
      )}
      <h1 className="nav-title">{title}</h1>
    </nav>
  );
}
