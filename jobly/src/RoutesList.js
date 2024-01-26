import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyDetails from './CompanyDetails';
import CompanyList from './CompanyList';
import JobList from './JobList';
import NotFound from './NotFound';
import SignUp from './SignUp';
import Login from './Login';
import Profile from './Profile'

/** Basic Routes List for Jobly App
 *
 *  Props: None
 *
 *  State: None
 *
 *  App -> RoutesList -> { Homepage, CompanyList, CompanyDetails, JobList,
 *                         NotFound}
 */

function RoutesList() {
  return (
    <Routes>
      <Route element={<Homepage/>} path="/"/>
      <Route element={<CompanyList/>} path="/companies"/>
      <Route element={<CompanyDetails/>} path="/companies/:handle"/>
      <Route element={<JobList/>} path="/jobs"/>
      <Route element={<NotFound/>} path="/*"/>
      <Route element={<SignUp />} path="/signup"/>
      <Route element={<Login />} path="/login"/>
      {/* <Route element={<Profile />} path="/profile"/> */}
    </Routes>
  );
}

export default RoutesList;
