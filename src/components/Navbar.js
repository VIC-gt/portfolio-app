import React from 'react';

function Navbar({ onAddClick }) {
  return (
    <nav className="navbar">
      <span className="nav-logo">folio.</span>
      <button className="nav-btn" onClick={onAddClick}>
        + Add Project
      </button>
    </nav>
  );
}

export default Navbar;