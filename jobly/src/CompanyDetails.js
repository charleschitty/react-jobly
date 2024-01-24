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
 * { RoutesList, NavBar } --> CompanyDetails --> JobCardList
*/

function CompanyDetails() {
  const [companyDetails, setCompanyDetails] = useState({
    data: null,
    isLoading: true,
    errors: null
  })

  const { companyName } = useParams();

  console.log("CompanyDetails is called with company:", companyName);
  console.log("companyDetails STATE: ", companyDetails)

  useEffect(function fetchCompanyWhenMounted() {

    async function getCompanyDetails() {
      try {
        const response = await JoblyApi.getCompany(companyName);
        const companyDetailsResponse = await response.json();
        setCompanyDetails({
          data: companyDetailsResponse,
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
    fetchCompanyWhenMounted();
  }, [ ]);

  // We need a ternary here ...


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