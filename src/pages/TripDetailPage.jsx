import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";
import PackingList from "../components/PackingList";
import WeightTracker from "../components/WeightTracker";
import LastMinuteMode from "../components/LastMinuteMode";
import ReturnChecklist from "../components/ReturnChecklist";
import "./TripDetailPage.css";

export default function TripDetailPage({ trips, updateTrip, deleteTrip }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState("packing");
  const [showSaveTemplate, setShowSaveTemplate] = useState(false);
  const [templateName, setTemplateName] = useState("");
  const [templateSaved, setTemplateSaved] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState("");
  const [editDestination, setEditDestination] = useState("");
  const [exportMsg, setExportMsg] = useState("");
  const trip = trips.find((t) => t.id === id);

  if (!trip) {
    return (
      <main className="trip-detail-notfound">
        <h2>Trip not found</h2>
        <p>This trip does not exist or has been removed.</p>
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
    const existing = JSON.parse(localStorage.getItem("tripsy-templates") || "{}");
    existing[templateName.trim()] = (trip.items || []).map(({ name, categoryId, weight, quantity }) => ({
      name, categoryId: categoryId || "cat_misc", weight: weight || 0, quantity: quantity || 1
    }));
    localStorage.setItem("tripsy-templates", JSON.stringify(existing));
    setTemplateSaved(true);
    setTemplateName("");
    setTimeout(() => { setTemplateSaved(false); setShowSaveTemplate(false); }, 2000);
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

  const handleExport = () => {
    const items = trip.items || [];
    const packed = items.filter(i => i.packed).map(i => `[x] ${i.name}`).join("\n");
    const unpacked = items.filter(i => !i.packed).map(i => `[ ] ${i.name}`).join("\n");
    const text = `${trip.name} — ${trip.destination}\n\nPacked:\n${packed || "(none)"}\n\nStill to pack:\n${unpacked || "(none)"}`;
    navigator.clipboard.writeText(text).then(() => {
      setExportMsg("Copied!");
      setTimeout(() => setExportMsg(""), 2000);
    });
  };

  return (
    <main className="trip-detail">
      <button className="btn-back-nav" onClick={() => navigate(-1)}>
        &larr; Back
      </button>

      <div className="trip-detail-card" style={{ "--banner-color": trip.coverColor }}>
        <div className="trip-card-top-row">
          <span className="trip-detail-dest">
            <MapPin size={14} />
            {trip.destination}
          </span>
          {trip.type && <span className="trip-detail-type">{trip.type}</span>}
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
              <button className="btn-primary" onClick={handleSaveEdit}>Save</button>
              <button className="btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </div>
        ) : (
          <>
            <h1 className="trip-detail-name">{trip.name}</h1>
            {trip.description && <p className="trip-detail-desc">{trip.description}</p>}
          </>
        )}

        <div className="trip-detail-stats">
          {trip.startDate && (
            <div className="stat">
              <span className="stat-label">Start</span>
              <span className="stat-value">
                {new Date(trip.startDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </span>
            </div>
          )}
          {trip.endDate && (
            <div className="stat">
              <span className="stat-label">End</span>
              <span className="stat-value">
                {new Date(trip.endDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </span>
            </div>
          )}
          {nights !== null && (
            <div className="stat">
              <span className="stat-label">Duration</span>
              <span className="stat-value">{nights} night{nights !== 1 ? "s" : ""}</span>
            </div>
          )}
        </div>

        {!isEditing && (
          <div className="trip-card-manage">
            <button className="btn-edit-trip" onClick={handleStartEdit}>Edit</button>
            {!showDeleteConfirm ? (
              <button className="btn-delete-trip" onClick={() => setShowDeleteConfirm(true)}>Delete</button>
            ) : (
              <div className="delete-confirm">
                <span>Are you sure?</span>
                <button className="btn-confirm-yes" onClick={handleDeleteTrip}>Yes</button>
                <button className="btn-secondary" onClick={() => setShowDeleteConfirm(false)}>No</button>
              </div>
            )}
          </div>
        )}
      </div>

      <WeightTracker items={trip.items} />

      <div className="trip-detail-actions">
        <div className="view-mode-tabs">
          {["packing", "lastminute", "return"].map(mode => (
            <button
              key={mode}
              className={`view-mode-tab ${viewMode === mode ? "active" : ""}`}
              onClick={() => setViewMode(mode)}
            >
              {mode === "packing" ? "Packing List" : mode === "lastminute" ? "Last-Minute" : "Return Trip"}
            </button>
          ))}
        </div>
      </div>

      {viewMode === "packing" && <PackingList trip={trip} updateTrip={updateTrip} />}
      {viewMode === "lastminute" && <LastMinuteMode trip={trip} updateTrip={updateTrip} />}
      {viewMode === "return" && <ReturnChecklist trip={trip} updateTrip={updateTrip} />}

      <div className="trip-bottom-actions">
        <button className="btn-export" onClick={handleExport}>
          {exportMsg || "Export List"}
        </button>
        {!showSaveTemplate ? (
          <button className="btn-save-template" onClick={() => setShowSaveTemplate(true)}>
            Save as Template
          </button>
        ) : (
          <div className="save-template-form">
            {templateSaved ? (
              <p className="template-saved-msg">Saved!</p>
            ) : (
              <>
                <input type="text" value={templateName} onChange={(e) => setTemplateName(e.target.value)} placeholder="Template name" />
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
