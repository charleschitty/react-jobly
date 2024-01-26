import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

/** Generic Login Form
 *
 * Props:
 *  - login(): accepts loginData -> function to call in parent
 *
 * State:
 *  - loginData: the form data retrieved from a user's inputs
 *  - errors: array of errors updated upon failed login
 *
 *  Login -> LoginForm
*/

function LoginForm({ login }) {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState([]);

  console.log("LoginForm's LoginData is currently:", loginData);

  /** Updates form input based on login data */
  function handleChange(evt) {
    let { name, value } = evt.target;
    setLoginData(fData => ({
      ...fData,
      [name]: value,
    })
    );
  };

  /** Calls parent function and clear form.
   * Upon successful login, redirect to the homepage
   * Upon failed login, display errors on page
   */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await login(loginData);
      setLoginData({
        username: '',
        password: ''
      });
      navigate('/');
    } catch (err) {
      setErrors(err);
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

      {errors
        &&
        <div>
          {errors.map((error) => (
            <div key={error}>
              <ErrorMessage error={error} />
            </div>
          ))}
        </div>
      }
    </form>
  );
}

export default LoginForm;