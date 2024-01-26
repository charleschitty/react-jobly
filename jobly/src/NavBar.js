import { React, useContext } from 'react';
import { NavLink } from "react-router-dom";
import userContext from './userContext';
import "./NavBar.css";

/** Renders a NavBar with NavLinks to /, /profile,
 * /companies, /jobs, and link to logout
 * if user is logged in.
 *
 * Renders a NavBar with Navlinks to /, /signup, and /login
 * if no user is logged in.
 *
 * Props:
 * - logout(): function to call in parent to update currUser state
 * - currUser: object with user information
 *
 * State:
 * -None
 *
 * App -> NavBar
*/

function NavBar({ logout, currUser }) {

  return (
      <div>
      {
      currUser.data
        ?
        <nav className="NavBar">
          <NavLink to="/" end>
            Jobly
          </NavLink>
          <NavLink to="/profile">
            Profile
          </NavLink>
          <NavLink to="/companies">
            Companies
          </NavLink>
          <NavLink to="/jobs">
            Jobs
          </NavLink>
          <NavLink to="/" onClick={logout}>
            Log Out {currUser.data.firstName}
          </NavLink>
        </nav>
        :
        <nav className="NavBar">
          <NavLink to="/" end>
            Jobly
          </NavLink>
          <NavLink to="/signup">
            Sign Up
          </NavLink>
          <NavLink to="/login">
            Log In
          </NavLink>
        </nav>
    }
    </div>
  );
}

export default NavBar;