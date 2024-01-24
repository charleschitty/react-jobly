import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyDetails from './CompanyDetails';
import CompanyList from './CompanyList';
import JobList from './JobList';
import NotFound from './NotFound';


function RoutesList() {
  return (
    <Routes>
      <Route element={<Homepage/>} path="/"/>
      <Route element={<CompanyList/>} path="/companies"/>
      <Route element={<CompanyDetails/>} path="/companies/:handle"/>
      <Route element={<JobList/>} path="/jobs"/>
      <Route element={<NotFound/>} path="/*"/>
    </Routes>
  );
}

export default RoutesList;
