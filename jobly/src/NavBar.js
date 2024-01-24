import React from 'react';
import { NavLink } from "react-router-dom";

/** Renders a NavBar with NavLinks to /, /companies, /jobs
 *
 * Props:
 * -None
 *
 * State:
 * -None
 *
 * App -> NavBar
*/

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink to="/" end>
        Jobly
      </NavLink>
      <NavLink to="/companies">
        Companies
      </NavLink>
      <NavLink to="/jobs">
        Jobs
      </NavLink>
    </nav>
  );
}

export default NavBar;