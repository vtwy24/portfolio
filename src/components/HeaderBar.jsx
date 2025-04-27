import React from "react";
import '../styles/HeaderBar.css';

function HeaderBar({ handleDrawerToggle = () => console.log("no handleDrawerToggle function provided") }) {
  return (
    <header className="appBar">
      <div className="toolbar">
        <button onClick={handleDrawerToggle} className="iconButton" aria-label="open drawer" />
        <span className="title">V-ARCHIVES</span>
      </div>
    </header>
  );
}

export default HeaderBar;
