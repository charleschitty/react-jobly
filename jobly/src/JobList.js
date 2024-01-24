import { React, useState } from 'react';
import { Link } from 'react-router-dom';
// import "./JobList.css";
import SearchForm from "./SearchForm";

/** Basic List component to list all the jobs
 *
 * Props:
 * - None
 *
 * State:
 *  - Job: Searched for job after receiving value from child SearchForm
 *  - IsLoading: Boolean value determining if JobsData has been retrieved
 *  - JobsData: Object of job data from back-end API
 *
 * { RouteList, NavBar} -> JobList -> SearchForm
 */

function JobList() {
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [JobsData, setJobsData] = useState([]);

  console.log("JobList is called");
  console.log("Job state:", job);
  console.log("IsLoading state:", isLoading);
  console.log("JobsData state:", JobsData);

  return (
    <div>
      <SearchForm />
      <div className='JobList'>
        <h1> JOB-LIST IS HERE </h1>
      </div>
    </div>

  );

}

export default JobList;