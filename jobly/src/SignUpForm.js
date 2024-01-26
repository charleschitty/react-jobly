import { React, useState } from "react";
import {useNavigate} from "react-router-dom"

/** Generic Sign-up Form
 *
 * Props:
 *  - register(): accepts formData -> function to call in parent
 *
 * State:
 *  - signUpData: the form data retrieved from a user's inputs
 *
 *  SignUp -> SignUpForm
*/

function SignUpForm({ register }) {
  const navigate = useNavigate();

  console.log("SignupForm reached");

  const [signUpData, setSignUpData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
  });

  console.log("SignUpForm's signUpData is currently:", signUpData);

  /** Updates form input based on signup data*/
  function handleChange(evt) {
    let { name, value } = evt.target;
    setSignUpData(fData => ({
      ...fData,
      [name]: value,
    })
    );
  };


  /** Calls parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    try{
      register(signUpData);
      setSignUpData({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
      });
      navigate('/');
    } catch (err){

    }

  };

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <label> Username </label>
      <input value={signUpData.username}
        key="username"
        onChange={handleChange}
        name="username" />
      <label> Password </label>
      <input value={signUpData.password}
        name="password"
        onChange={handleChange} />
      <label> First name </label>
      <input value={signUpData.firstName}
        name="firstName"
        onChange={handleChange} />
      <label> Last name </label>
      <input value={signUpData.lastName}
        name="lastName"
        onChange={handleChange} />
      <label> Email </label>
      <input value={signUpData.email}
        name="email"
        onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
}

export default SignUpForm;