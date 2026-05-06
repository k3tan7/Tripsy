import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewTrip.css";

// Colors from the palette provided
const COLORS = [
  "#C4C3E3", // Pastel purple
  "#504E76", // Dark purple
  "#A3B565", // Green
  "#FCDD9D", // Yellow
  "#F1642E", // Orange
];

export default function NewTrip({ onAddTrip }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    destination: "",
    startDate: "",
    endDate: "",
    description: "",
    coverColor: COLORS[0],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTrip = {
      ...form,
      id: Date.now().toString(),
      items: [],
    };
    onAddTrip(newTrip);
    navigate(`/trip/${newTrip.id}`);
  };

  return (
    <main className="new-trip">
      <div className="new-trip-header">
        <h1 className="new-trip-title">Create New Trip</h1>
        <p className="new-trip-subtitle">
          Enter the details below to create a new travel and packing itinerary.
        </p>
      </div>

      <form className="new-trip-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Trip Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Summer in Kyoto"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="destination">Destination</label>
          <input
            id="destination"
            name="destination"
            type="text"
            value={form.destination}
            onChange={handleChange}
            placeholder="e.g. Kyoto, Japan"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="startDate">Start Date</label>
            <input
              id="startDate"
              name="startDate"
              type="date"
              value={form.startDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date</label>
            <input
              id="endDate"
              name="endDate"
              type="date"
              value={form.endDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Packing Notes / Description</label>
          <textarea
            id="description"
            name="description"
            rows={3}
            value={form.description}
            onChange={handleChange}
            placeholder="What kind of trip is this? Any special packing needs?"
          />
        </div>

        <div className="form-group">
          <label>Color Tag</label>
          <div className="color-picker">
            {COLORS.map((color) => (
              <button
                key={color}
                type="button"
                className={`color-swatch ${form.coverColor === color ? "selected" : ""}`}
                style={{ backgroundColor: color }}
                onClick={() => setForm((prev) => ({ ...prev, coverColor: color }))}
                aria-label={`Select color ${color}`}
              />
            ))}
          </div>
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="btn-secondary"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button type="submit" className="btn-primary">
            Save Trip
          </button>
        </div>
      </form>
    </main>
  );
}
