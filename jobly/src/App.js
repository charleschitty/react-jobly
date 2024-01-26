import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import RoutesList from "./RoutesList";
import userContext from "./userContext";
import { useEffect, useState } from "react";
import JoblyApi from './api';


/** Main App Component
 *
 *  Props: None
 *
 *  State: None
 *
 * App -> {NavBar, RouteList}
 */

function App() {
  const [token, setToken] = useState({});
  const [currUser, setCurrUser] = useState({});

  console.log("App is rendered");
  console.log("Token state is:", token);
  console.log("currUser state is:", currUser);

  /** Logs user in with credentials. Upon successful login,
   * state updated with user token
  */

  async function login(username, password){
    const token = await JoblyApi.login(username, password)
    setToken(token);
    setCurrUser(username);
  }

  /** Registers user with SignUpForm data. Upon successful signup
   * Logs user in, state updated with user token
  */
  async function register(user){
    const token = await JoblyApi.register(user);
    setToken(token);
    setCurrUser(user.username);
  }

  /** Edits user profile
   *
  */
  async function editProfile(user){
    const user = await JoblyApi.editProfile(currUser, user);
  }

  return (

    <userContext.Provider value={{ firstName:null }}>
      <BrowserRouter>
        <NavBar />
        <RoutesList />
      </BrowserRouter>
    </userContext.Provider>

  );
}

export default App;
