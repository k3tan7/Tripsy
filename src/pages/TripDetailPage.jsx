import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Search, MapPin } from "lucide-react";
import PackingList from "../components/PackingList";
import WeightTracker from "../components/WeightTracker";
import LastMinuteMode from "../components/LastMinuteMode";
import ReturnChecklist from "../components/ReturnChecklist";
import "./TripDetailPage.css";

export default function TripDetailPage({ trips, updateTrip, deleteTrip }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLastMinuteMode, setIsLastMinuteMode] = useState(false);
  const [viewMode, setViewMode] = useState("packing"); // packing | lastminute | return
  const [showSaveTemplate, setShowSaveTemplate] = useState(false);
  const [templateName, setTemplateName] = useState("");
  const [templateSaved, setTemplateSaved] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState("");
  const [editDestination, setEditDestination] = useState("");
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

  const handleSaveTemplate = () => {
    if (!templateName.trim()) return;
    try {
      const existing = JSON.parse(localStorage.getItem("tripsy-templates") || "{}");
      existing[templateName.trim()] = (trip.items || []).map(item => ({
        name: item.name,
        categoryId: item.categoryId || "cat_misc",
        weight: item.weight || 0,
        quantity: item.quantity || 1
      }));
      localStorage.setItem("tripsy-templates", JSON.stringify(existing));
      setTemplateSaved(true);
      setTemplateName("");
      setTimeout(() => {
        setTemplateSaved(false);
        setShowSaveTemplate(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to save template", err);
    }
  };

  const handleDeleteTrip = () => {
    deleteTrip(trip.id);
    navigate("/");
  };

  const handleStartEdit = () => {
    setEditName(trip.name);
    setEditDestination(trip.destination);
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    if (!editName.trim() || !editDestination.trim()) return;
    updateTrip({ ...trip, name: editName.trim(), destination: editDestination.trim() });
    setIsEditing(false);
  };

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

        {isEditing ? (
          <div className="edit-trip-form">
            <div className="edit-field">
              <label>Trip Name</label>
              <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} />
            </div>
            <div className="edit-field">
              <label>Destination</label>
              <input type="text" value={editDestination} onChange={(e) => setEditDestination(e.target.value)} />
            </div>
            <div className="edit-actions">
              <button className="btn-primary" onClick={handleSaveEdit}>Save Changes</button>
              <button className="btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </div>
        ) : (
          <>
            <h1 className="trip-detail-name">{trip.name}</h1>
            {trip.description && (
              <p className="trip-detail-desc">{trip.description}</p>
            )}
          </>
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

        {!isEditing && (
          <div className="trip-card-manage">
            <button className="btn-edit-trip" onClick={handleStartEdit}>Edit Trip</button>
            {!showDeleteConfirm ? (
              <button className="btn-delete-trip" onClick={() => setShowDeleteConfirm(true)}>Delete Trip</button>
            ) : (
              <div className="delete-confirm">
                <span>Are you sure?</span>
                <button className="btn-confirm-yes" onClick={handleDeleteTrip}>Yes, Delete</button>
                <button className="btn-secondary" onClick={() => setShowDeleteConfirm(false)}>Cancel</button>
              </div>
            )}
          </div>
        )}
      </div>

      <WeightTracker items={trip.items} />

      <div className="trip-detail-actions">
        <div className="view-mode-tabs">
          <button 
            className={`view-mode-tab ${viewMode === 'packing' ? 'active' : ''}`}
            onClick={() => setViewMode('packing')}
          >
            Packing List
          </button>
          <button 
            className={`view-mode-tab ${viewMode === 'lastminute' ? 'active' : ''}`}
            onClick={() => setViewMode('lastminute')}
          >
            Last-Minute
          </button>
          <button 
            className={`view-mode-tab ${viewMode === 'return' ? 'active' : ''}`}
            onClick={() => setViewMode('return')}
          >
            Return Trip
          </button>
        </div>
      </div>

      {viewMode === 'packing' && <PackingList trip={trip} updateTrip={updateTrip} />}
      {viewMode === 'lastminute' && <LastMinuteMode trip={trip} updateTrip={updateTrip} />}
      {viewMode === 'return' && <ReturnChecklist trip={trip} updateTrip={updateTrip} />}

      <div className="save-template-section">
        {!showSaveTemplate ? (
          <button className="btn-save-template" onClick={() => setShowSaveTemplate(true)}>
            Save as Template
          </button>
        ) : (
          <div className="save-template-form">
            {templateSaved ? (
              <p className="template-saved-msg">Template saved successfully.</p>
            ) : (
              <>
                <input
                  type="text"
                  value={templateName}
                  onChange={(e) => setTemplateName(e.target.value)}
                  placeholder="Enter template name"
                />
                <button className="btn-primary" onClick={handleSaveTemplate}>Save</button>
                <button className="btn-secondary" onClick={() => { setShowSaveTemplate(false); setTemplateName(""); }}>Cancel</button>
              </>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
