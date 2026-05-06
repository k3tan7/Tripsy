import { Link, useLocation } from "react-router-dom";
import { Plane, Plus } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <Plane className="navbar-logo" size={24} color="var(--dark-purple)" />
        <span className="navbar-name">Tripsy</span>
      </Link>

      <Link
        to="/new"
        className={`navbar-cta ${location.pathname === "/new" ? "active" : ""}`}
      >
        <Plus className="navbar-cta-icon" size={18} />
        New Trip
      </Link>
    </nav>
  );
}
