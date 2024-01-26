import './Homepage.css';
import React, { useContext } from 'react';
import userContext from "./userContext";

/** Homepage for "/"
 * If user is logged in, accesses context to display personalized message
 *
 * Props:
 * - None
 *
 * States:
 * - None
 *
 * RoutesList -> Homepage
 */

function Homepage() {
  const { userData } = useContext(userContext);

  return (
    <div className="Homepage">
      <h1>Jobly</h1>
      <h3>All the jobs in one, convenient place.</h3>
      {userData && <h3>Welcome back, {userData.firstName}</h3>}
    </div>
  );
}

export default Homepage;

