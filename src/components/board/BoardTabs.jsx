// Going / Returning tab toggle
export default function BoardTabs({ activeTab, onTabChange }) {
  return (
    <div className="board-tabs">
      <button
        className={`tab ${activeTab === 'going' ? 'active' : ''}`}
        onClick={() => onTabChange('going')}
      >
        Going
      </button>
      <button
        className={`tab ${activeTab === 'returning' ? 'active' : ''}`}
        onClick={() => onTabChange('returning')}
      >
        Returning
      </button>
    </div>
  );
}
