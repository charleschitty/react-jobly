import React from 'react';
import "./JobCard.css";

//Note: Sometimes receives two different job objects from JobList or CompanyList
/** Renders information about a single job
 *
 * Props:
 * - job: Object with job data
 *    {id: Integer,
 *    title: String,
 *    salary: Integer,
 *    equity: Numeric,
 *    companyHandle: String}
 * or
 *   {... companyName: String}
 *
 * State:
 * - None
 *
 * JobsCardList -> JobCard
 */
function JobCard({ job }) {
  console.log("JobCard is rendered with:", job);

  return (
    <div className='JobCard'>
      <h2>{job.title}</h2>
      {
        job.companyName
          ?
          <i>{job.companyName}</i>
          :
          ""
      }
      <p><b>Salary:</b> {job.salary}</p>
      <p><b>Equity:</b> {job.equity}</p>
    </div>
  );

}

export default JobCard;