import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import "./JobList.css";
import SearchForm from "./SearchForm";
import JobsCardList from './JobsCardList';
import JoblyApi from './api';

/** Basic List component to list all the jobs
 *
 * Props:
 * - None
 *
 * State:
 *  - searchedJob: Searched for job after receiving value from child SearchForm
 *  - JobsData:
 *     {data: Object of job data retrieved from back-end
 *      isLoading: Boolean value determining if JobsData has been retrieved
 *      errors: Errors from attempting to retrieve back-end data
 *
 * { RoutesList, NavBar} -> JobList -> {SearchForm , JobCardList}
 */

function JobList() {
  const [searchedJob, setSearchedJob] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  const [jobsData, setJobsData] = useState({
    data: null,
    isLoading: true,
    errors: null
  });

  console.log("JobList is called");
  console.log("searchedJob state:", searchedJob);
  // console.log("IsLoading state:", isLoading);
  console.log("JobsData state:", jobsData);

  useEffect(function fetchJobsWhenMounted() {

    async function getJobs() {
      try {
        const response = await JoblyApi.getAllJobs();
        setJobsData({
          data: response,
          isLoading: false,
          errors: null,
        });
      } catch (err) {
        setJobsData({
          data: null,
          isLoading: false,
          errors: err,
        });
        // return (
        //   <Link to="/*"></Link>
        // )
      }
    }
    getJobs();
  }, []);

  if (jobsData.isLoading) return <i>Loading...</i>; //Slideis wrong (pg 5)
  else if (jobsData.errors) return <b>Oh no! {jobsData.errors} </b>;


  return (
    <div>
      <SearchForm />
      <div className='JobList'>
        <h1> JOB-LIST IS HERE </h1>
        <JobsCardList jobs={jobsData.data}/>
      </div>
    </div>

  );

}

export default JobList;