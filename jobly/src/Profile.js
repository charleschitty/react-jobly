import React from 'react';
import ProfileEditForm from "./ProfileEditForm.js";

/** Profile page that displays a user's profile details and renders a form
 *  to edit profile data
 *
 * Props:
 *  - editProfile()
 *  - token: data about current logged-in user
 *
 * State:
 *  - None
 *
 * { RoutesList, NavBar } -> Profile -> ProfileEditForm
*/

function Profile({ token, editProfile }) {

  return(
    <div className='ProfilePage'>
      <h1> Profile </h1>
      <ProfileEditForm token={token} editProfile={editProfile}/>
    </div>
  )
}

export default Profile;