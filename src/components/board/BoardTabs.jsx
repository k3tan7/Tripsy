import React from 'react';
import '../../styles/components/BoardTabs.css';

const BoardTabs = ({ activeTab, onChange }) => {
  return (
    <div className="board-tabs">
      <button 
        className={`board-tab ${activeTab === 'Going' ? 'active' : ''}`}
        onClick={() => onChange('Going')}
      >
        Going
      </button>
      <button 
        className={`board-tab ${activeTab === 'Returning' ? 'active' : ''}`}
        onClick={() => onChange('Returning')}
      >
        Returning
      </button>
    </div>
  );
};

export default BoardTabs;
