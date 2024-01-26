import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import RoutesList from "./RoutesList";
import userContext from "./userContext";
import { useState } from "react";
import JoblyApi from './api';


/** Main App Component
 *
 *  Props: None
 *
 *  State: currUser - object of user details received from backend
 *  {username, firstName, lastName, email, isAdmin, jobs} and isLoading
 *
 * App -> {NavBar, RouteList}
 */

function App() {
  const [currUser, setCurrUser] = useState({
    data: null,
    isLoading: false
  });

  console.log("App is rendered");
  console.log("currUser state is:", currUser);

  /** Registers user with SignUpForm data. Upon successful signup
  * Logs user in, getUserDetails called to change currUser state
  */
  async function register(user) {
    await JoblyApi.register(user);
    setCurrUser(() => ({ isLoading: true }));
    getUserDetails(user.username);
  }


  /** Logs user in with credentials. Upon successful login,
  *  getUserDetails called to change currUser state
  */
  async function login(loginData) {
    await JoblyApi.login(loginData);
    setCurrUser(() => ({ isLoading: true }));
    getUserDetails(loginData.username);
  }


  /** Gets user information and updates currUser.data with
   *  username, firstName, lastName, email, isAdmin, and jobs
   */
  async function getUserDetails(username) {
    const userDetails = await JoblyApi.getUserDetails(username);
    setCurrUser(() => ({
      data: userDetails,
      isLoading: false,
    }));
  }

  /** Logs user out by updating currUser.data state to null
   *  and currUser.isLoading to false.
  */
 function logout() {
   JoblyApi.token = null;
   setCurrUser(() => ({
     data: null,
     isLoading: false
    }));
  }

  /** Edits user profile based on inputs of userDetails {firstname, lastname,
   *  and email} */
  async function editProfile(userDetails) {
    const user = await JoblyApi.editProfile(currUser, userDetails);
  }

  if (currUser.isLoading) return <i>Loading...</i>;
  return (
    <userContext.Provider value={{ userData: currUser.data }}>
      <BrowserRouter>
        <NavBar logout={logout} currUser={currUser} />
        <RoutesList login={login}
          register={register}
          editProfile={editProfile}
          logout={logout}
          currUser={currUser}
        />
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
