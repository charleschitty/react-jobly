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
  const [jobsData, setJobsData] = useState({
    data: null,
    isLoading: true,
    errors: null
  });

  console.log("JobList is called");
  console.log("searchedJob state:", searchedJob);
  console.log("JobsData state:", jobsData);


  /** Fetches jobs with optional searchTerm filter using JoblyApi
  * Runs whenever searchedJob state changes
  */
  useEffect(function fetchJobs() {
    async function fetchJob() {
      try {
        const response = await JoblyApi.getJobs(searchedJob);
        setJobsData({ data: response, isLoading: false, errors: null });
      } catch (err) {
        setJobsData({ data: null, isLoading: false, errors: err });
      }
    }
    fetchJob();
  }, [searchedJob]);

  /**
   * Sets SearchedCompany state using input from searchForm
   */
  function search(searchTerm) {
    setJobsData({ data: null, isLoading: true });
    setSearchedJob(searchTerm);
  }


  // Different return statements when awaiting data or for errors
  if (jobsData.isLoading) return <i>Loading...</i>; //Slide is wrong (pg 5)
  else if (jobsData.errors) return <b>Oh no! {jobsData.errors} </b>;


  return (
    <div>
      <SearchForm search={search} />
      <div className='JobList'>
        <JobsCardList jobs={jobsData.data} />
      </div>
    </div>
  );
}

export default JobList;