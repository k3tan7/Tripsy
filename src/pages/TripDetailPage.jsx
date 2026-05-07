import { useParams, Link, useNavigate } from "react-router-dom";
import { Search, MapPin } from "lucide-react";
import PackingList from "../components/PackingList";
import WeightTracker from "../components/WeightTracker";
import "./TripDetailPage.css";

export default function TripDetailPage({ trips, updateTrip }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const trip = trips.find((t) => t.id === id);

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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="trip-detail-dest" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <MapPin size={16} />
            {trip.destination}
          </span>
          {trip.type && (
            <span className="trip-detail-type" style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-orange)', textTransform: 'uppercase' }}>
              {trip.type}
            </span>
          )}
        </div>
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

      <WeightTracker items={trip.items} />
      <PackingList trip={trip} updateTrip={updateTrip} />
    </main>
  );
}
