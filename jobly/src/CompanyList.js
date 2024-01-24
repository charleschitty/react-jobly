import React from 'react';
import { Link } from 'react-router-dom';
import "./CompanyList.css";
import { useState } from 'react';

/** Basic List component to list all the companies with links to details of a
 *  company
 *
 * FIXME: Decide on company card or not
 *
 * Props: None
 * State:
 *  - Company: Searched for company after receiving value from child SearchForm
 *  - IsLoading: Boolean value determining if CompaniesData has been retrieved
 *  - CompaniesData: Object of company data from back-end API
 *
 * { Routes, NavBar } --> CompanyList --> SearchForm
*/

function CompanyList() {
  const [company, setCompany] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [companiesData, setCompaniesData] = useState([]);

  console.log("CompanyList is called");
  console.log("Company state:", company);
  console.log("IsLoading state:", isLoading);
  console.log("CompaniesData state:", companiesData);

  return (
    <div className='CompanyList'>
      <h1> COMPANY-LIST IS HERE </h1>
    </div>
  );
}

export default CompanyList;