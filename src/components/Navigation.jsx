import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation({
  isOpen = false,
  handleDrawerToggle = () => console.error('No handleDrawerToggle function provided'),
  drawerWidth = 400,
}) {

  const drawerRef = useRef(null);

  useEffect(() => {
  function handleClickOutside(e) {
    if (drawerRef.current && !drawerRef.current.contains(e.target)) {
      if (isOpen) {
        handleDrawerToggle();
      }
    }
  }
document.addEventListener('mousedown', handleClickOutside);
return () => {
  document.removeEventListener('mousedown', handleClickOutside);
};
}, [isOpen, handleDrawerToggle]);

  return (
    <nav ref={drawerRef} className={`drawer ${isOpen ? 'open' : ''}`} style={{ width: drawerWidth }}>
      <div className="drawer-content">
        <span className="drawer-title">MENU</span>
        <hr />
        <ul className="drawer-list">
          <li>
            <NavLink to="/" className="drawer-link">
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="drawer-link">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-me" className="drawer-link">
              Contact Me
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
