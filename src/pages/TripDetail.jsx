import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Search, MapPin, Check, Plus } from "lucide-react";
import "./TripDetail.css";

export default function TripDetail({ trips, onUpdateTrip }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const trip = trips.find((t) => t.id === id);

  const [newItemName, setNewItemName] = useState("");

  if (!trip) {
    return (
      <main className="trip-detail-notfound">
        <Search className="notfound-icon" size={48} color="var(--text-secondary)" style={{margin: '0 auto'}} />
        <h2>Trip record not found</h2>
        <p>This itinerary does not exist or has been removed.</p>
        <Link to="/" className="btn-back">Return to Dashboard</Link>
      </main>
    );
  }

  const items = trip.items || [];
  const packedCount = items.filter(i => i.packed).length;

  const handleToggleItem = (itemId) => {
    // Only works if onUpdateTrip is provided (safeguard)
    if (!onUpdateTrip) return;
    
    const updatedItems = items.map(item => 
      item.id === itemId ? { ...item, packed: !item.packed } : item
    );
    onUpdateTrip({ ...trip, items: updatedItems });
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItemName.trim() || !onUpdateTrip) return;
    
    const newItem = { id: `item_${Date.now()}`, name: newItemName, packed: false };
    onUpdateTrip({ ...trip, items: [...items, newItem] });
    setNewItemName("");
  };

  const nights =
    trip.startDate && trip.endDate
      ? Math.round((new Date(trip.endDate) - new Date(trip.startDate)) / (1000 * 60 * 60 * 24))
      : null;

  return (
    <main className="trip-detail">
      <button className="btn-back-nav" onClick={() => navigate(-1)}>
        &larr; Back to Trips
      </button>

      <div className="trip-detail-card" style={{ "--banner-color": trip.coverColor }}>
        <span className="trip-detail-dest" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <MapPin size={16} />
          {trip.destination}
        </span>
        <h1 className="trip-detail-name">{trip.name}</h1>

        {trip.description && (
          <p className="trip-detail-desc">{trip.description}</p>
        )}

        <div className="trip-detail-stats">
          {trip.startDate && (
            <div className="stat">
              <span className="stat-label">Start Date</span>
              <span className="stat-value">
                {new Date(trip.startDate).toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          )}
          {trip.endDate && (
            <div className="stat">
              <span className="stat-label">End Date</span>
              <span className="stat-value">
                {new Date(trip.endDate).toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          )}
          {nights !== null && (
            <div className="stat">
              <span className="stat-label">Duration</span>
              <span className="stat-value">{nights} nights</span>
            </div>
          )}
        </div>
      </div>

      <div className="packing-list-section">
        <div className="packing-list-header">
          <h2>Packing List</h2>
          <span className="packing-progress-text">{packedCount} of {items.length} packed</span>
        </div>

        <form className="add-item-form" onSubmit={handleAddItem}>
          <input 
            type="text" 
            value={newItemName} 
            onChange={(e) => setNewItemName(e.target.value)}
            placeholder="Add a new item..."
          />
          <button type="submit" aria-label="Add item"><Plus size={18} strokeWidth={3} /></button>
        </form>

        {items.length === 0 ? (
          <p className="empty-list-text">Your packing list is empty. Add items above!</p>
        ) : (
          <ul className="packing-items">
            {items.map(item => (
              <li key={item.id} className={`packing-item ${item.packed ? 'packed' : ''}`} onClick={() => handleToggleItem(item.id)}>
                <button className="checkbox" tabIndex={-1}>
                  {item.packed && <Check size={14} strokeWidth={4} />}
                </button>
                <span className="item-name">{item.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
