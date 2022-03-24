import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="page-header">
      <div className="header-page-heder">
        <div className="logo"></div>
        <nav className="navigation">
          <ul className="nav-list">
            <li className="list">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="list">
              <NavLink
                to="/about"
                className={(isActive) => (true ? 'active-link' : '')}
              >
                About us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
