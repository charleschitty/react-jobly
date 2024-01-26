import './Homepage.css';
import React, { useContext } from 'react';
import userContext from "./userContext";

/** Homepage for "/"
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

  console.log("userContext", userContext)

  console.log("userData.firstName is: " )


  return (
    <div className="Homepage">
      <h1>Jobly</h1>
      <h3>All the jobs in one, convenient place.</h3>

      {userData
        ?
        <p>Welcome back, {userData.firstName}</p>
        :
        <p>PLACEHOLDER</p>
      }
    </div>




  );
}

export default Homepage;

