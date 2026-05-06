import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NewTrip from "./pages/NewTrip";
import TripDetail from "./pages/TripDetail";
import sampleTrips from "./data/sampleTrips";
import "./index.css";

export default function App() {
  const [trips, setTrips] = useState(sampleTrips);

  const handleAddTrip = (newTrip) => {
    setTrips((prev) => [newTrip, ...prev]);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home trips={trips} />} />
        <Route path="/new" element={<NewTrip onAddTrip={handleAddTrip} />} />
        <Route path="/trip/:id" element={<TripDetail trips={trips} />} />
      </Routes>
    </BrowserRouter>
  );
}
