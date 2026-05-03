// SVG ring, used in Home + Board
export default function ProgressRing({ progress = 0 }) {
  return (
    <div className="progress-ring">
      <svg width="100" height="100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="#ccc" strokeWidth="2" />
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#4CAF50"
          strokeWidth="2"
          strokeDasharray={`${2 * Math.PI * 45}`}
          strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress)}`}
        />
      </svg>
      <span className="progress-text">{Math.round(progress * 100)}%</span>
    </div>
  );
}
