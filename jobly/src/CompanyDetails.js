import React from 'react';
import { Link } from 'react-router-dom';
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
 *
 * { RoutesList, NavBar } --> CompanyDetails --> JobCardList
*/

function CompanyDetails({ company }) {
  console.log("CompanyDetails is called with company:", company);
  // const { name } = company;
//TODO: render JobCardList
  return (
    <div className='CompanyDetails'>
      <h1> COMPANY-DETAILS IS HERE </h1>
    </div>
  );
}

export default CompanyDetails;