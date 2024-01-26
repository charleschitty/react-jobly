import { React, useState } from "react";

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

  /** Calls parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    login(loginData);
    setLoginData({
      username:'',
      password:''
    });
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