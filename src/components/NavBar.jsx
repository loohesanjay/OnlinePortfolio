import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={{
      backgroundColor: "#0077cc",
      padding: "10px 20px",
      display: "flex",
      gap: "20px",
    }}>
      <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>
        Home
      </Link>
      <Link to="/admin" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>
        Admin
      </Link>
    </nav>
  );
}
