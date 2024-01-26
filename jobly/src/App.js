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
  const [currUser, setCurrUser] = useState({
    data: null,
    isLoading: true
  });
  //TODO:


  console.log("App is rendered");
  console.log("Token state is:", token);
  console.log("currUser state is:", currUser);


  // useEffect(function setsCurrUserOnTokenChange() {
  //   async function findsCurrUser() {
  //     try {
  //       const response = await JoblyApi.getUser(token)
  //       setCurrUser({ user: response, isLoading: false, errors: null });
  //     } catch (err) {
  //       setCurrUser({ user: null, isLoading: false, errors: err });
  //     }
  //   }
  //   findsCurrUser();
  // }, [token]);


/** Registers user with SignUpForm data. Upon successful signup
* Logs user in, state updated with user token
*/
  async function register(user) {
    console.log("* USER in REGISTER in APP:", user);
    const token = await JoblyApi.register(user);
    setToken(token);
    setCurrUser({
      data: {
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      }
    });
  }

  /** Logs user in with credentials. Upon successful login,
   * state updated with user token
  */

  async function login(loginData) {
    const token = await JoblyApi.login(loginData);
    setToken(token);
    setCurrUser({
      data: {
        username: loginData.username,
        firstName: loginData.firstName,
        lastName: loginData.lastName,
        email: loginData.email,
      }
    });
  }


  /** Gets user information and stores username, firstName, lastName,
   * and email in the currUser.data
   *
   */
  async function getUserDetails(username){
    const userDetails = await JoblyApi.getUserDetails(username);
    setCurrUser(() => ({
      data: userDetails,
      isLoading: false,
    }));
  }

  /** Edits user profile
   *
  */
  async function editProfile(userDetails) {
    const user = await JoblyApi.editProfile(currUser, userDetails);
  }


  /** Logs user out by clearing token and currUser states */
  function logout() {
    console.log("You made it to the logout function");
    setToken(() => { });
    setCurrUser(() => ({
      data: null,
      isLoading: true
    }));
  }

  console.log("* CURR USER in APP: ", currUser);
  return (
    <userContext.Provider value={{ firstName: null }}>
      <BrowserRouter>
        <NavBar logout={logout} currUser={currUser} />
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
