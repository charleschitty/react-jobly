import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import RoutesList from "./RoutesList";
import userContext from "./userContext";
import { useState } from "react";


/** Main App Component
 *
 *  Props: None
 *
 *  State: None
 *
 * App -> {NavBar, RouteList}
 */

function App() {
  const [token, setToken] = useState({})

  console.log("App is rendered");

  /** Logs user in with credentials. Upon successful login,
   * state updated with user token
  */
  function login(){

  }

  /** Registers user with SignUpForm data. Upon successful signup
   * Logs user in, state updated with user token
  */
  function register(){

  }

  /** Edits user profile
   * 
  */
  function editProfile(){

  }

  return (

    <userContext.Provider value={{ token: null }}>
      <BrowserRouter>
        <NavBar />
        <RoutesList />
      </BrowserRouter>
    </userContext.Provider>

  );
}

export default App;
