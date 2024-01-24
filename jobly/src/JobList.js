import { React, useState } from 'react';
import { Link } from 'react-router-dom';
// import "./JobList.css";
import SearchForm from "./SearchForm";
import JobsCardList from './JobsCardList';

/** Basic List component to list all the jobs
 *
 * Props:
 * - None
 *
 * State:
 *  - searchedJob: Searched for job after receiving value from child SearchForm
 *  - IsLoading: Boolean value determining if JobsData has been retrieved
 *  - JobsData: Object of job data from back-end API
 *
 * { RoutesList, NavBar} -> JobList -> SearchForm
 */

function JobList() {
  const [searchedJob, setSearchedJob] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [JobsData, setJobsData] = useState([]);

  console.log("JobList is called");
  console.log("searchedJob state:", searchedJob);
  console.log("IsLoading state:", isLoading);
  console.log("JobsData state:", JobsData);

  return (
    <div>
      <SearchForm />
      <div className='JobList'>
        <h1> JOB-LIST IS HERE </h1>
        <JobsCardList />
      </div>
    </div>

  );

}

export default JobList;