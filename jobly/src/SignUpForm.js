import { React, useState } from "react";

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
  console.log("SignupForm reached");

  const [signUpData, setSignUpData] = useState({});

  console.log("SignUpForm's signUpData is currently:", signUpData);

  /** Updates form input based on signup data*/
  function handleChange(evt) {
    setSignUpData(() => evt.target.value);
  };

  /** Calls parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    register(signUpData);
    setSignUpData({});
  };

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <label> Username </label>
      <input value={signUpData.username} onChange={handleChange} />
      <label> Password </label>
      <input value={signUpData.password} onChange={handleChange}/>
      <label> First name </label>
      <input value={signUpData.firstName} onChange={handleChange} />
      <label> Last name </label>
      <input value={signUpData.lastName} onChange={handleChange}/>
      <label> Email </label>
      <input value={signUpData.email} onChange={handleChange}/>
      <button>Submit</button>
    </form>
  );
}

export default SignUpForm;