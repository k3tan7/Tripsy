import { Link } from "react-router-dom";
import { MapPin, Briefcase } from "lucide-react";
import "./Home.css";

export default function Home({ trips }) {
  return (
    <main className="home">
      <div className="home-header">
        <h1 className="home-title">Trips & Packing Lists</h1>
        <p className="home-subtitle">Keep track of your travel plans and packing essentials.</p>
      </div>

      <section className="home-trips">
        <div className="home-trips-header">
          <h2 className="home-trips-title">All Trips ({trips.length})</h2>
        </div>

        {trips.length === 0 ? (
          <div className="home-empty">
            <Briefcase size={48} style={{ margin: "0 auto 1rem", opacity: 0.5 }} />
            <p>No trips planned yet.</p>
            <Link to="/new" className="home-cta">
              Create First Trip
            </Link>
          </div>
        ) : (
          <div className="trips-grid">
            {trips.map((trip) => (
              <Link
                key={trip.id}
                to={`/trip/${trip.id}`}
                className="trip-card"
                style={{ "--card-color": trip.coverColor }}
              >
                <div className="trip-card-header">
                  <span className="trip-card-dest">
                    <MapPin size={12} style={{ display: 'inline', marginRight: '4px' }} />
                    {trip.destination}
                  </span>
                </div>
                <h3 className="trip-card-name">{trip.name}</h3>
                <p className="trip-card-desc">{trip.description}</p>
                <div className="trip-card-footer">
                  {new Date(trip.startDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                  {" - "}
                  {new Date(trip.endDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
