import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

/** Generic Login Form
 *
 * Props:
 *  - login(): accepts loginData -> function to call in parent
 *
 * State:
 *  - loginData: the form data retrieved from a user's inputs
 *
 *  Login -> LoginForm
*/

function LoginForm({ login }) {
  const navigate = useNavigate();
  
  console.log("LoginForm reached");

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  console.log("LoginForm's LoginData is currently:", loginData);

  /** Updates form input based on login data*/
  function handleChange(evt) {
    let { name, value } = evt.target;
    setLoginData(fData => ({
      ...fData,
      [name]: value,
    })
    );
  };

  /** Calls parent function and clear form. Upon successful login, redirect
   * to the homepage
   */
  function handleSubmit(evt) {
    evt.preventDefault();
    try {
      login(loginData);
      setLoginData({
        username: '',
        password: ''
      });
      navigate('/');
    } catch (err) {

    }

  };

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <label> Username </label>
      <input value={loginData.username}
        name="username"
        onChange={handleChange} />
      <label> Password </label>
      <input value={loginData.password}
        name="password"
        type="password"
        onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
}

export default LoginForm;