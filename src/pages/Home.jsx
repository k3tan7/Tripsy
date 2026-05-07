import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Briefcase } from "lucide-react";
import "./Home.css";

export default function Home({ trips }) {
  const [sortBy, setSortBy] = useState("date");
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const sortedTrips = [...trips].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    // Default to date
    return new Date(a.startDate) - new Date(b.startDate);
  });

  return (
    <main className="home">
      <div className="home-header">
        <h1 className="home-title">Trips & Packing Lists</h1>
        <p className="home-subtitle">Keep track of your travel plans and packing essentials.</p>
      </div>

      <section className="home-trips">
        <div className="home-trips-header">
          <h2 className="home-trips-title">All Trips ({trips.length})</h2>
          
          {trips.length > 0 && (
            <div className="sort-control">
              <span className="sort-label">Sort by:</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="date">Date</option>
                <option value="name">Name</option>
              </select>
            </div>
          )}
        </div>

        {trips.length === 0 ? (
          <div className="home-empty">
            <Briefcase size={48} style={{ margin: "0 auto 1rem", opacity: 0.5 }} />
            <p>No trips yet.</p>
            <Link to="/new" className="home-cta">
              Create First Trip
            </Link>
          </div>
        ) : (
          <div className="trips-grid">
            {sortedTrips.map((trip) => {
              const totalItems = trip.items ? trip.items.length : 0;
              const packedItems = trip.items ? trip.items.filter(i => i.packed).length : 0;
              const isHovered = hoveredCardId === trip.id;
              
              return (
                <Link
                  key={trip.id}
                  to={`/trip/${trip.id}`}
                  className="trip-card"
                  style={{ 
                    "--card-color": trip.coverColor,
                    transform: isHovered ? "translateY(-4px)" : "none",
                    boxShadow: isHovered ? "0 4px 12px rgba(80, 78, 118, 0.15)" : "none",
                  }}
                  onMouseEnter={() => setHoveredCardId(trip.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                >
                  <div className="trip-card-header">
                    <span className="trip-card-dest">
                      <MapPin size={12} style={{ display: 'inline', marginRight: '4px' }} />
                      {trip.destination}
                    </span>
                  </div>
                  <h3 className="trip-card-name">{trip.name}</h3>
                  <p className="trip-card-desc">{trip.description}</p>
                  
                  <div className="trip-card-stats">
                    <div className="packing-progress">
                      <Briefcase size={14} />
                      <span>{packedItems} / {totalItems} Packed</span>
                    </div>
                    {totalItems > 0 && (
                      <div className="progress-bar-container">
                        <div 
                          className="progress-bar-fill" 
                          style={{ width: `${(packedItems / totalItems) * 100}%`, backgroundColor: 'var(--accent-green)' }}
                        />
                      </div>
                    )}
                  </div>

                  <div className="trip-card-footer">
                    {new Date(trip.startDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    {" - "}
                    {new Date(trip.endDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
