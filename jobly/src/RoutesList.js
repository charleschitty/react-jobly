import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyDetails from './CompanyDetails';
import CompanyList from './CompanyList';
import JobList from './JobList';
import NotFound from './NotFound';
import SignUp from './SignUp';
import Login from './Login';
import Profile from './Profile';

/** Basic Routes List for Jobly App
 *
 *  Props:
 *  - login: function to login in parent
 *  - register: function to register in parent
 *  - editProfile: function to edit profile in parent
 *  - currUser: user objec
 *
 *  State: None
 *
 *  App -> RoutesList -> { Homepage, CompanyList, CompanyDetails, JobList,
 *                         NotFound, SignUp, Login, Profile}
 */

function RoutesList({ login, register, editProfile, currUser }) {
  console.log("* register() in RoutesList: ", register);
  //{currUser}
  return (
    <Routes>
      <Route element={<Homepage />} path="/" />
      <Route element={<CompanyList />} path="/companies" />
      <Route element={<CompanyDetails />} path="/companies/:handle" />
      <Route element={<JobList />} path="/jobs" />
      <Route element={<SignUp register={register} />} path="/signup" />
      <Route element={<Login login={login} />} path="/login" />
      <Route element={<Profile user={currUser} editProfile={editProfile} />}
        path="/profile" />
      <Route element={<NotFound />} path="/*" />
    </Routes>
  );
}

export default RoutesList;
