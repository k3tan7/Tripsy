import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Briefcase, Plus } from "lucide-react";
import "./Home.css";

export default function Home({ trips }) {
  const [sortBy, setSortBy] = useState("date");

  const sortedTrips = [...trips].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return new Date(a.startDate) - new Date(b.startDate);
  });

  // Packing statistics
  const totalTrips = trips.length;
  const allItems = trips.flatMap(t => t.items || []);
  const totalPacked = allItems.filter(i => i.packed).length;
  const totalItems = allItems.length;

  return (
    <main className="home">
      <div className="home-header">
        <h1 className="home-title">Your Trips</h1>
        <p className="home-subtitle">Organise, pack, and travel with confidence.</p>
      </div>

      {totalTrips > 0 && (
        <div className="stats-dashboard">
          <div className="dash-stat">
            <span className="dash-value">{totalTrips}</span>
            <span className="dash-label">Trips</span>
          </div>
          <div className="dash-stat">
            <span className="dash-value">{totalItems}</span>
            <span className="dash-label">Total Items</span>
          </div>
          <div className="dash-stat">
            <span className="dash-value">{totalPacked}</span>
            <span className="dash-label">Packed</span>
          </div>
          <div className="dash-stat">
            <span className="dash-value">{totalItems - totalPacked}</span>
            <span className="dash-label">Remaining</span>
          </div>
        </div>
      )}

      <section className="home-trips">
        <div className="home-trips-header">
          <h2 className="home-trips-title">All Trips</h2>
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
            <p>No trips yet. Start planning your next adventure.</p>
            <Link to="/new" className="home-cta">Create First Trip</Link>
          </div>
        ) : (
          <div className="trips-grid">
            {sortedTrips.map((trip) => {
              const itemCount = trip.items ? trip.items.length : 0;
              const packed = trip.items ? trip.items.filter(i => i.packed).length : 0;
              const progress = itemCount > 0 ? Math.round((packed / itemCount) * 100) : 0;
              
              return (
                <Link key={trip.id} to={`/trip/${trip.id}`} className="trip-card" style={{ "--card-color": trip.coverColor }}>
                  <div className="trip-card-header">
                    <span className="trip-card-dest">
                      <MapPin size={12} />
                      {trip.destination}
                    </span>
                    {trip.type && <span className="trip-card-type">{trip.type}</span>}
                  </div>
                  <h3 className="trip-card-name">{trip.name}</h3>

                  <div className="trip-card-progress">
                    <div className="trip-card-progress-bar">
                      <div className="trip-card-progress-fill" style={{ width: `${progress}%` }} />
                    </div>
                    <span className="trip-card-progress-text">{packed}/{itemCount} packed</span>
                  </div>

                  <div className="trip-card-footer">
                    {new Date(trip.startDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    {" - "}
                    {new Date(trip.endDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </div>
                </Link>
              );
            })}

            <Link to="/new" className="trip-card trip-card-new">
              <Plus size={32} />
              <span>New Trip</span>
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
