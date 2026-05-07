import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TEMPLATES, CATEGORIES, ITEM_WEIGHTS } from "../data/tripsData";
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
  const [loadTemplate, setLoadTemplate] = useState(true);
  
  // Maintained color tag state to connect with previous design
  const [coverColor, setCoverColor] = useState(COLORS[0]);

  // Saved user templates from localStorage
  const [savedTemplates, setSavedTemplates] = useState({});
  const [selectedSavedTemplate, setSelectedSavedTemplate] = useState("");

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("tripsy-templates") || "{}");
      setSavedTemplates(stored);
    } catch (err) {
      console.error("Failed to load saved templates", err);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let initialItems = [];
    
    if (selectedSavedTemplate && savedTemplates[selectedSavedTemplate]) {
      // Use saved custom template
      const savedItems = savedTemplates[selectedSavedTemplate];
      initialItems = savedItems.map((item, index) => ({
        id: `item_${Date.now()}_${index}`,
        name: item.name,
        packed: false,
        quantity: item.quantity || 1,
        weight: item.weight || 0,
        categoryId: item.categoryId || "cat_misc"
      }));
    } else if (loadTemplate) {
      // Use built-in trip type template
      const templateItems = TEMPLATES[tripType] || [];
      initialItems = templateItems.map((itemName, index) => {
        const foundCategory = CATEGORIES.find(c => c.defaultItems.includes(itemName));
        return {
          id: `item_${Date.now()}_${index}`,
          name: itemName,
          packed: false,
          quantity: 1,
          weight: ITEM_WEIGHTS[itemName] || 0,
          categoryId: foundCategory ? foundCategory.id : "cat_misc"
        };
      });
    }

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
          
          <div className="template-checkbox-wrapper">
            <span className="template-msg">Templates available for {tripType} trips.</span>
            <label className="template-label">
              <input 
                type="checkbox" 
                checked={loadTemplate} 
                onChange={(e) => { setLoadTemplate(e.target.checked); if (e.target.checked) setSelectedSavedTemplate(""); }} 
              />
              Load suggested items
            </label>
          </div>

          {Object.keys(savedTemplates).length > 0 && (
            <div className="template-checkbox-wrapper" style={{ marginTop: '0.5rem' }}>
              <span className="template-msg">Or apply a previously saved template.</span>
              <select
                className="saved-template-dropdown"
                value={selectedSavedTemplate}
                onChange={(e) => { setSelectedSavedTemplate(e.target.value); if (e.target.value) setLoadTemplate(false); }}
              >
                <option value="">-- No saved template --</option>
                {Object.keys(savedTemplates).map(name => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </select>
            </div>
          )}
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
