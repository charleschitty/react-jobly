import React from 'react';
import { Link } from 'react-router-dom';
import JobsCardList from './JobsCardList';
import JoblyApi from './api'

// import "./CompanyDetails.css";

/** Shows the details of a single Company and their listed jobs
 *
 *
 * Props:
 *  - company: object of a single company's data and jobs
*      {handle: string,
*       name: string,
*       description: string,
*       numEmployees: integer,
*       logoUr: string,
*       jobs: array of job objects [{id, title, salary, equity}]
* State:
  - None
{ RoutesList, NavBar } --> CompanyDetails --> JobCardList
*/



function CompanyDetails({ company }) {
  console.log("CompanyDetails is called with company:", company);
  // const { name } = company;

  const testCompanyApiName = "anderson-arias-morrow";


  // results returns a promise with all the great information we need
  // We need to put this in a useeffect situation where we are awaiting
  // This in an async function
  
  const results = JoblyApi.getCompany(testCompanyApiName);

  console.log("* RESULTS: ", results);



  return (
    <div className='CompanyDetails'>
      <h1> COMPANY-DETAILS IS HERE </h1>
      <div className='JobCardList'>
        <JobsCardList />
      </div>
    </div>
  );
}

export default CompanyDetails;