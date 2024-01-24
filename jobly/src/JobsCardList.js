import React from 'react';
import JobCard from './JobCard';

/** Renders information about a single job
 *
 * Props:
 * - jobs: Array of objects of job data
 *    [{id: Integer,
 *    title: String,
 *    salary: Integer,
 *    equity: Numeric,
 *    companyHandle: String}...]
 *
 * State:
 * - None
 *
 * JobList -> JobCardList -> JobCard
 */


function JobsCardList({ jobs }) {
  console.log("JobsCardsList is reached with:", jobs);

  return (
    <div className='JobsCardList'>
      JobsCardList reached
      <ul>
        {
          jobs.map(job => (
            <li key={job.id}><JobCard job={job} /></li>
          ))
        }
      </ul>
    </div>
  );
}

export default JobsCardList;
