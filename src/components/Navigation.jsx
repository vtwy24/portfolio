import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({
  isOpen = false,
  handleDrawerToggle = () => console.error('No handleDrawerToggle function provided'),
  drawerWidth = 240,
}) {
  return (
    <nav className={`drawer ${isOpen ? 'open' : ''}`} style={{ width: drawerWidth }}>
      <div className="drawer-content" onClick={handleDrawerToggle}>
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
