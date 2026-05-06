import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NewTrip from "./pages/NewTrip";
import TripDetail from "./pages/TripDetail";
import sampleTrips from "./data/sampleTrips";
import "./index.css";

const STORAGE_KEY = "tripsy-trips";

export default function App() {
  // Initialize trips state from localStorage using a function
  const [trips, setTrips] = useState(() => {
    try {
      const savedTrips = localStorage.getItem(STORAGE_KEY);
      if (savedTrips) {
        return JSON.parse(savedTrips);
      }
    } catch (error) {
      console.error("Failed to parse trips from localStorage during init:", error);
    }
    return sampleTrips;
  });

  // Load trips from localStorage on initial render
  useEffect(() => {
    try {
      const savedTrips = localStorage.getItem(STORAGE_KEY);
      if (savedTrips) {
        setTrips(JSON.parse(savedTrips));
      }
    } catch (error) {
      console.error("Failed to load trips from localStorage on mount:", error);
    }
  }, []);

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

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home trips={trips} />} />
        <Route path="/new" element={<NewTrip onAddTrip={handleAddTrip} />} />
        <Route path="/trip/:id" element={<TripDetail trips={trips} onUpdateTrip={handleUpdateTrip} />} />
      </Routes>
    </BrowserRouter>
  );
}
