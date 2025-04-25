import React from "react";
import './HeaderBar.css';

function HeaderBar({ handleDrawerToggle = () => console.log("no handleDrawerToggle function provided") }) {
  return (
    <header className="appBar">
      <div className="toolbar">
        <button onClick={handleDrawerToggle} className="iconButton" aria-label="open drawer" />
        <span className="title">V-WORKS</span>
      </div>
    </header>
  );
}

export default HeaderBar;
