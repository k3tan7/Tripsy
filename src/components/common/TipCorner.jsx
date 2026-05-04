import React, { useState, useEffect } from 'react';
import { TIPS } from '../../data/tips';
import '../../styles/components/TipCorner.css';

export default function TipCorner() {
  const [tip, setTip] = useState('');
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const randomTip = TIPS[Math.floor(Math.random() * TIPS.length)];
    setTip(randomTip);
  }, []);

  if (dismissed || !tip) return null;

  return (
    <div className="tip-corner">
      <div className="tip-icon">✦</div>
      <div className="tip-content">
        <div className="tip-label">Tip of the day</div>
        <div className="tip-text">{tip}</div>
      </div>
      <button className="tip-dismiss" onClick={() => setDismissed(true)}>✕</button>
    </div>
  );
}
