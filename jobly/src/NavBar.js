import { React, useContext } from 'react';
import { NavLink } from "react-router-dom";
import userContext from './userContext';
import "./NavBar.css";

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

function NavBar({ logout, currUser }) {

  console.log("* CURR USER NAVBAR: ", currUser);

  return (

    <nav className="NavBar">
      <NavLink to="/" end>
        Jobly
      </NavLink>

      {
        currUser.data
          ?
          <div>
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
          </div>
          :
          <div>
            <NavLink to="/signup">
              Sign Up
            </NavLink>
            <NavLink to="/login">
              Log In
            </NavLink>
          </div>
      }
    </nav>
  );
}

export default NavBar;