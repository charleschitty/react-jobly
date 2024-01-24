import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import JoblyApi from './api';
// import "./CompanyList.css";



import SearchForm from "./SearchForm";


/** Basic List component to list all the companies with links to details of a
 *  company
 *
 * FIXME: CompanyCard not done yet
 *
 * Props: None
 *
 * State:
 *  - searchedCompany: Searched for company after receiving value from child
 *    SearchForm
 *  - CompaniesData:
 *     {data: Object of all companies data retrieved from back-end
 *      isLoading: Boolean value determining if companiesData has been retrieved
 *      errors: Errors from attempting to retrieve back-end data
 *
 * { RoutesList, NavBar } --> CompanyList --> SearchForm
*/

function CompanyList() {
  const [searchedCompany, setSearchedCompany] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  const [companiesData, setCompaniesData] = useState({
    data: null,
    isLoading: true,
    errors: null
  });

  console.log("CompanyList is called");
  console.log("searchedCompany state:", searchedCompany);
  console.log("CompaniesData state:", companiesData);


  useEffect(function fetchCompaniesWhenMounted() {
    async function getCompanies() {
      try {
        const response = await JoblyApi.getAllCompanies();
        setCompaniesData({
          data: response,
          isLoading: false,
          errors: null,
        });
      } catch (err) {
        setCompaniesData({
          data: null,
          isLoading: false,
          errors: err,
        });
        // return (
        //   <Link to="/*"></Link>
        // )
      }
    }
    getCompanies();
  }, []);

  //do we need errors (dont think we show anything but tbd):
  // useEffect(function fetchCompanyOnSearchTermChange() {
  //   async function fetchUser() {
  //     console.log("*********SEARCHEDCOMPANY", searchedCompany);
  //     const response = await JoblyApi.getFilteredCompanies({
  //       nameLike: searchedCompany
  //     })
  //     console.log("***********RESPONSE IN FILTERED FETCH", response);
  //     setCompaniesData({data: response, isLoading: false});
  //   }
  //   fetchUser();
  //   }, [searchedCompany]);


  function search(searchTerm) {
    setCompaniesData({data: null, isLoading: true});
    setSearchedCompany(searchTerm);
  }

  if (companiesData.isLoading) return <i>Loading...</i>; //Slideis wrong (pg 5)
  else if (companiesData.errors) return <b>Oh no! {companiesData.errors} </b>;

  return (
    <div>
      <SearchForm search={search}/>
      <div className='CompanyList'>
        <h1> COMPANY-LIST IS HERE </h1>
      </div>
      <ul>
        {companiesData.data.map(company => (
          <li key={company.handle}>
            <Link to={`/${company.handle}`} >
              {company.name}
              {company.description}
            </Link>
            <img src={`/${company.logoUrl}.png`} alt={company.name} />
          </li>

        )
        )

        }
      </ul>
    </div>
  );
}

export default CompanyList;