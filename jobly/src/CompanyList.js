import { React, useState } from 'react';
import { Link } from 'react-router-dom';
// import "./CompanyList.css";

import SearchForm from "./SearchForm";


/** Basic List component to list all the companies with links to details of a
 *  company
 *
 * FIXME: CompanyCard not done yet
 *
 * Props: None
 * State:
 *  - searchedCompany: Searched for company after receiving value from child
 *    SearchForm
 *  - IsLoading: Boolean value determining if CompaniesData has been retrieved
 *  - CompaniesData: Object of company data from back-end API
 *
 * { RoutesList, NavBar } --> CompanyList --> SearchForm
*/

//TODO: Class names for divs

function CompanyList() {
  const [searchedCompany, setSearchedCompany] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [companiesData, setCompaniesData] = useState([]);

  console.log("CompanyList is called");
  console.log("searchedCompany state:", searchedCompany);
  console.log("IsLoading state:", isLoading);
  console.log("CompaniesData state:", companiesData);

  return (
    <div>
      <SearchForm />
      <div className='CompanyList'>
        <h1> COMPANY-LIST IS HERE </h1>
      </div>
    </div>
  );
}

export default CompanyList;