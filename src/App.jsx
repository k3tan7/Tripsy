import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NewTripPage from "./pages/NewTrip";
import TripDetailPage from "./pages/TripDetailPage";
import sampleTrips from "./data/sampleTrips";
import { ITEM_WEIGHTS, CATEGORIES } from "./data/tripsData";
import "./index.css";

const STORAGE_KEY = "tripsy-trips";

export default function App() {
  const [trips, setTrips] = useState(() => {
    let loadedTrips = sampleTrips;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) loadedTrips = JSON.parse(saved);
    } catch (e) {
      console.error("Failed to load trips:", e);
    }
    // Backfill missing weights and categoryIds
    return loadedTrips.map(trip => ({
      ...trip,
      items: (trip.items || []).map(item => {
        const catId = item.categoryId || (CATEGORIES.find(c => c.defaultItems.includes(item.name))?.id) || "cat_misc";
        return { ...item, weight: item.weight || ITEM_WEIGHTS[item.name] || 0, categoryId: catId };
      })
    }));
  });

  // Save trips to localStorage whenever the trips state changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(trips));
    } catch (error) {
      console.error("Failed to save trips to localStorage:", error);
    }
  }, [trips]);

  const handleAddTrip = (newTrip) => {
    setTrips((prev) => [newTrip, ...prev]);
  };

  const handleUpdateTrip = (updatedTrip) => {
    setTrips((prev) => prev.map(t => t.id === updatedTrip.id ? updatedTrip : t));
  };

  const handleDeleteTrip = (tripId) => {
    setTrips((prev) => prev.filter(t => t.id !== tripId));
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home trips={trips} />} />
        <Route path="/new" element={<NewTripPage onAddTrip={handleAddTrip} />} />
        <Route path="/trip/:id" element={<TripDetailPage trips={trips} updateTrip={handleUpdateTrip} deleteTrip={handleDeleteTrip} />} />
      </Routes>
    </BrowserRouter>
  );
}
