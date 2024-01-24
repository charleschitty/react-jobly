import React from 'react';


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
      <h2>Job Title: {job.title}</h2>
      {
        job.companyName
          ?
          <h3>{job.companyName}</h3>
          :
          ""
      }
      <h3>Job Salary: {job.salary}</h3>
      <h3>Company Equity: {job.equity}</h3>
    </div>
  );

}

export default JobCard;