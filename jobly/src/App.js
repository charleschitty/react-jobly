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
    console.log("* USER in REGISTER in APP:", user)
    const token = await JoblyApi.register(user);
    setToken(token);
    setCurrUser(user.username);
  }

  console.log("* register() from App:", register)


  /** Edits user profile
   *
  */
  async function editProfile(userDetails){
    const user = await JoblyApi.editProfile(currUser, userDetails);
  }


  /** Logs user out by clearing token and currUser states */
  function logout(){
    setToken(curr => {});
    setCurrUser(curr => {});
  }

  return (

    <userContext.Provider value={{ firstName:null }}>
      <BrowserRouter>
        <NavBar logout={logout}/>
        <RoutesList login={login}
                    register={register}
                    editProfile={editProfile}
                    logout={logout}
        />
      </BrowserRouter>
    </userContext.Provider>

  );
}

export default App;
