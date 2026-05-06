import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TEMPLATES } from "../data/tripsData";
import "./NewTrip.css";

// Colors from the user's palette
const COLORS = [
  "#C4C3E3", 
  "#504E76", 
  "#A3B565", 
  "#FCDD9D", 
  "#F1642E", 
];

export default function NewTripPage({ onAddTrip }) {
  const navigate = useNavigate();
  
  // Use useState for each form field
  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [tripType, setTripType] = useState("City");
  
  // Maintained color tag state to connect with previous design
  const [coverColor, setCoverColor] = useState(COLORS[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateItems = TEMPLATES[tripType] || [];
    const initialItems = templateItems.map((itemName, index) => ({
      id: `item_${Date.now()}_${index}`,
      name: itemName,
      packed: false,
    }));

    const newTrip = {
      id: Date.now().toString(),
      name,
      destination,
      // Map to startDate/endDate so existing components render smoothly
      startDate: departureDate, 
      endDate: returnDate,
      type: tripType,
      description: `A ${tripType.toLowerCase()} trip to ${destination}.`, // Autofilled summary
      coverColor,
      items: initialItems, // Ensures the Home component packing stats work and list is pre-populated
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
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Summer in Kyoto"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="destination">Destination</label>
          <input
            id="destination"
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="e.g. Kyoto, Japan"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="departureDate">Departure Date</label>
            <input
              id="departureDate"
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="returnDate">Return Date</label>
            <input
              id="returnDate"
              type="date"
              value={returnDate}
              min={departureDate}
              onChange={(e) => setReturnDate(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="tripType">Trip Type</label>
          <select 
            id="tripType"
            value={tripType} 
            onChange={(e) => setTripType(e.target.value)}
          >
            <option value="Beach">Beach</option>
            <option value="Business">Business</option>
            <option value="Camping">Camping</option>
            <option value="City">City</option>
            <option value="Winter">Winter</option>
          </select>
        </div>

        <div className="form-group">
          <label>Color Tag</label>
          <div className="color-picker">
            {COLORS.map((color) => (
              <button
                key={color}
                type="button"
                className={`color-swatch ${coverColor === color ? "selected" : ""}`}
                style={{ backgroundColor: color }}
                onClick={() => setCoverColor(color)}
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
