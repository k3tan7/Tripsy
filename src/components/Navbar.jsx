import { Link, useLocation } from "react-router-dom";
import { Plane, Plus } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <Plane className="navbar-logo" size={22} color="var(--dark-purple)" />
          <span className="navbar-name">Tripsy</span>
        </Link>

        <Link
          to="/new"
          className={`navbar-cta ${location.pathname === "/new" ? "active" : ""}`}
        >
          <Plus className="navbar-cta-icon" size={16} />
          New Trip
        </Link>
      </div>
    </nav>
  );
}
