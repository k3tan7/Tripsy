// Single trip card with ambient hover
export default function TripCard({ trip }) {
  return (
    <div className="trip-card">
      <h3>{trip.name}</h3>
      <p>{trip.destination}</p>
      <p className="trip-dates">{trip.dates}</p>
    </div>
  );
}
