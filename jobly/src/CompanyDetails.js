import { React, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import JobsCardList from './JobsCardList';
import JoblyApi from './api';

// import "./CompanyDetails.css";

/** Shows the details of a single Company and their listed jobs
 *
 *
 * Props:
 *  - None
 *
 *
 * State
 * - companyDetails: object
 * {data, isLoading, errors}
 * { RoutesList } --> CompanyDetails --> JobCardList
*/

function CompanyDetails() {
  const [companyDetails, setCompanyDetails] = useState({
    data: null,
    isLoading: true,
    errors: null
  });

  const { handle } = useParams(); //Note: Must be identical to RouteList

  console.log("CompanyDetails is called with company:", handle);
  console.log("companyDetails STATE: ", companyDetails);

  useEffect(function fetchCompanyWhenMounted() {

    async function getCompanyDetails() {
      try {
        console.log("I reached this with handle:", handle);
        const response = await JoblyApi.getCompany(handle); //Bug: awaited twice
        setCompanyDetails({
          data: response,
          isLoading: false,
          errors: null,
        });
      } catch (err) {
        setCompanyDetails({
          data: null,
          isLoading: false,
          errors: err,
        });
        // return (
        //   <Link to="/*"></Link>
        // )
      }
    }
    getCompanyDetails();
  }, []);

  if (companyDetails.isLoading) return <i>Loading...</i>; //Slideis wrong (pg 5)
  else if (companyDetails.errors) return <b>Oh no! {companyDetails.errors} </b>;

  console.log("CompanyDetails*******", companyDetails.data);

  return (
    <div className='CompanyDetails'>
      <h1> COMPANY-DETAILS IS HERE </h1>
      <p> Name: {companyDetails.data.name}</p>
      <p> Description: {companyDetails.data.description}</p>
      <p> Number of Employees: {companyDetails.data.numEmployees}</p>
      {/* <p> Jobs: {companyDetails.data.jobs}</p> */}
      {<img src={companyDetails.data.logoUrl} alt={companyDetails.data.name} />}
      <div className='JobCardList'>
        <JobsCardList jobs={companyDetails.data.jobs}/>
      </div>
    </div>
  );
}

export default CompanyDetails;