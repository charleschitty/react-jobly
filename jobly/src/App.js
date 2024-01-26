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
 *  {username, firstName, lastName, email, isAdmin, jobs}
 *
 * App -> {NavBar, RouteList}
 */

function App() {
  // const [token, setToken] = useState({});
  const [currUser, setCurrUser] = useState({
    data: null,
    isLoading: false
  });


  console.log("App is rendered");
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
* Logs user in, getUserDetails called to change currUser state
*/
  async function register(user) {
    console.log("* USER in REGISTER in APP:", user);
    await JoblyApi.register(user);
    setCurrUser(() => ({isLoading:true}));
    // const token = await JoblyApi.register(user);
    // setToken(token);
    // setCurrUser({
    //   data: {
    //     username: user.username,
    //     firstName: user.firstName,
    //     lastName: user.lastName,
    //     email: user.email,
    //   }
    // });
    getUserDetails(user.username);
  }

  /** Logs user in with credentials. Upon successful login,
   *  getUserDetails called to change currUser state
  */

  async function login(loginData) {
    await JoblyApi.login(loginData);
    setCurrUser(() => ({isLoading:true}));
    // const token = await JoblyApi.login(loginData);
    // setToken(token);
    console.log("Login at the app has loginData of:", loginData)
    getUserDetails(loginData.username)
  }


  /** Gets user information and stores username, firstName, lastName,
   * and email in the currUser.data
   */
  async function getUserDetails(username){
    console.log("A great success")
    const userDetails = await JoblyApi.getUserDetails(username);
    console.log("UserDetails is:", userDetails)
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
    JoblyApi.token = null;
    // setToken(() => { });
    setCurrUser(() => ({
      data: null,
      isLoading: true
    }));
  }

  if (currUser.isLoading) return <i>Loading...</i>
  return (
    <userContext.Provider value={{ firstName: currUser.firstName }}>
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
